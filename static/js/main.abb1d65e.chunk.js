(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(1),s=a(2),i=a(4),d=a(3),m=a(5),h=a(8),u=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement("input",{onChange:this.props.handleCheckChildElement,type:"checkbox",checked:this.props.isChecked,value:this.props.value})," ",this.props.value)}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleCheckChildElement=function(e){var t=a.state.numbers;t.forEach(function(t){t.value===Number(e.target.value)&&(t.isChecked=e.target.checked)}),a.setState({numbers:t,allChecked:0===t.filter(function(e){return!e.isChecked}).length}),a.props.selectionChanged(t.filter(function(e){return e.isChecked}).map(function(e){return e.value}))},a.handleCheckAll=function(){var e=a.state.numbers,t=!a.state.allChecked;e.forEach(function(e){e.isChecked=t}),a.setState({numbers:e,allChecked:t}),a.props.selectionChanged(e.filter(function(e){return e.isChecked}).map(function(e){return e.value}))},a.state={numbers:Object(h.a)(Array(11).keys()).map(function(e){return{key:e.toString(),value:e+2,isChecked:!1}}),allChecked:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},r.a.createElement(u,{handleCheckChildElement:this.handleCheckAll,isChecked:this.state.allChecked,value:"All",key:"all"}),this.state.numbers.map(function(t){return r.a.createElement(u,Object.assign({handleCheckChildElement:e.handleCheckChildElement},t))}))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).onOrderChanged=function(e){a.setState({order:e.currentTarget.value}),a.props.selectionChanged({order:e.currentTarget.value})},a.state={order:"ordered"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Order"),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"order",value:"ordered",checked:"ordered"===this.state.order,onChange:this.onOrderChanged}),r.a.createElement("label",{className:"form-check-label"},"Ordered")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"order",value:"random",checked:"random"===this.state.order,onChange:this.onOrderChanged}),r.a.createElement("label",{className:"form-check-label"},"Random"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"button",className:"btn btn-primary printButton",onClick:function(){return window.print()}},"Print")))}}]),t}(n.Component);a(15);var f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"problem"},this.props.a," x ",this.props.b," = ")}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).setASelection=function(e){a.setState({aSelection:e}),a.props.optionsChanged({aSelection:e,bSelection:a.state.bSelection,order:a.state.order})},a.setBSelection=function(e){a.setState({bSelection:e}),a.props.optionsChanged({aSelection:a.state.aSelection,bSelection:e,order:a.state.order})},a.setOptions=function(e){a.setState({order:e.order}),a.props.optionsChanged({aSelection:a.state.aSelection,bSelection:a.state.bSelection,order:e.order})},a.state={aSelection:[],bSelection:[],order:"ordered"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"options card-deck mb-3 text-center"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},"Left numbers")),r.a.createElement("div",{className:"card-body"},r.a.createElement(p,{selectionChanged:this.setASelection}))),r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},"Right numbers")),r.a.createElement("div",{className:"card-body"},r.a.createElement(p,{selectionChanged:this.setBSelection}))),r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},"Options")),r.a.createElement("div",{className:"card-body"},r.a.createElement(b,{selectionChanged:this.setOptions}))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).optionsChanged=function(e){console.log(e);var t=[],n=0;e.aSelection.forEach(function(a){e.bSelection.forEach(function(e){t.push({a:a,b:e,n:n++})})}),"random"===e.order&&function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(t),a.setState({problems:t})},a.state={problems:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},r.a.createElement("h1",{className:"display-4"},"Times Tables"),r.a.createElement("p",{className:"instructions"},"Select the numbers you would like to appear on the left side of the problems and those you would like the appear on the right."),r.a.createElement("p",{className:"instructions"},"Choose if you would like the problems listed in order or random, then click print.")),r.a.createElement(E,{optionsChanged:this.optionsChanged}),r.a.createElement("div",{className:"problems"},this.state.problems.map(function(e){return r.a.createElement(f,{a:e.a,b:e.b,key:e.n})})))}}]),t}(n.Component);o.a.render(r.a.createElement(C,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.abb1d65e.chunk.js.map