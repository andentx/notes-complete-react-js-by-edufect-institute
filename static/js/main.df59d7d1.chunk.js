(this["webpackJsonpnotes-complete-react-js-by-edufect-institute"]=this["webpackJsonpnotes-complete-react-js-by-edufect-institute"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(11),s=c.n(a),i=(c(16),c(17),c(2)),o=c(3),l=c(5),j=c(4),b=c(0),d=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("h1",{children:"Hello World!"})}}]),c}(r.Component),m=d,h=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)("h3",{children:"What is React?"}),Object(b.jsx)("p",{children:"React is a JavaScript library for building User Interfaces"})]})}}]),c}(r.Component),u=h,x=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={string1:"React",string2:"JavaScript",string3:"Node.js"},e.showStrings=function(){var t=e.state,c=t.string1,r=t.string2,n=t.string3;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:c}),Object(b.jsx)("p",{children:r}),Object(b.jsx)("p",{children:n})]})},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.showStrings()})}}]),c}(r.Component),O=x,p=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={x:11,y:22},e.isPrime=function(e){for(var t=2;t<e;t++)if(e%t===0)return!1;return!0},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state,t=e.x,c=e.y;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["X is ",t," Prime is ",""+this.isPrime(t)]}),Object(b.jsxs)("p",{children:["Y is ",c," Prime is ",""+this.isPrime(c)]}),Object(b.jsxs)("p",{children:["Sum is ",t+c]}),Object(b.jsxs)("p",{children:["Greater is ",t>c?t:c," "]})]})}}]),c}(r.Component),v=p,f=c(7),g=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={numbersList:[10,7,18,12,25]},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state.numbersList,t=Object(f.a)(e);return t.sort((function(e,t){return e-t})),Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsx)("li",{children:e})}))})}}]),c}(r.Component),y=g,w=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={students:[{name:"William",mathScore:34,englishScore:36},{name:"George",mathScore:24,englishScore:31},{name:"Katherine",mathScore:36,englishScore:41},{name:"Sophia",mathScore:45,englishScore:37},{name:"Timothy",mathScore:22,englishScore:19}]},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state.students;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row border bg-dark text-white",children:[Object(b.jsx)("div",{className:"col-6 border",children:"Name"}),Object(b.jsx)("div",{className:"col-3 border",children:"Math"}),Object(b.jsx)("div",{className:"col-3 border",children:"English"})]}),e.map((function(e){var t=e.name,c=e.mathScore,r=e.englishScore;return Object(b.jsxs)("div",{className:"row border",children:[Object(b.jsx)("div",{className:"col-6 border",children:t}),Object(b.jsx)("div",{className:"col-3 border",children:c}),Object(b.jsx)("div",{className:"col-3 border",children:r})]})}))]})}}]),c}(r.Component),N=w,S=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={students:[{name:"William",mathScore:34,englishScore:36},{name:"George",mathScore:24,englishScore:31},{name:"Katherine",mathScore:36,englishScore:41},{name:"Sophia",mathScore:45,englishScore:37},{name:"Timothy",mathScore:22,englishScore:19}]},e.getRowColor=function(e,t){return e+t>=60?"green":"red"},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.students;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row border bg-dark text-white",children:[Object(b.jsx)("div",{className:"col-6 border",children:"Name"}),Object(b.jsx)("div",{className:"col-3 border",children:"Math"}),Object(b.jsx)("div",{className:"col-3 border",children:"English"})]}),t.map((function(t){var c=t.name,r=t.mathScore,n=t.englishScore,a=e.getRowColor(r,n);return Object(b.jsxs)("div",{className:"row border",style:{backgroundColor:a},children:[Object(b.jsx)("div",{className:"col-6 border",children:c}),Object(b.jsx)("div",{className:"col-3 border",children:r}),Object(b.jsx)("div",{className:"col-3 border",children:n})]})}))]})}}]),c}(r.Component),C=S,k=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={students:[{name:"William",mathScore:34,englishScore:36},{name:"George",mathScore:24,englishScore:31},{name:"Katherine",mathScore:36,englishScore:41},{name:"Sophia",mathScore:45,englishScore:37},{name:"Timothy",mathScore:22,englishScore:19}]},e.getRowColor=function(e,t){return e+t>=60?"green":"red"},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.students.filter((function(e){return e.mathScore+e.englishScore>=50}));return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row border bg-dark text-white",children:[Object(b.jsx)("div",{className:"col-6 border",children:"Name"}),Object(b.jsx)("div",{className:"col-3 border",children:"Math"}),Object(b.jsx)("div",{className:"col-3 border",children:"English"})]}),t.map((function(t){var c=t.name,r=t.mathScore,n=t.englishScore,a=e.getRowColor(r,n);return Object(b.jsxs)("div",{className:"row border",style:{backgroundColor:a},children:[Object(b.jsx)("div",{className:"col-6 border",children:c}),Object(b.jsx)("div",{className:"col-3 border",children:r}),Object(b.jsx)("div",{className:"col-3 border",children:n})]})}))]})}}]),c}(r.Component),L=k,P=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={players:[{name:"Jack",answered:10,correct:8},{name:"Steve",answered:8,correct:7},{name:"William",answered:12,correct:9},{name:"Kathy",answered:11,correct:10},{name:"Edward",answered:9,correct:6},{name:"Mary",answered:13,correct:8}],correctPoints:2,incorrectPoints:-1},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state,t=e.players,c=e.correctPoints,r=e.incorrectPoints;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row bg-success text-white",children:[Object(b.jsx)("div",{className:"col-3 border",children:"Name"}),Object(b.jsx)("div",{className:"col-3 border",children:"Answered"}),Object(b.jsx)("div",{className:"col-3 border",children:"Correct"}),Object(b.jsx)("div",{className:"col-3 border",children:"Score"})]}),t.map((function(e){var t=e.name,n=e.answered,a=e.correct;return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-3 border",children:t}),Object(b.jsx)("div",{className:"col-3 border",children:n}),Object(b.jsx)("div",{className:"col-3 border",children:a}),Object(b.jsx)("div",{className:"col-3 border",children:a*c+(n-a)*r})]})}))]})}}]),c}(r.Component),I=P,A=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={players:[{name:"Jack",answered:10,correct:8},{name:"Steve",answered:8,correct:7},{name:"William",answered:12,correct:9},{name:"Kathy",answered:11,correct:10},{name:"Edward",answered:9,correct:6},{name:"Mary",answered:13,correct:8}],correctPoints:2,incorrectPoints:-1},e.sortPlayers=function(t,c){var r=e.state,n=r.correctPoints,a=r.incorrectPoints,s=t.correct*n+(t.answered-t.correct)*a;return c.correct*n+(c.answered-c.correct)*a-s},e.totalQuestions=function(){return e.state.players.reduce((function(e,t){return e+t.answered}),0)},e.totalCorrect=function(){return e.state.players.reduce((function(e,t){return e+t.correct}),0)},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state,t=e.players,c=e.correctPoints,r=e.incorrectPoints,n=Object(f.a)(t).sort(this.sortPlayers),a=this.totalQuestions(),s=this.totalCorrect();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row bg-success text-white",children:[Object(b.jsx)("div",{className:"col-3 border",children:"Name"}),Object(b.jsx)("div",{className:"col-3 border",children:"Answered"}),Object(b.jsx)("div",{className:"col-3 border",children:"Correct"}),Object(b.jsx)("div",{className:"col-3 border",children:"Score"})]}),t.map((function(e){var t=e.name,n=e.answered,a=e.correct;return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-3 border",children:t}),Object(b.jsx)("div",{className:"col-3 border",children:n}),Object(b.jsx)("div",{className:"col-3 border",children:a}),Object(b.jsx)("div",{className:"col-3 border",children:a*c+(n-a)*r})]})})),Object(b.jsxs)("div",{className:"row bg-light",children:[Object(b.jsxs)("div",{className:"col-6 border",children:[Object(b.jsx)("h4",{children:"Leaderboard"}),"1. ",n[0].name,Object(b.jsx)("br",{}),"2. ",n[1].name,Object(b.jsx)("br",{}),"3. ",n[2].name,Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"col-6 border",children:[Object(b.jsx)("h4",{children:"Statistics"}),"Total Questions : ",a,Object(b.jsx)("br",{}),"Correct Answers : ",s,Object(b.jsx)("br",{}),"Incorrect Answers : ",a-s,Object(b.jsx)("br",{})]})]})]})}}]),c}(r.Component),T=A,D=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={players:[{name:"Jack",answered:10,correct:8},{name:"Steve",answered:8,correct:7},{name:"William",answered:12,correct:9},{name:"Kathy",answered:11,correct:10},{name:"Edward",answered:9,correct:6},{name:"Mary",answered:13,correct:8}],correctPoints:2,incorrectPoints:-1},e.sortPlayers=function(t,c){var r=e.state,n=r.correctPoints,a=r.incorrectPoints,s=t.correct*n+(t.answered-t.correct)*a;return c.correct*n+(c.answered-c.correct)*a-s},e.totalQuestions=function(){return e.state.players.reduce((function(e,t){return e+t.answered}),0)},e.totalCorrect=function(){return e.state.players.reduce((function(e,t){return e+t.correct}),0)},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state,t=e.players,c=e.correctPoints,r=e.incorrectPoints,n=Object(f.a)(t).sort(this.sortPlayers),a=this.totalQuestions(),s=this.totalCorrect();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"row",children:t.map((function(e){var t=e.name,n=e.answered,a=e.correct;return Object(b.jsxs)("div",{className:"col-4 border bg-warning",children:[t," ",Object(b.jsx)("br",{}),"Answered: ",n," ",Object(b.jsx)("br",{}),"Correct: ",a," ",Object(b.jsx)("br",{}),"Score:",a*c+(n-a)*r]})}))}),Object(b.jsxs)("div",{className:"row bg-light",children:[Object(b.jsxs)("div",{className:"col-6 border",children:[Object(b.jsx)("h4",{children:"Leaderboard"}),"1. ",n[0].name," ",Object(b.jsx)("br",{}),"2. ",n[1].name," ",Object(b.jsx)("br",{}),"3. ",n[2].name," ",Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"col-6 border",children:[Object(b.jsx)("h4",{children:"Statistics"}),"Total Questions : ",a," ",Object(b.jsx)("br",{}),"Correct Answers : ",s," ",Object(b.jsx)("br",{}),"Incorrect Answers : ",a-s," ",Object(b.jsx)("br",{})]})]})]})}}]),c}(r.Component),E=D,_=c(8);function F(e){var t=e.children,c=e.exampleID,r=e.exampleTitle,n=e.exampleLink;return Object(b.jsxs)("div",{id:c,className:_.exampleContainer,children:[Object(b.jsx)("p",{className:_.title,children:r}),Object(b.jsx)("div",{className:_.example,children:t}),Object(b.jsx)("p",{className:_.link,children:Object(b.jsx)("a",{href:n,children:"View Notes"})})]})}var R=c(9);function B(){return Object(b.jsxs)("div",{className:R.exampleList,children:[Object(b.jsx)(F,{exampleID:"201",exampleTitle:"2.01 - Hello World",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example201",children:Object(b.jsx)(m,{})}),Object(b.jsx)(F,{exampleID:"202",exampleTitle:"2.02 - React Definition",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example202",children:Object(b.jsx)(u,{})}),Object(b.jsx)(F,{exampleID:"203",exampleTitle:"2.03 - List of Strings",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example203",children:Object(b.jsx)(O,{})}),Object(b.jsx)(F,{exampleID:"204",exampleTitle:"2.04 - Number Information",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example204",children:Object(b.jsx)(v,{})}),Object(b.jsx)(F,{exampleID:"205",exampleTitle:"2.05 - Sorted List",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example205",children:Object(b.jsx)(y,{})}),Object(b.jsx)(F,{exampleID:"206a",exampleTitle:"2.06a - Table of Scores",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example206a",children:Object(b.jsx)(N,{})}),Object(b.jsx)(F,{exampleID:"206b",exampleTitle:"2.06b - Table of Scores Styled",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example206b",children:Object(b.jsx)(C,{})}),Object(b.jsx)(F,{exampleID:"206c",exampleTitle:"2.06c - Table of Scores Filtered",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example206c",children:Object(b.jsx)(L,{})}),Object(b.jsx)(F,{exampleID:"207a",exampleTitle:"2.07a - Quiz Points",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example207a",children:Object(b.jsx)(I,{})}),Object(b.jsx)(F,{exampleID:"207b",exampleTitle:"2.07b - Quiz Statistics",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example207b",children:Object(b.jsx)(T,{})}),Object(b.jsx)(F,{exampleID:"207c",exampleTitle:"2.07c - Quiz Statistics Refactored",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example207c",children:Object(b.jsx)(E,{})})]})}var J=c(6),Q=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={text:"No button clicked",clickCount:0},e.clickedButton=function(t){var c=Object(J.a)({},e.state);c.text=t,c.clickCount++,e.setState(c)},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.text,r=t.clickCount;return Object(b.jsxs)(b.Fragment,{children:["Text: ",c,Object(b.jsx)("br",{}),"Count: ",r,Object(b.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){return e.clickedButton("ABC")},children:"ABC"}),Object(b.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){return e.clickedButton("123")},children:"123"})]})}}]),c}(r.Component),M=Q,W=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={contacts:[{name:"Jack",age:25,skills:"JavaScript, React",email:"jack@email.com",phone:"987-555-0123"},{name:"Anna",age:29,skills:"Node.js, MongoDB",email:"anna@email.com",phone:"987-555-1234"},{name:"Steve",age:31,skills:"Android App Development",email:"steve@email.com",phone:"987-555-2345"}],contactIndex:-1,showContactDetails:!1},e.setIndex=function(t){var c=Object(J.a)({},e.state);c.contactIndex=t,c.showContactDetails=!1,e.setState(c)},e.showPerson=function(){var t=e.state,c=t.contacts,r=t.contactIndex,n=t.showContactDetails;return Object(b.jsxs)(b.Fragment,{children:["Name: ",c[r].name," ",Object(b.jsx)("br",{}),"Age: ",c[r].age," ",Object(b.jsx)("br",{}),"Skills: ",c[r].skills," ",Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){return e.showContactDetails()},children:"Contact Info"}),n?Object(b.jsxs)(b.Fragment,{children:["Email: ",c[r].email," ",Object(b.jsx)("br",{}),"Phone: ",c[r].phone," ",Object(b.jsx)("br",{})]}):""]})},e.showContactDetails=function(){var t=Object(J.a)({},e.state);t.showContactDetails=!0,e.setState(t)},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.contacts,r=t.contactIndex;return Object(b.jsxs)(b.Fragment,{children:[c.map((function(t,c){return Object(b.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){return e.setIndex(c)},children:t.name})})),Object(b.jsx)("br",{}),r>=0?this.showPerson():""]})}}]),c}(r.Component),K=W,q=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={list1:["Bob","Tim","Julia","Steve","Edward","George","Kathy"],list2:[]},e.list1Click=function(t){var c=Object(J.a)({},e.state),r=c.list1.splice(t,1);c.list2.push(r),e.setState(c)},e.list2Click=function(t){var c=Object(J.a)({},e.state),r=c.list2.splice(t,1);c.list1.push(r),e.setState(c)},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.list1,r=t.list2;return Object(b.jsxs)("div",{className:"d-flex h-75 w-75",children:[Object(b.jsxs)("div",{className:"border w-50",children:[Object(b.jsx)("h4",{children:"List 1"}),c.map((function(t,c){return Object(b.jsxs)("span",{onClick:function(){return e.list1Click(c)},children:[t,Object(b.jsx)("br",{})]})}))]}),Object(b.jsxs)("div",{className:"border w-50",children:[Object(b.jsx)("h4",{children:"List 2"}),r.map((function(t,c){return Object(b.jsxs)(b.Fragment,{children:[t,Object(b.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return e.list2Click(c)},children:"X"}),Object(b.jsx)("br",{})]})}))]})]})}}]),c}(r.Component),G=q,z=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={products:[{name:"Chips",price:100},{name:"Trail Mix",price:150},{name:"Cookies",price:200},{name:"Chocolate",price:75},{name:"Almonds",price:175}],cart:[]},e.addToCart=function(t){var c=Object(J.a)({},e.state),r=c.products[t],n=c.cart.find((function(e){return e.name===r.name}));n?n.qty=n.qty+1:c.cart.push(Object(J.a)(Object(J.a)({},r),{},{qty:1})),e.setState(c)},e.showCart=function(){var t=e.state.cart;return 0===t.length?Object(b.jsx)("h4",{children:"Cart is Empty"}):Object(b.jsx)("ul",{children:t.map((function(e){var t=e.name,c=e.price,r=e.qty;return Object(b.jsxs)("li",{children:[t,", price=",c,", qty=",r]})}))})},e.showProducts=function(){var t=e.state.products;return Object(b.jsxs)("div",{className:"d-flex flex-column",children:[Object(b.jsxs)("div",{className:"bg-dark text-white d-flex",children:[Object(b.jsx)("div",{className:"m-1",children:"Name"}),Object(b.jsx)("div",{className:"m-1",children:"Price"}),Object(b.jsx)("div",{className:"m-1"})]}),t.map((function(t,c){var r=t.name,n=t.price;return Object(b.jsxs)("div",{className:"border d-flex justify-content-between",children:[Object(b.jsx)("div",{className:"m-1",children:r}),Object(b.jsx)("div",{className:"m-1",children:n}),Object(b.jsx)("div",{className:"m-1"}),Object(b.jsx)("button",{className:"btn btn-primary btn-sm",onClick:function(){return e.addToCart(c)},children:"Add"})]})}))]})},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.showCart(),this.showProducts()]})}}]),c}(r.Component),H=z;function V(){return Object(b.jsxs)("div",{className:R.exampleList,children:[Object(b.jsx)(F,{exampleID:"301",exampleTitle:"3.01 - Button Info",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson03.md#example301",children:Object(b.jsx)(M,{})}),Object(b.jsx)(F,{exampleID:"302",exampleTitle:"3.02 - Contact Info",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson03.md#example302",children:Object(b.jsx)(K,{})}),Object(b.jsx)(F,{exampleID:"303",exampleTitle:"3.03 - Two Lists",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson03.md#example303",children:Object(b.jsx)(G,{})}),Object(b.jsx)(F,{exampleID:"304",exampleTitle:"3.04 - Vending Info",exampleLink:"https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson03.md#example304",children:Object(b.jsx)(H,{})})]})}var X=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"pageTitle",children:"Practice Examples"}),Object(b.jsx)(B,{}),Object(b.jsx)(V,{})]})};c(19);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(X,{})}),document.getElementById("root"))},8:function(e,t,c){e.exports={exampleContainer:"ExampleContainer_exampleContainer__1BtRZ",example:"ExampleContainer_example__1DsQN",title:"ExampleContainer_title__1FYI2"}},9:function(e,t,c){e.exports={exampleList:"ExampleList_exampleList__h_Cs-"}}},[[20,1,2]]]);
//# sourceMappingURL=main.df59d7d1.chunk.js.map