var commJs = {
    initViewPort: function () {
        function adaptVP(a) {
            function c() {
                var c, d;
                return b.uWidth = a.uWidth ? a.uWidth : 640, b.dWidth = a.dWidth ? a.dWidth : window.screen.width || window.screen.availWidth, b.ratio = window.devicePixelRatio ? window.devicePixelRatio : 1, b.userAgent = navigator.userAgent, b.bConsole = a.bConsole ? a.bConsole : !1, a.mode ? (b.mode = a.mode, void 0) : (c = b.userAgent.match(/Android/i), c && (b.mode = "android-2.2", d = b.userAgent.match(/Android\s(\d+.\d+)/i), d && (d = parseFloat(d[1])), 2.2 == d || 2.3 == d ? b.mode = "android-2.2" : 4.4 > d ? b.mode = "android-dpi" : d >= 4.4 && (b.mode = b.dWidth > b.uWidth ? "android-dpi" : "android-scale")), void 0)
            }

            function d() {
                var e, f, g, h, c = "", d = !1;
                switch (b.mode) {
                    case"apple":
                        // c = "width=" + b.uWidth + ", user-scalable=no";
                        c = "width=" + b.uWidth + ",minimum-scale="+window.screen.width/b.uWidth+", user-scalable=no";
                        break;
                    case"android-2.2":
                        a.dWidth || (b.dWidth = 2 == b.ratio ? 720 : 1.5 == b.ratio ? 480 : 1 == b.ratio ? 320 : .75 == b.ratio ? 240 : 480), e = window.screen.width || window.screen.availWidth, 320 == e ? b.dWidth = b.ratio * e : 640 > e && (b.dWidth = e), b.mode = "android-dpi", d = !0;
                    case"android-dpi":
                        f = 160 * b.uWidth / b.dWidth * b.ratio, c = "target-densitydpi=" + f + ", width=" + b.uWidth + ", user-scalable=no", d && (b.mode = "android-2.2");
                        break;
                    case"android-scale":
                        c = "width=" + b.uWidth + ", user-scalable=no"+ ",minimum-scale=" + window.screen.width / b.uWidth
                }
                g = document.querySelector("meta[name='viewport']") || document.createElement("meta"),
                    g.name = "viewport",
                    g.content = c,
                    h = document.getElementsByTagName("head"), h.length > 0 && h[0].appendChild(g);
                console.log(g)
            }

            function e() {
                var a = "";
                for (key in b)a += key + ":" + b[key] + "; ";
                alert(a)
            }

            if (a) {
                var b = {uWidth: 0, dWidth: 0, ratio: 1, mode: "apple", userAgent: null, bConsole: !1};
                c(), d(), b.bConsole && e()
            }
        }
        adaptVP({uWidth: 640});
        // document.body.style.zoom = window.innerWidth/640.05;
    },
    initFastClick: function () {
        /** Shrinkwrap URL:
         *      /v2/bundles/js?modules=fastclick%401.0.6%2Co-autoinit%401.2.0&shrinkwrap=
         */
        !function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";n(1),window.Origami={fastclick:n(2),"o-autoinit":n(4)}},function(t,e){t.exports={name:"__MAIN__",dependencies:{fastclick:"fastclick#*","o-autoinit":"o-autoinit#^1.0.0"}}},function(t,e,n){t.exports=n(3)},function(t,e){"use strict";var n=!1;!function(){/**
         * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
         *
         * @codingstandard ftlabs-jsv2
         * @copyright The Financial Times Limited [All Rights Reserved]
         * @license MIT License (see LICENSE.txt)
         */
        function e(t,n){function o(t,e){return function(){return t.apply(e,arguments)}}var r;if(n=n||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=n.touchBoundary||10,this.layer=t,this.tapDelay=n.tapDelay||200,this.tapTimeout=n.tapTimeout||700,!e.notNeeded(t)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,s=0,u=a.length;s<u;s++)c[a[s]]=o(c[a[s]],c);i&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,o){var i=Node.prototype.removeEventListener;"click"===e?i.call(t,e,n.hijacked||n,o):i.call(t,e,n,o)},t.addEventListener=function(e,n,o){var i=Node.prototype.addEventListener;"click"===e?i.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(t,e,n,o)}),"function"==typeof t.onclick&&(r=t.onclick,t.addEventListener("click",function(t){r(t)},!1),t.onclick=null)}}var o=navigator.userAgent.indexOf("Windows Phone")>=0,i=navigator.userAgent.indexOf("Android")>0&&!o,r=/iP(ad|hone|od)/.test(navigator.userAgent)&&!o,a=r&&/OS 4_\d(_\d)?/.test(navigator.userAgent),c=r&&/OS [6-7]_\d/.test(navigator.userAgent),s=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(r&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},e.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!i;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},e.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},e.prototype.determineEventType=function(t){return i&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},e.prototype.focus=function(t){var e;r&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},e.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},e.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},e.prototype.onTouchStart=function(t){var e,n,o;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],r){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!a){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},e.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},e.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},e.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},e.prototype.onTouchEnd=function(t){var e,n,o,s,u,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,c&&(u=t.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),o=l.tagName.toLowerCase(),"label"===o){if(e=this.findControl(l)){if(this.focus(l),i)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-n>100||r&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),r&&"select"===o||(this.targetElement=null,t.preventDefault()),!1);return!(!r||a||(s=l.fastClickScrollParent,!s||s.fastClickLastScrollTop===s.scrollTop))||(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},e.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},e.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},e.prototype.destroy=function(){var t=this.layer;i&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},e.notNeeded=function(t){var e,n,o,r;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!i)return!0;if(e=document.querySelector("meta[name=viewport]")){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(s&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(r>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(e.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},e.attach=function(t,n){return new e(t,n)},"function"==typeof n&&"object"==typeof n.amd&&n.amd?n(function(){return e}):"undefined"!=typeof t&&t.exports?(t.exports=e.attach,t.exports.FastClick=e):window.FastClick=e}()},function(t,e,n){t.exports=n(5)},function(t,e){"use strict";function n(t){t in o||(o[t]=!0,document.dispatchEvent(new CustomEvent("o."+t)))}var o={};if(window.addEventListener("load",n.bind(null,"load")),window.addEventListener("load",n.bind(null,"DOMContentLoaded")),document.addEventListener("DOMContentLoaded",n.bind(null,"DOMContentLoaded")),document.onreadystatechange=function(){"complete"===document.readyState?(n("DOMContentLoaded"),n("load")):"interactive"!==document.readyState||document.attachEvent||n("DOMContentLoaded")},"complete"===document.readyState?(n("DOMContentLoaded"),n("load")):"interactive"!==document.readyState||document.attachEvent||n("DOMContentLoaded"),document.attachEvent){var i=!1,r=50;try{i=null==window.frameElement&&document.documentElement}catch(a){}i&&i.doScroll&&!function c(){if(!("DOMContentLoaded"in o)){try{i.doScroll("left")}catch(t){return r<5e3?setTimeout(c,r*=1.2):void 0}n("DOMContentLoaded")}}()}}]);
    },
    /**
     * Tab切换
     * @param opts.elmId 元素id
     * @param opts.tabPanel Tab切换主体元素类名
     * @param opts.clickHandler Tab点击事件
     * DOM结构:
     * <div id="elmId">
     *     <div>
     *         <a href="javascript:" class="selected">选项1</a>
     *         <a href="javascript:">选项2</a>
     *     </div>
     *     <div>
     *         <div class="tab-panel" style="display: block"></div>
     *         <div class="tab-panel"></div>
     *     </div>
     * </div>
     */
    tab: function(opts) {
        var oDiv = document.getElementById(opts.elmId);
        var hd = oDiv.getElementsByTagName('div')[0].getElementsByTagName('a');
        var bd = oDiv.getElementsByTagName('div')[1].getElementsByClassName(opts.tabPanel || 'tab-panel');
        for (var i = 0; i < hd.length; i++) {
            hd[i].index = i;
            hd[i].onclick = function() {
                show(this.index);
                if (opts.clickHandler) opts.clickHandler(this,this.index);
            }
        }
        function show(a) {
            var index = a;
            for (var j = 0; j < hd.length; j++) {
                hd[j].className = '';
                bd[j].style.display = 'none';
            }
            hd[index].className = 'selected';
            bd[index].style.display = 'block';
        }
    },
    /**
     * 获取url地址的参数
     * @param name 参数名
     * e.g. 当前地址http://www.cimidesign.com?param=abc, 执行cimi.getUrlParam('param')返回'abc'
     */
    getUrlParam: function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        return r?decodeURIComponent(r[2]):null;
    },
    /**
     * 获取url地址的参数
     * @param url 链接
     * @param name 参数名
     * e.g. 当前地址http://www.cimidesign.com?param=abc, 执行cimi.getUrlParam('param')返回'abc'
     */
    getUrlStringParam: function(url, name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var str = '?'+url.split('?')[1];
        var r = str.substr(1).match(reg);
        return r?decodeURIComponent(r[2]):null;
    },
    /**
     * 判断美居能不能拿到userid
     * @param url 链接
     * @param name 参数名
     * e.g. 当前地址http://www.cimidesign.com?param=abc, 执行cimi.getUrlParam('param')返回'abc'
     */
    quitDialog: function(){
        console.log("quitDialog");
        var elem = document.getElementsByTagName("body")[0];
        elem.removeChild(document.getElementById("c-dialog"));
    }, 
    judgeHaveUserId: function() {
        var html = '<div class="c-dialog">\
                <div class="c-wrap">\
                    <div class="c-title">提示</div>\
                    <div class="c-tips">使用此功能，请把美居升级到最新版本。</div>\
                    <div class="c-btn-group">\
                        <div class="c-btn" onclick="commJs.quitDialog()">知道了</div>\
                    </div>\
                </div>\
            </div>';
        var newElem = document.createElement("div");
        newElem.id = "c-dialog";
        newElem.innerHTML = html;    
        var elem = document.getElementsByTagName("body")[0];
        elem.appendChild(newElem);    

    },
    Dialog: {
        maskId: '__cimi_dialog_mask',
        curTarget: null,
        show: function(elmId,cssText) {
            
            /*if(document.getElementById("j_device_list")){
                $('html').addClass('noscroll');     
                document.getElementById("j_device_list").ontouchmove = function(e){
                    e.stopPropagation();

                };     
            }*/
            
            if(document.getElementById("j_unit_list")){
                
                document.getElementById("j_unit_list").ontouchmove = function(e){
                    e.stopPropagation();
                    e.preventDefault();
                    e.cancelBubble = true;
                };
            }

            var target = document.getElementById(elmId), that = this;

            var maskElm = document.createElement('div');
            maskElm.id = that.maskId;
            maskElm.style.cssText = cssText.maskElmcssText;

            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            document.getElementsByTagName('html')[0].style.height = '100%';
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';

            maskElm.addEventListener('ontouchstart', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.cancelBubble = true;
            }, false);

            if (that.curTarget) {
                that.curTarget.removeAttribute('style');
                that.curTarget.style.cssText = 'display:none';
            }
            if (!document.getElementById(that.maskId)) {
                document.body.appendChild(maskElm);
                maskElm.ontouchstart = function(e){
                    e.stopPropagation();
                    e.preventDefault();
                    e.cancelBubble = true;
                    // document.getElementById(elmId).style.display = "none";
                    // maskElm.parentNode.removeChild(maskElm);
                    // maskElm.ontouchstart = null;
                    //
                };

            }
            
            target.style.cssText =cssText.targetcssText ;
            target.style.marginLeft = '-'+(target.offsetWidth/2)+'px';
            target.style.marginTop = '-'+(target.offsetHeight/2)+'px';
            that.curTarget = target;
        },
        close: function () {
            /*if(document.getElementById("j_device_list")){
                $('html').removeClass('noscroll');
                //document.getElementById("j_device_list").ontouchmove = null;
            }*/
            /*if(document.getElementById("j_unit_list")){
                document.getElementById("j_unit_list").ontouchmove = null;
            }*/
            var target = this.curTarget;
            var maskElm = document.getElementById(this.maskId);
            maskElm.parentNode.removeChild(maskElm);
            target.style.display = 'none';
            document.getElementsByTagName('body')[0].style.overflow = 'visible';
            document.getElementsByTagName('body')[0].style.height = 'auto';
            document.documentElement.style.overflow='visible';
            document.getElementsByTagName('html')[0].style.overflow = 'visible';
            document.getElementsByTagName('html')[0].style.height = 'auto';
            /*var pop = document.getElementById('pop_comm_alert');
            document.body.removeChild(pop);*/
            
        }
    },
    /**
     * 项目ajax请求
     * @param opts.urlType url前缀类型（0：美食烩 1. 大米地图 2.商城 3.获取用户设备列表接口专用）
     * @param opts.type GET/POST
     * @param opts.url 地址后缀
     * @param opts.data 请求参数
     * @param opts.success 成功回调
     * @param opts.error 失败回调
     */
    ajax: function (opts) {
        var baseUrl = '';
        if(location.host =='ce5.midea.com' ){
            switch (opts.urlType) {
                case 0:
                    baseUrl = 'https://ce5.midea.com/mdot/api';
                    break;
                case 1:
                    baseUrl = 'https://ce5.midea.com/mdot/api';
                    break;
                case 2:
                    baseUrl = 'http://sc.cowinmobile.com/api-smile';
                    break;
                case 3:
                    baseUrl = 'https://ce5.midea.com/mdot/api';
                    break;
                case 4:
                    baseUrl = 'https://ce5.midea.com/v1';
                    break;
                case 5:
                    baseUrl = "https://cemdot.midea.com/staticPressureCookerRecipeTest";
                    break;
                case 6:
                    baseUrl ='https://ce5.midea.com';
                    break;
                case 7:
                    baseUrl = "http://ce5.midea.com";
                    break;
                case 8:
                baseUrl ='https://ce5.midea.com';
                    break;
                case 9:
                    baseUrl = "http://ce5.midea.com";
                    break;
                case 10:
                    baseUrl ='https://ce5.midea.com';
                    break;  
                case 11:
                    baseUrl = "https://cemdot.midea.com/staticPressureCookerRecipe";
                    break;          
                default :
                    baseUrl ='https://ce5.midea.com';
                    break;
            }
        }else{
            switch (opts.urlType) {
                case 0:
                    baseUrl = 'https://cemdot.midea.com/mdot/api';
                    break;
                case 1:
                    baseUrl = 'https://cemdot.midea.com/mdot/api';
                    break;
                case 2:
                    baseUrl = 'https://sc.cowinmobile.com/api-smile';
                    break;
                case 3:
                    baseUrl = 'https://cemdot.midea.com/mdot/api';
                    break;
                case 4:
                    baseUrl = 'https://cemdot.midea.com/v1';
                    break;
                case 5:
                    baseUrl = "https://cemdot.midea.com/staticPressureCookerRecipe";
                    break;
                case 6:
                    baseUrl ='https://ce7.midea.com';
                    break;
                case 7:
                    baseUrl ='https://ce7.midea.com';
                    break;
                case 8:
                    baseUrl ='https://ce7.midea.com';
                    break;
                case 9:
                    baseUrl ='https://ce7.midea.com';
                    break;
                case 10:
                    baseUrl ='https://living.midea.com';
                    break;
                case 11:
                    baseUrl = "https://cemdot.midea.com/staticPressureCookerRecipe";
                    break;    
                default :
                    baseUrl ='https://ce7.midea.com';
                    break;
            }
        }
        ccAJAX({
            url: baseUrl+opts.url,
            type: opts.type,
            data: opts.data,
            success: function (data) {
                
                switch (opts.urlType) {
                    case 0:
                        //0：美食汇
                        if (data.retCode == 1) {
                            console.log('****** request success ******');
                            console.log(data);
                            opts.success(data.retInfo);
                        }else {
                            console.log('****** request error ******');
                            console.log(data);
                            opts.error(data);
                        }
                        break;
                    case 1:
                        //1. 大米地图
                        if (data.errorCode == 0) {
                            console.log('****** request success ******');
                            console.log(data);
                            opts.success(data.result);
                        }else {
                            console.log('****** request error ******');
                            console.log(data);
                            opts.error(data);
                        }
                        break;
                    case 2:
                        //2.商城
                        if (!data.code) {
                            console.log('****** request success ******');
                            console.log(data);
                            opts.success(data.list);
                        }else {
                            console.log('****** request error ******');
                            console.log(data);
                            opts.error(data);
                        }
                        break;
                    case 3:
                        //3.获取用户设备列表接口专用
                        if (parseInt(data.errorCode) == 0) {
                            console.log('****** request success ******');
                            console.log(data);
                            opts.success(data.result);
                        }else {
                            console.log('****** request error ******');
                            console.log(data);
                            opts.error(data);
                        }
                        break;
                    case 4:
                        //3.获取用户设备列表接口专用
                        if (parseInt(data.errorCode) == 0) {
                            console.log('****** request success ******');
                            console.log(data);
                            opts.success(data.result);
                        }else {
                            console.log('****** request error ******');
                            console.log(data);
                            opts.error(data);
                        }
                        break;
                    case 5:
                        //3.获取用户设备列表接口专用
                        if (true) {
                            console.log('****** request success ******');
                            console.log('data.resultdata.result',data.retInfo);
                            if(data.retInfo){
                                opts.success(data.retInfo);
                            }else{
                                opts.success(data.result);
                            }

                        } else {
                            console.log('****** request error ******');
                            console.log(data);
                            opts.error(data);
                        }
                        break;
                    case 6:
                        //3.获取用户设备列表接口专用
                        if (true) {
                            console.log('****** request success ******');
                            console.log('data.resultdata.result',data.retInfo);
                            if(data.retInfo){
                                opts.success(data.retInfo);
                            }else{
                                opts.success(data.result);
                            }

                        } else {
                            console.log('****** request error ******');
                            console.log(data);
                            opts.error(data);
                        }
                        break;
                    case 7:
                        //3.获取用户设备列表接口专用
                        if (true) {
                            console.log('****** request success ******');
                            console.log('data.resultdata.result',data.retInfo);
                            if(data.retInfo){
                                opts.success(data.retInfo);
                            }else{
                                opts.success(data.result);
                            }

                        } else {
                            console.log('****** request error ******');
                            console.log(data);
                            opts.error(data);
                        }
                        break;
                    case 8:
                        //3.获取用户设备列表接口专用
                        if (true) {
                            console.log('****** request success ******');
                            console.log('data.resultdata.result',data.retInfo);
                            if(data.retInfo){
                                opts.success(data.retInfo);
                            }else{
                                opts.success(data.result);
                            }

                        } else {
                            console.log('****** request error ******');
                            console.log(data);
                            opts.error(data);
                        }
                        break;
                    default :
                        //3.获取用户设备列表接口专用
                        if (true) {
                            console.log('****** request success ******');
                            console.log('data.resultdata.result',data.retInfo);
                            if(data.retInfo){
                                opts.success(data.retInfo);
                            }else{
                                opts.success(data.result);
                            }

                        } else {
                            console.log('****** request error ******');
                            console.log(data);
                            opts.error(data);
                        }
                        break;
                }
            },
            error: function () {
                console.log(opts.type+':'+baseUrl+opts.url);
                console.log('****** request network error ******');
                opts.error(null, 0);
            }
        });
    },
    /**
     * 收集用户信息
     * */
    collectEnterPage:function(userId,openId){
        var urlInfo;
        //document.referrer
        commJs.ajax({
            urlType: 3,
            type: 'POST',
            url: '/setEnterPageTime',
            data: {
                openId:openId,
                userId:userId,
                pageTitle:document.title,
                fromUrl:sessionStorage.getItem("currentUrl")? JSON.parse(sessionStorage.getItem("currentUrl")):'',
                currentUrl: window.location.href
            },
            success: function (data) {
            },
            error: function (data) {
            }
        });
        urlInfo = window.location.href;
        sessionStorage.setItem("currentUrl",JSON.stringify(urlInfo))
    },
    //跳转链接默认方法，统一加上userId和openId参数
    specialTumpUrl:function(url){
        if(url){
            window.location = url;
        }
    },
    
    jumpUrl: function (url) {
        var prefix = '&now=';
        if (url.indexOf('?') == -1) prefix = '?now=';
        if(commJs.getUrlParam('flag')){
            window.location.href = url+
                prefix+Date.parse(new Date())+
                '&token='+commJs.getUrlParam('token')+'&flag='+commJs.getUrlParam('flag');
        }else{
            window.location.href = url+
                prefix+Date.parse(new Date())+
                '&token='+commJs.getUrlParam('token');
        }
    },
    
    imgError: function (image) {
        // 隐藏图片
        image.style.display = 'none';
    },
    

    
    
    /***************动态加载美居文件****************/
    topTitle:{'text':document.title},
    environment:{mSmartMain:'mSmartMain',mSmartControl:'mSmartControl'},
    deviceListFromMenuId:[],
    Loading:function(){
        console.log("loaded");
        //判断是美居还是微信 美居mSmart 微信mideaShao
        commJs.platformSource = (commJs.getUrlParam('flag') == commJs.environment.mSmartMain || commJs.getUrlParam('flag') == commJs.environment.mSmartControl) ? 'mSmart' : 'mideaShao';
        var flag = (commJs.getUrlParam('flag') == commJs.environment.mSmartMain || commJs.getUrlParam('flag') == commJs.environment.mSmartControl) ? 1 : 0;
        if(sessionStorage.getItem("mSmartMain")){
            commJs.mSmartMain = JSON.parse(sessionStorage.getItem("mSmartMain"))
        }else if(commJs.getUrlParam('flag') == commJs.environment.mSmartMain || commJs.getUrlParam('flag') == commJs.environment.mSmartControl){
            var mSmartMain =commJs.getUrlParam('flag');
            sessionStorage.setItem("mSmartMain", JSON.stringify(mSmartMain));
            commJs.mSmartMain = JSON.parse(sessionStorage.getItem("mSmartMain"));
        }
        if(flag == 1||commJs.mSmartMain){
            if (commJs.mSmartMain == commJs.environment.mSmartControl) {
              document.getElementById("meiJu_topBar").style.display = "block";
            }
            var ua = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(ua)) {
                console.log("ios");
                if(document.getElementById('meiJu_topBar')){
                    document.getElementById('meiJu_topBar').style.paddingTop = '35px';        
                }
                var oHead = document.getElementsByTagName('HEAD').item(0);
                var oScript= document.createElement("script");
                // oScript.type = "text/javascript";
                oScript.src="js/base_ios.js";
                oHead.appendChild( oScript);
                var oHead_1 = document.getElementsByTagName('HEAD').item(0);
                var oScript_1= document.createElement("script");
                // oScript.type = "text/javascript";
                oScript_1.src="js/iosbridge_ios.js";
                oHead_1.appendChild( oScript_1);
            } else if (/android/.test(ua)) {
                var oHead = document.getElementsByTagName('HEAD').item(0);
                var oScript= document.createElement("script");
                // oScript.type = "text/javascript";
                oScript.src="js/base.js";
                oHead.appendChild( oScript);
                var oHead_1 = document.getElementsByTagName('HEAD').item(0);
                var oScript_1= document.createElement("script");
                // oScript.type = "text/javascript";
                oScript_1.src="js/iosbridge.js";
                oHead_1.appendChild( oScript_1);
            }
        }

    },
    hideMenu: false,
    /**
     * 积分计算
     * @param  {[type]} scoreType [description]
     * @return {[type]}           [description]
     */
    invoke: function(scoreType){
        if(scoreType == 'diy'){
            commJs.ajax({
                urlType: 7,
                type: 'POST',
                url: '/operative-userManager/invokePoint/invokePointUserMenuShare',
                data: {
                    'platformSource': commJs.platformSource,
                    'userId': commJs.userInfo.userId
                },
                success: function(data) {
                    
                },
                error: function(msg) {
                    
                }
            });
        }else if(scoreType == 'ofc'){
            commJs.ajax({
                urlType: 7,
                type: 'POST',
                url: '/operative-userManager/invokePoint/invokePointMenuShare',
                data: {
                    'platformSource': commJs.platformSource,
                    'userId': commJs.userInfo.userId
                },
                success: function(data) {
                    
                },
                error: function(msg) {
                    
                }
            });
        }
    },
    /**
     * 超出字数提示
     * @param  {[type]} num [description]
     * @return {[type]}     [description]
     */
    overWordTips: function(num,value){
        if(value.length == num){
            alert("仅支持"+num+"字数<br>输入字数已达上限");
        }
    },
    setWxShare:function (title, desc, imgUrl ,link, scoreType) { //scoreType：达人：diy 官方：ofc 积分系统分达人食谱，官方食谱
        wxShare.title=title || '美勺-美食烩';
        wxShare.desc=desc || '在这里分享与美食有关的一切';
        wxShare.imgUrl=imgUrl||'http://ce-cdn.midea.com/ccs/cookbook/3.6.11/img/share.jpg';
        wxShare.link=link||window.location.href;
        wx.ready(function(){
            if(commJs.hideMenu){
                commJs.hideMenuBtn();
            }
            var local = location.host=='ce5.midea.com'?'ce5.midea.com':'living.midea.com';
            var locate = window.location.href;
            //var index = locate.indexOf('?now')!= -1?locate.indexOf('?now'):locate.indexOf('&now');
            //var index = locate.indexOf('?');
            //var url = locate.slice(0,index);
            //var base64_url =window.btoa(url);
            var base64_url =window.btoa(locate);
            wx.onMenuShareTimeline({

                title: wxShare.title, // 分享标题
                // link: 'living.midea.com/v1/login_auth?reUrl='+base64_url,// 分享链接
                link: 'http://'+local+'/v1/login_auth?reUrl='+base64_url,// 分享链接
                imgUrl: wxShare.imgUrl, // 分享图标
                success: function () {
                    MtaH5.clickStat('share',{'share':wxShare.title});
                    // 用户确认分享后执行的回调函数
                    commJs.invoke(scoreType);
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareAppMessage({
                title: wxShare.title, // 分享标题
                desc: wxShare.desc, // 分享描述
                link: 'http://'+local+'/v1/login_auth?reUrl='+base64_url,// 分享链接
                imgUrl: wxShare.imgUrl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    MtaH5.clickStat('share',{'share':wxShare.title});
                    // 用户确认分享后执行的回调函数
                    commJs.invoke(scoreType);
                },
                cancel: function () {

                    // 用户取消分享后执行的回调函数
                }
            });
        });    
    },
    hideMenuBtn: function(){
        wx.hideMenuItems({
            menuList: ['menuItem:share:appMessage','menuItem:share:timeline','menuItem:share:qq','menuItem:share:weiboApp','menuItem:share:facebook','menuItem:share:QZone'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        });
        wx.hideAllNonBaseMenuItem();
    },
    /********************美居返回***************************/
    goBack:function(){
        window.history.go(-1);
    },

    /****用于获取设备的详细信息如设备信息，用户ID，设备ID****/
    userInfo:{},
    userInformation:function (successCallback) {
        // var localHost= location.host=='ce5.midea.com'?'http://ce5.midea.com':'http://living.midea.com';
            var now = Date.parse(new Date());
            var token = commJs.getUrlParam('token');
            var userInformation = {};
            ccAJAX({
                // url: 'http://living.midea.com/v1/get_env',
                url: 'https://'+ location.host +'/v1/get_env',
                type: 'GET',
                data: {
                    'now': now,
                    'token': token
                },
                success: function (data) {
                    if (data && data.errorCode == 9907) {
                        if(sessionStorage.getItem("cookbook-userInfo")){
                            commJs.userInfo = JSON.parse(sessionStorage.getItem("cookbook-userInfo"));
                            // successCallback();
                            if(commJs.userInfo.userId == '@userid@'){
                                console.log(commJs.userInfo.userId);
                                commJs.judgeHaveUserId();
                            }
                        }else{
                            var location =  window.location.href;
                            /*if(location.indexOf('?now')!= -1){
                                var index = location.indexOf('?now');
                            }else if(location.indexOf('&now')!= -1){
                                var index = location.indexOf('&now');
                            }else{
                                var index = -2;
                            }*/
                            /*var index = location.indexOf('?now')!= -1?location.indexOf('?now'):location.indexOf('&now');
                            var url = location.slice(0,index+1);*/
                            var url = location;
                            var base64_url =window.btoa(url);
                            //将dangqianURL
                            window.location.href =  'http://living.midea.com'+'/v1/login_auth?reUrl='+base64_url;
                            // 分享链接
                        }
                        
                    }else{
                        userInformation.userId = data.result.userId;
                        userInformation.openId = data.result.openId;
                        userInformation.deviceType = data.result.deviceType;
                        userInformation.modelNo = data.result.modelNo;
                        userInformation.deviceId = data.result.deviceId;
                        userInformation.nickName = data.result.nickName;
                        sessionStorage.setItem("cookbook-userInfo",JSON.stringify(userInformation));
                        commJs.userInfo = JSON.parse(sessionStorage.getItem("cookbook-userInfo"));
                        // successCallback();
                    }
                    // if(sessionStorage.getItem("mSmartMain")){
                    //     commJs.mSmartMain =  JSON.parse(sessionStorage.getItem("mSmartMain"))
                    // }else if(commJs.getUrlParam('flag') ==commJs.environment.mSmartMain||commJs.getUrlParam('flag') ==commJs.environment.mSmartControl){
                    //     var flag =commJs.getUrlParam('flag');
                    //     sessionStorage.setItem("mSmartMain", JSON.stringify(flag));
                    //     commJs.mSmartMain = JSON.parse(sessionStorage.getItem("mSmartMain"));
                    // }
                    successCallback();
                },
                error: function () {
                }
            });
    },

    arrayInclude: function (array,obj) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].toString() == obj) {
                    return true;
                }
            }
            return false;
    },

    getDeviceListFromMenuId: function () {
        var userId = JSON.parse(sessionStorage.getItem("cookbook-userInfo")).userId;
        if(commJs.getUrlParam('menuId')){
            ccAJAX({
                urlType: 10,
                url: '/mdot/api/menu/getDeviceList/' + commJs.getUrlParam('menuId') +'/' + userId + '/' + userId,
                type: 'GET',
                success: function (data) {
                    if(data.errorCode==0){
                        commJs.deviceListFromMenuId.length=0;
                        for(var i=0;i<data.result.length;i++){
                            commJs.deviceListFromMenuId.push(data.result[i].modelNo)
                        }

                    }
                },
                error: function () {
                    console.log('error');
                }
            });
        }
    },

    loadingInfomation:function(){
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript= document.createElement("script");
        oScript.src=location.host =='ce5.midea.com'?"http://ce5.midea.com/v1/wxconfig":"http://living.midea.com/v1/wxconfig";
        oHead.appendChild( oScript);
        console.log('oScript',oScript)
    }

};


//cdn图片水印以及压缩
var myCollectionPicParams =
  "?x-oss-process=image/resize,w_220/quality,q_90/watermark,image_Y2NzL2Nvb2tib29rL21lbnVJY29uUGljcy93YXRlcm1hcmsvbWlkZWFfbG9nby5wbmc=,t_100,g_se,x_20,y_20";
var mainPicParams =
  "?x-oss-process=image/resize,w_640/quality,q_90/watermark,image_Y2NzL2Nvb2tib29rL21lbnVJY29uUGljcy93YXRlcm1hcmsvbWlkZWFfbG9nby5wbmc=,t_100,g_se,x_20,y_20";
var stepsPicParams =
  "?x-oss-process=image/resize,w_460/quality,q_90/watermark,image_Y2NzL2Nvb2tib29rL21lbnVJY29uUGljcy93YXRlcm1hcmsvbWlkZWFfbG9nby5wbmc=,t_100,g_se,x_20,y_20";

/**
* ajax请求
* @param t.type GET/POST
* @param t.url 地址后缀
* @param t.data 请求参数
* @param t.success 成功回调
* @param t.error 失败回调
* e.g. ccAJAX({ url: '', type: 'GET', data: {}, success: function (data) {}, error: function () {} });
*/
Window.prototype.ccAJAX = function (t) {
    var e = new XMLHttpRequest, params = formatParams(t.data), successCallback = t.success, errorCallback = t.error;
    e.onreadystatechange = function () {
        4 == e.readyState && (200 == e.status || 201 == e.status ? successCallback(JSON.parse(e.responseText)) : errorCallback())
    };
    if (t.type == 'GET') {
        e.open(t.type, t.url + '?' + params, true);
        e.send(null);
    } else if (t.type == 'POST' || t.type == 'PUT' || t.type == 'DELETE') {
        e.open(t.type, t.url, true);
        //e.setRequestHeader("Cache-Control", "no-cache");
        //e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        e.send(params);
    }

    //格式化参数
    function formatParams(data) {
        var arr = [];
        for (var key in data) {
            arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        return arr.join('&');
    }
};

/**
     * 给元素添加绑定事件
     * e.g. document.addEvent(document.getElementById('id'), 'click', function (e){});
     */
Document.prototype.addEvent = function (obj, type, handle) {
    try {  // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type, handle, false);
    } catch (e) {
        try {  // IE8.0及其以下版本
            obj.attachEvent('on' + type, handle);
        } catch (e) {  // 早期浏览器
            obj['on' + type] = handle;
        }
    }
};

commJs.initViewPort();
commJs.Loading();
commJs.loadingInfomation();

//FastClick组件
commJs.initFastClick();
var attachFastClick = Origami.fastclick;
attachFastClick(document.body);


/**数据埋点、* mta* */
var _mtac = {"performanceMonitor":1,"senseQuery":1};
(function() {
    var mta = document.createElement("script");
    mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.4";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "500429915");
    mta.setAttribute("cid", "500429920");
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
})();

var mta = mta || {};

//重写alert方法
function alert(message) {
    var dom = document.createElement('div');
    dom.className = 'c-alert';
    dom.id = 'c-alert';
    dom.innerHTML = '<div class="c-tips-block"><div class="c-tips-text">'+message+'</div></div>';
    document.body.appendChild(dom);
    setTimeout(function(){
        document.body.removeChild(dom);
    },2000);
    /*var dom = document.createElement('div');
    dom.className = 'g-pop-dialog';
    dom.id = 'pop_comm_alert';
    document.body.appendChild(dom);

    var pop = document.getElementById('pop_comm_alert');
    pop.innerHTML = '<h2>提示</h2>\
                    <div class="m-con">\
                        <p>'+message+'</p>\
                    </div>\
                    <div class="m-btn">\
                        <a href="javascript:commJs.Dialog.close()">确认</a>\
                    </div>';

    commJs.Dialog.show('pop_comm_alert',diaglog.show);*/
}

/**
 * ajax请求
 * @param t.type GET/POST
 * @param t.url 地址后缀
 * @param t.data 请求参数
 * @param t.success 成功回调
 * @param t.error 失败回调
 * e.g. ccAJAX({ url: '', type: 'GET', data: {}, success: function (data) {}, error: function () {} });
 */
Window.prototype.ccAJAX = function (t) {
    var e = new XMLHttpRequest, params = formatParams(t.data), successCallback = t.success, errorCallback = t.error, timeoutCallback = t.timeout;
    e.timeout = 30 * 10000; //设置请求超时时间为30s
    e.onreadystatechange = function () {
        4 == e.readyState && (200 == e.status || 201 == e.status ? successCallback(JSON.parse(e.responseText)) : errorCallback())
    };
    e.ontimeout = function () {
        timeoutCallback();
    } //timeout回调
    if (t.type == 'GET') {
        e.open(t.type, t.url+'?'+params, true);
        e.send(null);
    }else if (t.type == 'POST' || t.type == 'PUT' || t.type == 'DELETE') {
        e.open(t.type, t.url, true);
        //e.setRequestHeader("Cache-Control", "no-cache");
        //e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        e.send(params);
    }

    //格式化参数
    function formatParams(data) {
        var arr = [];
        for (var key in data) {
            arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        return arr.join('&');
    }
};

/**
 * 给元素添加绑定事件
 * e.g. document.addEvent(document.getElementById('id'), 'click', function (e){});
 */
Document.prototype.addEvent = function (obj,type,handle) {
    try{  // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type,handle,false);
    }catch(e){
        try{  // IE8.0及其以下版本
            obj.attachEvent('on' + type,handle);
        }catch(e){  // 早期浏览器
            obj['on' + type] = handle;
        }
    }
};

//微信分享
var wxShare = {
    title: '美勺-美食烩',
    desc: '在这里分享与美食有关的一切',
    link: window.location.href,
    imgUrl:'img/share.jpg'
};

document.setTitle = function() {
  var i = document.createElement('iframe');
  i.src = '//m.baidu.com/favicon.ico';
  i.style.display = 'none';
  i.onload = function() {
    setTimeout(function(){
      i.remove();
    }, 9)
  }
  document.body.appendChild(i);
};

document.setTitle();
(function(){  

    if (typeof(WeixinJSBridge) == "undefined") {  
        document.addEventListener("WeixinJSBridgeReady", function (e) {  
            setTimeout(function(){  
                WeixinJSBridge.invoke('setFontSizeCallback',{"fontSize":0}, function(res) {  
                    // alert(JSON.stringify(res));  
                });  
            },0);  
        });  
    } else {  
        setTimeout(function(){  
            WeixinJSBridge.invoke('setFontSizeCallback',{"fontSize":0}, function(res) {  
                // alert(JSON.stringify(res));  
            });  
        },0);  
    }  
})();




