(this["webpackJsonpgantt-task-react-example"]=this["webpackJsonpgantt-task-react-example"]||[]).push([[0],{10:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);a(10);var n,r=a(0),o=a.n(r),i=a(8),c=a.n(i),s=a(1),l=(a(6),a(2)),u=a.n(l),d=a(3),g=a(4),m=a(7);!function(e){e.QuarterDay="Quarter Day",e.HalfDay="Half Day",e.Day="Day",e.Week="Week",e.Month="Month"}(n||(n={}));var h=function(e,t,a){return new Date(e.getFullYear()+("year"===a?t:0),e.getMonth()+("month"===a?t:0),e.getDate()+("day"===a?t:0),e.getHours()+("hour"===a?t:0),e.getMinutes()+("minute"===a?t:0),e.getSeconds()+("second"===a?t:0),e.getMilliseconds()+("millisecond"===a?t:0))},f=function(e,t){var a=["millisecond","second","minute","hour","day","month","year"],n=function(e){var n=a.indexOf(t);return a.indexOf(e)<=n};return new Date(e.getFullYear(),n("year")?0:e.getMonth(),n("month")?1:e.getDate(),n("day")?0:e.getHours(),n("hour")?0:e.getMinutes(),n("minute")?0:e.getSeconds(),n("second")?0:e.getMilliseconds())},v=function(e,t){var a=new Intl.DateTimeFormat(t,{month:"long"}).format(e);return a=a.replace(a[0],a[0].toLocaleUpperCase())},b=function(e){var t=e.getDay(),a=e.getDate()-t+(0===t?-6:1);return new Date(e.setDate(a))},y=function(e){var t=new Date(e.valueOf()),a=(t.getDay()+6)%7;t.setDate(t.getDate()-a+3);var n=t.valueOf();t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7);var r=(1+Math.ceil((n-t.valueOf())/6048e5)).toString();return 1===r.length?"0".concat(r):r},x="_grid-module__gridRow__Mh3e0",p="_grid-module__gridHeader__UMdHN",k="_grid-module__gridRowLine__b2wly",w="_grid-module__gridTick__OGXLT",D=function(e){var t,a=e.tasks,n=e.dates,r=e.rowHeight,i=e.headerHeight,c=e.gridWidth,s=e.columnWidth,l=e.todayColor,u=i,d=[],g=[],f=Object(m.a)(a);try{for(f.s();!(t=f.n()).done;){var v=t.value;d.push(o.a.createElement("rect",{key:"Row"+v.id,x:"0",y:u,width:c,height:r,className:x})),g.push(o.a.createElement("line",{key:"RowLine"+v.id,x:"0",y1:u+r,x2:c,y2:u+r,className:k})),u+=r}}catch(C){f.e(C)}finally{f.f()}for(var b=new Date,y=0,p=[],D=o.a.createElement("rect",null),T=0;T<n.length;T++){var E=n[T];p.push(o.a.createElement("line",{key:E.getTime(),x1:y,y1:i,x2:y,y2:u,className:w})),(T+1!==n.length&&E.getTime()<b.getTime()&&n[T+1].getTime()>=b.getTime()||0!==T&&T+1===n.length&&E.getTime()<b.getTime()&&h(E,E.getTime()-n[T-1].getTime(),"millisecond").getTime()>=b.getTime())&&(D=o.a.createElement("rect",{x:y,y:0,width:s,height:u,fill:l})),y+=s}return o.a.createElement("g",{className:"gridBody"},o.a.createElement("g",{className:"rows"},d),o.a.createElement("g",{className:"rowLines"},g),o.a.createElement("g",{className:"ticks"},p),o.a.createElement("g",{className:"today"},D))},T=function(e){var t=e.gridWidth,a=e.headerHeight;return o.a.createElement("rect",{x:"0",y:"0",width:t,height:a,className:p})},E=function(e){return o.a.createElement("g",{className:"grid"},o.a.createElement(T,Object.assign({},e)),o.a.createElement(D,Object.assign({},e)))},C="_calendar-module__calendarBottomText__3mT2F",O="_calendar-module__calendarTopTick__YErfM",_="_calendar-module__calendarTopText__25YmP",M=function(e){var t=e.value,a=e.x1Line,n=e.y1Line,r=e.y2Line,i=e.xText,c=e.yText;return o.a.createElement("g",{className:"calendarTop"},o.a.createElement("line",{x1:a,y1:n,x2:a,y2:r,className:O,key:t+"line"}),o.a.createElement("text",{key:t+"text",y:c,x:i,className:_},t))},S=function(e){var t=e.dates,a=e.locale,r=e.viewMode,i=e.headerHeight,c=e.columnWidth,l=e.fontFamily,u=e.fontSize,d=[],g=[];switch(r){case n.Month:var m=function(){for(var e=[],n=[],r=6*c,s=.5*i,l=0;l<t.length;l++){var u=t[l],d=v(u,a);if(n.push(o.a.createElement("text",{key:d+u.getFullYear(),y:.8*i,x:c*l+.5*c,className:C},d)),0===l||u.getFullYear()!==t[l-1].getFullYear()){var g=u.getFullYear().toString();e.push(o.a.createElement(M,{key:g,value:g,x1Line:c*l,y1Line:0,y2Line:s,xText:r+c*l-u.getMonth()*c,yText:.9*s}))}}return[e,n]}(),h=Object(s.a)(m,2);d=h[0],g=h[1];break;case n.Week:var f=function(){for(var e=[],n=[],r=0,s=.5*i,l=t.length-1;l>=0;l--){var u=t[l],d="";0!==l&&u.getMonth()===t[l-1].getMonth()||(d="".concat(v(u,a),", ").concat(u.getFullYear()));var g="W".concat(y(u));n.push(o.a.createElement("text",{key:u.getTime(),y:.8*i,x:c*l,className:C},g)),d&&(l!==t.length-1&&e.push(o.a.createElement(M,{key:d,value:d,x1Line:c*l+r*c,y1Line:0,y2Line:s,xText:c*l+c*r*.5,yText:.9*s})),r=0),r++}return[e,n]}(),b=Object(s.a)(f,2);d=b[0],g=b[1];break;case n.Day:var x=function(){for(var e=[],n=[],r=.5*i,s=0;s<t.length;s++){var l=t[s],u=l.getDate().toString();if(n.push(o.a.createElement("text",{key:l.getTime(),y:.8*i,x:c*s+.5*c,className:C},u)),s+1!==t.length&&l.getMonth()!==t[s+1].getMonth()){var d=v(l,a);e.push(o.a.createElement(M,{key:d,value:d,x1Line:c*(s+1),y1Line:0,y2Line:r,xText:c*(s+1)-l.getDate()*c*.5,yText:.9*r}))}}return[e,n]}(),p=Object(s.a)(x,2);d=p[0],g=p[1];break;default:var k=function(){for(var e=[],s=[],u=r===n.HalfDay?2:4,d=.5*i,g=0;g<t.length;g++){var m=t[g],h=Intl.DateTimeFormat(a,{hour:"numeric"}).format(m);if(s.push(o.a.createElement("text",{key:m.getTime(),y:.8*i,x:c*g,className:C,fontFamily:l},h)),0===g||m.getDate()!==t[g-1].getDate()){var f="".concat(m.getDate()," ").concat(v(m,a));e.push(o.a.createElement(M,{key:f,value:f,x1Line:c*g+u*c,y1Line:0,y2Line:d,xText:c*g+u*c*.5,yText:.9*d}))}}return[e,s]}(),w=Object(s.a)(k,2);d=w[0],g=w[1]}return o.a.createElement("g",{className:"calendar",fontSize:u,fontFamily:l},g," ",d)},N="_bar-module__barWrapper__nceC7",j="_bar-module__barHandle__1C4hH",F="_bar-module__barLabel__1Azmc",W="_bar-module__barLabelOutside__1i9jR",H="_bar-module__barBackground__AiPgJ",L=function(e){var t=e.progressPoint,a=e.onMouseDown;return o.a.createElement("polygon",{className:j,points:t,onMouseDown:a})},z=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,i=e.barCornerRadius,c=e.onMouseDown;return o.a.createElement("rect",{x:t,y:a,width:n,height:r,className:j,ry:i,rx:i,onMouseDown:c})},R=function(e){var t=e.x,a=e.y,n=e.width,i=e.height,c=e.isSelected,l=e.progressWidth,u=e.barCornerRadius,d=e.text,g=e.hasChild,m=e.arrowIndent,h=e.styles,f=e.onMouseDown,v=Object(r.useRef)(null),b=Object(r.useState)(!0),y=Object(s.a)(b,2),x=y[0],p=y[1];Object(r.useEffect)((function(){v.current&&p(v.current.getBBox().width<n)}),[v,n]);return o.a.createElement("g",{onMouseDown:f},o.a.createElement("rect",{x:t,width:n,y:a,height:i,ry:u,rx:u,fill:c?h.backgroundSelectedColor:h.backgroundColor,className:H}),o.a.createElement("rect",{x:t,width:l,y:a,height:i,ry:u,rx:u,fill:c?h.progressSelectedColor:h.progressColor}),o.a.createElement("text",{x:x?t+.5*n:t+n+m*+g+.2*m,y:a+.5*i,className:x?F:W,ref:v},d))},Y=function(e,t,a,n,r,o,i,c,s,l,u,d,m,h){var f=I(e.start,a,n,r),v=I(e.end,a,n,r),b=P(t,o,i,c),y=Object(g.a)({backgroundColor:m,backgroundSelectedColor:h,progressColor:u,progressSelectedColor:d},e.styles);return Object(g.a)(Object(g.a)({},e),{},{x1:f,x2:v,y:b,index:t,barCornerRadius:s,handleWidth:l,height:i,barChildren:[],styles:y})},I=function(e,t,a,n){var r=~~((e.getTime()-t[0].getTime()+e.getTimezoneOffset()-t[0].getTimezoneOffset())/a);return Math.round((r+(e.getTime()-t[r].getTime()-60*e.getTimezoneOffset()*1e3+60*t[r].getTimezoneOffset()*1e3)/a)*n)},P=function(e,t,a,n){return e*t+n+(t-a)/2},B=function(e,t,a,n,r){var o=new Date((e-t)/n*r+a.getTime());return o=new Date(o.getTime()+6e4*(o.getTimezoneOffset()-a.getTimezoneOffset()))},G=function(e,t,a,n,r,o){var i=Object(g.a)({},a),c=!1;switch(t){case"progress":i.progress=function(e,t){if(e>=t.x2)return 100;if(e<=t.x1)return 0;var a=t.x2-t.x1;return Math.round(100*(e-t.x1)/a)}(e,a),c=i.progress!==a.progress;break;case"start":var l=function(e,t,a){e>=a.x2-2*a.handleWidth&&(e=a.x2-2*a.handleWidth);var n=Math.round((e-a.x1)/t)*t;return a.x1+n}(e,n,a);i.x1=l,(c=i.x1!==a.x1)&&(i.start=B(l,a.x1,a.start,n,r));break;case"end":var u=function(e,t,a){e<=a.x1+2*a.handleWidth&&(e=a.x1+2*a.handleWidth);var n=Math.round((e-a.x2)/t)*t;return a.x2+n}(e,n,a);i.x2=u,(c=i.x2!==a.x2)&&(i.end=B(u,a.x2,a.end,n,r));break;case"move":var d=function(e,t,a){var n=Math.round((e-a.x1)/t)*t,r=a.x1+n;return[r,r+a.x2-a.x1]}(e-o,n,a),m=Object(s.a)(d,2),h=m[0],f=m[1];(c=h!==a.x1)&&(i.start=B(h,a.x1,a.start,n,r),i.end=B(f,a.x2,a.end,n,r),i.x1=h,i.x2=f)}return{isChanged:c,changedTask:i}},A=function(e){var t,a,n,i,c,l,u=e.task,d=e.arrowIndent,g=e.onDoubleClick,m=e.isProgressChangeable,h=e.isDateChangeable,f=e.onEventStart,v=e.isDelete,b=Object(r.useState)(!1),y=Object(s.a)(b,2),x=y[0],p=y[1],k=(t=u.x1,a=u.x2,n=u.progress,(a-t)*n*.01),w=(i=k+u.x1,c=u.y,l=u.height,[i-5,c+l,i+5,c+l,i,c+l-8.66].join(","));return o.a.createElement("g",{className:N,onDoubleClick:function(){g&&g(u)},tabIndex:0,onKeyDown:function(e){switch(e.key){case"Delete":v&&f(e,"delete",u)}},onMouseEnter:function(e){f(e,"mouseenter",u)},onMouseLeave:function(e){f(e,"mouseleave",u)},onFocus:function(){return p(!0)},onBlur:function(){return p(!1)}},o.a.createElement(R,{x:u.x1,y:u.y,width:u.x2-u.x1,height:u.height,progressWidth:k,barCornerRadius:u.barCornerRadius,text:u.name,hasChild:u.barChildren.length>0,arrowIndent:d,styles:u.styles,isSelected:x,onMouseDown:function(e){h&&f(e,"move",u)}}),o.a.createElement("g",{className:"handleGroup"},h&&o.a.createElement("g",null,o.a.createElement(z,{x:u.x1+1,y:u.y+1,width:u.handleWidth,height:u.height-2,barCornerRadius:u.barCornerRadius,onMouseDown:function(e){f(e,"start",u)}}),o.a.createElement(z,{x:u.x2-u.handleWidth-1,y:u.y+1,width:u.handleWidth,height:u.height-2,barCornerRadius:u.barCornerRadius,onMouseDown:function(e){f(e,"end",u)}})),m&&o.a.createElement(L,{progressPoint:w,onMouseDown:function(e){f(e,"progress",u)}})))},Q=function(e){var t=e.taskFrom,a=e.taskTo,n=e.rowHeight,r=e.arrowIndent,i=t.index>a.index?-1:1,c=a.y+a.height/2,s="M ".concat(t.x2," ").concat(t.y+t.height/2," \n  h ").concat(r," \n  v ").concat(i*n/2," \n  H ").concat(a.x1-r," \n  V ").concat(c," \n  h ").concat(r),l="".concat(a.x1,",").concat(c," \n  ").concat(a.x1-5,",").concat(c-5," \n  ").concat(a.x1-5,",").concat(c+5);return o.a.createElement("g",{className:"arrow"},o.a.createElement("path",{strokeWidth:"1.5",d:s,fill:"none"}),o.a.createElement("polygon",{points:l}))},V="_tooltip-module__tooltipDefaultContainer__uW0nC",X="_tooltip-module__tooltipDefaultContainerParagraph__DcYxn",U="_tooltip-module__tooltipDetailsContainer__12ytY",J=function(e){var t=e.x,a=e.y,n=e.task,i=e.fontSize,c=e.fontFamily,l=e.getTooltipContent,u=void 0===l?K:l,d=Object(r.useRef)(null),g=Object(r.useState)(1e3),m=Object(s.a)(g,2),h=m[0],f=m[1],v=Object(r.useState)(a),b=Object(s.a)(v,2),y=b[0],x=b[1];return Object(r.useEffect)((function(){if(d.current){var e=d.current.offsetHeight+.15*d.current.offsetHeight;x(a-e),f(1.1*d.current.scrollWidth)}}),[d,a]),o.a.createElement("foreignObject",{x:t,y:y,width:h,height:1e3},o.a.createElement("div",{ref:d,className:U},u(n,i,c)))},K=function(e,t,a){var n={fontSize:t,fontFamily:a};return o.a.createElement("div",{className:V,style:n},o.a.createElement("b",{style:{fontSize:t+6}},"".concat(e.name,": ").concat(e.start.getDate(),"-").concat(e.start.getMonth()+1,"-").concat(e.start.getFullYear()," - ").concat(e.end.getDate(),"-").concat(e.end.getMonth()+1,"-").concat(e.end.getFullYear())),o.a.createElement("p",{className:X},"Duration: ".concat(~~((e.end.getTime()-e.start.getTime())/864e5)," day(s)")),o.a.createElement("p",{className:X},"Progress: ".concat(e.progress," %")))};var q=function(e){var t,a=e.tasks,n=e.rowHeight,i=e.barCornerRadius,c=e.columnWidth,l=e.dates,m=e.barFill,h=e.barProgressColor,f=e.barProgressSelectedColor,v=e.barBackgroundColor,b=e.barBackgroundSelectedColor,y=e.headerHeight,x=e.handleWidth,p=e.arrowColor,k=e.timeStep,w=e.fontFamily,D=e.fontSize,T=e.arrowIndent,E=e.svg,C=e.onDateChange,O=e.onProgressChange,_=e.onDoubleClick,M=e.onTaskDelete,S=e.getTooltipContent,N=null===(t=E.current)||void 0===t?void 0:t.createSVGPoint(),j=Object(r.useState)({action:""}),F=Object(s.a)(j,2),W=F[0],H=F[1],L=Object(r.useState)([]),z=Object(s.a)(L,2),R=z[0],I=z[1],P=Object(r.useState)(0),B=Object(s.a)(P,2),V=B[0],X=B[1],U=Object(r.useState)(0),K=Object(s.a)(U,2),q=K[0],Z=K[1],$=Object(r.useState)(!1),ee=Object(s.a)($,2),te=ee[0],ae=ee[1];Object(r.useEffect)((function(){var e=l[1].getTime()-l[0].getTime()-60*l[1].getTimezoneOffset()*1e3+60*l[0].getTimezoneOffset()*1e3,t=k*c/e;t!==V&&X(t)}),[c,l,k,V]),Object(r.useEffect)((function(){var e=l[1].getTime()-l[0].getTime()-60*l[1].getTimezoneOffset()*1e3+60*l[0].getTimezoneOffset()*1e3;I(function(e,t,a,n,r,o,i,c,s,l,u,d,g){var m=e.map((function(e,m){return Y(e,m,t,a,n,r,o,i,c,s,l,u,d,g)}));return m=m.map((function(e,t){for(var a=e.dependencies||[],n=function(e){var n=m.findIndex((function(t){return t.id===a[e]}));-1!==n&&m[n].barChildren.push(t)},r=0;r<a.length;r++)n(r);return e}))}(a,l,e,c,n,n*m/100,y,i,x,h,f,v,b))}),[a,n,i,c,l,m,x,y,h,f,v,b]);var ne=function(e,t,a){if(function(e){return void 0!==e.key}(e))"delete"===t&&I(R.filter((function(e){var t;return e.id!==(null===(t=W.selectedTask)||void 0===t?void 0:t.id)})));else if("mouseenter"===t)W.action||H({action:t,selectedTask:a});else if("mouseleave"===t)"mouseenter"===W.action&&H({action:""});else if("move"===t){var n;if(!E.current||!N)return;N.x=e.clientX;var r=N.matrixTransform(null===(n=E.current.getScreenCTM())||void 0===n?void 0:n.inverse());Z(r.x-a.x1),H({action:t,selectedTask:a})}else H({action:t,selectedTask:a})};return Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W.selectedTask&&N&&E.current){e.next=2;break}return e.abrupt("return");case 2:t.preventDefault(),N.x=t.clientX,n=N.matrixTransform(null===(a=E.current.getScreenCTM())||void 0===a?void 0:a.inverse()),r=G(n.x,W.action,W.selectedTask,V,k,q),o=r.isChanged,i=r.changedTask,o&&(I(R.map((function(e){return e.id===i.id?i:e}))),H(Object(g.a)(Object(g.a)({},W),{},{selectedTask:i})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var a=Object(d.a)(u.a.mark((function a(n){var r,o,i,c,s,l;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=W.selectedTask,i=W.action,o&&N&&E.current){a.next=3;break}return a.abrupt("return");case 3:n.preventDefault(),N.x=n.clientX,c=N.matrixTransform(null===(r=E.current.getScreenCTM())||void 0===r?void 0:r.inverse()),s=G(c.x,i,o,V,k,q),l=s.changedTask,"move"!==i&&"end"!==i&&"start"!==i||!C?O&&O(l):C(l),E.current.removeEventListener("mousemove",e),E.current.removeEventListener("mouseup",t),console.log("Start: ".concat(l.start," End: ").concat(l.end)),H({action:""}),ae(!1);case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();te||"move"!==W.action&&"end"!==W.action&&"start"!==W.action&&"progress"!==W.action||!E.current||(E.current.addEventListener("mousemove",e),E.current.addEventListener("mouseup",t),ae(!0))}),[R,W,V,q,O,k,C,E,te]),o.a.createElement("g",{className:"content"},o.a.createElement("g",{className:"arrows",fill:p,stroke:p},R.map((function(e){return e.barChildren.map((function(t){return o.a.createElement(Q,{key:"Arrow from ".concat(e.id," to ").concat(a[t].id),taskFrom:e,taskTo:R[t],rowHeight:n,arrowIndent:T})}))}))),o.a.createElement("g",{className:"bar",fontFamily:w,fontSize:D},R.map((function(e){return o.a.createElement(A,{task:e,arrowIndent:T,isProgressChangeable:!!O&&!e.isDisabled,onDoubleClick:_,isDateChangeable:!!C&&!e.isDisabled,isDelete:!!M&&!e.isDisabled,onEventStart:ne,key:e.id})}))),o.a.createElement("g",{className:"toolTip"},W.selectedTask&&o.a.createElement(J,{x:W.selectedTask.x2+T+.5*T,y:W.selectedTask.y+n,task:W.selectedTask,fontFamily:w,fontSize:D,getTooltipContent:S})))},Z=function(e){var t=e.tasks,a=e.headerHeight,i=void 0===a?50:a,c=e.columnWidth,l=void 0===c?60:c,u=e.rowHeight,d=void 0===u?50:u,g=e.viewMode,v=void 0===g?n.Day:g,y=e.locale,x=void 0===y?"en-GB":y,p=e.barFill,k=void 0===p?60:p,w=e.barCornerRadius,D=void 0===w?3:w,T=e.barProgressColor,C=void 0===T?"#a3a3ff":T,O=e.barProgressSelectedColor,_=void 0===O?"#8282f5":O,M=e.barBackgroundColor,N=void 0===M?"#b8c2cc":M,j=e.barBackgroundSelectedColor,F=void 0===j?"#aeb8c2":j,W=e.handleWidth,H=void 0===W?8:W,L=e.timeStep,z=void 0===L?3e5:L,R=e.arrowColor,Y=void 0===R?"grey":R,I=e.fontFamily,P=void 0===I?"Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue":I,B=e.fontSize,G=void 0===B?"14px":B,A=e.arrowIndent,Q=void 0===A?20:A,V=e.todayColor,X=void 0===V?"rgba(252, 248, 227, 0.5)":V,U=e.onDateChange,J=e.onProgressChange,K=e.onDoubleClick,Z=e.onTaskDelete,$=e.getTooltipContent,ee=function(e,t){var a,r=e[0].start,o=e[0].end,i=Object(m.a)(e);try{for(i.s();!(a=i.n()).done;){var c=a.value;c.start<r&&(r=c.start),c.end>o&&(o=c.end)}}catch(s){i.e(s)}finally{i.f()}switch(t){case n.Month:r=h(r,-1,"month"),o=h(o,1,"year"),o=f(o,"year");break;case n.Week:r=f(r,"day"),o=f(o,"day"),r=h(b(r),-7,"day"),o=h(o,1.5,"month");break;default:r=f(r,"day"),o=f(o,"day"),r=h(r,-1,"day"),o=h(o,19,"day")}return[r,o]}(t,v),te=Object(s.a)(ee,2),ae=function(e,t,a){for(var r=new Date(e),o=[r];r<t;){switch(a){case n.Month:r=h(r,1,"month");break;case n.Week:r=h(r,7,"day");break;case n.Day:r=h(r,1,"day");break;case n.HalfDay:r=h(r,12,"hour");break;case n.QuarterDay:r=h(r,6,"hour")}o.push(r)}return o}(te[0],te[1],v),ne=Object(r.useRef)(null),re={columnWidth:l,gridWidth:ae.length*l,tasks:t,rowHeight:d,headerHeight:i,dates:ae,todayColor:X},oe={dates:ae,locale:x,viewMode:v,headerHeight:i,columnWidth:l,fontFamily:P,fontSize:G},ie={tasks:t,rowHeight:d,barCornerRadius:D,columnWidth:l,dates:ae,barFill:k,barProgressColor:C,barProgressSelectedColor:_,barBackgroundColor:N,barBackgroundSelectedColor:F,headerHeight:i,handleWidth:H,timeStep:z,arrowColor:Y,fontFamily:P,fontSize:G,arrowIndent:Q,svg:ne,onDateChange:U,onProgressChange:J,onDoubleClick:K,onTaskDelete:Z,getTooltipContent:$};return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:l*ae.length,height:i+d*t.length,fontFamily:P,ref:ne},o.a.createElement(E,Object.assign({},re)),o.a.createElement(S,Object.assign({},oe)),o.a.createElement(q,Object.assign({},ie)))},$=function(e){var t=e.onViewChange;return o.a.createElement("div",{className:"ViewContainer"},o.a.createElement("button",{className:"Button",onClick:function(){return t(n.QuarterDay)}},"Quarter of Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.HalfDay)}},"Half of Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Day)}},"Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Week)}},"Week"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Month)}},"Month"))},ee=function(e){var t={fontSize:"14px",fontFamily:"Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue",headerHeight:50,rowHeight:50};e.viewMode===n.Month?t.columnWidth=300:e.viewMode===n.Week&&(t.columnWidth=250);var a=o.a.useState(e.tasks),r=Object(s.a)(a,2),i=r[0],c=r[1],l=function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.onDateChange){t.next=10;break}return t.prev=1,t.next=4,e.onDateChange(a);case 4:t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(1),t.t0;case 9:c(i.map((function(e){return e.id===a.id?a:e})));case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.onProgressChange){t.next=11;break}return t.prev=1,t.next=4,e.onProgressChange(a);case 4:t.next=10;break;case 6:throw t.prev=6,t.t0=t.catch(1),c(e.tasks.slice()),t.t0;case 10:c(i.map((function(e){return e.id===a.id?a:e})));case 11:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.onTaskDelete){t.next=4;break}return t.next=3,e.onTaskDelete(a);case 3:c(i.filter((function(e){return e.id!==a.id})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:"Wrapper"},o.a.createElement("div",{className:"GanttTable",style:{fontFamily:t.fontFamily,fontSize:t.fontSize}},o.a.createElement("div",{className:"GanttTable-header",style:{height:t.headerHeight}},o.a.createElement("div",{className:"GanttTable-headerItem",style:{minWidth:150}},o.a.createElement("span",{role:"img","aria-label":"fromDate",className:"GanttTable-icon"},"\ud83d\udcc3"),"Name"),o.a.createElement("div",{className:"GanttTable-headerItem",style:{minWidth:150}},o.a.createElement("span",{role:"img","aria-label":"fromDate",className:"GanttTable-icon"},"\ud83d\udcc5"),"From"),o.a.createElement("div",{className:"GanttTable-headerItem",style:{minWidth:150}},o.a.createElement("span",{role:"img","aria-label":"toDate",className:"GanttTable-icon"},"\ud83d\udcc5"),"To")),i.map((function(e){return o.a.createElement("div",{className:"GanttTable-row",style:{height:t.rowHeight}},o.a.createElement("div",{className:"GanttTable-cell"},e.name),o.a.createElement("div",{className:"GanttTable-cell"},e.start.toDateString()),o.a.createElement("div",{className:"GanttTable-cell"},e.end.toDateString()))}))),o.a.createElement("div",{style:{overflowX:"scroll"}},o.a.createElement(Z,Object.assign({},t,e,{tasks:i,onDateChange:l,onTaskDelete:m,onProgressChange:g}))))},te=function(){var e=new Date,t=o.a.useState(n.Day),a=Object(s.a)(t,2),r=a[0],i=a[1],c=[{start:new Date(e.getFullYear(),e.getMonth(),1),end:new Date(e.getFullYear(),e.getMonth(),2,12,28),name:"Idea",id:"Task 0",progress:45,isDisabled:!0},{start:new Date(e.getFullYear(),e.getMonth(),2),end:new Date(e.getFullYear(),e.getMonth(),4,0,0),name:"Research",id:"Task 1",progress:25,dependencies:["Task 0"]},{start:new Date(e.getFullYear(),e.getMonth(),4),end:new Date(e.getFullYear(),e.getMonth(),8,0,0),name:"Discussion with team",id:"Task 2",progress:10,dependencies:["Task 1"]},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),9,0,0),name:"Developing",id:"Task 3",progress:2,dependencies:["Task 2"]},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),10),name:"Review",id:"Task 4",progress:70,dependencies:["Task 2"]},{start:new Date(e.getFullYear(),e.getMonth(),15),end:new Date(e.getFullYear(),e.getMonth(),16),name:"Release & Eat Burgers",id:"Task 6",progress:e.getMonth(),dependencies:["Task 4"],styles:{progressColor:"#ffbb54",progressSelectedColor:"#ff9e0d"}}];return o.a.createElement("div",null,o.a.createElement($,{onViewChange:function(e){return i(e)}}),o.a.createElement(ee,{tasks:c,viewMode:r,onDateChange:function(e){console.log("On date change Id:"+e.id)},onTaskDelete:function(e){if(!window.confirm("Are you sure?"))throw"No del Id:"+e.id},onProgressChange:function(e){console.log("On progress change Id:"+e.id)},onDoubleClick:function(e){alert("On Double Click event Id:"+e.id)}}))};c.a.render(o.a.createElement(te,null),document.getElementById("root"))},6:function(e,t,a){},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.70a78672.chunk.js.map