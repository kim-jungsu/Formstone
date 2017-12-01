/*! formstone v1.4.2 [analytics.js] 2017-12-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function n(){v.scrollDepth&&c()}function i(t){!k&&g&&g.length&&(k=!0,(v=e.extend(v,t||{})).autoEvents&&g.find("a").not("["+b+"]").each(o),v.scrollDepth&&(c(),y.on(x.scroll,l).one(x.load,n)),g.on(x.click,"*["+b+"]",s))}function a(){k&&g&&g.length&&(y.off(x.namespace),g.off(x.namespace),k=!1)}function o(){var t,n=e(this),i="undefined"!==e.type(n[0].href)?n[0].href:"",a=document.domain.split(".").reverse(),o=null!==i.match(a[1]+"."+a[0]);i.match(/^mailto\:/i)?t="Email, Click, "+i.replace(/^mailto\:/i,""):i.match(/^tel\:/i)?t="Telephone, Click, "+i.replace(/^tel\:/i,""):i.match(v.fileTypes)?t="File, Download:"+(/[.]/.exec(i)?/[^.]+$/.exec(i):void 0)[0]+", "+i.replace(/ /g,"-"):o||(t="ExternalLink, Click, "+i),t&&n.attr(b,t)}function l(e){w.startTimer(S,250,r)}function r(){for(var n,i=y.scrollTop()+t.windowHeight,a=1/v.scrollStops,o=a,l=1;l<=v.scrollStops;l++)n=Math.round(100*o).toString(),!C[D][n].passed&&i>C[D][n].edge&&(C[D][n].passed=!0,p(e.extend(v.scrollFields,{eventCategory:"ScrollDepth",eventAction:D,eventLabel:n,nonInteraction:!0}))),o+=a}function c(){var t,n=e.mediaquery("state"),i=g.outerHeight(),a={},o=1/v.scrollStops,l=o,r=0;n.minWidth&&(D="MinWidth:"+n.minWidth+"px");for(var c=1;c<=v.scrollStops;c++)r=parseInt(i*l),a[t=Math.round(100*l).toString()]={edge:"100"===t?r-10:r,passsed:!(!C[D]||!C[D][t])&&C[D][t].passed},l+=o;C[D]=a}function s(t){var n=e(this),i=n.attr("href"),a=n.data(T).split(",");v.eventCallback&&t.preventDefault();for(var o in a)a.hasOwnProperty(o)&&(a[o]=e.trim(a[o]));p({eventCategory:a[0],eventAction:a[1],eventLabel:a[2]||i,eventValue:a[3],nonInteraction:a[4]},n)}function p(t,n){m.location;var i=e.extend({hitType:"event"},t);if("undefined"!==e.type(n)&&!n.attr("data-analytics-stop")){var a="undefined"!==e.type(n[0].href)?n[0].href:"",o=!a.match(/^mailto\:/i)&&!a.match(/^tel\:/i)&&a.indexOf(":")<0?m.location.protocol+"//"+m.location.hostname+"/"+a:a;if(""!==o){var l=n.attr("target");if(l)m.open(o,l);else if(v.eventCallback){i.hitCallback=function(){A&&(w.clearTimer(A),u(o))},A=w.startTimer(A,v.eventTimeout,i.hitCallback)}}}d(i)}function f(t){d(e.extend({hitType:"pageview"},t))}function d(t){if("function"===e.type(m.ga)&&"function"===e.type(m.ga.getAll))for(var n=m.ga.getAll(),i=0,a=n.length;i<a;i++)m.ga(n[i].get("name")+".send",t)}function u(e){document.location=e}var h=t.Plugin("analytics",{methods:{_resize:n},utilities:{_delegate:function(){if(arguments.length&&"object"!==e.type(arguments[0]))if("destroy"===arguments[0])a.apply(this);else{var t=Array.prototype.slice.call(arguments,1);switch(arguments[0]){case"pageview":f.apply(this,t);break;case"event":p.apply(this,t)}}else i.apply(this,arguments);return null}}}),v={autoEvents:!1,fileTypes:/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,eventCallback:!1,eventTimeout:1e3,scrollDepth:!1,scrollStops:5,scrollFields:{}},m=t.window,y=t.$window,g=null,w=h.functions,x=h.events,k=!1,T="analytics-event",b="data-"+T,C={},S=null,D="Site",A=null;t.Ready(function(){g=t.$body})});