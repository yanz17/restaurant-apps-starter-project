if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const l=e=>a(e,s),d={module:{uri:s},exports:o,require:l};i[s]=Promise.all(r.map((e=>d[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"145.bundle.js",revision:"da91ba178ce29cade1d74f035d93f1e5"},{url:"2160a39e9ed692aa00e0.jpg",revision:null},{url:"29fc567965a59308e9e3.jpg",revision:null},{url:"68.bundle.js",revision:"ce213cace227801a95e6241f21cf149c"},{url:"68.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"82f38c0af2bc2d96bc44.jpg",revision:null},{url:"877.bundle.js",revision:"7380f6e556f0da35088819a90c0535e2"},{url:"877.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.bundle.js",revision:"04fa95fd2a560f9ce0e9c024af8884e4"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"4eb22e9ddb630cdcff462526ee192e00"},{url:"data/DATA.json",revision:"03bbb6cfbdeee0be72df532aeff55c19"},{url:"images/icon/bars-solid.png",revision:"a07cf517c0b7f90d0e79528f384e8969"},{url:"images/icon/xmark-solid.png",revision:"ecef29a9c3df4d9bc5e01dfebffa3fbf"},{url:"images/logo/cat-logo-144.png",revision:"9263643636186a5829c6ad12b0d6a3f2"},{url:"images/logo/cat-logo-196.png",revision:"47468f0e9388e0383e538eb9d5835575"},{url:"images/logo/cat-logo-384.png",revision:"2211b860deacc2ae1b69125de78a8f26"},{url:"images/logo/cat-logo-48.png",revision:"5b1dd6e3e8b931b4ae8617b02e249730"},{url:"images/logo/cat-logo-96.png",revision:"e909807b8836d1232be521d3a558f05a"},{url:"images/logo/cat-logo.png",revision:"245aace5a04829e00fb6ff6d6724ae55"},{url:"index.html",revision:"746cb3b0f708a3c830ff23fda3782877"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/list")),new e.StaleWhileRevalidate({cacheName:"restaurant-list",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/large/")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/detail/")),new e.StaleWhileRevalidate({cacheName:"restaurant-detail",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map