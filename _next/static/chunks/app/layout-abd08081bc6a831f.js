(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2818:(e,t,o)=>{Promise.resolve().then(o.bind(o,786)),Promise.resolve().then(o.bind(o,2469)),Promise.resolve().then(o.t.bind(o,7017,23)),Promise.resolve().then(o.t.bind(o,5348,23)),Promise.resolve().then(o.t.bind(o,5214,23))},786:(e,t,o)=>{"use strict";o.d(t,{MainLayout:()=>u});var r=o(8646),l=o(7437),n=o(7011),s=o(6101),c=o(1538),i=o(9018);let a=(0,i.Z)((0,l.jsx)("path",{d:"M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96"}),"Bedtime"),d=(0,i.Z)((0,l.jsx)("path",{d:"M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6"}),"Brightness5");function m(){let e=(0,r._)(["\n  cursor: pointer;\n"]);return m=function(){return e},e}let h=o(8493).Z.div(m()),u=e=>{let{children:t}=e,{mode:o,setMode:r}=(0,n.tv)();return o?(0,l.jsxs)("div",{children:[(0,l.jsxs)(s.Z,{padding:"20px",direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,l.jsx)(c.Z,{fontSize:"20px",children:"Dashboard"}),(0,l.jsxs)(h,{onClick:()=>{"light"===o?r("dark"):r("light")},children:["light"===o&&(0,l.jsx)(d,{}),"dark"===o&&(0,l.jsx)(a,{})]})]}),t]}):null}},2469:(e,t,o)=>{"use strict";o.d(t,{ThemeProvider:()=>C});var r=o(7437),l=o(9869),n=o(2265),s=o(3618),c=o(2737);function i(e){let{theme:t,...o}=e,l=c.Z in t?t[c.Z]:void 0;return(0,r.jsx)(s.Z,{...o,themeId:l?c.Z:void 0,theme:l||t})}var a=o(7011);function d(e){let{theme:t,...o}=e;return"function"!=typeof t&&"colorSchemes"in(c.Z in t?t[c.Z]:t)?(0,r.jsx)(a.lL,{theme:t,...o}):(0,r.jsx)(i,{theme:t,...o})}var m=o(3016),h=o(5885);let u="function"==typeof(0,m.zY)({}),f=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),g=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),S=function(e){var t,o;let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l={};r&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(t=>{var o,r;let[n,s]=t,c=e.getColorSchemeSelector(n);c.startsWith("@")?l[c]={":root":{colorScheme:null===(o=s.palette)||void 0===o?void 0:o.mode}}:l[c.replace(/\s*&/,"")]={colorScheme:null===(r=s.palette)||void 0===r?void 0:r.mode}});let n={html:f(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...g(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...l},s=null===(o=e.components)||void 0===o?void 0:null===(t=o.MuiCssBaseline)||void 0===t?void 0:t.styleOverrides;return s&&(n=[n,s]),n},p="mui-ecs",y=e=>{let t=S(e,!1),o=Array.isArray(t)?t[0]:t;return!e.vars&&o&&(o.html[":root:has(".concat(p,")")]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var r,l;let[n,s]=t,c=e.getColorSchemeSelector(n);c.startsWith("@")?o[c]={[":root:not(:has(.".concat(p,"))")]:{colorScheme:null===(r=s.palette)||void 0===r?void 0:r.mode}}:o[c.replace(/\s*&/,"")]={["&:not(:has(.".concat(p,"))")]:{colorScheme:null===(l=s.palette)||void 0===l?void 0:l.mode}}}),t},v=(0,m.zY)(u?e=>{let{theme:t,enableColorScheme:o}=e;return S(t,o)}:e=>{let{theme:t}=e;return y(t)}),k=function(e){let{children:t,enableColorScheme:o=!1}=(0,h.i)({props:e,name:"MuiCssBaseline"});return(0,r.jsxs)(n.Fragment,{children:[u&&(0,r.jsx)(v,{enableColorScheme:o}),!u&&!o&&(0,r.jsx)("span",{className:p,style:{display:"none"}}),t]})},b=(0,l.Z)({colorSchemes:{dark:!0}}),C=e=>{let{children:t}=e;return(0,r.jsxs)(d,{theme:b,children:[(0,r.jsx)(k,{}),t]})}},7011:(e,t,o)=>{"use strict";o.d(t,{lL:()=>b,tv:()=>v});var r=o(2265),l=o(7267),n=o(6003),s=o(9397),c=o(3618),i=o(7437);let a="mode",d="color-scheme";function m(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function h(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function u(e,t){let o;if("undefined"!=typeof window){try{(o=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return o||t}}var f=o(9869),g=o(5032),S=o(2737);let p={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:y,useColorScheme:v,getInitColorSchemeScript:k}=function(e){let{themeId:t,theme:o={},modeStorageKey:l=a,colorSchemeStorageKey:f=d,disableTransitionOnChange:g=!1,defaultColorScheme:S,resolveTheme:p}=e,y={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},v=r.createContext(void 0),k="string"==typeof S?S:S.light,b="string"==typeof S?S:S.dark;return{CssVarsProvider:function(e){let{children:y,theme:k,modeStorageKey:b=l,colorSchemeStorageKey:C=f,disableTransitionOnChange:x=g,storageWindow:j="undefined"==typeof window?void 0:window,documentNode:w="undefined"==typeof document?void 0:document,colorSchemeNode:M="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:Z=!1,disableStyleSheetGeneration:_=!1,defaultMode:$="system"}=e,E=r.useRef(!1),I=(0,s.Z)(),L=r.useContext(v),W=!!L&&!Z,P=r.useMemo(()=>k||("function"==typeof o?o():o),[k]),T=P[t],{colorSchemes:A={},components:K={},cssVarPrefix:N,...z}=T||P,O=Object.keys(A).filter(e=>!!A[e]).join(","),V=r.useMemo(()=>O.split(","),[O]),F="string"==typeof S?S:S.light,B="string"==typeof S?S:S.dark,H=A[F]&&A[B]?$:A[z.defaultColorScheme]?.palette?.mode||z.palette?.mode,{mode:D,setMode:R,systemMode:q,lightColorScheme:Y,darkColorScheme:G,colorScheme:J,setColorScheme:Q}=function(e){let{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:l,supportedColorSchemes:n=[],modeStorageKey:s=a,colorSchemeStorageKey:c=d,storageWindow:i="undefined"==typeof window?void 0:window}=e,f=n.join(","),g=n.length>1,[S,p]=r.useState(()=>{let e=u(s,t),r=u("".concat(c,"-light"),o),n=u("".concat(c,"-dark"),l);return{mode:e,systemMode:m(e),lightColorScheme:r,darkColorScheme:n}}),[,y]=r.useState(!1),v=r.useRef(!1);r.useEffect(()=>{g&&y(!0),v.current=!0},[g]);let k=h(S,e=>"light"===e?S.lightColorScheme:"dark"===e?S.darkColorScheme:void 0),b=r.useCallback(e=>{p(o=>{if(e===o.mode)return o;let r=null!=e?e:t;try{localStorage.setItem(s,r)}catch(e){}return{...o,mode:r,systemMode:m(r)}})},[s,t]),C=r.useCallback(e=>{e?"string"==typeof e?e&&!f.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):p(t=>{let o={...t};return h(t,t=>{try{localStorage.setItem("".concat(c,"-").concat(t),e)}catch(e){}"light"===t&&(o.lightColorScheme=e),"dark"===t&&(o.darkColorScheme=e)}),o}):p(t=>{let r={...t},n=null===e.light?o:e.light,s=null===e.dark?l:e.dark;if(n){if(f.includes(n)){r.lightColorScheme=n;try{localStorage.setItem("".concat(c,"-light"),n)}catch(e){}}else console.error("`".concat(n,"` does not exist in `theme.colorSchemes`."))}if(s){if(f.includes(s)){r.darkColorScheme=s;try{localStorage.setItem("".concat(c,"-dark"),s)}catch(e){}}else console.error("`".concat(s,"` does not exist in `theme.colorSchemes`."))}return r}):p(e=>{try{localStorage.setItem("".concat(c,"-light"),o),localStorage.setItem("".concat(c,"-dark"),l)}catch(e){}return{...e,lightColorScheme:o,darkColorScheme:l}})},[f,c,o,l]),x=r.useCallback(e=>{"system"===S.mode&&p(t=>{let o=(null==e?void 0:e.matches)?"dark":"light";return t.systemMode===o?t:{...t,systemMode:o}})},[S.mode]),j=r.useRef(x);return j.current=x,r.useEffect(()=>{if("function"!=typeof window.matchMedia||!g)return;let e=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return j.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[g]),r.useEffect(()=>{if(i&&g){let e=e=>{let o=e.newValue;"string"==typeof e.key&&e.key.startsWith(c)&&(!o||f.match(o))&&(e.key.endsWith("light")&&C({light:o}),e.key.endsWith("dark")&&C({dark:o})),e.key===s&&(!o||["light","dark","system"].includes(o))&&b(o||t)};return i.addEventListener("storage",e),()=>{i.removeEventListener("storage",e)}}},[C,b,s,c,f,t,i,g]),{...S,mode:v.current||!g?S.mode:void 0,systemMode:v.current||!g?S.systemMode:void 0,colorScheme:v.current||!g?k:void 0,setMode:b,setColorScheme:C}}({supportedColorSchemes:V,defaultLightColorScheme:F,defaultDarkColorScheme:B,modeStorageKey:b,colorSchemeStorageKey:C,defaultMode:H,storageWindow:j}),U=D,X=J;W&&(U=L.mode,X=L.colorScheme);let ee=X||z.defaultColorScheme,et=z.generateThemeVars?.()||z.vars,eo={...z,components:K,colorSchemes:A,cssVarPrefix:N,vars:et};if("function"==typeof eo.generateSpacing&&(eo.spacing=eo.generateSpacing()),ee){let e=A[ee];e&&"object"==typeof e&&Object.keys(e).forEach(t=>{e[t]&&"object"==typeof e[t]?eo[t]={...eo[t],...e[t]}:eo[t]=e[t]})}let er=z.colorSchemeSelector;r.useEffect(()=>{if(X&&M&&er&&"media"!==er){let e=er;if("class"===er&&(e=".%s"),"data"===er&&(e="[data-%s]"),er?.startsWith("data-")&&!er.includes("%s")&&(e=`[${er}="%s"]`),e.startsWith("."))M.classList.remove(...V.map(t=>e.substring(1).replace("%s",t))),M.classList.add(e.substring(1).replace("%s",X));else{let t=e.replace("%s",X).match(/\[([^\]]+)\]/);if(t){let[e,o]=t[1].split("=");o||V.forEach(t=>{M.removeAttribute(e.replace(X,t))}),M.setAttribute(e,o?o.replace(/"|'/g,""):"")}else M.setAttribute(e,X)}}},[X,er,M,V]),r.useEffect(()=>{let e;if(x&&E.current&&w){let t=w.createElement("style");t.appendChild(w.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),w.head.appendChild(t),window.getComputedStyle(w.body),e=setTimeout(()=>{w.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[X,x,w]),r.useEffect(()=>(E.current=!0,()=>{E.current=!1}),[]);let el=r.useMemo(()=>({allColorSchemes:V,colorScheme:X,darkColorScheme:G,lightColorScheme:Y,mode:U,setColorScheme:Q,setMode:R,systemMode:q}),[V,X,G,Y,U,Q,R,q]),en=!0;(_||!1===z.cssVariables||W&&I?.cssVarPrefix===N)&&(en=!1);let es=(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(c.Z,{themeId:T?t:void 0,theme:p?p(eo):eo,children:y}),en&&(0,i.jsx)(n.Z,{styles:eo.generateStyleSheets?.()||[]})]});return W?es:(0,i.jsx)(v.Provider,{value:el,children:es})},useColorScheme:()=>r.useContext(v)||y,getInitColorSchemeScript:e=>(function(e){let{defaultMode:t="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:r="dark",modeStorageKey:l=a,colorSchemeStorageKey:n=d,attribute:s="data-color-scheme",colorSchemeNode:c="document.documentElement",nonce:m}=e||{},h="",u=s;if("class"===s&&(u=".%s"),"data"===s&&(u="[data-%s]"),u.startsWith(".")){let e=u.substring(1);h+=`${c}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${c}.classList.add('${e}'.replace('%s', colorScheme));`}let f=u.match(/\[([^\]]+)\]/);if(f){let[e,t]=f[1].split("=");t||(h+=`${c}.removeAttribute('${e}'.replace('%s', light));
      ${c}.removeAttribute('${e}'.replace('%s', dark));`),h+=`
      ${c}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else h+=`${c}.setAttribute('${u}', colorScheme);`;return(0,i.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?m:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${l}') || '${t}';
  const dark = localStorage.getItem('${n}-dark') || '${r}';
  const light = localStorage.getItem('${n}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${h}
  }
} catch(e){}})();`}},"mui-color-scheme-init")})({colorSchemeStorageKey:f,defaultLightColorScheme:k,defaultDarkColorScheme:b,modeStorageKey:l,...e})}}({themeId:S.Z,theme:()=>(0,f.Z)({cssVariables:!0}),colorSchemeStorageKey:p.colorSchemeStorageKey,modeStorageKey:p.modeStorageKey,defaultColorScheme:{light:p.defaultLightColorScheme,dark:p.defaultDarkColorScheme},resolveTheme:e=>{let t={...e,typography:(0,g.Z)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,l.Z)({sx:e,theme:this})},t}}),b=y},6950:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});let r=o(2265).createContext(null)},9397:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var r=o(2265),l=o(6950);function n(){return r.useContext(l.Z)}},3618:(e,t,o)=>{"use strict";o.d(t,{Z:()=>g});var r=o(2265),l=o(9397),n=o(6950);let s="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var c=o(7437);let i=function(e){let{children:t,theme:o}=e,i=(0,l.Z)(),a=r.useMemo(()=>{let e=null===i?{...o}:"function"==typeof o?o(i):{...i,...o};return null!=e&&(e[s]=null!==i),e},[o,i]);return(0,c.jsx)(n.Z.Provider,{value:a,children:t})};var a=o(3209),d=o(2717),m=o(5158),h=o(4866);let u={};function f(e,t,o){let l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.useMemo(()=>{let r=e&&t[e]||t;if("function"==typeof o){let n=o(r),s=e?{...t,[e]:n}:n;return l?()=>s:s}return e?{...t,[e]:o}:{...t,...o}},[e,t,o,l])}let g=function(e){let{children:t,theme:o,themeId:r}=e,n=(0,d.Z)(u),s=(0,l.Z)()||u,g=f(r,n,o),S=f(r,s,o,!0),p="rtl"===g.direction;return(0,c.jsx)(i,{theme:S,children:(0,c.jsx)(a.T.Provider,{value:g,children:(0,c.jsx)(m.Z,{value:p,children:(0,c.jsx)(h.Z,{value:null==g?void 0:g.components,children:t})})})})}},5214:()=>{},5348:e=>{e.exports={style:{fontFamily:"'geistMono', 'geistMono Fallback'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},7017:e=>{e.exports={style:{fontFamily:"'geistSans', 'geistSans Fallback'"},className:"__className_1e4310",variable:"__variable_1e4310"}}},e=>{var t=t=>e(e.s=t);e.O(0,[473,176,130,215,744],()=>t(2818)),_N_E=e.O()}]);