(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,o){e.exports=o(18)},,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(7),c=o.n(r),l=(o(14),o(1)),s=o(2),i=o(4),u=o(3),h=o(5),m=(o(15),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"nav-bar"},a.a.createElement("button",{onClick:this.props.addRow},"Add Row"),a.a.createElement("button",{onClick:this.props.addColumn},"Add Column"),a.a.createElement("button",{onClick:this.props.removeRow}," Remove Row"),a.a.createElement("button",{onClick:this.props.removeCol}," Remove Column"),a.a.createElement("select",{defaultValue:"whitesmoke",onChange:this.props.changeColor},a.a.createElement("option",{value:"red"},"Red"),a.a.createElement("option",{value:"blue"},"Blue"),a.a.createElement("option",{value:"black"},"Black"),a.a.createElement("option",{value:"whitesmoke"},"Whitesmoke")))}}]),t}(n.Component)),p=(o(16),function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleColor=function(){o.setState({color:o.props.changeColor()})},o.state={color:o.props.color,changeColor:o.props.changeColor()},o}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("td",{onMouseOver:this.handleColor,style:{backgroundColor:this.state.color,color:this.state.color,width:"50px",height:"50px",border:"1px solid black"}})}}]),t}(n.Component)),d=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.col;t++)e.push(a.a.createElement(p,{color:this.props.color,changeColor:this.props.changeColor}));return a.a.createElement("tr",null,e)}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.row;t++)e.push(a.a.createElement(d,{col:this.props.column,color:this.props.color,changeColor:this.props.changeColor}));return e}}]),t}(n.Component),b=(o(17),function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleAddRow=function(){var e=o.state.column;0===e&&(e=1),o.setState({row:o.state.row+1,column:e})},o.handleAddColumn=function(){var e=o.state.row;0===e&&(e=1),o.setState({column:o.state.column+1,row:e}),console.log(o.state.column)},o.handleRemoveRow=function(){0!==o.state.row&&o.setState({row:o.state.row-1})},o.handleRemoveColumn=function(){0!==o.state.column&&o.setState({column:o.state.column-1})},o.changeColor=function(e){o.setState({changeToColor:e.target.value})},o.returnColor=function(){return o.state.changeToColor},o.state={row:0,column:0,color:"whitesmoke",changeToColor:"whitesmoke"},o}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h2",null,"Pixelate"),a.a.createElement(m,{changeColor:this.changeColor,addRow:this.handleAddRow,addColumn:this.handleAddColumn,removeRow:this.handleRemoveRow,removeCol:this.handleRemoveColumn})),a.a.createElement("div",{className:"main-table"},a.a.createElement(C,{row:this.state.row,column:this.state.column,color:this.state.color,changeColor:this.returnColor})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.10311c1a.chunk.js.map