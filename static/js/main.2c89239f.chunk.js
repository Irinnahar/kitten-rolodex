(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=(n(14),n(4)),l=n(5),i=n(7),u=n(6),h=n(8),d=(n(15),function(e){var t=e.user,n=t.name,a=t.email,o=t.id;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://www.robohash.org/".concat(o,"/?set=set4&size=180x180"),alt:n}),r.a.createElement("h3",null,n," "),r.a.createElement("p",null,a))}),m=n(1),p=n.n(m),f=(n(18),function(e){return r.a.createElement("div",{className:"card-list"},e.users.map((function(e){return r.a.createElement(d,{key:e.id,user:e})})))});f.prototype={user:p.a.object};var v=f,w=(n(19),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n}))});w.prototype={placeholder:p.a.string,handleChange:p.a.func};var E=w,g=(n(20),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],searchField:""},n.filteredUser=n.state.users,n.eventHandler=function(e){n.setState({searchField:e.target.value})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({users:t})}))}},{key:"render",value:function(){var e=this,t=this.state.users.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Kitten Rolodex"),r.a.createElement(E,{placeholder:"Search User",handleChange:this.eventHandler}),r.a.createElement(v,{users:t}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2c89239f.chunk.js.map