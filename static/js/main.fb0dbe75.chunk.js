(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(37)},31:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(22),r=n.n(l),c=n(12),i=(n(31),n(32),n(15)),s=n(25),d=n(6),u=n(7),m=n(9),h=n(8),p=n(10),f=n(5),g=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",error:""},n.handleSubmit=function(e){var t=n.props.addNewTodo,a=n.state.error;e.preventDefault(),n.setState(function(e){return e.title&&" "!==e.title||(a="Todo is required"),a||(t({title:e.title,completed:!1,id:Date.now()}),{})}),n.setState({title:""})},n.handleChange=function(e){var t=e.target.value;n.setState({title:t.replace(/[^\w ]/,"").replace(/\s+/g," "),error:""})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.title;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.handleChange,value:e})))}}]),t}(o.a.Component),v=n(14),b=n.n(v),E=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={isEditable:!1,currentValue:n.props.todo.title},n.changeEditMode=function(){var e=n.state.currentValue;e&&" "!==e||(e=n.props.todo.title),n.setState(function(t){return{isEditable:!t.isEditable,currentValue:e}})},n.changeEditModeByKey=function(e){var t=n.state.currentValue;n.state.isEditable;return t&&" "!==t||"Enter"!==e.key?("Enter"===e.key&&n.setState({isEditable:!1}),{}):!0},n.handleChange=function(e){var t=e.target.value;t=t.replace(/[^\w ]/,"").replace(/\s+/g," "),n.setState({currentValue:t})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,n=e.onCheck,a=e.onRemove,l=this.state,r=l.isEditable,c=l.currentValue;return o.a.createElement("li",{className:b()({completed:t.completed,editing:r})},r?o.a.createElement("input",{className:"edit",value:c,autoFocus:!0,ref:this.inputRef,onChange:this.handleChange,onKeyPress:this.changeEditModeByKey,onBlur:this.changeEditMode,placeholder:"Please, enter todo"}):o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",className:"toggle",id:t.id,onChange:function(){return n(t.id)},checked:t.completed}),o.a.createElement("label",{onDoubleClick:this.changeEditMode},c),o.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return a(t.id)}})))}}]),t}(o.a.Component),y=function(e){var t=e.onCheck,n=e.todos,a=e.onRemove,l=e.onToggle;return o.a.createElement("section",{className:"main",style:{display:"block"}},o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:l}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement("ul",{className:"todo-list"},n.map(function(e){return o.a.createElement(E,{todo:e,onCheck:t,onRemove:a,key:e.id})})))},k=function(e){var t=e.selectedFilter,n=e.handleFilter;return o.a.createElement("ul",{className:"filters"},[{name:"all",text:"All"},{name:"active",text:"Active"},{name:"completed",text:"Completed"}].map(function(e){return o.a.createElement("li",{key:e.name},o.a.createElement(c.b,{to:"/".concat("all"===e.name?"":e.name),className:b()({selected:t===e.name}),name:e.name,onClick:n},e.text))}))},C=function(e){var t=e.todos,n=e.selectedFilter,a=e.handleFilter,l=e.handleRemoveCompleted,r=t.filter(function(e){return!e.completed}).length,c=t.filter(function(e){return e.completed}).length;return o.a.createElement("footer",{className:"footer",style:{display:"block"}},o.a.createElement("span",{className:"todo-count"},"".concat(r," items left")),o.a.createElement(k,{selectedFilter:n,handleFilter:a}),c>0?o.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:l},"Clear completed"):null)},N=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[],selectedFilter:"all"},n.addNewTodo=function(e){n.setState(function(t){return{todos:[].concat(Object(s.a)(t.todos),[e])}})},n.handleToggle=function(e){n.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e?Object(i.a)({},t,{completed:!t.completed}):t})}})},n.handleToggleAll=function(){n.setState(function(e){return e.todos.every(function(e){return e.completed})?{todos:e.todos.map(function(e){return Object(i.a)({},e,{completed:!e.completed})})}:{todos:e.todos.map(function(e){return Object(i.a)({},e,{completed:!0})})}})},n.handleFilter=function(e){var t=e.target.name;n.setState({selectedFilter:t})},n.filterTodos=function(e){var t=n.state.todos;return"active"===e?t.filter(function(e){return!1===e.completed}):"completed"===e?t.filter(function(e){return!0===e.completed}):t},n.handleRemove=function(e){n.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},n.handleRemoveCompleted=function(){n.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("todos")&&this.setState({todos:JSON.parse(localStorage.getItem("todos"))})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var e=this.state.selectedFilter,t=this.filterTodos(e);return o.a.createElement(f.a,{path:"/:selectedFilter?",exact:!0},o.a.createElement("section",{className:"todoapp"},o.a.createElement(g,{addNewTodo:this.addNewTodo}),o.a.createElement(y,{onCheck:this.handleToggle,onRemove:this.handleRemove,todos:t,onToggle:this.handleToggleAll}),t.length>0||"all"!==e?o.a.createElement(C,{todos:t,selectedFilter:e,handleFilter:this.handleFilter,handleRemoveCompleted:this.handleRemoveCompleted}):null))}}]),t}(o.a.Component);r.a.render(o.a.createElement(c.a,null,o.a.createElement(N,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.fb0dbe75.chunk.js.map