(this["webpackJsonpdischarge-kinetic"]=this["webpackJsonpdischarge-kinetic"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(23),r=n.n(c),i=n(21),a=(n(32),n(2)),l=n(4),j=(n(33),n(3)),o=function(){var e=new Date,t=e.getTimezoneOffset(),n=new Date(e.getTime()-60*t*1e3).toISOString().split("T"),s=Object(l.a)(n,2),c=s[0],r=s[1];return c=c.split("-"),r=r.split(".")[0].split(":"),{year:c[0],month:c[1],day:c[2],hour:r[0],minutes:r[1],seconds:r[2]}},u=function(){var e=Object(s.useState)(o()),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(s.useRef)(null);return Object(s.useEffect)((function(){return r.current=setInterval((function(){c(o())}),1e3),function(){return clearInterval(r.current)}}),[]),Object(j.jsxs)("div",{className:"section",id:"now-time",children:[Object(j.jsxs)("h3",{id:"now-title",children:[n.year,"\ub144 ",n.month,"\uc6d4 ",n.day,"\uc77c"]}),Object(j.jsxs)("h1",{id:"now-timer",children:[n.hour," : ",n.minutes," : ",n.seconds]})]})},d=(n(35),function(e,t){var n,s,c=new Date,r=new Date(e),i=new Date(t),a=i-r,l=i-c,j=new Date(l).toISOString().split("T")[1].split(".")[0].split(":"),o=100-l/a*100;return{leftDay:(n=Math.floor(l/864e5),s=2,n.toString().padStart(s,"0")),hour:j[0],minutes:j[1],seconds:j[2],percent:Math.max(0,o).toFixed(6),isEnd:o>100}}),b=function(e){var t=e.title,n=e.start,c=void 0===n?"2022-10-31":n,r=e.end,i=void 0===r?"2024-04-30 08:00:00":r,a=Object(s.useState)(d(c,i)),o=Object(l.a)(a,2),u=o[0],b=o[1],O=Object(s.useRef)(null);Object(s.useEffect)((function(){O.current=setInterval((function(){return b(d(c,i)),function(){return clearInterval(O.current)}}),100)}),[c,i]);var f=function(e,t){return Math.random()*(t-e)+e},h=Object(s.useRef)({backgroundPosition:"".concat(f(0,100),"% ").concat(f(0,100),"%")});return Object(j.jsx)(j.Fragment,{children:!u.isEnd&&Object(j.jsxs)("div",{className:"section",id:"time-left",style:h.current,children:[Object(j.jsx)("h1",{className:"left-title",children:t}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{className:"left-text",id:"left-day",children:[u.leftDay,"\uc77c,\xa0"]}),Object(j.jsxs)("span",{className:"left-text",id:"left-time",children:[u.hour,"\uc2dc\uac04 ",u.minutes,"\ubd84 ",u.seconds,"\ucd08"]})]}),Object(j.jsxs)("div",{className:"progress-group",children:[Object(j.jsx)("progress",{className:"left-progress",value:u.percent,min:"0",max:"100"}),Object(j.jsxs)("span",{className:"left-percent",children:[u.percent,"%"]})]})]})})},O=(n(36),function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"some-blank"}),Object(j.jsx)(u,{}),Object(j.jsx)(b,{title:"\uccab \ud734\uac00\uae4c\uc9c0",end:"2023-01-13"}),Object(j.jsx)(b,{title:"\uc77c\ubcd1\uae4c\uc9c0",end:"2023-01-01 07:00"}),Object(j.jsx)(b,{title:"\uc0c1\ubcd1\uae4c\uc9c0",end:"2023-07-01 07:00"}),Object(j.jsx)(b,{title:"\uc0dd\uc77c\uae4c\uc9c0",end:"2023-10-27 06:30"}),Object(j.jsx)(b,{title:"\ubcd1\uc7a5\uae4c\uc9c0",end:"2024-01-01 07:00"}),Object(j.jsx)(b,{title:"\uc804\uc5ed\uae4c\uc9c0",end:"2024-04-30 06:00"}),Object(j.jsx)("div",{className:"some-blank"})]})}),f=function(){return Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{path:"/",element:Object(j.jsx)(O,{})}),Object(j.jsx)(a.a,{path:"*",element:Object(j.jsx)("div",{children:"sorry error"})})]})};r.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(i.a,{children:Object(j.jsx)(f,{})}))}},[[37,1,2]]]);
//# sourceMappingURL=main.f35a039d.chunk.js.map