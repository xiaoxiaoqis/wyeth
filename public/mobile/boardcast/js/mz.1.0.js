var _protocol=(("https:"==document.location.protocol)?" https://":" http://");var _mz_urlpre=_protocol+"wx.cn.miaozhen.com/e.gif";_mzh=window._mzh||[];_mzt=window._mzt||[];_mz_dp=window._mz_dp||[];_mzh.push(["evt._urlpre",_mz_urlpre]);(function(){var b=parseInt((new Date()).getTime()/1000);var a=b-b%300;var d=document.createElement("script");d.type="text/javascript";d.async=true;d.src=_protocol+"js.miaozhen.com/t.js?v="+a;var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(d,c)})();var _mz_uid="xxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(d){var b=Math.random()*16|0,a=d=="x"?b:(b&3|8);return a.toString(16)});var _mz_wx_p,_mz_wx_r,_mz_wx_n,_mz_wx_o,_openid,_mz_wx_puid,_mz_utm_source,_mz_kol_id,_mz_wx_page,_mz_wx_b;function _mz_qs(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)","i");var d=window.location.search.substr(1).match(b);if(d!=null){try{_mz_wx_set({type:"local",key:a+"_"+_mwx["siteId"]+"_"+_openid,value:d[2],time:14,path:"/"})}catch(f){}return unescape(d[2])}else{try{var g=_mz_wx_get({type:"local",key:a+"_"+_mwx["siteId"]+"_"+_openid});return g==null?null:unescape(g)}catch(f){return null}}}function _mz_wx_shareUrl(a){_mz_wx_init(_mwx["openId"]);a=a.replace(/(\?|&)(_mz_wx_r|_mz_wx_p|_mz_wx_n|_mz_wx_o|_mz_wx_puid|_mz_utm_source)=([^&]*)/gi,function(d){if(d.indexOf("?")!=-1){return"?"}else{return""}});var c=a.substr(a.lastIndexOf("http"),a.size);var b=(c.indexOf("?")==(c.length-1))?"":((c.indexOf("?")=="-1")?"?":"&");if(_mz_wx_b){a+=b+"_mz_wx_r="+_mz_wx_r+"&_mz_wx_p="+_mz_wx_p+"&_mz_wx_n="+parseInt(_mz_wx_n)+"&_mz_wx_o="+_openid+"&_mz_wx_puid="+_mz_uid}else{a+=b+"_mz_wx_r="+_mz_wx_r+"&_mz_wx_p="+_mz_wx_p+"&_mz_wx_n="+(parseInt(_mz_wx_n)+1)+"&_mz_wx_o="+_openid+"&_mz_wx_puid="+_mz_uid}if(_mz_utm_source!=null){a+="&_mz_utm_source="+_mz_utm_source}return a}function _mz_wx_evt(d,e,c){var a=0;_mz_wx_init(_mwx["openId"]);if(/^[1-9]+[0-9]*]*$/.test(e)){a=1;_mz_wx_page=e}var f=_mz_wx_get({type:"session",key:"session_"+_mwx["siteId"]+"_"+_mz_wx_o});if(!f){_mz_wx_set({type:"session",key:"session_"+_mwx["siteId"]+"_"+_mz_wx_o,value:_mz_uid+"_"+new Date().getTime(),time:null,path:"/"});_mzh.push(["evt._set_wxsid",_mwx["siteId"]],["evt._set_wxeid",300001],["evt._set_wxp",_mz_wx_p],["evt._set_wxr",_mz_wx_r],["evt._set_wxn",_mz_wx_n],["evt._set_wxo",_openid],["evt._set_wxext",c],["evt._set_utm_source",_mz_utm_source],["evt._set_kol",_mz_kol_id],["evt._set_page",_mz_wx_page],["evt._set_wxpuid",_mz_wx_puid],["evt._set_wxuid",_mz_uid],["evt._send"])}_mzh.push(["evt._set_wxsid",_mwx["siteId"]],["evt._set_wxeid",d],["evt._set_wxp",_mz_wx_p],["evt._set_wxr",_mz_wx_r],["evt._set_wxn",_mz_wx_n],["evt._set_wxo",_openid],["evt._set_wxext",c],["evt._set_utm_source",_mz_utm_source],["evt._set_page",_mz_wx_page],["evt._set_wxpuid",_mz_wx_puid],["evt._set_wxuid",_mz_uid],["evt._send"]);if(a){setTimeout("_mz_wx_timer_start("+330000+")",5000)}}function _mz_timer_start(b,a){_mzt.push(b);if(a){_mzh.push([b+"._urlpre",a])}_mz_simple(b+"._timer_start")}function _mz_timer_start_x(b,a){for(i=0;i<=_mzt.length;i++){_mz_timer_stop(_mzt[i])}_mzt=[];_mzt.push(b);_mz_timer_start(b,a)}function _mz_timer_stop(a){_mz_simple(a+"._timer_stop")}function _mz_simple(a){_mzh.push(["_simple",a])}function _mz_simple_param(c,b,a){_mz_dp[c]=_mz_dp[c]||{};_mz_dp[c][b]=a}function _mz_wx_timer_start(a){_mz_timer_start_x(1,_mz_urlpre+"?wxsid="+_mwx["siteId"]+"&wxeid="+a+"&wxo="+_openid+"&wxuid="+_mz_uid)}function _mz_wx_init(b){if(b==null||b.length==0){var f="";try{f=_mz_wx_get({type:"local",key:"openid_"+_mwx["siteId"]});f==null?(_openid=_mz_uid,_mz_wx_set({type:"local",key:"openid_"+_mwx["siteId"],value:_openid,time:30,path:"/"})):_openid=unescape(f)}catch(d){_openid=_mz_uid}}else{_openid=b}_mz_wx_p=_mz_qs("_mz_wx_p");_mz_wx_r=_mz_qs("_mz_wx_r");_mz_wx_n=_mz_qs("_mz_wx_n");_mz_wx_o=_mz_qs("_mz_wx_o");_mz_wx_puid=_mz_qs("_mz_wx_puid");_mz_utm_source=_mz_qs("_mz_utm_source");_mz_kol_id=_mz_qs("_mz_kol_id");_mz_wx_b=_mz_wx_o!=null&&_openid==_mz_wx_o;null==_mz_wx_p||null==_mz_wx_r||null==_mz_wx_n||null==_mz_wx_o||null==_mz_wx_puid?(_mz_wx_n=0,_mz_wx_o=_mz_wx_r=_mz_wx_p=_openid,_mz_wx_puid=_mz_uid):_mz_wx_o!=_openid&&(_mz_wx_p=_mz_wx_o)}function _mz_wx_get(a){switch(a.type){case"local":if(window.localStorage){return localStorage.getItem(a.key)||_mz_wx_get_cookie(a.key)}else{return _mz_wx_get_cookie(a.key)}break;case"session":if(window.sessionStorage){return sessionStorage.getItem(a.key)||_mz_wx_get_cookie(a.key)}else{return _mz_wx_get_cookie(a.key)}break}}function _mz_wx_set(a){switch(a.type){case"local":if(window.localStorage){return localStorage.setItem(a.key,a.value)||_mz_wx_set_cookie(a)}else{return _mz_wx_set_cookie(a)}break;case"session":if(window.sessionStorage){return sessionStorage.setItem(a.key,a.value)||_mz_wx_set_cookie(a)}else{return _mz_wx_set_cookie(a)}break}}function _mz_wx_get_cookie(m){var r="",q=m||{},p="",n="",k="",o=false,j=document.cookie.split(";"),h=0;for(r=0,h=j.length;r<h;r++){p=j[r].split("=");n=p[0].replace(/^\s+|\s+$/g,"");if(n==q.key){o=true;if(p.length>1){k=unescape(p[1].replace(/^\s+|\s+$/g,""))}break}p=null;n=""}if(k&&k.length>0){return k}if(!o){return null}}function _mz_wx_set_cookie(a){var d=a||{};var b=new Date();b.setTime(b.getTime());if(d.time){d.time=d.time*1000*60*60*24}var c=new Date(b.getTime()+d.time);document.cookie=d.key+"="+escape(d.value)+((d.time)?";expires="+c.toGMTString():"")+((d.path)?";path="+d.path:"")+((d.domain)?";domain="+d.domain:"")+((d.secure)?";secure":"")}function _mz_wx_view(b,a){_mz_wx_evt(300002,b,a)}function _mz_wx_timeline(){_mz_wx_evt(340001)}function _mz_wx_friend(){_mz_wx_evt(340002)}function _mz_wx_qq(){_mz_wx_evt(340003)}function _mz_wx_weibo(){_mz_wx_evt(340004)}function _mz_wx_network(a){_mz_wx_evt(340011,0,a)}function _mz_wx_custom(a){_mz_wx_evt(320000+a)}_mz_simple_param(0,"timer_start",[5,10*60,0,"v","st:$1,si:$2,"]);function onBridgeReady(){WeixinJSBridge.invoke("getNetworkType",{},function(b){if(b.err_msg){var a=b.err_msg.split(":");if(a.length>1){_mz_wx_network(a[1])}}})}if(typeof WeixinJSBridge=="undefined"){if(document.addEventListener){document.addEventListener("WeixinJSBridgeReady",onBridgeReady,false)}else{if(document.attachEvent){document.attachEvent("WeixinJSBridgeReady",onBridgeReady);document.attachEvent("onWeixinJSBridgeReady",onBridgeReady)}}}else{onBridgeReady()};