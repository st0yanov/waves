if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,n,a)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return t;case"module":return r;default:return e(s)}}))).then((e=>{const s=a(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/waves/_next/static/2NRZzkt11tOFFyHsO7DKs/_buildManifest.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/2NRZzkt11tOFFyHsO7DKs/_ssgManifest.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/1dd05252-cf3a17b86f53cd52e346.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/284.73d32db6f7da53bc033e.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/6-3cc20b291de11463c4cf.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/617-834722cdb72e6e40b5c9.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/845.0639bed7010942f73d72.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/framework-f04f66c75cbfb39a7469.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/main-d0b26f5c9fd10ebf21b1.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/pages/_app-96d800f9d82d481c0aa9.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/pages/_error-f0c8671670e02d5c5929.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/pages/index-90ddd85fdf91c820d050.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/pages/radio/%5Bslug%5D-c9854b47b2ec9862ba53.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/polyfills-cf519ab7dd9a5a4fd835.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/chunks/webpack-36423ac4b071e2a05605.js",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/css/97e8379c76dfccd12fb6.css",revision:"2NRZzkt11tOFFyHsO7DKs"},{url:"/waves/_next/static/css/a12302de1aee779c413b.css",revision:"2NRZzkt11tOFFyHsO7DKs"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/waves",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
