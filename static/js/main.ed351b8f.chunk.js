(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),s=a(3),r=a.n(s),o=(a(13),a(6)),i=a(4),l=a(5),d=a(8),u=a(7),j=a(0),b=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).getInputData=function(e){t.setState({formInput:e.target.value})},t.storeData=function(){t.setState({storeInputData:[].concat(Object(o.a)(t.state.storeInputData),[t.state.formInput])})},t.deleteStoreData=function(e){var a=t.state.storeInputData;1==window.confirm("Are you sure ?")&&(a.splice(Number(e.target.id),1),t.setState({storeInputData:a}))},t.state={formInput:"",storeInputData:[]},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-5 col-md-10",children:Object(j.jsx)("div",{className:"card mt-3",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Add data..",onKeyUp:function(e){t.getInputData(e)}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.storeData,children:"Add data"})]})})})}),Object(j.jsx)("div",{className:"col-lg-5 col-md-10",children:Object(j.jsx)("div",{className:"card mt-3",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("ul",{className:"list-group",children:this.state.storeInputData.map((function(e,a){return Object(j.jsxs)("li",{className:"list-group-item",children:[e,Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(e){t.deleteStoreData(e)},children:Object(j.jsx)("i",{className:"fa fa-trash-o"})})]},a)}))})})})})]})}}]),a}(n.Component),m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),s(t),r(t)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.ed351b8f.chunk.js.map