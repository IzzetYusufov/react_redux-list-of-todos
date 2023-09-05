(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{27:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(4),r=c(17),l=c(7),i=c(14),o=c(15),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(5),h=function(e){return{type:"add/query",payload:e}},O=function(e){return{type:"add/status",payload:e}},f=function(){return{type:"add/clear"}},m={query:"",status:"all"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add/query":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"add/status":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});case"add/clear":return Object(b.a)(Object(b.a)({},e),{},{query:""});default:return e}},p=function(e){return{type:"todos/ADD",payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?t.payload:e},v=Object(l.combineReducers)({currentTodo:j,filter:x,todos:y}),N=Object(l.createStore)(v,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(o.a))),g=c(0),T=(c(25),c(26),c(12)),w=c(3),k=c(16),S=c.n(k),C=(s.b,s.c);function E(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(27);var q=c(1),D=function(){return Object(q.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(q.jsx)("div",{className:"Loader__content"})})},L=function(){var e=C((function(e){return e.todos})),t=C((function(e){return e.filter})),c=t.query,a=t.status,n=C((function(e){return e.currentTodo})),r=Object(g.useState)(!1),l=Object(w.a)(r,2),i=l[0],o=l[1],u=Object(g.useState)(!1),j=Object(w.a)(u,2),b=j[0],h=j[1],O=Object(s.b)();Object(g.useEffect)((function(){o(!1),h(!0),E("/todos").then((function(e){return O(p(e))})).catch((function(){return o(!0)})).finally((function(){return h(!1)}))}),[]);var f=Object(g.useMemo)((function(){var t=c?Object(T.a)(e).filter((function(e){return e.title.toLowerCase().includes(c)})):Object(T.a)(e);switch(a){case"active":return t.filter((function(e){return!e.completed}));case"completed":return t.filter((function(e){return e.completed}));default:return t}}),[c,a,e]);return Object(q.jsxs)(q.Fragment,{children:[!b&&!i&&0===f.length&&Object(q.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),b&&!i&&Object(q.jsx)(D,{}),!b&&!i&&f.length>0&&Object(q.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"#"}),Object(q.jsx)("th",{children:Object(q.jsx)("span",{className:"icon",children:Object(q.jsx)("i",{className:"fas fa-check"})})}),Object(q.jsx)("th",{children:"Title"}),Object(q.jsx)("th",{children:" "})]})}),Object(q.jsx)("tbody",{children:f.map((function(e){return Object(q.jsxs)("tr",{"data-cy":"todo",children:[Object(q.jsx)("td",{className:"is-vcentered",children:e.id}),Object(q.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(q.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(q.jsx)("i",{className:"fas fa-check"})})}),Object(q.jsx)("td",{className:"is-vcentered is-expanded",children:Object(q.jsx)("p",{className:S()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(q.jsx)("td",{className:"has-text-right is-vcentered",children:Object(q.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return O(d(e))},children:Object(q.jsx)("span",{className:"icon",children:Object(q.jsx)("i",{className:e.id===(null===n||void 0===n?void 0:n.id)?"far fa-eye-slash":"far fa-eye"})})})})]},e.id)}))})]})]})},_=["All","Active","Completed"],A=function(){var e=C((function(e){return e.filter})).query,t=Object(s.b)();return Object(q.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(q.jsx)("p",{className:"control",children:Object(q.jsx)("span",{className:"select",children:Object(q.jsx)("select",{"data-cy":"statusSelect",onChange:function(e){t(O(e.target.value))},children:_.map((function(e){return Object(q.jsx)("option",{value:e.toLowerCase(),children:e},e)}))})})}),Object(q.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(q.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",value:e,placeholder:"Search...",onChange:function(e){t(h(e.target.value.toLowerCase()))}}),Object(q.jsx)("span",{className:"icon is-left",children:Object(q.jsx)("i",{className:"fas fa-magnifying-glass"})}),e&&Object(q.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(q.jsx)("button",{"data-cy":"clearSearchButton","aria-label":"clear input",type:"button",className:"delete",onClick:function(){return t(f())}})})]})]})},M=function(){var e=C((function(e){return e.currentTodo})),t=Object(s.b)(),c=Object(g.useState)(null),a=Object(w.a)(c,2),n=a[0],r=a[1],l=Object(g.useState)(!1),i=Object(w.a)(l,2),o=i[0],d=i[1],j=Object(g.useState)(!1),b=Object(w.a)(j,2),h=b[0],O=b[1];return Object(g.useEffect)((function(){var t;d(!1),O(!0),e&&(t=e.userId,E("/users/".concat(t))).then(r).catch((function(){return d(!0)})).finally((function(){return O(!1)}))}),[e]),Object(q.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(q.jsx)("div",{className:"modal-background"}),h&&!o&&Object(q.jsx)(D,{}),!h&&!o&&n&&e&&Object(q.jsxs)("div",{className:"modal-card",children:[Object(q.jsxs)("header",{className:"modal-card-head",children:[Object(q.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(e.id)}),Object(q.jsx)("button",{type:"button","aria-label":"close",className:"delete","data-cy":"modal-close",onClick:function(){return t(u())}})]}),Object(q.jsxs)("div",{className:"modal-card-body",children:[Object(q.jsx)("p",{className:"block","data-cy":"modal-title",children:e.title}),Object(q.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!e.completed&&Object(q.jsx)("strong",{className:"has-text-danger",children:"Planned"}),e.completed&&Object(q.jsx)("strong",{className:"has-text-success",children:"Done"})," by ",Object(q.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]})]})},B=function(){var e=C((function(e){return e.currentTodo}));return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{className:"section",children:Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"box",children:[Object(q.jsx)("h1",{className:"title",children:"Todos:"}),Object(q.jsx)("div",{className:"block",children:Object(q.jsx)(A,{})}),Object(q.jsx)("div",{className:"block",children:Object(q.jsx)(L,{})})]})})}),e&&Object(q.jsx)(M,{})]})},I=(c(29),function(){return Object(q.jsx)(s.a,{store:N,children:Object(q.jsx)(r.a,{children:Object(q.jsx)(B,{})})})});n.a.render(Object(q.jsx)(I,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.34b8a428.chunk.js.map