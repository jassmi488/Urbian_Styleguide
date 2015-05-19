/* ==========================================================================
   Plugins
   ========================================================================== */

/* prettify | https://github.com/google/code-prettify */

!function(){var e=null;window.PR_SHOULD_USE_CONTINUATION=!0,function(){function t(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=d[n])?t:n>="0"&&"7">=n?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){return 32>e?(16>e?"\\x0":"\\x")+e.toString(16):(e=String.fromCharCode(e),"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e)}function r(e){var r=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a="^"===r[0],s=["["];a&&s.push("^");for(var a=a?1:0,i=r.length;i>a;++a){var l=r[a];if(/\\[bdsw]/i.test(l))s.push(l);else{var o,l=t(l);i>a+2&&"-"===r[a+1]?(o=t(r[a+2]),a+=2):o=l,e.push([l,o]),65>o||l>122||(65>o||l>90||e.push([32|Math.max(65,l),32|Math.min(o,90)]),97>o||l>122||e.push([-33&Math.max(97,l),-33&Math.min(o,122)]))}}for(e.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]}),r=[],i=[],a=0;a<e.length;++a)l=e[a],l[0]<=i[1]+1?i[1]=Math.max(i[1],l[1]):r.push(i=l);for(a=0;a<r.length;++a)l=r[a],s.push(n(l[0])),l[1]>l[0]&&(l[1]+1>l[0]&&s.push("-"),s.push(n(l[1])));return s.push("]"),s.join("")}function a(e){for(var t=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),a=t.length,l=[],o=0,c=0;a>o;++o){var u=t[o];"("===u?++c:"\\"===u.charAt(0)&&(u=+u.substring(1))&&(c>=u?l[u]=-1:t[o]=n(u))}for(o=1;o<l.length;++o)-1===l[o]&&(l[o]=++s);for(c=o=0;a>o;++o)u=t[o],"("===u?(++c,l[c]||(t[o]="(?:")):"\\"===u.charAt(0)&&(u=+u.substring(1))&&c>=u&&(t[o]="\\"+l[u]);for(o=0;a>o;++o)"^"===t[o]&&"^"!==t[o+1]&&(t[o]="");if(e.ignoreCase&&i)for(o=0;a>o;++o)u=t[o],e=u.charAt(0),u.length>=2&&"["===e?t[o]=r(u):"\\"!==e&&(t[o]=u.replace(/[A-Za-z]/g,function(e){return e=e.charCodeAt(0),"["+String.fromCharCode(-33&e,32|e)+"]"}));return t.join("")}for(var s=0,i=!1,l=!1,o=0,c=e.length;c>o;++o){var u=e[o];if(u.ignoreCase)l=!0;else if(/[a-z]/i.test(u.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){i=!0,l=!1;break}}for(var d={b:8,t:9,n:10,v:11,f:12,r:13},p=[],o=0,c=e.length;c>o;++o){if(u=e[o],u.global||u.multiline)throw Error(""+u);p.push("(?:"+a(u)+")")}return RegExp(p.join("|"),l?"gi":"g")}function n(e,t){function n(e){var o=e.nodeType;if(1==o){if(!r.test(e.className)){for(o=e.firstChild;o;o=o.nextSibling)n(o);o=e.nodeName.toLowerCase(),("br"===o||"li"===o)&&(a[l]="\n",i[l<<1]=s++,i[l++<<1|1]=e)}}else(3==o||4==o)&&(o=e.nodeValue,o.length&&(o=t?o.replace(/\r\n?/g,"\n"):o.replace(/[\t\n\r ]+/g," "),a[l]=o,i[l<<1]=s,s+=o.length,i[l++<<1|1]=e))}var r=/(?:^|\s)nocode(?:\s|$)/,a=[],s=0,i=[],l=0;return n(e),{a:a.join("").replace(/\n$/,""),d:i}}function r(e,t,n,r){t&&(e={a:t,e:e},n(e),r.push.apply(r,e.g))}function a(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling)var r=n.nodeType,t=1===r?t?e:n:3===r&&w.test(n.nodeValue)?e:t;return t===e?void 0:t}function s(n,a){function s(e){for(var t=e.e,n=[t,"pln"],u=0,d=e.a.match(i)||[],p={},f=0,g=d.length;g>f;++f){var h,m=d[f],y=p[m],v=void 0;if("string"==typeof y)h=!1;else{var b=l[m.charAt(0)];if(b)v=m.match(b[1]),y=b[0];else{for(h=0;o>h;++h)if(b=a[h],v=m.match(b[1])){y=b[0];break}v||(y="pln")}!(h=y.length>=5&&"lang-"===y.substring(0,5))||v&&"string"==typeof v[1]||(h=!1,y="src"),h||(p[m]=y)}if(b=u,u+=m.length,h){h=v[1];var x=m.indexOf(h),w=x+h.length;v[2]&&(w=m.length-v[2].length,x=w-h.length),y=y.substring(5),r(t+b,m.substring(0,x),s,n),r(t+b+x,h,c(y,h),n),r(t+b+w,m.substring(w),s,n)}else n.push(t+b,y)}e.g=n}var i,l={};!function(){for(var r=n.concat(a),s=[],o={},c=0,u=r.length;u>c;++c){var d=r[c],p=d[3];if(p)for(var f=p.length;--f>=0;)l[p.charAt(f)]=d;d=d[1],p=""+d,o.hasOwnProperty(p)||(s.push(d),o[p]=e)}s.push(/[\S\s]/),i=t(s)}();var o=a.length;return s}function i(t){var n=[],r=[];n.push(t.tripleQuotedStrings?["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,e,"'\""]:t.multiLineStrings?["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,e,"'\"`"]:["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,e,"\"'"]),t.verbatimStrings&&r.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,e]);var a=t.hashComments;if(a&&(t.cStyleComments?(n.push(a>1?["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,e,"#"]:["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,e,"#"]),r.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,e])):n.push(["com",/^#[^\n\r]*/,e,"#"])),t.cStyleComments&&(r.push(["com",/^\/\/[^\n\r]*/,e]),r.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,e])),a=t.regexLiterals){var i=(a=a>1?"":"\n\r")?".":"[\\S\\s]";r.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+a+"])(?:[^/\\x5B\\x5C"+a+"]|\\x5C"+i+"|\\x5B(?:[^\\x5C\\x5D"+a+"]|\\x5C"+i+")*(?:\\x5D|$))+/")+")")])}return(a=t.types)&&r.push(["typ",a]),a=(""+t.keywords).replace(/^ | $/g,""),a.length&&r.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),e]),n.push(["pln",/^\s+/,e," \r\n	 "]),a="^.[^\\s\\w.$@'\"`/\\\\]*",t.regexLiterals&&(a+="(?!s*/)"),r.push(["lit",/^@[$_a-z][\w$@]*/i,e],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,e],["pln",/^[$_a-z][\w$@]*/i,e],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,e,"0123456789"],["pln",/^\\[\S\s]?/,e],["pun",RegExp(a),e]),s(n,r)}function l(e,t,n){function r(e){var t=e.nodeType;if(1!=t||s.test(e.className)){if((3==t||4==t)&&n){var o=e.nodeValue,c=o.match(i);c&&(t=o.substring(0,c.index),e.nodeValue=t,(o=o.substring(c.index+c[0].length))&&e.parentNode.insertBefore(l.createTextNode(o),e.nextSibling),a(e),t||e.parentNode.removeChild(e))}}else if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)r(e)}function a(e){function t(e,n){var r=n?e.cloneNode(!1):e,a=e.parentNode;if(a){var a=t(a,1),s=e.nextSibling;a.appendChild(r);for(var i=s;i;i=s)s=i.nextSibling,a.appendChild(i)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var n,e=t(e.nextSibling,0);(n=e.parentNode)&&1===n.nodeType;)e=n;c.push(e)}for(var s=/(?:^|\s)nocode(?:\s|$)/,i=/\r\n?|\n/,l=e.ownerDocument,o=l.createElement("li");e.firstChild;)o.appendChild(e.firstChild);for(var c=[o],u=0;u<c.length;++u)r(c[u]);t===(0|t)&&c[0].setAttribute("value",t);var d=l.createElement("ol");d.className="linenums";for(var t=Math.max(0,t-1|0)||0,u=0,p=c.length;p>u;++u)o=c[u],o.className="L"+(u+t)%10,o.firstChild||o.appendChild(l.createTextNode(" ")),d.appendChild(o);e.appendChild(d)}function o(e,t){for(var n=t.length;--n>=0;){var r=t[n];C.hasOwnProperty(r)?d.console&&console.warn("cannot override language handler %s",r):C[r]=e}}function c(e,t){return e&&C.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),C[e]}function u(e){var t=e.h;try{var r=n(e.c,e.i),a=r.a;e.a=a,e.d=r.d,e.e=0,c(t,a)(e);var s=/\bMSIE\s(\d+)/.exec(navigator.userAgent),s=s&&+s[1]<=8,t=/\n/g,i=e.a,l=i.length,r=0,o=e.d,u=o.length,a=0,p=e.g,f=p.length,g=0;p[f]=l;var h,m;for(m=h=0;f>m;)p[m]!==p[m+2]?(p[h++]=p[m++],p[h++]=p[m++]):m+=2;for(f=h,m=h=0;f>m;){for(var y=p[m],v=p[m+1],b=m+2;f>=b+2&&p[b+1]===v;)b+=2;p[h++]=y,p[h++]=v,m=b}p.length=h;var x,w=e.c;w&&(x=w.style.display,w.style.display="none");try{for(;u>a;){var S,C=o[a+2]||l,N=p[g+2]||l,b=Math.min(C,N),_=o[a+1];if(1!==_.nodeType&&(S=i.substring(r,b))){s&&(S=S.replace(t,"\r")),_.nodeValue=S;var k=_.ownerDocument,T=k.createElement("span");T.className=p[g+1];var E=_.parentNode;E.replaceChild(T,_),T.appendChild(_),C>r&&(o[a+1]=_=k.createTextNode(i.substring(b,C)),E.insertBefore(_,T.nextSibling))}r=b,r>=C&&(a+=2),r>=N&&(g+=2)}}finally{w&&(w.style.display=x)}}catch($){d.console&&console.log($&&$.stack||$)}}var d=window,p=["break,continue,do,else,for,if,return,while"],f=[[p,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],g=[f,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],h=[f,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],m=[f,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],f=[f,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],y=[p,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],v=[p,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],b=[p,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],p=[p,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],x=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,w=/\S/,S=i({keywords:[g,m,f,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",y,v,p],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),C={};o(S,["default-code"]),o(s([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),o(s([["pln",/^\s+/,e," 	\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,e,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]),o(s([],[["atv",/^[\S\s]+/]]),["uq.val"]),o(i({keywords:g,hashComments:!0,cStyleComments:!0,types:x}),["c","cc","cpp","cxx","cyc","m"]),o(i({keywords:"null,true,false"}),["json"]),o(i({keywords:m,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:x}),["cs"]),o(i({keywords:h,cStyleComments:!0}),["java"]),o(i({keywords:p,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),o(i({keywords:y,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),o(i({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),o(i({keywords:v,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),o(i({keywords:f,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),o(i({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),o(i({keywords:b,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),o(s([],[["str",/^[\S\s]+/]]),["regex"]);var N=d.PR={createSimpleLexer:s,registerLangHandler:o,sourceDecorator:i,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:d.prettyPrintOne=function(e,t,n){var r=document.createElement("div");return r.innerHTML="<pre>"+e+"</pre>",r=r.firstChild,n&&l(r,n,!0),u({h:t,j:n,c:r,i:1}),r.innerHTML},prettyPrint:d.prettyPrint=function(t,n){function r(){for(var n=d.PR_SHOULD_USE_CONTINUATION?g.now()+250:1/0;m<o.length&&g.now()<n;m++){for(var s=o[m],c=C,p=s;p=p.previousSibling;){var f=p.nodeType,N=(7===f||8===f)&&p.nodeValue;if(N?!/^\??prettify\b/.test(N):3!==f||/\S/.test(p.nodeValue))break;if(N){c={},N.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(e,t,n){c[t]=n});break}}if(p=s.className,(c!==C||v.test(p))&&!b.test(p)){for(f=!1,N=s.parentNode;N;N=N.parentNode)if(S.test(N.tagName)&&N.className&&v.test(N.className)){f=!0;break}if(!f){if(s.className+=" prettyprinted",f=c.lang,!f){var _,f=p.match(y);!f&&(_=a(s))&&w.test(_.tagName)&&(f=_.className.match(y)),f&&(f=f[1])}if(x.test(s.tagName))N=1;else var N=s.currentStyle,k=i.defaultView,N=(N=N?N.whiteSpace:k&&k.getComputedStyle?k.getComputedStyle(s,e).getPropertyValue("white-space"):0)&&"pre"===N.substring(0,3);k=c.linenums,(k="true"===k||+k)||(k=(k=p.match(/\blinenums\b(?::(\d+))?/))?k[1]&&k[1].length?+k[1]:!0:!1),k&&l(s,k,N),h={h:f,c:s,j:k,i:N},u(h)}}}m<o.length?setTimeout(r,250):"function"==typeof t&&t()}for(var s=n||document.body,i=s.ownerDocument||document,s=[s.getElementsByTagName("pre"),s.getElementsByTagName("code"),s.getElementsByTagName("xmp")],o=[],c=0;c<s.length;++c)for(var p=0,f=s[c].length;f>p;++p)o.push(s[c][p]);var s=e,g=Date;g.now||(g={now:function(){return+new Date}});var h,m=0,y=/\blang(?:uage)?-([\w.]+)(?!\S)/,v=/\bprettyprint\b/,b=/\bprettyprinted\b/,x=/pre|xmp/i,w=/^code$/i,S=/^(?:pre|code|xmp)$/i,C={};r()}};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return N})}()}();
