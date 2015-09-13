/*! formstone v0.8.7 [analytics.js] 2015-09-13 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){v=b.$body}function e(){s.scrollDepth&&l()}function f(){if(arguments.length&&"object"!==a.type(arguments[0]))if("destroy"===arguments[0])h.apply(this);else{var b=Array.prototype.slice.call(arguments,1);switch(arguments[0]){case"pageview":o.apply(this,b);break;case"event":n.apply(this,b)}}else g.apply(this,arguments);return null}function g(b){!y&&v.length&&(y=!0,s=a.extend(s,b||{}),s.autoEvents&&v.find("a").not("["+A+"]").each(i),s.scrollDepth&&(l(),u.on(x.scroll,j).one(x.load,e)),v.on(x.click,"*["+A+"]",m))}function h(){y&&v.length&&(u.off(x.namespace),v.off(x.namespace),y=!1)}function i(){var b,d=a(this),e="undefined"!==a.type(d[0].href)?d[0].href:"",f=document.domain.split(".").reverse(),g=null!==e.match(f[1]+"."+f[0]);if(e.match(/^mailto\:/i))b="Email, Click, "+e.replace(/^mailto\:/i,"");else if(e.match(/^tel\:/i))b="Telephone, Click, "+e.replace(/^tel\:/i,"");else if(e.match(s.filetypes)){var h=/[.]/.exec(e)?/[^.]+$/.exec(e):c;b="File, Download:"+h[0]+", "+e.replace(/ /g,"-")}else g||(b="ExternalLink, Click, "+e);b&&d.attr(A,b)}function j(){w.startTimer(C,250,k)}function k(){for(var a,c=u.scrollTop()+b.windowHeight,d=1/s.scrollStops,e=d,f=1;f<=s.scrollStops;f++)a=Math.round(100*e).toString(),!B[D][a].passed&&c>B[D][a].edge&&(B[D][a].passed=!0,n({eventCategory:"ScrollDepth",eventAction:D,eventLabel:a})),e+=d}function l(){var b,c=a.mediaquery("state"),d=v.outerHeight(),e={},f=1/s.scrollStops,g=f,h=0;c.minWidth&&(D="MinWidth:"+c.minWidth+"px");for(var i=1;i<=s.scrollStops;i++)h=parseInt(d*g),b=Math.round(100*g).toString(),e[b]={edge:"100"===b?h-10:h,passsed:B[D]&&B[D][b]?B[D][b].passed:!1},g+=f;B[D]=e}function m(b){var c=a(this),d=c.attr("href"),e=c.data(z).split(",");s.eventCallback&&b.preventDefault();for(var f in e)e.hasOwnProperty(f)&&(e[f]=a.trim(e[f]));n({eventCategory:e[0],eventAction:e[1],eventLabel:e[2]||d,eventValue:e[3],nonInteraction:e[4]},c)}function n(b,c){var d=(t.location,a.extend({hitType:"event"},b));if("undefined"!==a.type(c)&&!c.attr("data-analytics-stop")){var e="undefined"!==a.type(c[0].href)?c[0].href:"",f=!e.match(/^mailto\:/i)&&!e.match(/^tel\:/i)&&e.indexOf(":")<0?t.location.protocol+"//"+t.location.hostname+"/"+e:e;if(""!==f)if(c.attr("target"))t.open(f,c.attr("target"));else if(s.eventCallback){var g="hitCallback";d[g]=function(){E&&(w.clearTimer(E),q(f))},E=w.startTimer(E,s.eventTimeout,d[g])}}p(d)}function o(b){var c=a.extend({hitType:"pageview"},b);p(c)}function p(b){if("function"===a.type(t.ga))for(var c=t.ga.getAll(),d=0,e=c.length;e>d;d++)t.ga(c[d].get("name")+".send",b)}function q(a){document.location=a}var r=b.Plugin("analytics",{methods:{_setup:d,_resize:e},utilities:{_delegate:f}}),s={autoEvents:!1,filetypes:/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,eventCallback:!1,eventTimeout:1e3,scrollDepth:!1,scrollStops:5},t=b.window,u=b.$window,v=null,w=r.functions,x=r.events,y=!1,z="analytics-event",A="data-"+z,B={},C=null,D="Site",E=null}(jQuery,Formstone);