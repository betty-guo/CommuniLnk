(this.webpackJsonpsummation=this.webpackJsonpsummation||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(10),o=n.n(l),r=(n(16),n(2)),s=n(3),c=n(4),m=n(5),h=n(7),u=n(6),d=n(1),p=n(8);n(17),n(18);var y=function(e){return console.log(e),i.a.createElement("div",{className:"Results"},i.a.createElement("header",{className:"Results-header"},i.a.createElement("div",{className:"col-md-6"},e.response.map((function(e){return i.a.createElement("h1",{key:e._id},e.name)})))))},f=function(e){return i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{className:"form-control",id:e.name,name:e.name,type:e.inputType,value:e.value,onChange:e.handleChange,placeholder:e.placeholder}))},v=function(e){return i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{id:e.name,name:e.name,value:e.value,onChange:e.handleChange,className:"form-control"},i.a.createElement("option",{value:"",disabled:!0},e.placeholder),e.options.map((function(e){return i.a.createElement("option",{key:e,value:e,label:e},e)}))))},C=function(e){return console.log(e.style),i.a.createElement("button",{style:e.style,className:(e.type,"btn btn-primary"),onClick:e.action},e.title)},b=(a.Component,{margin:"10px 10px 10px 10px"}),g=(n(19),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={newCharity:{name:"",mission:"",needs:""},missionOptions:["Sustainability","Community","Health","Financial Security"],needsOptions:["Food","Clothing","People","Money","Other"],response:[]},n.handleFullName=n.handleFullName.bind(Object(d.a)(n)),n.handleFormSubmit=n.handleFormSubmit.bind(Object(d.a)(n)),n.handleClearForm=n.handleClearForm.bind(Object(d.a)(n)),n.handleInput=n.handleInput.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleFullName",value:function(e){var t=this,n=e.target.value;this.setState((function(e){return{newCharity:Object(s.a)({},e.newCharity,{name:n})}}),(function(){return console.log(t.state.newCharity)}))}},{key:"handleInput",value:function(e){var t=this,n=e.target.value,a=e.target.name;this.setState((function(e){return{newCharity:Object(s.a)({},e.newCharity,Object(r.a)({},a,n))}}),(function(){return console.log(t.state.newCharity)}))}},{key:"handleFormSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state.newCharity;console.log(n),fetch("https://ellehacks-2020-dd.appspot.com/charity/add",{method:"POST",body:JSON.stringify(n),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){t.setState({response:e})}))}))}},{key:"handleClearForm",value:function(e){e.preventDefault(),this.setState({newCharity:{name:"",mission:"",needs:""}})}},{key:"render",value:function(){return this.state.response.length>0?i.a.createElement(y,{response:this.state.response}):i.a.createElement("form",{className:"container-fluid",onSubmit:this.handleFormSubmit},i.a.createElement(f,{inputType:"text",title:"Charity Name",name:"name",value:this.state.newCharity.name,placeholder:"Enter Charity name",handleChange:this.handleInput})," ",i.a.createElement(v,{name:"mission",options:this.state.missionOptions,value:this.state.newCharity.mission,placeholder:"My mission is",handleChange:this.handleInput})," ",i.a.createElement(v,{name:"needs",options:this.state.needsOptions,value:this.state.newCharity.needs,placeholder:"I can needs",handleChange:this.handleInput})," ",i.a.createElement(C,{action:this.handleFormSubmit,type:"primary",title:"Submit",style:E})," ",i.a.createElement(C,{action:this.handleClearForm,type:"secondary",title:"Clear",style:E})," ")}}]),t}(a.Component)),E={margin:"10px 10px 10px 10px"},w=g;n(20);var O=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("h1",null," Charity "),i.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.dd5e5514.chunk.js.map