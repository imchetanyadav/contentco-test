webpackJsonp([35783957827783],{82:function(e,t){"use strict";function r(e,t,f){if("string"!=typeof t){if(s){var p=u(t);p&&p!==s&&r(e,p,f)}var d=l(t);c&&(d=d.concat(c(t)));for(var m=0;m<d.length;++m){var y=d[m];if(!(n[y]||a[y]||f&&f[y])){var g=i(t,y);try{o(e,y,g)}catch(e){}}}return e}return e}var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,l=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,s=u&&u(Object);e.exports=r},136:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var c=r(1),i=n(c),u=r(117),s=n(u),f=function(e){function t(){var r,n,l;a(this,t);for(var c=arguments.length,i=Array(c),u=0;u<c;u++)i[u]=arguments[u];return r=n=o(this,e.call.apply(e,[this].concat(i))),n.state={category:""},n.handleCategoryChange=function(e){n.setState({category:e.target.value})},l=r,o(n,l)}return l(t,e),t.prototype.render=function(){var e=this,t=this.props.data.allPosts.edges;return i.default.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.default.createElement("div",{style:{maxWidth:"800px"}},i.default.createElement("h1",null,"Article List"),i.default.createElement("select",{style:{marginBottom:"1.5rem"},onChange:this.handleCategoryChange},i.default.createElement("option",{value:"branded-content"},"Branded Content"),i.default.createElement("option",{value:"news"},"News"),i.default.createElement("option",{value:"e-commerce-social-commerce"},"E-Commerce Social-Commerce"),i.default.createElement("option",{value:"brief"},"Brief"),i.default.createElement("option",{value:"acquisitions"},"Acquisitions")),t.filter(function(t){var r=t.node;return r.category.includes(e.state.category)}).map(function(e){var t=e.node;return i.default.createElement("div",{key:t.id,style:{display:"flex",marginBottom:"2rem"}},i.default.createElement("div",null,i.default.createElement("img",{src:t.featured_image,style:{maxWidth:"250px"}})),i.default.createElement("div",{style:{paddingLeft:"2rem"}},i.default.createElement(s.default,{to:"/"+t.slug,style:{textDecoration:"none",color:"#000"}},i.default.createElement("h2",null,t.title)),i.default.createElement("p",null,t.category),i.default.createElement("p",null,t.excerpt)))})))},t}(i.default.Component);t.default=f;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-ee2a9dc23066860b20b7.js.map