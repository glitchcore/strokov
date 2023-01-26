"use strict";(self.webpackChunkstrokov_site=self.webpackChunkstrokov_site||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,o=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),s=new RegExp(n.source+o.source,"gu"),l=new RegExp("\\d+"+o.source,"gu"),c=(e,o)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(o={pascalCase:!1,preserveConsecutiveUppercase:!1,...o},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===o.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(o.locale),c=!1===o.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(o.locale);if(1===e.length)return o.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,o)=>{let n=!1,i=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];n&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),n=!1,s=i,i=!0,l++):i&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=i,i=!1,n=!0):(n=r(c)===c&&o(c)!==c,s=i,i=o(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(i,""),e=o.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),o.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return h},M:function(){return b},P:function(){return E},S:function(){return S},_:function(){return s},a:function(){return i},b:function(){return d},g:function(){return g},h:function(){return l}});var r=a(7294),o=(a(3204),a(5697)),n=a.n(o);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(o[a]=e[a]);return o}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let o="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,o){return void 0===o&&(o={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},o,{opacity:t?1:0})})}function g(e,t,a,r,o,n,s,l){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=o,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],w=function(e){let{layout:t,width:a,height:o}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+o+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=s(e,u);return r.createElement(r.Fragment,null,r.createElement(w,i({},a)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],m=["fallback","sources","shouldLoad"],A=function(e){let{src:t,srcSet:a,loading:o,alt:n="",shouldLoad:l}=e,c=s(e,p);return r.createElement("img",i({},c,{decoding:"async",loading:o,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},f=function(e){let{fallback:t,sources:a=[],shouldLoad:o=!0}=e,n=s(e,m);const l=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(A,i({},n,t,{sizes:l,shouldLoad:o}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:l})})),c):c};var v;A.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},f.displayName="Picture",f.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const y=["fallback"],E=function(e){let{fallback:t}=e,a=s(e,y);return t?r.createElement(f,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:o.string,sources:null==(v=f.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const b=function(e){return r.createElement(r.Fragment,null,r.createElement(f,i({},e)),r.createElement("noscript",null,r.createElement(f,i({},e,{shouldLoad:!0}))))};b.displayName="MainImage",b.propTypes=f.propTypes;const B=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],C=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(o)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},R={image:n().object.isRequired,alt:I},D=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],N=new Set;let F,Q;const W=function(e){let{as:t="div",image:o,style:n,backgroundColor:d,className:g,class:u,onStartLoad:w,onLoad:h,onError:p}=e,m=s(e,D);const{width:A,height:f,layout:v}=o,y=c(A,f,v),{style:E,className:b}=y,B=s(y,k),L=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(o.images)),[o.images]);u&&(g=u);const I=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,A,f);return(0,r.useEffect)((()=>{F||(F=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return Q=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==w||w({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==w||w({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(C);if(Q&&N.has(C))return;let t,r;return F.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;L.current&&(L.current.innerHTML=a(i({isLoading:!0,isLoaded:N.has(C),image:o},m)),N.has(C)||(t=requestAnimationFrame((()=>{L.current&&(r=s(L.current,C,N,n,w,h,p))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[o]),(0,r.useLayoutEffect)((()=>{N.has(C)&&Q&&(L.current.innerHTML=Q(i({isLoading:N.has(C),isLoaded:N.has(C),image:o},m)),null==w||w({wasCached:!0}),null==h||h({wasCached:!0}))}),[o]),(0,r.createElement)(t,i({},B,{style:i({},E,n,{backgroundColor:d}),className:b+(g?" "+g:""),ref:L,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(W,e):null}));P.propTypes=R,P.displayName="GatsbyImage";const U=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function x(e){return function(t){let{src:a,__imageData:o,__error:n}=t,l=s(t,U);return n&&console.warn(n),o?r.createElement(e,i({image:o},l)):(console.warn("Image not loaded",a),null)}}const V=x((function(e){let{as:t="div",className:a,class:o,style:n,image:l,loading:u="lazy",imgClassName:w,imgStyle:p,backgroundColor:m,objectFit:A,objectPosition:f}=e,v=s(e,B);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;o&&(a=o),p=i({objectFit:A,objectPosition:f,backgroundColor:m},p);const{width:y,height:I,layout:R,images:D,placeholder:k,backgroundColor:N}=l,F=c(y,I,R),{style:Q,className:W}=F,P=s(F,L),U={fallback:void 0,sources:[]};return D.fallback&&(U.fallback=i({},D.fallback,{srcSet:D.fallback.srcSet?C(D.fallback.srcSet):void 0})),D.sources&&(U.sources=D.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},P,{style:i({},Q,n,{backgroundColor:m}),className:W+(a?" "+a:"")}),r.createElement(h,{layout:R,width:y,height:I},r.createElement(E,i({},g(k,!1,R,y,I,N,A,f))),r.createElement(b,i({"data-gatsby-image-ssr":"",className:w},v,d("eager"===u,!1,U,u,p)))))})),H=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},Y=new Set(["fixed","fullWidth","constrained"]),O={src:n().string.isRequired,alt:I,width:H,height:H,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!Y.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};V.displayName="StaticImage",V.propTypes=O;const S=x(P);S.displayName="StaticImage",S.propTypes=O},3098:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),o=a(1883);var n=()=>r.createElement("header",null,r.createElement("img",{src:"data:image/png;base64,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",className:"logo",alt:"logo"}),r.createElement("nav",null,r.createElement(o.Link,{to:"/",activeClassName:"header-link-active"},"BIO"),r.createElement(o.Link,{className:"link-light",to:"/artwork",activeClassName:"header-link-light-active"},"ARTWORK"),r.createElement(o.Link,{className:"link-dark",to:"/development",activeClassName:"header-link-dark-active"},"DEVELOPMENT"),r.createElement(o.Link,{to:"/contacts",activeClassName:"header-link-active"},"CONTACTS")));var i=e=>{let{children:t,className:a}=e;return r.createElement("div",{className:"layout "+a},r.createElement(n,null),r.createElement("main",null,t),r.createElement("footer",null,r.createElement("p",{className:"footer"},"truly yours // Andrew Strokov")))}},6558:function(e,t,a){a.r(t);var r=a(7294),o=(a(1883),a(8032)),n=a(3098);t.default=()=>r.createElement(n.Z,null,r.createElement("div",{className:"bio-container"},r.createElement("div",{className:"bio-left"},r.createElement(o.S,{src:"../images/main_photo.png",alt:"main photo",__imageData:a(2778)})),r.createElement("div",{className:"bio-right"},r.createElement("p",null,"Welcome to my page, i'm"),r.createElement("h1",null,"Andrew Strokov"),r.createElement("p",null,"I am an engineer, developer, and artist working at the intersection of technology and art. I strive to create solutions that are both thoughtful and user-friendly, designed to empower people to achieve their goals. As a developer, I am passionate about developing cutting-edge technology and making it accessible and understandable for people. I specialize in creating interactive artwork, electronic devices and web development. Thank you for visiting my website!"))))},2778:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/strokov/static/bc8c1f9bd13015d2fbbdc0c91eb3a2a6/23691/main_photo.png","srcSet":"/strokov/static/bc8c1f9bd13015d2fbbdc0c91eb3a2a6/d77ad/main_photo.png 102w,\\n/strokov/static/bc8c1f9bd13015d2fbbdc0c91eb3a2a6/a031a/main_photo.png 204w,\\n/strokov/static/bc8c1f9bd13015d2fbbdc0c91eb3a2a6/23691/main_photo.png 408w","sizes":"(min-width: 408px) 408px, 100vw"},"sources":[{"srcSet":"/strokov/static/bc8c1f9bd13015d2fbbdc0c91eb3a2a6/4dc68/main_photo.webp 102w,\\n/strokov/static/bc8c1f9bd13015d2fbbdc0c91eb3a2a6/b2c58/main_photo.webp 204w,\\n/strokov/static/bc8c1f9bd13015d2fbbdc0c91eb3a2a6/dbf30/main_photo.webp 408w","type":"image/webp","sizes":"(min-width: 408px) 408px, 100vw"}]},"width":408,"height":612}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5b616f6bd959ecedce94.js.map