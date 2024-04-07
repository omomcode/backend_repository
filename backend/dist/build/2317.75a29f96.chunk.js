(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2317],{97223:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.isSafari=l.isFirefox=void 0;var r=t(31094);const o=r.memoize(()=>/firefox/i.test(navigator.userAgent));l.isFirefox=o;const i=r.memoize(()=>Boolean(window.safari));l.isSafari=i},40878:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});var r=t(31094);class o{enter(d){const c=this.entered.length,n=e=>this.isNodeInDocument(e)&&(!e.contains||e.contains(d));return this.entered=r.union(this.entered.filter(n),[d]),c===0&&this.entered.length>0}leave(d){const c=this.entered.length;return this.entered=r.without(this.entered.filter(this.isNodeInDocument),d),c>0&&this.entered.length===0}reset(){this.entered=[]}constructor(d){this.entered=[],this.isNodeInDocument=d}}l.EnterLeaveCounter=o},31639:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});var r=t(40878),o=t(49649),i=t(79131),d=e(t(24445)),c=t(71508);function n(f,a,u){return a in f?Object.defineProperty(f,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):f[a]=u,f}function e(f){if(f&&f.__esModule)return f;var a={};if(f!=null){for(var u in f)if(Object.prototype.hasOwnProperty.call(f,u)){var g=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(f,u):{};g.get||g.set?Object.defineProperty(a,u,g):a[u]=f[u]}}return a.default=f,a}function s(f){for(var a=1;a<arguments.length;a++){var u=arguments[a]!=null?arguments[a]:{},g=Object.keys(u);typeof Object.getOwnPropertySymbols=="function"&&(g=g.concat(Object.getOwnPropertySymbols(u).filter(function(E){return Object.getOwnPropertyDescriptor(u,E).enumerable}))),g.forEach(function(E){n(f,E,u[E])})}return f}class _{profile(){var a,u;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((a=this.dragStartSourceIds)===null||a===void 0?void 0:a.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((u=this.dragOverTargetIds)===null||u===void 0?void 0:u.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const a=this.rootElement;if(a!==void 0){if(a.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");a.__isReactDndBackendSetUp=!0,this.addEventListeners(a)}}teardown(){const a=this.rootElement;if(a!==void 0&&(a.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var u;(u=this.window)===null||u===void 0||u.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(a,u,g){return this.sourcePreviewNodeOptions.set(a,g),this.sourcePreviewNodes.set(a,u),()=>{this.sourcePreviewNodes.delete(a),this.sourcePreviewNodeOptions.delete(a)}}connectDragSource(a,u,g){this.sourceNodes.set(a,u),this.sourceNodeOptions.set(a,g);const E=p=>this.handleDragStart(p,a),h=p=>this.handleSelectStart(p);return u.setAttribute("draggable","true"),u.addEventListener("dragstart",E),u.addEventListener("selectstart",h),()=>{this.sourceNodes.delete(a),this.sourceNodeOptions.delete(a),u.removeEventListener("dragstart",E),u.removeEventListener("selectstart",h),u.setAttribute("draggable","false")}}connectDropTarget(a,u){const g=p=>this.handleDragEnter(p,a),E=p=>this.handleDragOver(p,a),h=p=>this.handleDrop(p,a);return u.addEventListener("dragenter",g),u.addEventListener("dragover",E),u.addEventListener("drop",h),()=>{u.removeEventListener("dragenter",g),u.removeEventListener("dragover",E),u.removeEventListener("drop",h)}}addEventListeners(a){a.addEventListener&&(a.addEventListener("dragstart",this.handleTopDragStart),a.addEventListener("dragstart",this.handleTopDragStartCapture,!0),a.addEventListener("dragend",this.handleTopDragEndCapture,!0),a.addEventListener("dragenter",this.handleTopDragEnter),a.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),a.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),a.addEventListener("dragover",this.handleTopDragOver),a.addEventListener("dragover",this.handleTopDragOverCapture,!0),a.addEventListener("drop",this.handleTopDrop),a.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(a){a.removeEventListener&&(a.removeEventListener("dragstart",this.handleTopDragStart),a.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),a.removeEventListener("dragend",this.handleTopDragEndCapture,!0),a.removeEventListener("dragenter",this.handleTopDragEnter),a.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),a.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),a.removeEventListener("dragover",this.handleTopDragOver),a.removeEventListener("dragover",this.handleTopDragOverCapture,!0),a.removeEventListener("drop",this.handleTopDrop),a.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const a=this.monitor.getSourceId(),u=this.sourceNodeOptions.get(a);return s({dropEffect:this.altKeyPressed?"copy":"move"},u||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const a=this.monitor.getSourceId(),u=this.sourcePreviewNodeOptions.get(a);return s({anchorX:.5,anchorY:.5,captureDraggingState:!1},u||{})}isDraggingNativeItem(){const a=this.monitor.getItemType();return Object.keys(d).some(u=>d[u]===a)}beginDragNativeItem(a,u){this.clearCurrentDragSourceNode(),this.currentNativeSource=i.createNativeDragSource(a,u),this.currentNativeHandle=this.registry.addSource(a,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(a){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=a;const u=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var g;return(g=this.rootElement)===null||g===void 0?void 0:g.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},u)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var a;(a=this.window)===null||a===void 0||a.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(a,u){a.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(u))}handleDragEnter(a,u){this.dragEnterTargetIds.unshift(u)}handleDragOver(a,u){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(u)}handleDrop(a,u){this.dropTargetIds.unshift(u)}constructor(a,u,g){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=E=>{const h=this.sourceNodes.get(E);return h&&o.getNodeClientOffset(h)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=E=>Boolean(E&&this.document&&this.document.body&&this.document.body.contains(E)),this.endDragIfSourceWasRemovedFromDOM=()=>{const E=this.currentDragSourceNode;E==null||this.isNodeInDocument(E)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=E=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(E||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=E=>{if(E.defaultPrevented)return;const{dragStartSourceIds:h}=this;this.dragStartSourceIds=null;const p=o.getEventClientOffset(E);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(h||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:p});const{dataTransfer:D}=E,L=i.matchNativeItemType(D);if(this.monitor.isDragging()){if(D&&typeof D.setDragImage=="function"){const O=this.monitor.getSourceId(),m=this.sourceNodes.get(O),I=this.sourcePreviewNodes.get(O)||m;if(I){const{anchorX:T,anchorY:$,offsetX:x,offsetY:P}=this.getCurrentSourcePreviewNodeOptions(),N={anchorX:T,anchorY:$},M={offsetX:x,offsetY:P},R=o.getDragPreviewOffset(m,I,p,N,M);D.setDragImage(I,R.x,R.y)}}try{D?.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(E.target);const{captureDraggingState:A}=this.getCurrentSourcePreviewNodeOptions();A?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(L)this.beginDragNativeItem(L);else{if(D&&!D.types&&(E.target&&!E.target.hasAttribute||!E.target.hasAttribute("draggable")))return;E.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=E=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var h;(h=this.currentNativeSource)===null||h===void 0||h.loadDataTransfer(E.dataTransfer)}if(!this.enterLeaveCounter.enter(E.target)||this.monitor.isDragging())return;const{dataTransfer:D}=E,L=i.matchNativeItemType(D);L&&this.beginDragNativeItem(L,D)},this.handleTopDragEnter=E=>{const{dragEnterTargetIds:h}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=E.altKey,h.length>0&&this.actions.hover(h,{clientOffset:o.getEventClientOffset(E)}),h.some(D=>this.monitor.canDropOnTarget(D))&&(E.preventDefault(),E.dataTransfer&&(E.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=E=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var h;(h=this.currentNativeSource)===null||h===void 0||h.loadDataTransfer(E.dataTransfer)}},this.handleTopDragOver=E=>{const{dragOverTargetIds:h}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){E.preventDefault(),E.dataTransfer&&(E.dataTransfer.dropEffect="none");return}this.altKeyPressed=E.altKey,this.lastClientOffset=o.getEventClientOffset(E),this.scheduleHover(h),(h||[]).some(D=>this.monitor.canDropOnTarget(D))?(E.preventDefault(),E.dataTransfer&&(E.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?E.preventDefault():(E.preventDefault(),E.dataTransfer&&(E.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=E=>{this.isDraggingNativeItem()&&E.preventDefault(),this.enterLeaveCounter.leave(E.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=E=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var h;E.preventDefault(),(h=this.currentNativeSource)===null||h===void 0||h.loadDataTransfer(E.dataTransfer)}else i.matchNativeItemType(E.dataTransfer)&&E.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=E=>{const{dropTargetIds:h}=this;this.dropTargetIds=[],this.actions.hover(h,{clientOffset:o.getEventClientOffset(E)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=E=>{const h=E.target;typeof h.dragDrop=="function"&&(h.tagName==="INPUT"||h.tagName==="SELECT"||h.tagName==="TEXTAREA"||h.isContentEditable||(E.preventDefault(),h.dragDrop()))},this.options=new c.OptionsReader(u,g),this.actions=a.getActions(),this.monitor=a.getMonitor(),this.registry=a.getRegistry(),this.enterLeaveCounter=new r.EnterLeaveCounter(this.isNodeInDocument)}}l.HTML5BackendImpl=_},87971:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});class t{interpolate(o){const{xs:i,ys:d,c1s:c,c2s:n,c3s:e}=this;let s=i.length-1;if(o===i[s])return d[s];let _=0,f=e.length-1,a;for(;_<=f;){a=Math.floor(.5*(_+f));const E=i[a];if(E<o)_=a+1;else if(E>o)f=a-1;else return d[a]}s=Math.max(0,f);const u=o-i[s],g=u*u;return d[s]+c[s]*u+n[s]*g+e[s]*u*g}constructor(o,i){const{length:d}=o,c=[];for(let h=0;h<d;h++)c.push(h);c.sort((h,p)=>o[h]<o[p]?-1:1);const n=[],e=[],s=[];let _,f;for(let h=0;h<d-1;h++)_=o[h+1]-o[h],f=i[h+1]-i[h],e.push(_),n.push(f),s.push(f/_);const a=[s[0]];for(let h=0;h<e.length-1;h++){const p=s[h],D=s[h+1];if(p*D<=0)a.push(0);else{_=e[h];const L=e[h+1],A=_+L;a.push(3*A/((A+L)/p+(A+_)/D))}}a.push(s[s.length-1]);const u=[],g=[];let E;for(let h=0;h<a.length-1;h++){E=s[h];const p=a[h],D=1/e[h],L=p+a[h+1]-E-E;u.push((E-p-L)*D),g.push(L*D*D)}this.xs=o,this.ys=i,this.c1s=a,this.c2s=u,this.c3s=g}}l.MonotonicInterpolant=t},69227:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});class t{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(o=>{Object.defineProperty(this.item,o,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${o}" until the drop event.`),null}})})}loadDataTransfer(o){if(o){const i={};Object.keys(this.config.exposeProperties).forEach(d=>{const c=this.config.exposeProperties[d];c!=null&&(i[d]={value:c(o,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,i)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(o,i){return i===o.getSourceId()}endDrag(){}constructor(o){this.config=o,this.item={},this.initializeExposedProperties()}}l.NativeDragSource=t},79780:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.getDataFromDataTransfer=t;function t(r,o,i){const d=o.reduce((c,n)=>c||r.getData(n),"");return d??i}},79131:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.createNativeDragSource=i,l.matchNativeItemType=d;var r=t(153),o=t(69227);function i(c,n){const e=r.nativeTypesConfig[c];if(!e)throw new Error(`native type ${c} has no configuration`);const s=new o.NativeDragSource(e);return s.loadDataTransfer(n),s}function d(c){if(!c)return null;const n=Array.prototype.slice.call(c.types||[]);return Object.keys(r.nativeTypesConfig).filter(e=>{const s=r.nativeTypesConfig[e];return s?.matchesTypes?s.matchesTypes.some(_=>n.indexOf(_)>-1):!1})[0]||null}},153:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.nativeTypesConfig=void 0;var r=i(t(24445)),o=t(79780);function i(c){if(c&&c.__esModule)return c;var n={};if(c!=null){for(var e in c)if(Object.prototype.hasOwnProperty.call(c,e)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(c,e):{};s.get||s.set?Object.defineProperty(n,e,s):n[e]=c[e]}}return n.default=c,n}const d={[r.FILE]:{exposeProperties:{files:c=>Array.prototype.slice.call(c.files),items:c=>c.items,dataTransfer:c=>c},matchesTypes:["Files"]},[r.HTML]:{exposeProperties:{html:(c,n)=>o.getDataFromDataTransfer(c,n,""),dataTransfer:c=>c},matchesTypes:["Html","text/html"]},[r.URL]:{exposeProperties:{urls:(c,n)=>o.getDataFromDataTransfer(c,n,"").split(`
`),dataTransfer:c=>c},matchesTypes:["Url","text/uri-list"]},[r.TEXT]:{exposeProperties:{text:(c,n)=>o.getDataFromDataTransfer(c,n,""),dataTransfer:c=>c},matchesTypes:["Text","text/plain"]}};l.nativeTypesConfig=d},24445:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.HTML=l.TEXT=l.URL=l.FILE=void 0;const t="__NATIVE_FILE__";l.FILE=t;const r="__NATIVE_URL__";l.URL=r;const o="__NATIVE_TEXT__";l.TEXT=o;const i="__NATIVE_HTML__";l.HTML=i},49649:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.getNodeClientOffset=d,l.getEventClientOffset=c,l.getDragPreviewOffset=s;var r=t(97223),o=t(87971);const i=1;function d(_){const f=_.nodeType===i?_:_.parentElement;if(!f)return null;const{top:a,left:u}=f.getBoundingClientRect();return{x:u,y:a}}function c(_){return{x:_.clientX,y:_.clientY}}function n(_){var f;return _.nodeName==="IMG"&&(r.isFirefox()||!(!((f=document.documentElement)===null||f===void 0)&&f.contains(_)))}function e(_,f,a,u){let g=_?f.width:a,E=_?f.height:u;return r.isSafari()&&_&&(E/=window.devicePixelRatio,g/=window.devicePixelRatio),{dragPreviewWidth:g,dragPreviewHeight:E}}function s(_,f,a,u,g){const E=n(f),p=d(E?_:f),D={x:a.x-p.x,y:a.y-p.y},{offsetWidth:L,offsetHeight:A}=_,{anchorX:O,anchorY:m}=u,{dragPreviewWidth:I,dragPreviewHeight:T}=e(E,f,L,A),$=()=>{let y=new o.MonotonicInterpolant([0,.5,1],[D.y,D.y/A*T,D.y+T-A]).interpolate(m);return r.isSafari()&&E&&(y+=(window.devicePixelRatio-1)*T),y},x=()=>new o.MonotonicInterpolant([0,.5,1],[D.x,D.x/L*I,D.x+I-L]).interpolate(O),{offsetX:P,offsetY:N}=g,M=P===0||P,R=N===0||N;return{x:M?P:x(),y:R?N:$()}}},71508:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});class t{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var o;return!((o=this.globalContext)===null||o===void 0)&&o.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var o;return((o=this.optionsArgs)===null||o===void 0?void 0:o.rootElement)||this.window}constructor(o,i){this.ownerDocument=null,this.globalContext=o,this.optionsArgs=i}}l.OptionsReader=t},45815:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.getEmptyImage=r;let t;function r(){return t||(t=new Image,t.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),t}},78897:(v,l,t)=>{"use strict";var r;r={value:!0},Object.defineProperty(l,"n5",{enumerable:!0,get:function(){return d.getEmptyImage}}),l.t2=r=void 0;var o=t(31639),i=c(t(24445)),d=t(45815);r=i;function c(e){if(e&&e.__esModule)return e;var s={};if(e!=null){for(var _ in e)if(Object.prototype.hasOwnProperty.call(e,_)){var f=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,_):{};f.get||f.set?Object.defineProperty(s,_,f):s[_]=e[_]}}return s.default=e,s}const n=function(s,_,f){return new o.HTML5BackendImpl(s,_,f)};l.t2=n},31094:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.memoize=t,l.without=r,l.union=o;function t(i){let d=null;return()=>(d==null&&(d=i()),d)}function r(i,d){return i.filter(c=>c!==d)}function o(i,d){const c=new Set,n=s=>c.add(s);i.forEach(n),d.forEach(n);const e=[];return c.forEach(s=>e.push(s)),e}},53908:(v,l,t)=>{const r=t(57272),{MAX_LENGTH:o,MAX_SAFE_INTEGER:i}=t(16874),{safeRe:d,t:c}=t(99718),n=t(20968),{compareIdentifiers:e}=t(61123);class s{constructor(f,a){if(a=n(a),f instanceof s){if(f.loose===!!a.loose&&f.includePrerelease===!!a.includePrerelease)return f;f=f.version}else if(typeof f!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);if(f.length>o)throw new TypeError(`version is longer than ${o} characters`);r("SemVer",f,a),this.options=a,this.loose=!!a.loose,this.includePrerelease=!!a.includePrerelease;const u=f.trim().match(a.loose?d[c.LOOSE]:d[c.FULL]);if(!u)throw new TypeError(`Invalid Version: ${f}`);if(this.raw=f,this.major=+u[1],this.minor=+u[2],this.patch=+u[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");u[4]?this.prerelease=u[4].split(".").map(g=>{if(/^[0-9]+$/.test(g)){const E=+g;if(E>=0&&E<i)return E}return g}):this.prerelease=[],this.build=u[5]?u[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(f){if(r("SemVer.compare",this.version,this.options,f),!(f instanceof s)){if(typeof f=="string"&&f===this.version)return 0;f=new s(f,this.options)}return f.version===this.version?0:this.compareMain(f)||this.comparePre(f)}compareMain(f){return f instanceof s||(f=new s(f,this.options)),e(this.major,f.major)||e(this.minor,f.minor)||e(this.patch,f.patch)}comparePre(f){if(f instanceof s||(f=new s(f,this.options)),this.prerelease.length&&!f.prerelease.length)return-1;if(!this.prerelease.length&&f.prerelease.length)return 1;if(!this.prerelease.length&&!f.prerelease.length)return 0;let a=0;do{const u=this.prerelease[a],g=f.prerelease[a];if(r("prerelease compare",a,u,g),u===void 0&&g===void 0)return 0;if(g===void 0)return 1;if(u===void 0)return-1;if(u===g)continue;return e(u,g)}while(++a)}compareBuild(f){f instanceof s||(f=new s(f,this.options));let a=0;do{const u=this.build[a],g=f.build[a];if(r("prerelease compare",a,u,g),u===void 0&&g===void 0)return 0;if(g===void 0)return 1;if(u===void 0)return-1;if(u===g)continue;return e(u,g)}while(++a)}inc(f,a,u){switch(f){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",a,u);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",a,u);break;case"prepatch":this.prerelease.length=0,this.inc("patch",a,u),this.inc("pre",a,u);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",a,u),this.inc("pre",a,u);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const g=Number(u)?1:0;if(!a&&u===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[g];else{let E=this.prerelease.length;for(;--E>=0;)typeof this.prerelease[E]=="number"&&(this.prerelease[E]++,E=-2);if(E===-1){if(a===this.prerelease.join(".")&&u===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(g)}}if(a){let E=[a,g];u===!1&&(E=[a]),e(this.prerelease[0],a)===0?isNaN(this.prerelease[1])&&(this.prerelease=E):this.prerelease=E}break}default:throw new Error(`invalid increment argument: ${f}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}v.exports=s},50560:(v,l,t)=>{const r=t(53908),o=(i,d,c)=>new r(i,c).compare(new r(d,c));v.exports=o},7059:(v,l,t)=>{const r=t(50560),o=(i,d,c)=>r(i,d,c)<0;v.exports=o},30144:(v,l,t)=>{const r=t(53908),o=(i,d,c=!1)=>{if(i instanceof r)return i;try{return new r(i,d)}catch(n){if(!c)return null;throw n}};v.exports=o},56953:(v,l,t)=>{const r=t(30144),o=(i,d)=>{const c=r(i,d);return c?c.version:null};v.exports=o},16874:v=>{const l="2.0.0",r=Number.MAX_SAFE_INTEGER||9007199254740991,o=16,i=256-6,d=["major","premajor","minor","preminor","patch","prepatch","prerelease"];v.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:o,MAX_SAFE_BUILD_LENGTH:i,MAX_SAFE_INTEGER:r,RELEASE_TYPES:d,SEMVER_SPEC_VERSION:l,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},57272:v=>{const l=typeof process=="object"&&{ADMIN_PATH:"/admin/",NODE_ENV:"production",STRAPI_ADMIN_BACKEND_URL:"",STRAPI_TELEMETRY_DISABLED:void 0}&&{ADMIN_PATH:"/admin/",NODE_ENV:"production",STRAPI_ADMIN_BACKEND_URL:"",STRAPI_TELEMETRY_DISABLED:void 0}.NODE_DEBUG&&/\bsemver\b/i.test({ADMIN_PATH:"/admin/",NODE_ENV:"production",STRAPI_ADMIN_BACKEND_URL:"",STRAPI_TELEMETRY_DISABLED:void 0}.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};v.exports=l},61123:v=>{const l=/^[0-9]+$/,t=(o,i)=>{const d=l.test(o),c=l.test(i);return d&&c&&(o=+o,i=+i),o===i?0:d&&!c?-1:c&&!d?1:o<i?-1:1},r=(o,i)=>t(i,o);v.exports={compareIdentifiers:t,rcompareIdentifiers:r}},20968:v=>{const l=Object.freeze({loose:!0}),t=Object.freeze({}),r=o=>o?typeof o!="object"?l:o:t;v.exports=r},99718:(v,l,t)=>{const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:o,MAX_LENGTH:i}=t(16874),d=t(57272);l=v.exports={};const c=l.re=[],n=l.safeRe=[],e=l.src=[],s=l.t={};let _=0;const f="[a-zA-Z0-9-]",a=[["\\s",1],["\\d",i],[f,o]],u=E=>{for(const[h,p]of a)E=E.split(`${h}*`).join(`${h}{0,${p}}`).split(`${h}+`).join(`${h}{1,${p}}`);return E},g=(E,h,p)=>{const D=u(h),L=_++;d(E,L,h),s[E]=L,e[L]=h,c[L]=new RegExp(h,p?"g":void 0),n[L]=new RegExp(D,p?"g":void 0)};g("NUMERICIDENTIFIER","0|[1-9]\\d*"),g("NUMERICIDENTIFIERLOOSE","\\d+"),g("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${f}*`),g("MAINVERSION",`(${e[s.NUMERICIDENTIFIER]})\\.(${e[s.NUMERICIDENTIFIER]})\\.(${e[s.NUMERICIDENTIFIER]})`),g("MAINVERSIONLOOSE",`(${e[s.NUMERICIDENTIFIERLOOSE]})\\.(${e[s.NUMERICIDENTIFIERLOOSE]})\\.(${e[s.NUMERICIDENTIFIERLOOSE]})`),g("PRERELEASEIDENTIFIER",`(?:${e[s.NUMERICIDENTIFIER]}|${e[s.NONNUMERICIDENTIFIER]})`),g("PRERELEASEIDENTIFIERLOOSE",`(?:${e[s.NUMERICIDENTIFIERLOOSE]}|${e[s.NONNUMERICIDENTIFIER]})`),g("PRERELEASE",`(?:-(${e[s.PRERELEASEIDENTIFIER]}(?:\\.${e[s.PRERELEASEIDENTIFIER]})*))`),g("PRERELEASELOOSE",`(?:-?(${e[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${e[s.PRERELEASEIDENTIFIERLOOSE]})*))`),g("BUILDIDENTIFIER",`${f}+`),g("BUILD",`(?:\\+(${e[s.BUILDIDENTIFIER]}(?:\\.${e[s.BUILDIDENTIFIER]})*))`),g("FULLPLAIN",`v?${e[s.MAINVERSION]}${e[s.PRERELEASE]}?${e[s.BUILD]}?`),g("FULL",`^${e[s.FULLPLAIN]}$`),g("LOOSEPLAIN",`[v=\\s]*${e[s.MAINVERSIONLOOSE]}${e[s.PRERELEASELOOSE]}?${e[s.BUILD]}?`),g("LOOSE",`^${e[s.LOOSEPLAIN]}$`),g("GTLT","((?:<|>)?=?)"),g("XRANGEIDENTIFIERLOOSE",`${e[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),g("XRANGEIDENTIFIER",`${e[s.NUMERICIDENTIFIER]}|x|X|\\*`),g("XRANGEPLAIN",`[v=\\s]*(${e[s.XRANGEIDENTIFIER]})(?:\\.(${e[s.XRANGEIDENTIFIER]})(?:\\.(${e[s.XRANGEIDENTIFIER]})(?:${e[s.PRERELEASE]})?${e[s.BUILD]}?)?)?`),g("XRANGEPLAINLOOSE",`[v=\\s]*(${e[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[s.XRANGEIDENTIFIERLOOSE]})(?:${e[s.PRERELEASELOOSE]})?${e[s.BUILD]}?)?)?`),g("XRANGE",`^${e[s.GTLT]}\\s*${e[s.XRANGEPLAIN]}$`),g("XRANGELOOSE",`^${e[s.GTLT]}\\s*${e[s.XRANGEPLAINLOOSE]}$`),g("COERCE",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`),g("COERCERTL",e[s.COERCE],!0),g("LONETILDE","(?:~>?)"),g("TILDETRIM",`(\\s*)${e[s.LONETILDE]}\\s+`,!0),l.tildeTrimReplace="$1~",g("TILDE",`^${e[s.LONETILDE]}${e[s.XRANGEPLAIN]}$`),g("TILDELOOSE",`^${e[s.LONETILDE]}${e[s.XRANGEPLAINLOOSE]}$`),g("LONECARET","(?:\\^)"),g("CARETTRIM",`(\\s*)${e[s.LONECARET]}\\s+`,!0),l.caretTrimReplace="$1^",g("CARET",`^${e[s.LONECARET]}${e[s.XRANGEPLAIN]}$`),g("CARETLOOSE",`^${e[s.LONECARET]}${e[s.XRANGEPLAINLOOSE]}$`),g("COMPARATORLOOSE",`^${e[s.GTLT]}\\s*(${e[s.LOOSEPLAIN]})$|^$`),g("COMPARATOR",`^${e[s.GTLT]}\\s*(${e[s.FULLPLAIN]})$|^$`),g("COMPARATORTRIM",`(\\s*)${e[s.GTLT]}\\s*(${e[s.LOOSEPLAIN]}|${e[s.XRANGEPLAIN]})`,!0),l.comparatorTrimReplace="$1$2$3",g("HYPHENRANGE",`^\\s*(${e[s.XRANGEPLAIN]})\\s+-\\s+(${e[s.XRANGEPLAIN]})\\s*$`),g("HYPHENRANGELOOSE",`^\\s*(${e[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${e[s.XRANGEPLAINLOOSE]})\\s*$`),g("STAR","(<|>)?=?\\s*\\*"),g("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),g("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},76274:(v,l,t)=>{"use strict";t.d(l,{A:()=>i});var r=t(74848);const o=d=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,r.jsx)("path",{fill:"#212134",d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7Zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 1 0 0 3H7ZM7 5v2h2V5H7Zm0 3v2h2V8H7Zm0 3v2h2v-2H7Z"})}),i=o},52530:(v,l,t)=>{"use strict";t.d(l,{A:()=>i});var r=t(74848);const o=d=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,r.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),i=o},82301:(v,l,t)=>{"use strict";t.d(l,{A:()=>i});var r=t(74848);const o=d=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,r.jsx)("path",{fill:"#212134",d:"M11.987 23.036v-.964H1.876V1.876h10.111V0H0v24h11.987v-.964Z"}),(0,r.jsx)("path",{fill:"#212134",d:"M8 11.2c0-.11.09-.2.2-.2h11.973l-5.445-5.445a.2.2 0 0 1 0-.283l1.13-1.13a.2.2 0 0 1 .283 0l7.718 7.717a.2.2 0 0 1 0 .282L16.14 19.86a.2.2 0 0 1-.282 0l-1.13-1.13a.2.2 0 0 1 0-.284L20.172 13H8.2a.2.2 0 0 1-.2-.2v-1.6Z"})]}),i=o},64974:(v,l,t)=>{"use strict";t.d(l,{A:()=>i});var r=t(74848);const o=d=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,r.jsx)("path",{fill:"#212134",d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM7 10v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Z"})}),i=o},11305:(v,l,t)=>{"use strict";t.d(l,{A:()=>i});var r=t(74848);const o=d=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,r.jsx)("path",{fill:"#212134",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.53-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685Z"})}),i=o},44712:(v,l,t)=>{"use strict";t.d(l,{A:()=>i});var r=t(74848);const o=d=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 8 8",...d,children:(0,r.jsx)("path",{fill:"#212134",d:"M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 0 1 2 7.07V.93Z"})}),i=o},51293:(v,l,t)=>{"use strict";t.d(l,{A:()=>i});var r=t(74848);const o=d=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 25 25",...d,children:(0,r.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"m13.58.448 3.177 3.176L18.66 1.72a3.267 3.267 0 1 1 4.62 4.62l-1.904 1.904 3.175 3.175a1.528 1.528 0 0 1 0 2.162l-3.175 3.175L20.2 15.58a3.267 3.267 0 1 0-4.62 4.62l1.177 1.177-3.176 3.176a1.528 1.528 0 0 1-2.162 0l-3.175-3.175-1.902 1.902a3.267 3.267 0 1 1-4.62-4.62l1.902-1.902-3.176-3.176a1.528 1.528 0 0 1 0-2.162l3.176-3.176L4.8 9.42a3.267 3.267 0 0 0 4.62-4.62L8.244 3.623 11.419.448a1.528 1.528 0 0 1 2.162 0Z",clipRule:"evenodd"})}),i=o},93749:(v,l,t)=>{"use strict";t.d(l,{A:()=>i});var r=t(74848);const o=d=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 15 14",...d,children:(0,r.jsx)("path",{fill:"#212134",d:"M5.08 4.1c0-1.19 1.18-2.17 2.42-2.17s2.43.98 2.43 2.17c0 1.1-.56 1.61-1.31 2.28l-.03.03c-.75.65-1.66 1.47-1.66 3.09a.57.57 0 1 0 1.15 0c0-1.08.55-1.6 1.3-2.26l.02-.02c.75-.66 1.67-1.48 1.67-3.12C11.07 2.13 9.22.78 7.5.78 5.78.78 3.93 2.13 3.93 4.1a.57.57 0 1 0 1.15 0Zm2.42 9.26a.88.88 0 1 0 0-1.75.88.88 0 0 0 0 1.75Z"})}),i=o},5886:(v,l,t)=>{"use strict";t.d(l,{A:()=>i});var r=t(74848);const o=d=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,r.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.707.297A1 1 0 0 0 23 .004h-2a13.907 13.907 0 0 0-5.38 1.077 1 1 0 0 0-.615.923V4.92a.035.035 0 0 1-.022.038l-2-1.47a1 1 0 0 0-1.265.052A14 14 0 0 0 7 14.004v1.585l-2.707 2.707a1 1 0 1 0 1.415 1.415l2.707-2.708H10a14.014 14.014 0 0 0 14-14v-2a1 1 0 0 0-.293-.706ZM18 23.999H3a3 3 0 0 1-3-3V6A3 3 0 0 1 3 3h3a1 1 0 1 1 0 2H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3Z",clipRule:"evenodd"})}),i=o},84027:(v,l,t)=>{"use strict";t.d(l,{E:()=>n});var r=t(74848),o=t(67336),i=t(6803),d=t(17937);const c=(0,o.Ay)(i.s)`
  border-radius: ${({theme:e,size:s})=>s==="S"?"2px":e.borderRadius};
  height: ${({size:e,theme:s})=>s.sizes.badge[e]};
`,n=({active:e=!1,size:s="M",textColor:_="neutral600",backgroundColor:f="neutral150",children:a,minWidth:u=5,...g})=>{const E=s==="S"?1:2;return(0,r.jsx)(c,{inline:!0,alignItem:"center",justifyContent:"center",minWidth:u,paddingLeft:E,paddingRight:E,background:e?"primary200":f,size:s,...g,children:(0,r.jsx)(d.o,{variant:"sigma",textColor:e?"primary600":_,children:a})})}},48267:(v,l,t)=>{"use strict";t.d(l,{S:()=>e,j:()=>n});var r=t(74848),o=t(96540),i=t(67336),d=t(75206),c=t(6803);const n=(0,i.Ay)(c.s)`
  > svg {
    height: ${({theme:s})=>s.spaces[3]};
    width: ${({theme:s})=>s.spaces[3]};

    > g,
    path {
      fill: ${({theme:s})=>s.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${d.AP}
`,e=o.forwardRef(({disabled:s,children:_,background:f="neutral0",...a},u)=>(0,r.jsx)(n,{ref:u,"aria-disabled":s,as:"button",type:"button",disabled:s,padding:2,hasRadius:!0,background:f,borderColor:"neutral200",cursor:"pointer",...a,children:_}));e.displayName="BaseButton"},83055:(v,l,t)=>{"use strict";t.d(l,{s:()=>d});var r=t(74848),o=t(96540),i=t(17715);const d=o.forwardRef(({href:c,rel:n="noreferrer noopener",target:e="_self",disabled:s=!1,isExternal:_=!1,...f},a)=>(0,r.jsx)(i.a,{as:"a",ref:a,target:_?"_blank":e,rel:_?n:void 0,href:s?"#":c,"aria-disabled":s,cursor:"pointer",...f}));d.displayName="BaseLink"},17715:(v,l,t)=>{"use strict";t.d(l,{a:()=>c});var r=t(67336),o=t(68742),i=t(27741);const d={color:!0,cursor:!0,height:!0,width:!0},c=r.Ay.div.withConfig({shouldForwardProp:(n,e)=>!d[n]&&e(n)})`
  // Font
  font-size: ${({fontSize:n,theme:e})=>(0,i.K)(e.fontSizes,n,n)};

  // Colors
  background: ${({theme:n,background:e})=>(0,i.K)(n.colors,e,e)};
  color: ${({theme:n,color:e})=>(0,i.K)(n.colors,e,void 0)};

  // Spaces
  ${({theme:n,padding:e})=>(0,o.A)("padding",e,n)}
  ${({theme:n,paddingTop:e})=>(0,o.A)("padding-top",e,n)}
  ${({theme:n,paddingRight:e})=>(0,o.A)("padding-right",e,n)}
  ${({theme:n,paddingBottom:e})=>(0,o.A)("padding-bottom",e,n)}
  ${({theme:n,paddingLeft:e})=>(0,o.A)("padding-left",e,n)}
  ${({theme:n,marginLeft:e})=>(0,o.A)("margin-left",e,n)}
  ${({theme:n,marginRight:e})=>(0,o.A)("margin-right",e,n)}
  ${({theme:n,marginTop:e})=>(0,o.A)("margin-top",e,n)}
  ${({theme:n,marginBottom:e})=>(0,o.A)("margin-bottom",e,n)}

  // Responsive hiding
  ${({theme:n,hiddenS:e})=>e?`${n.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:n,hiddenXS:e})=>e?`${n.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:n,hasRadius:e,borderRadius:s})=>e?n.borderRadius:s};
  border-style: ${({borderStyle:n})=>n};
  border-width: ${({borderWidth:n})=>n};
  border-color: ${({borderColor:n,theme:e})=>(0,i.K)(e.colors,n,void 0)};
  border: ${({theme:n,borderColor:e,borderStyle:s,borderWidth:_})=>{if(e&&!s&&typeof _>"u")return`1px solid ${n.colors[e]}`}};

  // Shadows
  box-shadow: ${({theme:n,shadow:e})=>(0,i.K)(n.shadows,e,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:n})=>n};
  &:hover {
    ${({_hover:n,theme:e})=>n?n(e):void 0}
  }

  // Display
  display: ${({display:n})=>n};

  // Position
  position: ${({position:n})=>n};
  left: ${({left:n,theme:e})=>(0,i.K)(e.spaces,n,n)};
  right: ${({right:n,theme:e})=>(0,i.K)(e.spaces,n,n)};
  top: ${({top:n,theme:e})=>(0,i.K)(e.spaces,n,n)};
  bottom: ${({bottom:n,theme:e})=>(0,i.K)(e.spaces,n,n)};
  z-index: ${({zIndex:n})=>n};
  overflow: ${({overflow:n})=>n};

  // Size
  width: ${({width:n,theme:e})=>(0,i.K)(e.spaces,n,n)};
  max-width: ${({maxWidth:n,theme:e})=>(0,i.K)(e.spaces,n,n)};
  min-width: ${({minWidth:n,theme:e})=>(0,i.K)(e.spaces,n,n)};
  height: ${({height:n,theme:e})=>(0,i.K)(e.spaces,n,n)};
  max-height: ${({maxHeight:n,theme:e})=>(0,i.K)(e.spaces,n,n)};
  min-height: ${({minHeight:n,theme:e})=>(0,i.K)(e.spaces,n,n)};

  // Animation
  transition: ${({transition:n})=>n};
  transform: ${({transform:n})=>n};
  animation: ${({animation:n})=>n};

  //Flexbox children props
  flex-shrink: ${({shrink:n})=>n};
  flex-grow: ${({grow:n})=>n};
  flex-basis: ${({basis:n})=>n};
  flex: ${({flex:n})=>n};

  // Text
  text-align: ${({textAlign:n})=>n};
  text-transform: ${({textTransform:n})=>n};
  line-height: ${({theme:n,lineHeight:e})=>(0,i.K)(n.lineHeights,e,e)};

  // Cursor
  cursor: ${({cursor:n})=>n};
`},28156:(v,l,t)=>{"use strict";t.d(l,{Bv:()=>d,D$:()=>o,GO:()=>a,JB:()=>r,Ol:()=>n,SE:()=>s,Y:()=>_,lS:()=>c,qN:()=>i,qO:()=>e,xb:()=>f});const r="success-light",o="danger-light",i="default",d="tertiary",c="secondary",n="danger",e="success",s="ghost",_=[r,o],f=[i,d,c,n,e,s,..._],a=["S","M","L"]},77200:(v,l,t)=>{"use strict";t.d(l,{AD:()=>c,Bc:()=>e,mc:()=>d,qL:()=>n});var r=t(28156),o=t(17937);const i=s=>s===r.JB||s===r.D$?`${s.substring(0,s.lastIndexOf("-"))}`:s===r.Bv?"neutral":s===r.qN||s===r.lS||r.xb.every(_=>_!==s)?"primary":`${s}`,d=({theme:s})=>`
    border: 1px solid ${s.colors.neutral200};
    background: ${s.colors.neutral150};
    ${o.o} {
      color: ${s.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${s.colors.neutral600};
      }
    }
  `,c=({theme:s,variant:_})=>[...r.Y,r.lS].includes(_)?`
      background-color: ${s.colors.neutral0};
    `:_===r.Bv?`
      background-color: ${s.colors.neutral100};
    `:_===r.SE?`
      background-color: ${s.colors.neutral100};
    `:_===r.qN?`
      border: 1px solid ${s.colors.buttonPrimary500};
      background: ${s.colors.buttonPrimary500};
    `:`
    border: 1px solid ${s.colors[`${i(_)}500`]};
    background: ${s.colors[`${i(_)}500`]};
  `,n=({theme:s,variant:_})=>[...r.Y,r.lS].includes(_)?`
      background-color: ${s.colors.neutral0};
      border: 1px solid ${s.colors[`${i(_)}600`]};
      ${o.o} {
        color: ${s.colors[`${i(_)}600`]};
      }
      svg {
        > g, path {
          fill: ${s.colors[`${i(_)}600`]};
        }
      }
    `:_===r.Bv?`
      background-color: ${s.colors.neutral150};
    `:`
    border: 1px solid ${s.colors[`${i(_)}600`]};
    background: ${s.colors[`${i(_)}600`]};
  `,e=({theme:s,variant:_})=>{switch(_){case r.D$:case r.JB:case r.lS:return`
          border: 1px solid ${s.colors[`${i(_)}200`]};
          background: ${s.colors[`${i(_)}100`]};
          ${o.o} {
            color: ${s.colors[`${i(_)}700`]};
          }
          svg {
            > g, path {
              fill: ${s.colors[`${i(_)}700`]};
            }
          }
        `;case r.Bv:return`
          border: 1px solid ${s.colors.neutral200};
          background: ${s.colors.neutral0};
          ${o.o} {
            color: ${s.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${s.colors.neutral800};
            }
          }
        `;case r.SE:return`
        border: 1px solid transparent;
        background: transparent;

        ${o.o} {
          color: ${s.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${s.colors.neutral500};
          }
        }
      `;case r.qO:case r.Ol:return`
          border: 1px solid ${s.colors[`${i(_)}600`]};
          background: ${s.colors[`${i(_)}600`]};
          ${o.o} {
            color: ${s.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${s.colors.buttonNeutral0};
            }
          }
        `}}},87795:(v,l,t)=>{"use strict";t.d(l,{c:()=>c});var r=t(74848),o=t(67336),i=t(17715);const d=(0,o.Ay)(i.a)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:n})=>n?"margin: 0;":""}
`,c=({unsetMargin:n=!0,...e})=>(0,r.jsx)(d,{...e,background:"neutral150",as:"hr",unsetMargin:n})},6803:(v,l,t)=>{"use strict";t.d(l,{s:()=>c});var r=t(67336),o=t(68742),i=t(17715);const d={direction:!0},c=(0,r.Ay)(i.a).withConfig({shouldForwardProp:(n,e)=>!d[n]&&e(n)})`
  align-items: ${({alignItems:n="center"})=>n};
  display: ${({display:n="flex",inline:e})=>e?"inline-flex":n};
  flex-direction: ${({direction:n="row"})=>n};
  flex-shrink: ${({shrink:n})=>n};
  flex-wrap: ${({wrap:n})=>n};
  ${({gap:n,theme:e})=>(0,o.A)("gap",n,e)};
  justify-content: ${({justifyContent:n})=>n};
`},9008:(v,l,t)=>{"use strict";t.d(l,{m:()=>A});var r=t(74848),o=t(96540),i=t(67336);const d=O=>{const[m,I]=(0,o.useState)(!1),T=(0,o.useRef)(null),$=()=>{typeof T.current=="number"&&(clearTimeout(T.current),T.current=null)};return(0,o.useEffect)(()=>()=>{$()},[]),{visible:m,onFocus:()=>{I(!0)},onBlur:()=>{I(!1)},onMouseEnter:()=>{T.current=setTimeout(()=>{I(!0)},O)},onMouseLeave:()=>{$(),I(!1)}}},c=8,n=(O,m)=>{const I=(O.width-m.width)/2,T=m.left-I,$=m.top+m.height+c+window.pageYOffset;return{left:T,top:$}},e=(O,m)=>{const I=(O.height-m.height)/2,T=m.left+m.width+c,$=m.top-I+window.pageYOffset;return{left:T,top:$}},s=(O,m)=>{const I=(O.height-m.height)/2,T=m.left-O.width-c,$=m.top-I+window.pageYOffset;return{left:T,top:$}},_=(O,m)=>{const I=(O.width-m.width)/2;let T=m.left-I,$=m.top-O.height-c+window.pageYOffset;const x=window.innerWidth-m.right;return m.left+O.width-x>window.innerWidth?(T=m.left-O.width-c,$=m.top+window.scrollY-m.height/2):T<0?(T=m.width+m.left+c,$=m.top+window.scrollY-O.height/2+c):$<0&&T>0&&($=m.top+m.height+c),{left:T,top:$}},f=(O,m,I)=>{const T=O.getBoundingClientRect(),$=m.getBoundingClientRect();return I==="bottom"?n(T,$):I==="right"?e(T,$):I==="left"?s(T,$):_(T,$)},a=(O,m)=>{const I=(0,o.useRef)(null),T=(0,o.useRef)(null);return(0,o.useLayoutEffect)(()=>{if(O){const $=I.current,x=T.current;if($&&x){const P=f($,x,m);$.style.left=`${P.left}px`,$.style.top=`${P.top}px`}}},[m,O]),{tooltipWrapperRef:I,toggleSourceRef:T}};var u=t(11961),g=t(40961),E=t(17715);const h=o.forwardRef(({container:O=globalThis?.document?.body,...m},I)=>O?(0,g.createPortal)((0,r.jsx)(E.a,{ref:I,...m}),O):null);h.displayName="Portal";var p=t(42091),D=t(17937);const L=(0,i.Ay)(E.a)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:O})=>O?"revert":"none"};
`,A=({children:O,label:m,description:I,delay:T=500,position:$="top",id:x,...P})=>{const N=(0,u.B)(x),M=(0,u.B)(),{visible:R,...C}=d(T),{tooltipWrapperRef:y,toggleSourceRef:w}=a(R,$),S=o.cloneElement(O,{tabIndex:0,"aria-labelledby":m?N:void 0,"aria-describedby":I?N:void 0,...C});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{children:(0,r.jsxs)(L,{id:N,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:y,visible:R,position:"absolute",...P,children:[R&&(0,r.jsx)(p.s,{id:M,children:I}),(0,r.jsx)(D.o,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:m||I})]})}),(0,r.jsx)("span",{ref:w,children:S})]})}},17937:(v,l,t)=>{"use strict";t.d(l,{o:()=>E});var r=t(67336);const o="alpha",i="beta",d="delta",c="epsilon",n="omega",e="pi",s="sigma",_=[o,i,d,c,n,e,s],f=({ellipsis:h=!1})=>h&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,a=({variant:h=n,theme:p})=>{switch(h){case o:return`
        font-weight: ${p.fontWeights.bold};
        font-size: ${p.fontSizes[5]};
        line-height: ${p.lineHeights[2]};
      `;case i:return`
        font-weight: ${p.fontWeights.bold};
        font-size: ${p.fontSizes[4]};
        line-height: ${p.lineHeights[1]};
      `;case d:return`
        font-weight: ${p.fontWeights.semiBold};
        font-size: ${p.fontSizes[3]};
        line-height: ${p.lineHeights[2]};
      `;case c:return`
        font-size: ${p.fontSizes[3]};
        line-height: ${p.lineHeights[6]};
      `;case n:return`
        font-size: ${p.fontSizes[2]};
        line-height: ${p.lineHeights[4]};
      `;case e:return`
        font-size: ${p.fontSizes[1]};
        line-height: ${p.lineHeights[3]};
      `;case s:return`
        font-weight: ${p.fontWeights.bold};
        font-size: ${p.fontSizes[0]};
        line-height: ${p.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${p.fontSizes[2]};
      `}};var u=t(27741);const g={fontSize:!0,fontWeight:!0},E=r.Ay.span.withConfig({shouldForwardProp:(h,p)=>!g[h]&&p(h)})`
  ${a}
  ${f}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:h,fontWeight:p})=>(0,u.K)(h.fontWeights,p,void 0)};
  font-size: ${({theme:h,fontSize:p})=>(0,u.K)(h.fontSizes,p,void 0)};
  line-height: ${({theme:h,lineHeight:p})=>(0,u.K)(h.lineHeights,p,p)};
  color: ${({theme:h,textColor:p})=>h.colors[p||"neutral800"]};
  text-align: ${({textAlign:h})=>h};
  text-decoration: ${({textDecoration:h})=>h};
  text-transform: ${({textTransform:h})=>h};
`},42091:(v,l,t)=>{"use strict";t.d(l,{s:()=>o});var r=t(67336);const o=r.Ay.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`},68742:(v,l,t)=>{"use strict";t.d(l,{A:()=>r});const r=(o,i,d)=>{if(!i)return;if(typeof i=="object")return(Array.isArray(i)?i:[i?.desktop,i?.tablet,i?.mobile]).reduce((s,_,f)=>{if(_)switch(f){case 0:return`${s}${o}: ${d.spaces[_]};`;case 1:return`${s}${d.mediaQueries.tablet}{${o}: ${d.spaces[_]};}`;case 2:return`${s}${d.mediaQueries.mobile}{${o}: ${d.spaces[_]};}`;default:return s}return s},"");const c=d.spaces[i]??i;return`${o}: ${c};`}},27741:(v,l,t)=>{"use strict";t.d(l,{K:()=>i});function r(d,c){return typeof d=="string"?!1:c in d}function o(d){return d&&typeof d=="object"&&!Array.isArray(d)}function i(d,c,n){return c&&r(d,c)?d[c]:n}},11961:(v,l,t)=>{"use strict";t.d(l,{B:()=>d});var r=t(96540);const o=r["useId".toString()]||(()=>{});let i=0;const d=c=>{const[n,e]=(0,r.useState)(o());return(0,r.useLayoutEffect)(()=>{c||e(s=>s??String(i++))},[c]),c?.toString()??(n||"")}},75206:(v,l,t)=>{"use strict";t.d(l,{AP:()=>d,id:()=>i});var r=t(67336);const o=c=>({theme:n,size:e})=>n.sizes[c][e],i=(c="&")=>({theme:n,hasError:e=!1})=>(0,r.AH)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${c}:focus-within {
      border: 1px solid ${e?n.colors.danger600:n.colors.primary600};
      box-shadow: ${e?n.colors.danger600:n.colors.primary600} 0px 0px 0px 2px;
    }
  `,d=({theme:c})=>(0,r.AH)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${c.colors.primary600};
    }
  }
`},53812:(v,l,t)=>{"use strict";t.d(l,{z:()=>f});var r=t(74848),o=t(96540),i=t(67336),d=t(77200),c=t(48267),n=t(83055),e=t(6803),s=t(17937);const _=(0,i.Ay)(c.j)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${d.mc}
    &:active {
      ${d.mc}
    }
  }

  &:hover {
    ${d.AD}
  }

  &:active {
    ${d.qL}
  }

  ${d.Bc}
`,f=o.forwardRef(({variant:a="default",startIcon:u,endIcon:g,disabled:E=!1,children:h,size:p="S",as:D=n.s,...L},A)=>{const O=p==="S"?2:"10px",m=4;return(0,r.jsxs)(_,{ref:A,"aria-disabled":E,size:p,variant:a,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:O,paddingLeft:m,paddingRight:m,paddingTop:O,pointerEvents:E?"none":void 0,...L,as:D||n.s,children:[u&&(0,r.jsx)(e.s,{"aria-hidden":!0,children:u}),(0,r.jsx)(s.o,{variant:p==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:h}),g&&(0,r.jsx)(e.s,{"aria-hidden":!0,children:g})]})});f.displayName="LinkButton"},57502:(v,l,t)=>{"use strict";t.d(l,{N:()=>n});var r=t(74848),o=t(67336),i=t(58951),d=t(6803);const c=(0,o.Ay)(d.s)`
  width: ${({condensed:e})=>e?"max-content":`${224/16}rem`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
`,n=({condensed:e=!1,...s})=>(0,r.jsx)(i.u.Provider,{value:e,children:(0,r.jsx)(c,{alignItems:"normal",as:"nav",background:"neutral0",condensed:e,direction:"column",height:"100vh",position:"sticky",top:0,zIndex:2,...s})})},58951:(v,l,t)=>{"use strict";t.d(l,{A:()=>i,u:()=>o});var r=t(96540);const o=(0,r.createContext)(!1),i=()=>(0,r.useContext)(o)},22958:(v,l,t)=>{"use strict";t.d(l,{T:()=>u});var r=t(74848),o=t(96540),i=t(67336),d=t(58951),c=t(83055),n=t(17715),e=t(42091),s=t(6803),_=t(17937);const f=i.Ay.div`
  border-radius: ${({theme:g})=>g.borderRadius};

  svg,
  img {
    height: ${({condensed:g})=>g?`${40/16}rem`:`${32/16}rem`};
    width: ${({condensed:g})=>g?`${40/16}rem`:`${32/16}rem`};
  }
`,a=(0,i.Ay)(c.s)`
  text-decoration: unset;
  color: inherit;
`,u=o.forwardRef(({workplace:g,title:E,icon:h,...p},D)=>{const L=(0,d.A)();return p.to=p?.to??"/",L?(0,r.jsx)(c.s,{ref:D,...p,children:(0,r.jsx)(n.a,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:(0,r.jsxs)(f,{condensed:!0,children:[h,(0,r.jsxs)(e.s,{children:[(0,r.jsx)("span",{children:E}),(0,r.jsx)("span",{children:g})]})]})})}):(0,r.jsx)(a,{ref:D,...p,children:(0,r.jsx)(n.a,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:(0,r.jsxs)(s.s,{children:[(0,r.jsx)(f,{"aria-hidden":!0,tabIndex:-1,children:h}),(0,r.jsxs)(n.a,{paddingLeft:2,children:[(0,r.jsxs)(_.o,{fontWeight:"bold",textColor:"neutral800",as:"span",children:[E,(0,r.jsx)(e.s,{as:"span",children:g})]}),(0,r.jsx)(_.o,{variant:"pi",as:"p",textColor:"neutral600","aria-hidden":!0,children:g})]})]})})})})},60046:(v,l,t)=>{"use strict";t.d(l,{v:()=>E});var r=t(74848),o=t(41356),i=t(62649),d=t(67336),c=t(58951),n=t(6803),e=t(96540),s=t(27741),_=t(17715);const f=(0,d.Ay)(_.a)`
  path {
    fill: ${({color:h,theme:p})=>(0,s.K)(p.colors,h,void 0)};
  }
  ${({theme:h,colors:p})=>p(h)}
`,a=e.forwardRef(({color:h="neutral600",colors:p=()=>"",...D},L)=>(0,r.jsx)(f,{ref:L,color:h,colors:p,...D}));a.displayName="Icon";var u=t(42091);const g=(0,d.Ay)(n.s).attrs(h=>({justifyContent:"center",...h}))`
  background: ${({theme:h})=>h.colors.neutral0};
  border: 1px solid ${({theme:h})=>h.colors.neutral150};
  border-radius: ${({theme:h})=>h.borderRadius};
  position: absolute;
  bottom: ${(9+4)/16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({theme:h,condensed:p})=>p?0:h.spaces[5]};
  transform: ${({condensed:h})=>h?"translateX(50%)":void 0};
  z-index: 2;
  width: ${18/16}rem;
  height: ${25/16}rem;

  svg {
    width: ${6/16}rem;
    height: ${9/16}rem;
  }
`,E=({children:h,...p})=>{const D=(0,c.A)();return(0,r.jsxs)(g,{as:"button",condensed:D,...p,children:[(0,r.jsx)(a,{as:D?o.A:i.A,"aria-hidden":!0,color:"neutral600"}),(0,r.jsx)(u.s,{children:h})]})}},95229:(v,l,t)=>{"use strict";t.d(l,{L:()=>i});var r=t(74848),o=t(17715);const i=({children:d})=>(0,r.jsx)(o.a,{position:"relative",children:d})},87967:(v,l,t)=>{"use strict";t.d(l,{k:()=>h});var r=t(74848),o=t(96540),i=t(67336),d=t(58951),c=t(17715),n=t(83055),e=t(17937),s=t(6803),_=t(84027),f=t(9008);const a=(0,i.Ay)(c.a)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`,u=(0,i.Ay)(n.s)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({theme:p})=>p.borderRadius};
  background: ${({theme:p})=>p.colors.neutral0};

  ${e.o} {
    color: ${({theme:p})=>p.colors.neutral600};
  }

  svg path {
    fill: ${({theme:p})=>p.colors.neutral500};
  }

  &:hover {
    background: ${({theme:p})=>p.colors.neutral100};

    ${e.o} {
      color: ${({theme:p})=>p.colors.neutral700};
    }

    svg path {
      fill: ${({theme:p})=>p.colors.neutral600};
    }
  }

  &.active {
    background: ${({theme:p})=>p.colors.primary100};

    svg path {
      fill: ${({theme:p})=>p.colors.primary600};
    }

    ${e.o} {
      color: ${({theme:p})=>p.colors.primary600};
      font-weight: 500;
    }
  }
`,g=(0,i.Ay)(s.s)`
  padding: ${({theme:p})=>`${p.spaces[2]} ${p.spaces[3]}`};
`,E=(0,i.Ay)(_.E)`
  ${({theme:p,condensed:D})=>D&&`
	  position: absolute;
    // Values based on visual aspect 
    top: -${p.spaces[3]};
    right:  -${p.spaces[1]};
  `}

  ${e.o} {
    //find a solution to remove !important
    color: ${({theme:p})=>p.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({theme:p})=>p.spaces[6]};
  height: ${({theme:p})=>p.spaces[5]};
  padding: ${({theme:p})=>`0 ${p.spaces[2]}`};
  border-radius: ${({theme:p})=>p.spaces[10]};
  background: ${({theme:p})=>p.colors.primary600};
`,h=o.forwardRef(({children:p,icon:D,badgeContent:L,badgeAriaLabel:A,...O},m)=>(0,d.A)()?(0,r.jsx)(u,{ref:m,...O,children:(0,r.jsx)(f.m,{position:"right",label:p,children:(0,r.jsxs)(g,{as:"span",justifyContent:"center",children:[(0,r.jsx)(a,{"aria-hidden":!0,paddingRight:0,as:"span",children:D}),L&&(0,r.jsx)(E,{condensed:!0,"aria-label":A,children:L})]})})}):(0,r.jsx)(u,{ref:m,...O,children:(0,r.jsxs)(g,{as:"span",justifyContent:"space-between",children:[(0,r.jsxs)(s.s,{children:[(0,r.jsx)(a,{"aria-hidden":!0,paddingRight:3,as:"span",children:D}),(0,r.jsx)(e.o,{children:p})]}),L&&(0,r.jsx)(E,{justifyContent:"center","aria-label":A,children:L})]})}))},85712:(v,l,t)=>{"use strict";t.d(l,{R:()=>_});var r=t(74848),o=t(96540),i=t(58951),d=t(6803),c=t(17715),n=t(87795),e=t(42091),s=t(17937);const _=({label:f,children:a,horizontal:u=!1,spacing:g=2,...E})=>(0,i.A)()?(0,r.jsxs)(d.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,r.jsxs)(c.a,{paddingTop:1,paddingBottom:1,background:"neutral0",hasRadius:!0,as:"span",children:[(0,r.jsx)(n.c,{}),(0,r.jsx)(e.s,{children:(0,r.jsx)("span",{children:f})})]}),(0,r.jsx)(d.s,{as:"ul",gap:g,direction:u?"row":"column",alignItems:u?"center":"stretch",...E,children:o.Children.map(a,(p,D)=>(0,r.jsx)("li",{children:p},D))})]}):(0,r.jsxs)(d.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,r.jsx)(c.a,{paddingTop:1,paddingBottom:1,background:"neutral0",paddingRight:3,paddingLeft:3,hasRadius:!0,as:"span",children:(0,r.jsx)(s.o,{variant:"sigma",textColor:"neutral600",children:f})}),(0,r.jsx)(d.s,{as:"ul",gap:g,direction:u?"row":"column",alignItems:u?"center":"stretch",...E,children:o.Children.map(a,(p,D)=>(0,r.jsx)("li",{children:p},D))})]})},73351:(v,l,t)=>{"use strict";t.d(l,{I:()=>e});var r=t(74848),o=t(96540),i=t(67336),d=t(17715),c=t(6803);const n=(0,i.Ay)(d.a)`
  flex-grow: 1;
  overflow-y: auto;
`,e=({children:s,spacing:_=4,horizontal:f=!1,...a})=>(0,r.jsx)(n,{paddingLeft:3,paddingRight:2,paddingTop:3,paddingBottom:8,children:(0,r.jsx)(c.s,{as:"ul",gap:_,direction:f?"row":"column",alignItems:f?"center":"stretch",...a,children:o.Children.map(s,(u,g)=>(0,r.jsx)("li",{children:u},g))})})},94565:(v,l,t)=>{"use strict";t.d(l,{r:()=>L});var r=t(74848),o=t(96540),i=t(67336),d=t(58951),c=t(17715),n=t(6803);const e=32,s=64;var _=t(17937);const f=i.Ay.img`
  border-radius: 50%;
  object-fit: cover;
  display: block;
  position: relative;
`,a=i.Ay.img`
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  transform: translate(-${(s-e)/2}px, -100%);
  margin-top: -${({theme:A})=>A.spaces[1]};
`,u=(0,i.Ay)(c.a)`
  opacity: 0.4;
`,g=({src:A,alt:O,preview:m})=>{const[I,T]=o.useState(!1),$=Boolean(m&&I);return(0,r.jsxs)("span",{children:[$?(0,r.jsx)(a,{"aria-hidden":!0,alt:"",width:`${s}px`,height:`${s}px`,src:m===!0?A:typeof m=="string"?m:""}):null,(0,r.jsxs)(c.a,{zIndex:$?1:void 0,position:"relative",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),width:`${e}px`,height:`${e}px`,children:[$?(0,r.jsx)(u,{background:"neutral0",borderRadius:"50%",position:"absolute",width:`${e}px`,height:`${e}px`,zIndex:1}):null,(0,r.jsx)(f,{src:A,alt:O,width:`${e}px`,height:`${e}px`})]})]})},E=(0,i.Ay)(n.s)`
  span {
    line-height: 0;
  }
`,h=({children:A,background:O="primary600",textColor:m="buttonNeutral0"})=>(0,r.jsx)(E,{background:O,borderRadius:"50%",width:`${e}px`,height:`${e}px`,justifyContent:"center",children:(0,r.jsx)(_.o,{fontSize:0,fontWeight:"bold",textColor:m,textTransform:"uppercase",children:A})});var p=t(42091);const D=(0,i.Ay)(c.a)`
  border-top: 1px solid ${({theme:A})=>A.colors.neutral150};
`,L=o.forwardRef(({src:A,children:O,initials:m,...I},T)=>{const $=(0,d.A)();return(0,r.jsx)(D,{paddingTop:3,paddingBottom:3,paddingLeft:5,paddingRight:5,...I,children:(0,r.jsxs)(n.s,{as:"button",justifyContent:$?"center":void 0,ref:T,children:[A?(0,r.jsx)(g,{src:A,alt:"","aria-hidden":!0}):(0,r.jsx)(h,{children:m}),$?(0,r.jsx)(p.s,{children:(0,r.jsx)("span",{children:O})}):(0,r.jsx)(c.a,{width:`${130/16}rem`,paddingLeft:2,as:"span",children:(0,r.jsx)(_.o,{ellipsis:!0,textColor:"neutral600",children:O})})]})})})}}]);
