function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n,e,o){if(t){const r=s(t,n,e,o);return t[0](r)}}function s(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function i(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function u(t,n,e,o,r,c){if(r){const l=s(n,e,o,c);t.p(l,r)}}function a(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function f(t){return null==t?"":t}function $(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function _(){return h(" ")}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let b;function x(t){b=t}function k(){if(!b)throw new Error("Function called outside component initialization");return b}const v=[],y=[],C=[],z=[],M=Promise.resolve();let E=!1;function j(t){C.push(t)}let B=!1;const N=new Set;function A(){if(!B){B=!0;do{for(let t=0;t<v.length;t+=1){const n=v[t];x(n),H(n.$$)}for(x(null),v.length=0;y.length;)y.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];N.has(n)||(N.add(n),n())}C.length=0}while(v.length);for(;z.length;)z.pop()();E=!1,B=!1,N.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const S=new Set;let T;function L(){T={r:0,c:[],p:T}}function O(){T.r||o(T.c),T=T.p}function q(t,n){t&&t.i&&(S.delete(t),t.i(n))}function P(t,n,e,o){if(t&&t.o){if(S.has(t))return;S.add(t),T.c.push((()=>{S.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function V(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let l=n.ctx;void 0!==r&&(l=l.slice(),l[r]=c);const s=t&&(n.current=t)(l);let i=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(L(),P(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),O())})):n.block.d(1),s.c(),q(s,1),s.m(n.mount(),n.anchor),i=!0),n.block=s,n.blocks&&(n.blocks[o]=s),i&&A()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=k();if(t.then((t=>{x(e),o(n.then,1,n.value,t),x(null)}),(t=>{if(x(e),o(n.catch,2,n.error,t),x(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function F(t){t&&t.c()}function G(t,e,c,l){const{fragment:s,on_mount:i,on_destroy:u,after_update:a}=t.$$;s&&s.m(e,c),l||j((()=>{const e=i.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(j)}function U(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(t,n){-1===t.$$.dirty[0]&&(v.push(t),E||(E=!0,M.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function D(n,r,c,l,s,i,u,a=[-1]){const f=b;x(n);const $=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:r.context||[]),callbacks:e(),dirty:a,skip_bound:!1,root:r.target||f.$$.root};u&&u($.root);let p=!1;if($.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&s($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),p&&Z(n,t)),e})):[],$.update(),p=!0,o($.before_update),$.fragment=!!l&&l($.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(d)}else $.fragment&&$.fragment.c();r.intro&&q(n.$$.fragment),G(n,r.target,r.anchor,r.customElement),A()}x(f)}class I{$destroy(){U(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(t){let n,e;const o=t[2].default,r=l(o,t,t[1],null);return{c(){n=m("div"),r&&r.c(),w(n,"id",t[0]),w(n,"class","svelte-1wkkfzk")},m(t,o){p(t,n,o),r&&r.m(n,null),e=!0},p(t,[c]){r&&r.p&&(!e||2&c)&&u(r,o,t,t[1],e?i(o,t[1],c,null):a(t[1]),null),(!e||1&c)&&w(n,"id",t[0])},i(t){e||(q(r,t),e=!0)},o(t){P(r,t),e=!1},d(t){t&&d(n),r&&r.d(t)}}}function Y(t,n,e){let{$$slots:o={},$$scope:r}=n,{id:c}=n;return t.$$set=t=>{"id"in t&&e(0,c=t.id),"$$scope"in t&&e(1,r=t.$$scope)},[c,r,o]}class J extends I{constructor(t){super(),D(this,t,Y,Q,c,{id:0})}}function K(t){let n,e,o;const r=t[4].default,c=l(r,t,t[3],null);return{c(){n=m("a"),c&&c.c(),w(n,"href",t[1]),w(n,"title",t[0]),w(n,"target",e=t[2]?"_blank":""),w(n,"class","svelte-1f3xxyn")},m(t,e){p(t,n,e),c&&c.m(n,null),o=!0},p(t,[l]){c&&c.p&&(!o||8&l)&&u(c,r,t,t[3],o?i(r,t[3],l,null):a(t[3]),null),(!o||2&l)&&w(n,"href",t[1]),(!o||1&l)&&w(n,"title",t[0]),(!o||4&l&&e!==(e=t[2]?"_blank":""))&&w(n,"target",e)},i(t){o||(q(c,t),o=!0)},o(t){P(c,t),o=!1},d(t){t&&d(n),c&&c.d(t)}}}function R(t,n,e){let{$$slots:o={},$$scope:r}=n,{title:c}=n,{link_target:l}=n,{open_in_new_page:s=!0}=n;return t.$$set=t=>{"title"in t&&e(0,c=t.title),"link_target"in t&&e(1,l=t.link_target),"open_in_new_page"in t&&e(2,s=t.open_in_new_page),"$$scope"in t&&e(3,r=t.$$scope)},[c,l,s,r,o]}class W extends I{constructor(t){super(),D(this,t,R,K,c,{title:0,link_target:1,open_in_new_page:2})}}function X(t){let n,e,o,r,c,s,g,b,x,k,v;const y=t[10].default,C=l(y,t,t[9],null);return{c(){n=m("input"),e=_(),o=m("label"),r=m("span"),c=h(t[4]),s=_(),C&&C.c(),w(n,"type","checkbox"),w(n,"id",t[0]),w(n,"class","hidden"),w(n,"title",t[1]),w(r,"class","material-icons svelte-16v24t4"),w(o,"for",t[0]),w(o,"id",g=t[0]+"-label"),w(o,"class",b=f(t[2])+" svelte-16v24t4"),w(o,"title",t[1])},m(l,i){var u,a,f,d;p(l,n,i),t[11](n),p(l,e,i),p(l,o,i),$(o,r),$(r,c),$(o,s),C&&C.m(o,null),x=!0,k||(u=n,a="change",f=t[5],u.addEventListener(a,f,d),v=()=>u.removeEventListener(a,f,d),k=!0)},p(t,[e]){(!x||1&e)&&w(n,"id",t[0]),(!x||2&e)&&w(n,"title",t[1]),(!x||16&e)&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(c,t[4]),C&&C.p&&(!x||512&e)&&u(C,y,t,t[9],x?i(y,t[9],e,null):a(t[9]),null),(!x||1&e)&&w(o,"for",t[0]),(!x||1&e&&g!==(g=t[0]+"-label"))&&w(o,"id",g),(!x||4&e&&b!==(b=f(t[2])+" svelte-16v24t4"))&&w(o,"class",b),(!x||2&e)&&w(o,"title",t[1])},i(t){x||(q(C,t),x=!0)},o(t){P(C,t),x=!1},d(r){r&&d(n),t[11](null),r&&d(e),r&&d(o),C&&C.d(r),k=!1,v()}}}function tt(t,n,e){let o,{$$slots:r={},$$scope:c}=n,{id:l}=n,{title:s=""}=n,{src_off:i=""}=n,{src_on:u=""}=n,{class_list:a=""}=n,{on_change_handler:f=null}=n,$=i;return t.$$set=t=>{"id"in t&&e(0,l=t.id),"title"in t&&e(1,s=t.title),"src_off"in t&&e(6,i=t.src_off),"src_on"in t&&e(7,u=t.src_on),"class_list"in t&&e(2,a=t.class_list),"on_change_handler"in t&&e(8,f=t.on_change_handler),"$$scope"in t&&e(9,c=t.$$scope)},[l,s,a,o,$,function(t){f&&f(t),e(4,$=t.currentTarget?.checked?u:i)},i,u,f,c,r,function(t){y[t?"unshift":"push"]((()=>{o=t,e(3,o)}))}]}class nt extends I{constructor(t){super(),D(this,t,tt,X,c,{id:0,title:1,src_off:6,src_on:7,class_list:2,on_change_handler:8})}}const et=[];const ot=function(n,e=t){let o;const r=new Set;function l(t){if(c(n,t)&&(n=t,o)){const t=!et.length;for(const t of r)t[1](),et.push(t,n);if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:l,update:function(t){l(t(n))},subscribe:function(c,s=t){const i=[c,s];return r.add(i),1===r.size&&(o=e(l)||t),c(n),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}(!1);function rt(t){let n;return{c(){n=m("span"),n.textContent="home"},m(t,e){p(t,n,e)},d(t){t&&d(n)}}}function ct(t){let n;return{c(){n=m("span"),n.textContent="person"},m(t,e){p(t,n,e)},d(t){t&&d(n)}}}function lt(t){let n;return{c(){n=m("span"),n.textContent="work"},m(t,e){p(t,n,e)},d(t){t&&d(n)}}}function st(t){let n;return{c(){n=m("span"),n.textContent="feed"},m(t,e){p(t,n,e)},d(t){t&&d(n)}}}function it(t){let n,e,o,r,c,l,s,i,u,a;return n=new nt({props:{id:"menu-toggle",src_off:"menu",src_on:"close",title:"Menu",on_change_handler:t[0],class_list:"center-align-flex pointer"}}),o=new W({props:{link_target:"/",title:"Go Home",open_in_new_page:!1,$$slots:{default:[rt]},$$scope:{ctx:t}}}),c=new W({props:{link_target:"about",title:"About Me",open_in_new_page:!1,$$slots:{default:[ct]},$$scope:{ctx:t}}}),s=new W({props:{link_target:"resume",title:"My Qualifications",open_in_new_page:!1,$$slots:{default:[lt]},$$scope:{ctx:t}}}),u=new W({props:{link_target:"blog",title:"My Blog",open_in_new_page:!1,$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){F(n.$$.fragment),e=_(),F(o.$$.fragment),r=_(),F(c.$$.fragment),l=_(),F(s.$$.fragment),i=_(),F(u.$$.fragment)},m(t,f){G(n,t,f),p(t,e,f),G(o,t,f),p(t,r,f),G(c,t,f),p(t,l,f),G(s,t,f),p(t,i,f),G(u,t,f),a=!0},p(t,n){const e={};2&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const l={};2&n&&(l.$$scope={dirty:n,ctx:t}),s.$set(l);const i={};2&n&&(i.$$scope={dirty:n,ctx:t}),u.$set(i)},i(t){a||(q(n.$$.fragment,t),q(o.$$.fragment,t),q(c.$$.fragment,t),q(s.$$.fragment,t),q(u.$$.fragment,t),a=!0)},o(t){P(n.$$.fragment,t),P(o.$$.fragment,t),P(c.$$.fragment,t),P(s.$$.fragment,t),P(u.$$.fragment,t),a=!1},d(t){U(n,t),t&&d(e),U(o,t),t&&d(r),U(c,t),t&&d(l),U(s,t),t&&d(i),U(u,t)}}}function ut(t){let n,e;return{c(){n=g("svg"),e=g("path"),w(e,"d","m 10.703226,25.766353 c 0,0.132339 -0.148387,0.23821 -0.335484,0.23821 -0.212903,0.01985 -0.36129,-0.08602 -0.36129,-0.23821 0,-0.132339 0.148387,-0.23821 0.335483,-0.23821 0.193549,-0.01985 0.361291,0.08602 0.361291,0.23821 z M 8.6967742,25.468591 c -0.045161,0.132339 0.083871,0.284528 0.2774193,0.32423 0.167742,0.06617 0.3612904,0 0.4,-0.132339 0.03871,-0.132339 -0.083871,-0.284528 -0.2774193,-0.344081 -0.1677419,-0.04632 -0.3548387,0.01985 -0.4,0.15219 z m 2.8516128,-0.112488 c -0.187097,0.04632 -0.316129,0.17204 -0.296774,0.32423 0.01935,0.132339 0.187097,0.218359 0.380645,0.17204 0.187097,-0.04632 0.316129,-0.17204 0.296774,-0.304379 -0.01935,-0.125722 -0.193548,-0.211742 -0.380645,-0.191891 z M 15.793548,0 C 6.8451613,0 0,6.9676348 0,16.145327 0,23.48351 4.5032258,29.762983 10.935484,31.97304 c 0.825806,0.15219 1.116129,-0.370548 1.116129,-0.800649 0,-0.41025 -0.01935,-2.673243 -0.01935,-4.0628 0,0 -4.516129,0.992541 -5.4645161,-1.971847 0,0 -0.7354838,-1.925529 -1.7935484,-2.421799 0,0 -1.4774193,-1.038859 0.1032259,-1.019008 0,0 1.6064516,0.132339 2.4903225,1.70717 1.4129033,2.554137 3.7806451,1.819657 4.7032261,1.38294 0.148387,-1.05871 0.567742,-1.79319 1.032258,-2.229908 -3.6064518,-0.41025 -7.2451615,-0.946222 -7.2451615,-7.311716 0,-1.819658 0.4903226,-2.732795 1.5225807,-3.897376 C 7.2129032,10.917946 6.6645161,9.1446071 7.5483871,6.8551469 8.8967742,6.425046 12,8.6417199 12,8.6417199 c 1.290323,-0.3705485 2.677419,-0.5624397 4.051613,-0.5624397 1.374193,0 2.76129,0.1918912 4.051613,0.5624397 0,0 3.103226,-2.2232909 4.451613,-1.786573 0.883871,2.2960772 0.335484,4.0627991 0.167742,4.4929001 1.032258,1.171198 1.664516,2.084335 1.664516,3.897376 0,6.385344 -3.8,6.894849 -7.406452,7.311716 0.593549,0.522738 1.096774,1.515278 1.096774,3.070259 0,2.229907 -0.01935,4.98917 -0.01935,5.531759 0,0.430101 0.296774,0.952839 1.116129,0.800649 C 27.625806,29.762983 32,23.48351 32,16.145327 32,6.9676348 24.741935,0 15.793548,0 Z M 6.2709677,22.821816 c -0.083871,0.06617 -0.064516,0.218359 0.045161,0.344081 0.1032258,0.105871 0.2516129,0.152189 0.3354839,0.06617 0.083871,-0.06617 0.064516,-0.218359 -0.045161,-0.34408 -0.1032258,-0.105871 -0.2516129,-0.15219 -0.3354839,-0.06617 z M 5.5741935,22.285844 c -0.045161,0.08602 0.019355,0.191891 0.1483871,0.258061 0.1032259,0.06617 0.2322581,0.04632 0.2774194,-0.04632 0.045161,-0.08602 -0.019355,-0.191891 -0.1483871,-0.25806 -0.1290323,-0.0397 -0.2322581,-0.01985 -0.2774194,0.04632 z m 2.0903226,2.35563 c -0.1032258,0.08602 -0.064516,0.284528 0.083871,0.41025 0.1483871,0.15219 0.3354839,0.17204 0.4193548,0.06617 0.083871,-0.08602 0.045161,-0.284528 -0.083871,-0.41025 -0.1419355,-0.152189 -0.3354839,-0.17204 -0.4193548,-0.06617 z m -0.7354838,-0.97269 c -0.1032258,0.06617 -0.1032258,0.23821 0,0.390399 0.1032258,0.15219 0.2774193,0.218359 0.3612903,0.15219 0.1032258,-0.08602 0.1032258,-0.258061 0,-0.41025 C 7.2,23.648933 7.0322581,23.582764 6.9290323,23.668784 Z"),w(e,"fill","#000"),w(n,"viewBox","0 0 32 32"),w(n,"xmlns","http://www.w3.org/2000/svg")},m(t,o){p(t,n,o),$(n,e)},d(t){t&&d(n)}}}function at(t){let n,e,o;return{c(){n=g("svg"),e=g("path"),o=g("path"),w(e,"d","M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z"),w(o,"d","M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z"),w(o,"fill","#fff"),w(n,"viewBox","0 0 32 32"),w(n,"xmlns","http://www.w3.org/2000/svg")},m(t,r){p(t,n,r),$(n,e),$(n,o)},d(t){t&&d(n)}}}function ft(t){let n;return{c(){n=m("span"),n.textContent="email"},m(t,e){p(t,n,e)},d(t){t&&d(n)}}}function $t(t){let n,e,o,r,c,l;return n=new W({props:{link_target:"https://github.com/nathanblair",title:"GitHub",$$slots:{default:[ut]},$$scope:{ctx:t}}}),o=new W({props:{link_target:"https://www.linkedin.com/in/engineerblair/",title:"LinkedIn",$$slots:{default:[at]},$$scope:{ctx:t}}}),c=new W({props:{link_target:"mailto:me@nathanblair.rocks",title:"Email",$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){F(n.$$.fragment),e=_(),F(o.$$.fragment),r=_(),F(c.$$.fragment)},m(t,s){G(n,t,s),p(t,e,s),G(o,t,s),p(t,r,s),G(c,t,s),l=!0},p(t,e){const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const l={};2&e&&(l.$$scope={dirty:e,ctx:t}),o.$set(l);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){l||(q(n.$$.fragment,t),q(o.$$.fragment,t),q(c.$$.fragment,t),l=!0)},o(t){P(n.$$.fragment,t),P(o.$$.fragment,t),P(c.$$.fragment,t),l=!1},d(t){U(n,t),t&&d(e),U(o,t),t&&d(r),U(c,t)}}}function pt(t){let n,e,o,r,c;return e=new J({props:{id:"app-shortcuts",$$slots:{default:[it]},$$scope:{ctx:t}}}),r=new J({props:{id:"right-tray",$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){n=m("div"),F(e.$$.fragment),o=_(),F(r.$$.fragment),w(n,"id","app-bar"),w(n,"class","svelte-1p5o3az")},m(t,l){p(t,n,l),G(e,n,null),$(n,o),G(r,n,null),c=!0},p(t,[n]){const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const c={};2&n&&(c.$$scope={dirty:n,ctx:t}),r.$set(c)},i(t){c||(q(e.$$.fragment,t),q(r.$$.fragment,t),c=!0)},o(t){P(e.$$.fragment,t),P(r.$$.fragment,t),c=!1},d(t){t&&d(n),U(e),U(r)}}}function dt(t){return[function(t){ot.set(t.currentTarget?.checked)}]}class mt extends I{constructor(t){super(),D(this,t,dt,pt,c,{})}}function gt(n){let e,o,r,c,l,s,i=(new Date).getFullYear()+"";return{c(){e=m("footer"),o=m("span"),r=h("© "),c=m("b"),c.textContent=`${ht}`,l=_(),s=h(i),w(e,"class","svelte-1li9zpw")},m(t,n){p(t,e,n),$(e,o),$(o,r),$(o,c),$(o,l),$(o,s)},p:t,i:t,o:t,d(t){t&&d(e)}}}let ht="Nathan Blair";class _t extends I{constructor(t){super(),D(this,t,null,gt,c,{})}}function wt(t){let n,e,o,r,c,l;return e=new J({props:{id:"contextual-icons"}}),r=new _t({}),{c(){n=m("div"),F(e.$$.fragment),o=_(),F(r.$$.fragment),w(n,"id","app-drawer"),w(n,"class",c=f(t[0]?"app-drawer-visible":"")+" svelte-1rsbbl2")},m(c,s){p(c,n,s),G(e,n,null),$(n,o),G(r,n,null),t[2](n),l=!0},p(t,[e]){(!l||1&e&&c!==(c=f(t[0]?"app-drawer-visible":"")+" svelte-1rsbbl2"))&&w(n,"class",c)},i(t){l||(q(e.$$.fragment,t),q(r.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),P(r.$$.fragment,t),l=!1},d(o){o&&d(n),U(e),U(r),t[2](null)}}}function bt(t,n,e){let o,r;return ot.subscribe((function(t){e(0,o=t)})),[o,r,function(t){y[t?"unshift":"push"]((()=>{r=t,e(1,r)}))}]}class xt extends I{constructor(t){super(),D(this,t,bt,wt,c,{})}}function kt(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function vt(t){let n,e,o;var r=t[0].default;return r&&(n=new r({})),{c(){n&&F(n.$$.fragment),e=h("")},m(t,r){n&&G(n,t,r),p(t,e,r),o=!0},p(t,o){if(r!==(r=t[0].default)){if(n){L();const t=n;P(t.$$.fragment,1,0,(()=>{U(t,1)})),O()}r?(n=new r({}),F(n.$$.fragment),q(n.$$.fragment,1),G(n,e.parentNode,e)):n=null}},i(t){o||(n&&q(n.$$.fragment,t),o=!0)},o(t){n&&P(n.$$.fragment,t),o=!1},d(t){t&&d(e),n&&U(n,t)}}}function yt(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Ct(t){let n,e,o,r,c,l,s;n=new mt({}),r=new xt({});let i={ctx:t,current:null,token:null,hasCatch:!1,pending:yt,then:vt,catch:kt,value:0,blocks:[,,,]};return V(async function(){return function(t){switch(t){case"./pages/Main.svelte":return Promise.resolve().then((function(){return Et}));default:return new Promise((function(n,e){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))}))}}(`./pages/${"/"===window.location.pathname?"Main":window.location.pathname.slice(1,2).toLocaleUpperCase()+window.location.pathname.slice(2)}.svelte`)}(),i),{c(){F(n.$$.fragment),e=_(),o=m("div"),F(r.$$.fragment),c=_(),l=m("main"),i.block.c(),w(o,"class","main-layout")},m(t,u){G(n,t,u),p(t,e,u),p(t,o,u),G(r,o,null),$(o,c),$(o,l),i.block.m(l,i.anchor=null),i.mount=()=>l,i.anchor=null,s=!0},p(n,[e]){!function(t,n,e){const o=n.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,e)}(i,t=n,e)},i(t){s||(q(n.$$.fragment,t),q(r.$$.fragment,t),q(i.block),s=!0)},o(t){P(n.$$.fragment,t),P(r.$$.fragment,t);for(let t=0;t<3;t+=1){P(i.blocks[t])}s=!1},d(t){U(n,t),t&&d(e),t&&d(o),U(r),i.block.d(),i.token=null,i=null}}}const zt=new class extends I{constructor(t){super(),D(this,t,null,Ct,c,{})}}({target:document.body,props:{}});function Mt(t){return document.title=document.title+" | Blog",[]}var Et=Object.freeze({__proto__:null,default:class extends I{constructor(t){super(),D(this,t,Mt,null,c,{})}}});export{zt as default};
//# sourceMappingURL=main.js.map