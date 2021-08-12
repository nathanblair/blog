# A Blog

but written in source using markdown.

And then rendered in the cloud to HTML.

Returned to the blog site.

And rendered from HTML to the user.

```javascript
async function heres_some_code() {
  doing_the_thing()
  const is_it_awesome = true
}
```

> Can we use GitHub markdown with quote blocks?

Sure!

_What about [links](https://github.com/nathanblair)?_

# The Interesting Part

If you haven't already, see [The Blog](../4/The-Blog) post about what has been done to dynamically pull blog articles outside of the website source control.

The modifications required to implement writing blog articles in Markdown and then pulling down rendered versions of them is very minimal.

## Without GitHub

Technically it doesn't _require_ GitHub even being the source control of choice for the articles. GitHub has an [API](https://docs.github.com/en/rest/reference/markdown) for `POST`ing your `.md` source file and getting a response that contains the transcribed `.md` content as `html` that you can just inject into an appropriate DOM element.

## With GitHub

GitHub allows pulling content down from their [Get Content](https://docs.github.com/en/rest/reference/repos#get-repository-content) endpoint while specifying the rendering method on the returned resource.

[This](https://docs.github.com/en/rest/reference/repos#custom-media-types-for-repository-contents) explains the two formats that are most useful for the case of grabbing the contents of blog articles from a GitHub's remote repositories. In our case, depending on the returned `each_article.path`, file type, we would set the `Accept` header accordingly:

```javascript
const accept_header = each_article.path.endsWith(".md")
  ? "application/vnd.github.VERSION.html"
  : "application/vnd.github.VERSION.raw"
```

With the appropriate `Accept` header value known, the request to grab the content is simply

```javascript
article_api_response = await fetch(
  cloud_host_blog_content_endpoint + each_article.path,
  {
    headers: new Headers({ accept: accept_header }),
  }
)
```

Where

```javascript
const cloud_host_endpoint = "https://api.github.com"
const content_path = "/repos/nathanblair/blog/contents/"
const cloud_host_blog_content_endpoint = cloud_host_endpoint + content_path
```

## Get Tree over Recursive Get Content

One of my other changes to reduce API calls has been to change a recursive call of the `fetch_blog_articles` to instead pull the entire tree of the repository root, run the filter on the client on the returned tree objects, and then proceed to grab the contents of the articles that pass the filter.

It now looks like

```javascript
export async function* fetch_blog_articles(filter) {
  /** @type {Response} */
  let response

  try {
    response = await fetch(
      `${cloud_host_blog_tree_endpoint}?${new URLSearchParams({
        recursive: "true",
      })}`
    )
  } catch (err) {
    console.error(err)
    return
  }

  /** @type {Payload} */
  let body
  try {
    body = await response.json()
  } catch (err) {
    console.error(err)
    return
  }

  if (!Array.isArray(body.tree)) {
    return
  }

  const path = filter()
  const articles = body.tree.filter((each_tree) => {
    return each_tree.path.indexOf(path) >= 0 && each_tree.type === "blob"
  })

  for (const each_article of articles) {
    /** @type {ArticleDateArray} */
    // @ts-ignore
    const date_array = each_article.path.split("/")
    date_array.pop()

    const file_name = each_article.path.split("/").pop() || each_article.path

    const accept_header = each_article.path.endsWith(".md")
      ? "application/vnd.github.VERSION.html"
      : "application/vnd.github.VERSION.raw"

    let article_api_response
    try {
      article_api_response = await fetch(
        cloud_host_blog_content_endpoint + each_article.path,
        {
          headers: new Headers({ accept: accept_header }),
        }
      )
    } catch (error) {}

    const content = (await article_api_response?.text()) || ""

    yield {
      date: date_array,
      file_name: file_name,
      content: content,
    }
  }
  return
}
```

Very similar, but replaces the recursive `fetch_blog_articles` call with a call to [Get the Repository Tree Recursively](https://docs.github.com/en/rest/reference/git#get-a-tree).

The filtering is also now done client-side, using a simple Javascript `Array.prototype.filter` on the returned list of `Tree`s. It still accomplishes the same objective: primarily that it filters out all articles that don't match the date range desired.

## Styling

GitHub renders `.md` content to `html` in a pretty...unconventional fashion. For instance, it would be _more correct_ to render code blocks as

```html
<pre><code>
  ...
  const code = "doing the thing"
  ...
</code></pre>
```

Instead, to work with their syntax highlighting scheme (PrettyLight), it comes back as `<div>` elements with classes like `class="pl-s"` and `class="pl-c1"`.

GitHub does not appear to use this approach _globally_ across their entire site, only instances that are related to rendering `Markdown` (specifically `GitHub Flavored Markdown`) to `html`. Their [docs page](https://docs.github.com/en/rest/reference/markdown) for instance uses the more conventional snippet with the `<pre><code>` blocks.

GitHub actually has a very nice holistic styling approach across their entire site using their design paradigm [@primer](https://github.com/primer).

### Embracing the Whole

I had tried using the relevant styles (`@import "@primer/css/dist/markdown"`) from `@primer` to consistently style the returned `Markdown` rendered as `html` relative to what you would typically find on a GitHub repo `README` page.

This approach ended up being _very_ bloated. Probably not so for a huge web app like GitHub but for a simple blog it didn't make sense to use 8KB more of bundle-size for just bringing in some simple styles for a `Markdown` file rendered as `html`.

In addition, there were some missing styles when comparing the rendered `Markdown` on the Blog Article page vs. what would typically be seen as the style for a GitHub `README` page.

In all likelihood this would be due to not `import`ing some critical other stylesheet; but again, the idea would be to keep the Blog Articles and site as a whole very optimized. Adding yet another `import`ed stylesheet to fill in gaps in the desired styling meant moving further and further from this goal.

What I've embraced instead is to use the [GitHub Light Syntax](https://github.com/primer/github-syntax-light) package for styling the `class="pl-*"` elements. This is what is used for GitHub on rendering their `Markdown` as `html`, and if its good enough for GitHub here, its good enough for me.

# Conclusion

Writing blog articles can be a pain. A lot of flexibility is sacrificed writing articles in `Markdown` over raw `html`, but for the majority of my use cases, I am finding `Markdown` to be _significantly_ easier to write in, and anything that requires more nuance I will just need to write articles in raw `html`.

Given my site is now set up to render the appropriate content regardless of the file type stored in source control, the choice between the two is now a trivial one.
