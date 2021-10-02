# Migrating Cloud Hosts

I've determined that the only way to get the full performance I want is to migrate the hosting provider from GitHub Pages to Google Cloud.

The determining factor has been the limitation of routing Single-Page-Apps and not wanting to release full website updates every time I write a new Blog article.

Here's the rub:

- I independently came up with a solution that has actually already been employed by React and Angular - Fragment Routing. i.e. Routing Single Page Applications using hints of resources to load via fragments in the URL. Cool that it worked and the solution remained consistent across two vastly different projects but ultimately there just needed to be a better way.
- Why does there need to be a better way? Pretty simply: Fragment-based routing makes it very difficult if not impossible (according to the specs) to route user traffic to fragments/anchors within a blog article.

Fragment-base routing nullifies having anchor links in my blog articles because a lot of what I write is [cross-referenced](../9/Markdown-Blog#the-interesting-part).

Since it appears to be impossible to adapt GitHub Pages to work with other routing techniques migration of the hosting provider was the only option left.

# Firebase Hosting

Luckily I'm familiar with the Firebase line of products, and hosting in particular, and knew it would serve well as an alternative.

Firebase Hosting allows `rewrites` of path requests. This enables a very nice Single-Page approach while also not needing to jump through whacky hoops.

## `rewrite`

Firebase allows configuration of its services through a file called `firebase.json`. In this configuration we can set up the `hosting` service to rewrite `blog/**` requests to the blog page's root `index.html`:

```json
{
  ...,
  "hosting": {
    ...,
    "rewrites": [
      {
        "source": "/",
        "destination": "/index.html"
      },
      {
        "source": "/blog/**",
        "destination": "/blog/index.html"
      }
    ],
    ...
  },
  ...
}
```

The first rewrite allows directing traffic to the main App.svelte routing that delivers most of the primary site components like `About.svelte` and `Resume.svelte`.

But the second routing ensures that if someone visits a path like `blog/2021-August-15-Move-to-Firebase`, the `Blog.svelte` Component will be the one to handle that request.

This required a minimal amount of change from where the Blog was [left off](../9/Markdown-Blog).

1. The Blog Component and other page Components needed to be adjusted to ensure they weren't trying to load a Blog article:

```javascript
async function import_component_file() {
+    const page_name = window.location.pathname.split("/")[1]
    return import(
      `./pages/${
        window.location.pathname === "/"
          ? "Main"
-         : window.location.pathname
-             .replaceAll(/\//g, "")
-             .slice(0, 1)
-             .toLocaleUpperCase() +
-           window.location.pathname.replaceAll(/\//g, "").slice(1)
+         : page_name.slice(0, 1).toLocaleUpperCase() + page_name.slice(1)
      }.svelte`
    )
  }
```

2. The Blog Article Component required knowledge of using the full article obtained from looking at the `location.path` instead of `location.hash`:

```javascript
- const full_article_shown = window.location.hash.replace("#", "") === id
+ const full_article_shown = window.location.pathname.split("/")[2] !== ""
```

3. The filter for grabbing articles is then no longer built from the `location.hash`, but the `location.path` instead:

```javascript
async function populate_blogs() {
- const fragment = extract_filter_from_fragment()
- let filter = fragment === "" ? default_filter : () => fragment
+ const url_filter = window.location.pathname
+   .split("/")[2]
+   .split("-")
+   .slice(0, 3)
+   .join("/")
+ let filter = url_filter === "" ? default_filter : () => url_filter

  for await (const each_article of fetch_blog_articles(filter)) {

  ...
```
