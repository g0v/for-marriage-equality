(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){"use strict";a.r(t);var n,r,i=a(1),s=a.n(i),l=a(27),c=a.n(l),o=(a(71),a(73),a(75),a(77),a(3)),u=a(6),h=a(5),p=a(2),m=a(7);a(79);function d(e){switch(e){case r.taipeiKeelung:return"\u5317\u5317\u57fa";case r.taoyuanHsinchuMiaoli:return"\u6843\u7af9\u82d7";case r.taichungChanghuaNantou:return"\u4e2d\u5f70\u6295";case r.yunlinChiayiTainan:return"\u96f2\u5609\u5357";case r.kaohsiungPingtung:return"\u9ad8\u5c4f";case r.yilanHualienTaitung:return"\u5b9c\u82b1\u6771";case r.outlyingIslands:return"\u96e2\u5cf6\u5916\u6d77";default:return"\u7121"}}!function(e){e[e.spreadFlyers=0]="spreadFlyers",e[e.dialogue=1]="dialogue",e[e.labor=2]="labor",e[e.streetRoaming=3]="streetRoaming",e[e.stall=4]="stall",e[e.none=5]="none"}(n||(n={})),function(e){e[e.taipeiKeelung=1]="taipeiKeelung",e[e.taoyuanHsinchuMiaoli=2]="taoyuanHsinchuMiaoli",e[e.taichungChanghuaNantou=3]="taichungChanghuaNantou",e[e.yunlinChiayiTainan=4]="yunlinChiayiTainan",e[e.kaohsiungPingtung=5]="kaohsiungPingtung",e[e.yilanHualienTaitung=6]="yilanHualienTaitung",e[e.outlyingIslands=7]="outlyingIslands",e[e.none=8]="none"}(r||(r={}));var g=function(){function e(t){Object(o.a)(this,e),this.notes=t["\u5099\u8a3b"]?t["\u5099\u8a3b"]:"",this.area=function(e){if(null===e)return r.none;switch(e){case"\u5317\u5317\u57fa":return r.taipeiKeelung;case"\u6843\u7af9\u82d7":return r.taoyuanHsinchuMiaoli;case"\u4e2d\u5f70\u6295":return r.taichungChanghuaNantou;case"\u96f2\u5609\u5357":return r.yunlinChiayiTainan;case"\u9ad8\u5c4f":return r.kaohsiungPingtung;case"\u5b9c\u82b1\u6771":return r.yilanHualienTaitung;case"\u96e2\u5cf6\u5916\u6d77":return r.outlyingIslands;default:return r.none}}(t["\u5340\u57df"]),this.date=t["\u958b\u5718\u65e5\u671f"],this.name=t["\u5718\u9577\u540d\u7a31"],this.contactInfo=t["\u5718\u9577\u806f\u7d61\u65b9\u5f0f"],this.volunteersNeeded=t["\u5e0c\u671b\u5fd7\u5de5\u4eba\u6578"],this.startTime=t["\u958b\u59cb\u6642\u9593"],this.endTime=t["\u7d50\u675f\u6642\u9593"],this.types=function(e){var t=Array();return null===e?t.push(n.none):(-1!=e.indexOf("\u767c\u6587\u5ba3")&&t.push(n.spreadFlyers),-1!=e.indexOf("\u5c0d\u8a71\uff08")&&t.push(n.dialogue),-1!=e.indexOf("\u4ee3\u5de5")&&t.push(n.labor),-1!=e.indexOf("\u6383\u8857")&&t.push(n.streetRoaming),-1!=e.indexOf("\u64fa\u6524")&&t.push(n.stall)),t}(t["\u958b\u5718\u5f62\u5f0f"]),this.location=t["\u5730\u9ede"],this.flyers=t["\u9810\u8a08\u767c\u51fa\u6587\u5ba3\u4efd\u6578"],this.line=t.Line?t.Line:"",this.phone=t["\u96fb\u8a71"]?t["\u96fb\u8a71"]:"",this.lat=t["\u7d93\u7def\u5ea6"].split(", ")[0],this.lng=t["\u7d93\u7def\u5ea6"].split(", ")[1]}return Object(p.a)(e,[{key:"getType",value:function(e){switch(e){case n.spreadFlyers:return"\u767c\u6587\u5ba3";case n.dialogue:return"\u5c0d\u8a71";case n.labor:return"\u4ee3\u5de5";case n.streetRoaming:return"\u6383\u8857";case n.stall:return"\u64fa\u6524";default:return"\u7121"}}},{key:"getTypes",value:function(){for(var e="",t=0;t<this.types.length;t++)e+=this.getType(this.types[t]);return e}},{key:"containsQuery",value:function(e){return-1!=this.forQuery().indexOf(e)}},{key:"forQuery",value:function(){return JSON.stringify(this)+d(this.area)+this.getTypes()}}]),e}(),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.text,t="label";switch(e){case"\u767c\u6587\u5ba3":t+=" label--neutral";break;case"\u5c0d\u8a71":t+=" label--prominent";break;case"\u4ee3\u5de5":t+=" label--muted";break;case"\u6383\u8857":t+=" label--chill";break;case"\u64fa\u6524":t+=" label--warm";break;default:t+=" label--distance"}return s.a.createElement("div",{className:t},e)}}]),t}(i.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.k,a=e.v;return s.a.createElement("div",{className:"stat"},s.a.createElement("label",{className:"stat__label"},t),s.a.createElement("span",{className:"stat__figure"},a))}}]),t}(i.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.text;return s.a.createElement("p",{className:"gallery__item__text-block grow"+(this.props.italic?" italic":"")},e)}}]),t}(i.Component),v=a(60),O=a.n(v),E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t,a=this.props,n=a.type,r=a.contact,i="btn",l="";switch(n){case"line":i+=" btn--line",e="line://ti/p/@".concat(r),l="".concat(r),t="Line";break;case"phone":i+=" btn--phone",t="\u6253\u96fb\u8a71",l="".concat(r),e="tel://".concat(r);break;case"location":i+=" btn--primary",t="\u5927\u7565\u4f4d\u7f6e",l="Google \u5730\u5716",e="https://www.google.com/maps/search/?api=1&query=".concat(r)}return"line"==n?s.a.createElement(O.a,{text:"@".concat(r),onCopy:function(){return alert("\u5df2\u5c07 LineID @".concat(r," \u8907\u88fd\u3002"))}},s.a.createElement("button",{className:i,title:l},t)):s.a.createElement("a",{className:i,title:l,href:e,rel:"noopener noreferrer",target:"_blank"},t)}}]),t}(i.Component),k=a(21),j=a.n(k),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.shift,a=(e.distance,[]),r=0;r<t.types.length;r++)a.push(s.a.createElement(b,{key:r,text:t.getType(t.types[r])}));return s.a.createElement("div",{className:"gallery__item"},(t.types.length>0&&t.types[0]!==n.none||9999!=t.distance)&&s.a.createElement("div",{className:"gallery__item__labels-container"},a,t.distance&&9999!=t.distance&&s.a.createElement(b,{key:-1,text:"\u7d04\u8ddd ".concat(t.distance.toFixed(2)," \u516c\u91cc")})),s.a.createElement("h2",{className:"gallery__item__header"},t.location),s.a.createElement("h3",{className:"gallery__item__subheader"},"".concat(t.date," ").concat(t.startTime," ~ ").concat(t.endTime)),s.a.createElement("div",{className:"gallery__item__stats-container"+(t.notes?"":" grow")},null!==t.volunteersNeeded&&s.a.createElement(y,{k:"\u5e0c\u671b\u5fd7\u5de5\u4eba\u6578",v:"".concat(t.volunteersNeeded)}),null!==t.flyers&&s.a.createElement(y,{k:"\u9810\u8a08\u767c\u51fa\u6587\u5ba3\u4efd\u6578",v:"".concat(t.flyers)})),t.notes&&s.a.createElement(f,{text:t.notes}),s.a.createElement("div",{className:"gallery__item__contact-container"},t.name&&s.a.createElement(y,{k:"\u5718\u9577",v:t.name}),t.contactInfo&&s.a.createElement(y,{k:"\u806f\u7d61\u65b9\u5f0f",v:t.contactInfo}),s.a.createElement("div",{className:"gallery__item__contact-container__actions-container"},""!==t.line&&s.a.createElement(E,{contact:t.line,type:"line"}),""!==t.phone&&s.a.createElement(E,{contact:t.phone,type:"phone"}),t.lat&&t.lng&&s.a.createElement(E,{contact:"".concat(t.lat,",").concat(t.lng),type:"location"}))))}}]),t}(i.Component),_=a(8),C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.shifts,a=e.lat,n=e.lng;return s.a.createElement("div",{className:"gallery container"},t.map(function(e,t){var r=void 0;if(e.lat&&e.lng&&a&&n){var i=Object(_.point)([a,n]),l=Object(_.point)([e.lat,e.lng]);r=j()(i,l,{units:"kilometres"})}return s.a.createElement(N,{key:t,shift:e,distance:r})}))}}]),t}(i.Component);function w(e){return s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},s.a.createElement("div",{className:"container"},s.a.createElement("a",{className:"navbar-brand",href:"#"},"\u5169\u597d\u4e09\u58de\uff0c\u5168\u53f0\u958b\u5718\u8cc7\u8a0a\uff0811\u670816\u65e5\u66f4\u65b0\uff09"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("a",{className:"nav-link",href:"#"},"\u958b\u5718\u8cc7\u8a0a ",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"http://equallove.tw"},"\u95dc\u65bc\u5a5a\u59fb\u5e73\u6b0a\u5927\u5e73\u53f0"))))))}var T,x=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("select",{onChange:this.props.onChange,value:this.props.title,className:"custom-select"},s.a.createElement("option",{disabled:!0},this.props.defaultTitle),this.props.options.map(function(e,t){return s.a.createElement("option",{className:"dropdown-item",key:t+1},e)}))}}]),t}(i.Component);!function(e){e[e.primary=0]="primary",e[e.secondary=1]="secondary"}(T||(T={}));var L=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.buttonText,a="btn";switch(e.type){case T.primary:a+=" btn--primary";break;case T.secondary:a+=" btn--secondary"}return s.a.createElement("button",{className:a,onClick:this.props.onClick},t)}}]),t}(i.Component),I=a(61),D=a.n(I),Q=a(65),S=a(4),H=a.n(S);var F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={area:"\u5340\u57df",query:"",shifts:e.shifts,date:null,lat:void 0,lng:void 0,orderByDistance:!1,loadingLocation:!1},console.log(e.shifts[0].forQuery()),a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"handleAreaChange",value:function(e){var t=e.target.value;this.setState({area:t})}},{key:"handleQueryUpdate",value:function(e){this.setState({query:e.target.value})}},{key:"handleDateUpdate",value:function(e){this.setState({date:e})}},{key:"isOnThisDate",value:function(e){if(null===this.state.date)return!0;H.a.locale("zh-tw");var t=H()(e.date.substring(0,e.date.length-3),"MM/DD");return!!this.state.date.isSame(t,"day")}},{key:"handleLocationRequest",value:function(e){this.setState({loadingLocation:!0}),navigator.geolocation?navigator.geolocation.getCurrentPosition(this.applyCurrentLocation.bind(this)):(alert("\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u5b9a\u4f4d\u641c\u5c0b"),this.setState({loadingLocation:!1}))}},{key:"applyCurrentLocation",value:function(e){this.state.shifts.sort(function(t,a){console.log(t),console.log(a);var n=Object(_.point)([e.coords.latitude,e.coords.longitude]);if(t.lat&&t.lng){var r=Object(_.point)([t.lat,t.lng]);t.distance=j()(n,r)}else t.distance=9999;if(a.lat&&a.lng){var i=Object(_.point)([a.lat,a.lng]);a.distance=j()(n,i)}else a.distance=9999;return t.distance-a.distance}),console.log(this.state),this.setState({orderByDistance:!0,loadingLocation:!1})}}]),Object(p.a)(t,[{key:"areaFilter",value:function(e){return"\u7121"===this.state.area||"\u5340\u57df"===this.state.area||e.containsQuery(this.state.area)}},{key:"render",value:function(){var e=this,t=this.state.shifts.filter(function(t){return t.containsQuery(e.state.query)}).filter(this.areaFilter.bind(this)).filter(this.isOnThisDate.bind(this));return s.a.createElement("div",{className:"App"},s.a.createElement(D.a,{width:"1137px"}),s.a.createElement(w,null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row filter-form"},s.a.createElement(L,{buttonText:this.state.loadingLocation?"\u5b9a\u4f4d\u4e2d...":"\u5b9a\u4f4d\u5c0b\u627e\u9644\u8fd1\u958b\u5718",type:T.primary,onClick:this.handleLocationRequest.bind(this)}),s.a.createElement(Q.a,{selected:this.state.date,onChange:this.handleDateUpdate.bind(this),className:"filter-form__date-picker",minDate:H()(),maxDate:H()("2018-11-24"),showDisabledMonthNavigation:!0,placeholderText:"\u9078\u64c7\u65e5\u671f"}),s.a.createElement(x,{defaultValue:"\u5340\u57df",defaultTitle:"\u5340\u57df",options:function(){var e=[];for(var t in r)Number(t)&&e.push(Number(t));return e.map(d)}(),onChange:this.handleAreaChange.bind(this),title:this.state.area}),s.a.createElement("div",{className:"search"},s.a.createElement("input",{type:"search",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"\u641c\u5c0b",value:this.state.query,onChange:this.handleQueryUpdate.bind(this)})))),s.a.createElement(C,{shifts:t,lat:this.state.lat,lng:this.state.lng}),s.a.createElement("footer",{className:"footer"},"\u8cc7\u6599\u4f86\u6e90\uff1a",s.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://docs.google.com/spreadsheets/d/131ImXHRXARx8j8t9esNCJhrLUfZQG347L1k3GsJ1m1Q/edit#gid=0"},"\u5169\u597d\u4e09\u58de\uff0c\u5168\u53f0\u958b\u5718\u8cc7\u8a0a")))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(64);a.n(q).a.labeledCols("1Fc0BbQW6GWIlOtK5woKI-6zCjQ_V874KUzo8gcFUdnY").then(function(e){var t=e.data.map(function(e){return new g(e)});console.log("Created these shifts.",t),c.a.render(s.a.createElement(F,{shifts:t}),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a(131)},75:function(e,t,a){},79:function(e,t,a){}},[[66,2,1]]]);
//# sourceMappingURL=main.4b8ffdb5.chunk.js.map