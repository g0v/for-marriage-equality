(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n,r,i=a(60),c=a.n(i),l=a(1),o=a.n(l),s=a(27),u=a.n(s),h=(a(72),a(74),a(76),a(78),a(2)),m=a(3),p=a(5),d=a(4),f=a(6),g=a(61),b=a.n(g),y=a(7),v=a.n(y),E=a(65);a(125);function O(e){switch(e){case r.taipeiKeelung:return"\u5317\u5317\u57fa";case r.taoyuanHsinchuMiaoli:return"\u6843\u7af9\u82d7";case r.taichungChanghuaNantou:return"\u4e2d\u5f70\u6295";case r.yunlinChiayiTainan:return"\u96f2\u5609\u5357";case r.kaohsiungPingtung:return"\u9ad8\u5c4f";case r.yilanHualienTaitung:return"\u5b9c\u82b1\u6771";case r.outlyingIslands:return"\u96e2\u5cf6\u5916\u6d77";default:return"\u7121"}}!function(e){e[e.spreadFlyers=0]="spreadFlyers",e[e.dialogue=1]="dialogue",e[e.labor=2]="labor",e[e.streetRoaming=3]="streetRoaming",e[e.stall=4]="stall",e[e.none=5]="none"}(n||(n={})),function(e){e[e.taipeiKeelung=1]="taipeiKeelung",e[e.taoyuanHsinchuMiaoli=2]="taoyuanHsinchuMiaoli",e[e.taichungChanghuaNantou=3]="taichungChanghuaNantou",e[e.yunlinChiayiTainan=4]="yunlinChiayiTainan",e[e.kaohsiungPingtung=5]="kaohsiungPingtung",e[e.yilanHualienTaitung=6]="yilanHualienTaitung",e[e.outlyingIslands=7]="outlyingIslands",e[e.none=8]="none"}(r||(r={}));var N,j=function(){function e(t){var a,i;if(Object(h.a)(this,e),"\u7d93\u7def\u5ea6"in t){var c=t.\u7d93\u7def\u5ea6.split(", ");if(2===c.length)!isNaN(Number(c[0]))&&!isNaN(Number(c[1]))&&(a=Number(c[0]),i=Number(c[1]))}this.notes=t.\u5099\u8a3b?t.\u5099\u8a3b:"",this.area=function(e){if(null===e)return r.none;switch(e){case"\u5317\u5317\u57fa":return r.taipeiKeelung;case"\u6843\u7af9\u82d7":return r.taoyuanHsinchuMiaoli;case"\u4e2d\u5f70\u6295":return r.taichungChanghuaNantou;case"\u96f2\u5609\u5357":return r.yunlinChiayiTainan;case"\u9ad8\u5c4f":return r.kaohsiungPingtung;case"\u5b9c\u82b1\u6771":return r.yilanHualienTaitung;case"\u96e2\u5cf6\u5916\u6d77":return r.outlyingIslands;default:return r.none}}(t.\u5340\u57df),this.date=t.\u958b\u5718\u65e5\u671f,this.name=t.\u5718\u9577\u540d\u7a31,this.contactInfo=t.\u5718\u9577\u806f\u7d61\u65b9\u5f0f,this.volunteersNeeded=t.\u5e0c\u671b\u5fd7\u5de5\u4eba\u6578,this.startTime=t.\u958b\u59cb\u6642\u9593,this.endTime=t.\u7d50\u675f\u6642\u9593,this.types=function(e){var t=Array();return null===e?t.push(n.none):(-1!==e.indexOf("\u767c\u6587\u5ba3")&&t.push(n.spreadFlyers),-1!==e.indexOf("\u5c0d\u8a71")&&t.push(n.dialogue),-1!==e.indexOf("\u4ee3\u5de5")&&t.push(n.labor),-1!==e.indexOf("\u6383\u8857")&&t.push(n.streetRoaming),-1!==e.indexOf("\u64fa\u6524")&&t.push(n.stall)),t}(t.\u958b\u5718\u5f62\u5f0f),this.location=t.\u5730\u9ede,this.flyers=t.\u9810\u8a08\u767c\u51fa\u6587\u5ba3\u4efd\u6578,this.line=t.Line?t.Line:"",this.phone=t.\u96fb\u8a71?t.\u96fb\u8a71:"",this.lat=a,this.lng=i}return Object(m.a)(e,[{key:"getType",value:function(e){switch(e){case n.spreadFlyers:return"\u767c\u6587\u5ba3";case n.dialogue:return"\u5c0d\u8a71";case n.labor:return"\u4ee3\u5de5";case n.streetRoaming:return"\u6383\u8857";case n.stall:return"\u64fa\u6524";default:return"\u7121"}}},{key:"getTypes",value:function(){var e="",t=!0,a=!1,n=void 0;try{for(var r,i=this.types[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var c=r.value;e+=this.getType(c)}}catch(l){a=!0,n=l}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}return e}},{key:"containsQuery",value:function(e){return-1!==this.forQuery().indexOf(e)}},{key:"forQuery",value:function(){return JSON.stringify(this)+O(this.area)+this.getTypes()}}]),e}();!function(e){e[e.primary=0]="primary",e[e.secondary=1]="secondary"}(N||(N={}));var k=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.buttonText,a="btn";switch(e.type){case N.primary:a+=" btn--primary";break;case N.secondary:a+=" btn--secondary"}return o.a.createElement("button",{className:a,onClick:this.props.onClick},t)}}]),t}(l.Component),C=a(23),_=a.n(C),w=a(64),T=a.n(w),x=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a=this.props,n=a.type,r=a.contact,i="btn",c="";switch(n){case"line":i+=" btn--line",e="line://ti/p/@".concat(r),c="".concat(r),t="Line";break;case"phone":i+=" btn--phone",t="\u6253\u96fb\u8a71",c="".concat(r),e="tel://".concat(r);break;case"location":i+=" btn--primary",t="\u5927\u7565\u4f4d\u7f6e",c="Google \u5730\u5716",e="https://www.google.com/maps/search/?api=1&query=".concat(r)}return"line"===n?o.a.createElement(T.a,{text:"@".concat(r),onCopy:function(){return alert("\u5df2\u5c07 LineID @".concat(r," \u8907\u88fd\u3002"))}},o.a.createElement("button",{className:i,title:c},t)):o.a.createElement("a",{className:i,title:c,href:e,rel:"noopener noreferrer",target:"_blank"},t)}}]),t}(l.Component),L=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.k,a=e.v;return o.a.createElement("div",{className:"stat"},o.a.createElement("label",{className:"stat__label"},t),o.a.createElement("span",{className:"stat__figure"},a))}}]),t}(l.Component),S=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.text,t="label";switch(e){case"\u767c\u6587\u5ba3":t+=" label--neutral";break;case"\u5c0d\u8a71":t+=" label--prominent";break;case"\u4ee3\u5de5":t+=" label--muted";break;case"\u6383\u8857":t+=" label--chill";break;case"\u64fa\u6524":t+=" label--warm";break;default:t+=" label--distance"}return o.a.createElement("div",{className:t},e)}}]),t}(l.Component),D=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.text;return o.a.createElement("p",{className:"gallery__item__text-block grow + ".concat(this.props.italic?" italic":"")},e)}}]),t}(l.Component),I=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.shift,t=[],a=!0,r=!1,i=void 0;try{for(var c,l=e.types[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var s=c.value;t.push(o.a.createElement(S,{key:s,text:e.getType(s)}))}}catch(m){r=!0,i=m}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}var u=e.types.length>0&&e.types[0]!==n.none,h=9999!==e.distance;return o.a.createElement("div",{className:"gallery__item"},(u||h)&&o.a.createElement("div",{className:"gallery__item__labels-container"},t,e.distance&&9999!==e.distance&&o.a.createElement(S,{key:-1,text:"\u7d04\u8ddd ".concat(e.distance.toFixed(2)," \u516c\u91cc")})),o.a.createElement("h2",{className:"gallery__item__header"},e.location),o.a.createElement("h3",{className:"gallery__item__subheader"},"".concat(e.date," ").concat(e.startTime," ~ ").concat(e.endTime)),o.a.createElement("div",{className:"gallery__item__stats-container ".concat(e.notes?"":" grow")},null!==e.volunteersNeeded&&o.a.createElement(L,{k:"\u5e0c\u671b\u5fd7\u5de5\u4eba\u6578",v:"".concat(e.volunteersNeeded)}),null!==e.flyers&&o.a.createElement(L,{k:"\u9810\u8a08\u767c\u51fa\u6587\u5ba3\u4efd\u6578",v:"".concat(e.flyers)})),e.notes&&o.a.createElement(D,{text:e.notes}),o.a.createElement("div",{className:"gallery__item__contact-container"},e.name&&o.a.createElement(L,{k:"\u5718\u9577",v:e.name}),e.contactInfo&&o.a.createElement(L,{k:"\u806f\u7d61\u65b9\u5f0f",v:e.contactInfo}),o.a.createElement("div",{className:"gallery__item__contact-container__actions-container"},""!==e.line&&o.a.createElement(x,{contact:e.line,type:"line"}),""!==e.phone&&o.a.createElement(x,{contact:e.phone,type:"phone"}),e.lat&&e.lng&&o.a.createElement(x,{contact:"".concat(e.lat,",").concat(e.lng),type:"location"}))))}}]),t}(l.Component),M=a(8),H=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.shifts,a=e.lat,n=e.lng;return o.a.createElement("div",{className:"gallery container"},t.map(function(e,t){var r;if(e.lat&&e.lng&&a&&n){var i=Object(M.point)([a,n]),c=Object(M.point)([e.lat,e.lng]);r=_()(i,c,{units:"kilometres"})}return o.a.createElement(I,{key:t,shift:e,distance:r})}))}}]),t}(l.Component),R=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).rootEl=o.a.createRef(),a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentDidMount",value:function(){var e=new google.maps.Map(this.rootEl.current,{center:{lat:23.877295,lng:121.030752},zoom:8});this.props.shifts.forEach(function(t){var a=t.lat,n=t.lng,r=t.date,i=t.startTime,c=t.endTime,l=t.location;if(void 0!==a&&void 0!==n){var o=new google.maps.LatLng(a,n),s=new google.maps.Marker({map:e,position:o,title:"".concat(r," ").concat(i,"-").concat(c," - ").concat(l)}),u=new google.maps.InfoWindow({content:"\n          <div>".concat(r," ").concat(i,"-").concat(c," - ").concat(l,"</div><script>alert(1)<\/script>\n        ")});s.addListener("click",function(){u.open(e,s)})}})}},{key:"render",value:function(){return o.a.createElement("div",{className:"map__root",ref:this.rootEl})}}]),t}(o.a.Component);function Q(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"navbar-brand",href:"#"},"\u5169\u597d\u4e09\u58de\uff0c\u5168\u53f0\u958b\u5718\u8cc7\u8a0a\uff0811\u670816\u65e5\u66f4\u65b0\uff09"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link",href:"#"},"\u958b\u5718\u8cc7\u8a0a ",o.a.createElement("span",{className:"sr-only"},"(current)"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"http://equallove.tw"},"\u95dc\u65bc\u5a5a\u59fb\u5e73\u6b0a\u5927\u5e73\u53f0"))))))}var q=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("select",{onChange:this.props.onChange,value:this.props.title,className:"custom-select"},o.a.createElement("option",{disabled:!0},this.props.defaultTitle),this.props.options.map(function(e,t){return o.a.createElement("option",{className:"dropdown-item",key:t+1},e)}))}}]),t}(l.Component),F=function(e){var t=e.options.map(function(t,a){var n="".concat("toggle btn btn-secondary"," active"),r=t===e.selected?n:"toggle btn btn-secondary";return o.a.createElement("label",{className:r,key:a.toString(),onClick:function(){return e.onChange(t)}},o.a.createElement("input",{type:"radio",name:"options",key:a.toString()}),t)});return o.a.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons"},t)};var U=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleAreaChange=function(e){var t=e.target.value;a.setState({area:t})},a.handleQueryUpdate=function(e){a.setState({query:e.target.value})},a.handleDateUpdate=function(e){a.setState({date:e})},a.handleViewChange=function(e){a.setState({view:e})},a.handleLocationRequest=function(e){a.setState({loadingLocation:!0}),navigator.geolocation?navigator.geolocation.getCurrentPosition(a.applyCurrentLocation):(alert("\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u5b9a\u4f4d\u641c\u5c0b"),a.setState({loadingLocation:!1}))},a.applyCurrentLocation=function(e){a.state.shifts.sort(function(t,a){var n=Object(M.point)([e.coords.latitude,e.coords.longitude]);if(t.lat&&t.lng){var r=Object(M.point)([t.lat,t.lng]);t.distance=_()(n,r)}else t.distance=9999;if(a.lat&&a.lng){var i=Object(M.point)([a.lat,a.lng]);a.distance=_()(n,i)}else a.distance=9999;return t.distance-a.distance}),a.setState({orderByDistance:!0,loadingLocation:!1})},a.isOnThisDate=function(e){if(null===a.state.date)return!0;v.a.locale("zh-tw");var t=v()(e.date.substring(0,e.date.length-3),"MM/DD");return!!a.state.date.isSame(t,"day")},a.areaFilter=function(e){return"\u7121"===a.state.area||"\u5340\u57df"===a.state.area||e.containsQuery(a.state.area)},a.state={area:"\u5340\u57df",date:null,lat:void 0,lng:void 0,loadingLocation:!1,orderByDistance:!1,query:"",shifts:e.shifts,view:"\u5361\u7247\u5217\u8868"},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.view,n=t.date,i=t.area,c=t.query,l=t.loadingLocation,s=t.lat,u=t.lng,h=this.state.shifts.filter(function(t){return t.containsQuery(e.state.query)}).filter(this.areaFilter).filter(this.isOnThisDate);return o.a.createElement("div",{className:"App"},o.a.createElement(b.a,{width:"1137px"}),o.a.createElement(Q,null),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row filter-form"},o.a.createElement(k,{buttonText:l?"\u5b9a\u4f4d\u4e2d...":"\u5b9a\u4f4d\u5c0b\u627e\u9644\u8fd1\u958b\u5718",type:N.primary,onClick:this.handleLocationRequest}),o.a.createElement(E.a,{selected:n,onChange:this.handleDateUpdate,className:"filter-form__date-picker",minDate:v()(),maxDate:v()("2018-11-24"),showDisabledMonthNavigation:!0,placeholderText:"\u9078\u64c7\u65e5\u671f"}),o.a.createElement(q,{defaultValue:"\u5340\u57df",defaultTitle:"\u5340\u57df",options:function(){var e=[];for(var t in r)Number(t)&&e.push(Number(t));return e.map(O)}(),onChange:this.handleAreaChange,title:i}),o.a.createElement("div",{className:"search"},o.a.createElement("input",{type:"search",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"\u641c\u5c0b",value:c,onChange:this.handleQueryUpdate})),o.a.createElement(F,{options:["\u5730\u5716","\u5361\u7247\u5217\u8868"],selected:"\u5361\u7247\u5217\u8868",onChange:this.handleViewChange}))),"\u5361\u7247\u5217\u8868"===a&&o.a.createElement(H,{shifts:h,lat:s,lng:u}),"\u5730\u5716"===a&&o.a.createElement(R,{key:"".concat(c,"/").concat(i,"/").concat(n),shifts:h.filter(function(e){return void 0!==e.lat&&void 0!==e.lng})}),o.a.createElement("footer",{className:"footer"},"\u8cc7\u6599\u4f86\u6e90\uff1a",o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://docs.google.com/spreadsheets/d/131ImXHRXARx8j8t9esNCJhrLUfZQG347L1k3GsJ1m1Q/edit?ts=5bf0bd8f#gid=0"},"\u5169\u597d\u4e09\u58de\uff0c\u5168\u53f0\u958b\u5718\u8cc7\u8a0a")))}}]),t}(l.Component);c.a.labeledCols("1i3Y4VTelUNFySPXMys6rLlN3wZlC9T_vLKR1X-9rnmY",2).then(function(e){var t=e.data.map(function(e){return new j(e)});u.a.render(o.a.createElement(U,{shifts:t}),document.getElementById("root"))})},66:function(e,t,a){e.exports=a(131)},78:function(e,t,a){}},[[66,2,1]]]);
//# sourceMappingURL=main.2402deef.chunk.js.map