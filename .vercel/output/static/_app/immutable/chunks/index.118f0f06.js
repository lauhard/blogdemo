function y(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function M(){return Object.create(null)}function x(t){t.forEach(P)}function S(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(G(e,n))}function at(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?H(n.ctx.slice(),t[1](i(e))):n.ctx}function ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function dt(t,e,n,i,r,o){if(r){const c=B(e,n,i,o);t.p(c,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ht(t){return t&&S(t.destroy)?t.destroy:y}let v=!1;function J(){v=!0}function K(){v=!1}function W(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:W(1,r,b=>e[n[b]].claim_order,l))-1;i[u]=n[f]+1;const a=f+1;n[a]=u,r=Math.max(a,r)}const o=[],c=[];let s=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(o.push(e[u-1]);s>=u;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<o.length&&c[u].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(c[u],f)}}function R(t,e){if(v){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){v&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function yt(){return A(" ")}function gt(){return A("")}function xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,r=!1){Z(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const u=n(s);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const u=n(s);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function T(t,e,n,i){return D(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function $t(t,e,n){return T(t,e,n,V)}function vt(t,e,n){return T(t,e,n,X)}function tt(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function Et(t){return tt(t," ")}function wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Nt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,n){t.classList[n?"add":"remove"](e)}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function At(t,e){return new t(e)}let g;function p(t){g=t}function j(){if(!g)throw new Error("Function called outside component initialization");return g}function jt(t){j().$$.on_mount.push(t)}function Ct(t){j().$$.after_update.push(t)}function kt(){const t=j();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=et(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const h=[],L=[];let m=[];const O=[],q=Promise.resolve();let w=!1;function z(){w||(w=!0,q.then(F))}function Mt(){return z(),q}function N(t){m.push(t)}const E=new Set;let _=0;function F(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,p(e),nt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;L.length;)L.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;O.length;)O.pop()();w=!1,E.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function it(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Lt(){d={r:0,c:[],p:d}}function Ot(){d.r||x(d.c),d=d.p}function rt(t,e){t&&t.i&&($.delete(t),t.i(e))}function Pt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Bt(t){t&&t.c()}function Dt(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||N(()=>{const c=t.$$.on_mount.map(P).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(N)}function ut(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Tt(t,e,n,i,r,o,c,s=[-1]){const u=g;p(t);const l=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,b,...C)=>{const k=C.length?C[0]:b;return l.ctx&&r(l.ctx[a],l.ctx[a]=k)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](k),f&&lt(t,a)),b}):[],l.update(),f=!0,x(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){J();const a=Y(e.target);l.fragment&&l.fragment.l(a),a.forEach(U)}else l.fragment&&l.fragment.c();e.intro&&rt(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),K(),F()}p(u)}class qt{$destroy(){ut(this,1),this.$destroy=y}$on(e,n){if(!S(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ct as A,ut as B,at as C,R as D,dt as E,_t as F,ft as G,ht as H,kt as I,X as J,vt as K,y as L,St as M,xt as N,ot as O,pt as P,qt as S,yt as a,mt as b,Et as c,Pt as d,gt as e,Ot as f,rt as g,U as h,Tt as i,Ct as j,V as k,$t as l,Y as m,bt as n,jt as o,Nt as p,A as q,tt as r,st as s,Mt as t,wt as u,Lt as v,L as w,At as x,Bt as y,Dt as z};
