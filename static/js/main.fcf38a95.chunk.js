(this["webpackJsonpnotes-introduction-to-react-by-edufect-institute"]=this["webpackJsonpnotes-introduction-to-react-by-edufect-institute"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(8),c=n.n(a),s=(n(15),n(16),n(2)),l=n(3),o=n(5),j=n(4),u=n(0),b=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("h1",{children:"Hello World!"})}}]),n}(r.Component),x=b,m=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)("h3",{children:"What is React?"}),Object(u.jsx)("p",{children:"React is a JavaScript library for building User Interfaces"})]})}}]),n}(r.Component),p=m,d=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={string1:"React",string2:"JavaScript",string3:"Node.js"},e.showStrings=function(){var t=e.state,n=t.string1,r=t.string2,i=t.string3;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:n}),Object(u.jsx)("p",{children:r}),Object(u.jsx)("p",{children:i})]})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:this.showStrings()})}}]),n}(r.Component),h=d,O=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={x:11,y:22},e.isPrime=function(e){for(var t=2;t<e;t++)if(e%t===0)return!1;return!0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.x,n=e.y;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:["X is ",t," Prime is ",""+this.isPrime(t)]}),Object(u.jsxs)("p",{children:["Y is ",n," Prime is ",""+this.isPrime(n)]}),Object(u.jsxs)("p",{children:["Sum is ",t+n]}),Object(u.jsxs)("p",{children:["Greater is ",t>n?t:n," "]})]})}}]),n}(r.Component),f=O,v=n(10),g=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={numbersList:[10,7,18,12,25]},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.numbersList,t=Object(v.a)(e);return t.sort((function(e,t){return e-t})),Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)("li",{children:e})}))})}}]),n}(r.Component),y=g,L=n(6);function k(e){var t=e.children,n=e.exampleID,r=e.exampleTitle,i=e.exampleLink;return Object(u.jsxs)("div",{id:n,className:L.exampleContainer,children:[Object(u.jsx)("p",{className:L.title,children:r}),Object(u.jsx)("div",{className:L.example,children:t}),Object(u.jsx)("p",{className:L.link,children:Object(u.jsx)("a",{href:i,children:"View Notes"})})]})}var _=n(9);function C(){return Object(u.jsxs)("div",{className:_.exampleList,children:[Object(u.jsx)(k,{exampleID:"201",exampleTitle:"2.01 - Hello World",exampleLink:"https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example201",children:Object(u.jsx)(x,{})}),Object(u.jsx)(k,{exampleID:"202",exampleTitle:"2.02 - React Definition",exampleLink:"https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example202",children:Object(u.jsx)(p,{})}),Object(u.jsx)(k,{exampleID:"203",exampleTitle:"2.03 - List of Strings",exampleLink:"https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example203",children:Object(u.jsx)(h,{})}),Object(u.jsx)(k,{exampleID:"204",exampleTitle:"2.04 - Number Information",exampleLink:"https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example204",children:Object(u.jsx)(f,{})}),Object(u.jsx)(k,{exampleID:"205",exampleTitle:"2.05 - Sorted List",exampleLink:"https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example205",children:Object(u.jsx)(y,{})})]})}var N=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"pageTitle",children:"Practice Examples"}),Object(u.jsx)(C,{})]})};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={exampleContainer:"ExampleContainer_exampleContainer__1BtRZ",example:"ExampleContainer_example__1DsQN",title:"ExampleContainer_title__1FYI2"}},9:function(e,t,n){e.exports={exampleList:"ExampleList_exampleList__h_Cs-"}}},[[18,1,2]]]);
//# sourceMappingURL=main.fcf38a95.chunk.js.map