(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),s=a(6),i=a(1),o=a(2),d=a(4),m=a(3),u=a(5),p=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("li",null,c.a.createElement("input",{onChange:this.props.handleCheckChildElement,type:"checkbox",checked:this.props.isChecked,value:this.props.value})," ",this.props.value)}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleCheckChildElement=function(e){var t=a.state.numbers;t.forEach(function(t){t.value===Number(e.target.value)&&(t.isChecked=e.target.checked)}),a.setState({numbers:t,allChecked:0===t.filter(function(e){return!e.isChecked}).length}),a.props.selectionChanged(t.filter(function(e){return e.isChecked}).map(function(e){return e.value}))},a.handleCheckAll=function(){var e=a.state.numbers,t=!a.state.allChecked;e.forEach(function(e){e.isChecked=t}),a.setState({numbers:e,allChecked:t}),a.props.selectionChanged(e.filter(function(e){return e.isChecked}).map(function(e){return e.value}))},a.state={numbers:Object(s.a)(Array(11).keys()).map(function(e){return{key:e.toString(),value:e+2,isChecked:!1}}),allChecked:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},c.a.createElement(p,{handleCheckChildElement:this.handleCheckAll,isChecked:this.state.allChecked,value:"All",key:"all"}),this.state.numbers.map(function(t){return c.a.createElement(p,Object.assign({handleCheckChildElement:e.handleCheckChildElement},t))}))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).onOrderChanged=function(e){a.setState({order:e.currentTarget.value}),a.props.selectionChanged({order:e.currentTarget.value,excludeDuplicates:a.state.excludeDuplicates,type:a.state.type})},a.onOptionChanged=function(e){a.setState({excludeDuplicates:e.currentTarget.checked}),a.props.selectionChanged({order:a.state.order,excludeDuplicates:e.currentTarget.checked,type:a.state.type})},a.onTypeChanged=function(e){a.setState({type:e.currentTarget.value}),a.props.selectionChanged({order:a.state.order,excludeDuplicates:a.state.excludeDuplicates,type:e.currentTarget.value})},a.state={order:"ordered",excludeDuplicates:!1,type:"multiplication"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Order"),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"order",value:"ordered",checked:"ordered"===this.state.order,onChange:this.onOrderChanged}),c.a.createElement("label",{className:"form-check-label"},"Ordered")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"order",value:"random",checked:"random"===this.state.order,onChange:this.onOrderChanged}),c.a.createElement("label",{className:"form-check-label"},"Random")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{onChange:this.onOptionChanged,type:"checkbox",checked:this.state.excludeDuplicates}),c.a.createElement("label",{className:"form-check-label"},"Exclude duplicates"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"type",value:"multiplication",checked:"multiplication"===this.state.type,onChange:this.onTypeChanged}),c.a.createElement("label",{className:"form-check-label"},"Multiplication")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"type",value:"division",checked:"division"===this.state.type,onChange:this.onTypeChanged}),c.a.createElement("label",{className:"form-check-label"},"Division")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"type",value:"mixed",checked:"mixed"===this.state.type,onChange:this.onTypeChanged}),c.a.createElement("label",{className:"form-check-label"},"Mixed"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{type:"button",className:"btn btn-primary printButton",onClick:function(){return window.print()}},"Print")))}}]),t}(n.Component);a(14);var f=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return"m"===this.props.type?c.a.createElement("div",{className:"problem"},this.props.a," x ",this.props.b," = "):c.a.createElement("div",{className:"problem"},this.props.a*this.props.b," / ",this.props.a," = ")}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).setASelection=function(e){a.setState({aSelection:e}),a.props.optionsChanged({aSelection:e,bSelection:a.state.bSelection,order:a.state.order,excludeDuplicates:a.state.excludeDuplicates,type:a.state.type})},a.setBSelection=function(e){a.setState({bSelection:e}),a.props.optionsChanged({aSelection:a.state.aSelection,bSelection:e,order:a.state.order,excludeDuplicates:a.state.excludeDuplicates,type:a.state.type})},a.setOptions=function(e){a.setState({order:e.order,excludeDuplicates:e.excludeDuplicates,type:e.type}),a.props.optionsChanged({aSelection:a.state.aSelection,bSelection:a.state.bSelection,order:e.order,excludeDuplicates:e.excludeDuplicates,type:e.type})},a.state={aSelection:[],bSelection:[],order:"ordered",type:"multiplication"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"options card-deck mb-3 text-center"},c.a.createElement("div",{className:"card mb-4 shadow-sm"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",{className:"my-0 font-weight-normal"},"Left numbers")),c.a.createElement("div",{className:"card-body"},c.a.createElement(h,{selectionChanged:this.setASelection}))),c.a.createElement("div",{className:"card mb-4 shadow-sm"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",{className:"my-0 font-weight-normal"},"Right numbers")),c.a.createElement("div",{className:"card-body"},c.a.createElement(h,{selectionChanged:this.setBSelection}))),c.a.createElement("div",{className:"card mb-4 shadow-sm"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",{className:"my-0 font-weight-normal"},"Options")),c.a.createElement("div",{className:"card-body"},c.a.createElement(b,{selectionChanged:this.setOptions}))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).optionsChanged=function(e){console.log(e);var t=[],n=0;"multiplication"!==e.type&&"mixed"!==e.type||(e.aSelection.forEach(function(a){e.bSelection.forEach(function(e){t.push({a:a,b:e,n:n++,type:"m"})})}),e.excludeDuplicates&&(t=t.reduce(function(e,t){return e.find(function(e){return e.a===t.a&&e.b===t.b||e.b===t.a&&e.a===t.b})?Object(s.a)(e):[].concat(Object(s.a)(e),[t])},[]))),"division"!==e.type&&"mixed"!==e.type||e.aSelection.forEach(function(a){e.bSelection.forEach(function(e){t.push({a:a,b:e,n:n++,type:"d"})})}),"random"===e.order&&function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(t),a.setState({problems:t})},a.state={problems:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App container"},c.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},c.a.createElement("h1",{className:"display-4"},"Times Tables"),c.a.createElement("p",{className:"instructions"},"Select the numbers you would like to appear on the left side of the problems and those you would like the appear on the right."),c.a.createElement("p",{className:"instructions"},"Choose if you would like the problems listed in order or random, then click print.")),c.a.createElement(y,{optionsChanged:this.optionsChanged}),c.a.createElement("div",{className:"problems"},this.state.problems.map(function(e){return c.a.createElement(f,{a:e.a,b:e.b,key:e.n,type:e.type})})))}}]),t}(n.Component);l.a.render(c.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.ca0a1cba.chunk.js.map