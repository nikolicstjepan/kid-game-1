(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const f of i)if(f.type==="childList")for(const s of f.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const f={};return i.integrity&&(f.integrity=i.integrity),i.referrerPolicy&&(f.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?f.credentials="include":i.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(i){if(i.ep)return;i.ep=!0;const f=r(i);fetch(i.href,f)}})();function U(){}function we(l){return l()}function fe(){return Object.create(null)}function ne(l){l.forEach(we)}function Fe(l){return typeof l=="function"}function Ae(l,n){return l!=l?n==n:l!==n||l&&typeof l=="object"||typeof l=="function"}let ee;function B(l,n){return ee||(ee=document.createElement("a")),ee.href=n,l===ee.href}function Je(l){return Object.keys(l).length===0}function m(l,n){l.appendChild(n)}function M(l,n,r){l.insertBefore(n,r||null)}function $(l){l.parentNode&&l.parentNode.removeChild(l)}function W(l,n){for(let r=0;r<l.length;r+=1)l[r]&&l[r].d(n)}function w(l){return document.createElement(l)}function X(l){return document.createTextNode(l)}function P(){return X(" ")}function Ne(){return X("")}function Oe(l,n,r,o){return l.addEventListener(n,r,o),()=>l.removeEventListener(n,r,o)}function g(l,n,r){r==null?l.removeAttribute(n):l.getAttribute(n)!==r&&l.setAttribute(n,r)}function Le(l){return Array.from(l.childNodes)}function Se(l,n){n=""+n,l.wholeText!==n&&(l.data=n)}let ce;function R(l){ce=l}const H=[],D=[],le=[],ae=[],Pe=Promise.resolve();let ie=!1;function je(){ie||(ie=!0,Pe.then(Ee))}function se(l){le.push(l)}const oe=new Set;let z=0;function Ee(){if(z!==0)return;const l=ce;do{try{for(;z<H.length;){const n=H[z];z++,R(n),Be(n.$$)}}catch(n){throw H.length=0,z=0,n}for(R(null),H.length=0,z=0;D.length;)D.pop()();for(let n=0;n<le.length;n+=1){const r=le[n];oe.has(r)||(oe.add(r),r())}le.length=0}while(H.length);for(;ae.length;)ae.pop()();ie=!1,oe.clear(),R(l)}function Be(l){if(l.fragment!==null){l.update(),ne(l.before_update);const n=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,n),l.after_update.forEach(se)}}const $e=new Set;function Me(l,n){l&&l.i&&($e.delete(l),l.i(n))}function Te(l,n,r,o){const{fragment:i,after_update:f}=l.$$;i&&i.m(n,r),o||se(()=>{const s=l.$$.on_mount.map(we).filter(Fe);l.$$.on_destroy?l.$$.on_destroy.push(...s):ne(s),l.$$.on_mount=[]}),f.forEach(se)}function qe(l,n){const r=l.$$;r.fragment!==null&&(ne(r.on_destroy),r.fragment&&r.fragment.d(n),r.on_destroy=r.fragment=null,r.ctx=[])}function Ie(l,n){l.$$.dirty[0]===-1&&(H.push(l),je(),l.$$.dirty.fill(0)),l.$$.dirty[n/31|0]|=1<<n%31}function De(l,n,r,o,i,f,s,a=[-1]){const d=ce;R(l);const c=l.$$={fragment:null,ctx:[],props:f,update:U,not_equal:i,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:fe(),dirty:a,skip_bound:!1,root:n.target||d.$$.root};s&&s(c.root);let y=!1;if(c.ctx=r?r(l,n.props||{},(h,S,...O)=>{const v=O.length?O[0]:S;return c.ctx&&i(c.ctx[h],c.ctx[h]=v)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](v),y&&Ie(l,h)),S}):[],c.update(),y=!0,ne(c.before_update),c.fragment=o?o(c.ctx):!1,n.target){if(n.hydrate){const h=Le(n.target);c.fragment&&c.fragment.l(h),h.forEach($)}else c.fragment&&c.fragment.c();n.intro&&Me(l.$$.fragment),Te(l,n.target,n.anchor,n.customElement),Ee()}R(d)}class Ge{$destroy(){qe(this,1),this.$destroy=U}$on(n,r){if(!Fe(r))return U;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(r),()=>{const i=o.indexOf(r);i!==-1&&o.splice(i,1)}}$set(n){this.$$set&&!Je(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const Ke=[{action:"move",direction:"up"},{action:"move",direction:"down"},{action:"move",direction:"left"},{action:"move",direction:"right"}],e={userCanStep:!0,userCanJumpOver:!1,type:"grass",bgColor:"bg-green-700"},t={userCanStep:!1,userCanJumpOver:!1,type:"wall",bgColor:"bg-gray-700"},F={userCanStep:!1,userCanJumpOver:!0,type:"rock",bgColor:"bg-gray-400"},G=()=>({userCanStep:!1,userCanJumpOver:!1,type:"door",bgColor:"bg-brown-300",attributes:{status:"closed"}}),K={userCanStep:!0,userCanJumpOver:!1,type:"item",name:"key",bgColor:"bg-yellow-300",onStep:({board:l})=>{const n=l.reduce((r,o)=>{const i=o.filter(f=>f.type==="door"&&f.attributes.status==="closed");return i.length>0&&r.push(...i),r},[]);n&&n[0]&&(n[0].attributes.status="open",n[0].userCanStep=!0)}},b={userCanStep:!0,userCanJumpOver:!1,type:"item",name:"lollipop",bgColor:"bg-blue-100"},Ve=[[e,t,e,e,e,e,e,t,t,F],[e,t,e,e,e,t,e,e,F,e],[e,t,e,e,e,t,e,e,e,e],[e,t,e,e,e,t,e,e,e,e],[e,t,e,e,e,t,e,e,e,e],[b,t,e,e,e,t,e,e,e,e],[e,t,e,e,e,t,e,e,e,e],[e,t,b,e,K,t,e,e,t,G()],[e,t,t,t,t,t,e,e,t,b],[e,F,e,e,e,e,e,e,t,e]],ze=[[e,e,e,e,t,e,e,e,e,F],[t,t,t,e,t,e,e,t,e,e],[e,e,t,e,t,e,K,t,e,e],[e,e,t,e,t,e,t,t,e,e],[e,e,t,e,t,e,t,e,e,e],[e,e,t,e,t,F,t,e,t,e],[b,e,t,e,t,b,t,e,t,e],[t,e,t,e,t,t,t,e,t,e],[t,e,G(),e,e,e,e,e,e,F],[t,t,t,t,t,t,t,t,t,b]],He=[[e,e,t,e,e,e,t,e,b,F],[e,t,t,e,e,e,t,t,e,e],[e,e,t,e,e,e,t,t,F,e],[e,e,e,e,e,e,t,t,e,e],[e,e,t,e,e,e,t,e,F,e],[e,e,t,e,e,e,t,e,e,e],[t,t,t,e,e,e,t,e,t,b],[F,t,e,e,F,F,t,e,t,e],[e,t,e,e,e,e,t,e,F,e],[b,e,e,t,t,e,e,e,t,e]],Qe=[[e,e,t,e,e,t,e,e,t,e],[e,t,t,e,t,t,e,b,t,e],[e,e,e,e,t,e,e,t,t,e],[t,t,e,e,t,t,e,t,b,e],[e,t,e,e,e,t,e,t,t,e],[e,t,t,t,e,t,e,b,e,e],[e,e,e,e,e,t,e,t,e,t],[e,t,t,b,e,t,e,t,e,t],[e,t,e,e,e,e,e,t,b,e],[F,t,e,t,t,t,t,t,e,e]],Re=[[e,e,e,e,t,t,K,e,e,e],[t,t,t,e,t,t,t,t,e,e],[e,e,t,e,F,e,t,t,e,e],[e,e,e,e,e,e,t,F,e,e],[e,e,t,t,t,t,t,e,e,e],[e,e,t,e,e,e,t,e,t,e],[e,e,t,e,t,b,t,e,t,e],[t,e,t,G(),t,t,t,e,t,e],[t,e,e,e,e,e,e,e,b,F],[t,t,t,t,t,t,t,t,t,b]],Ue=[[e,e,t,t,t,t,t,t,t,t],[t,e,e,e,e,e,e,e,e,t],[t,e,t,t,e,t,t,e,e,t],[t,e,F,t,e,t,e,e,b,t],[t,e,t,t,e,t,e,t,t,t],[t,e,e,e,e,t,e,e,e,t],[t,t,t,t,F,e,e,t,G(),t],[K,e,e,e,e,t,e,t,b,t],[e,t,t,t,e,t,e,t,e,t],[b,e,e,e,e,t,e,t,e,t]],We=[[e,e,t,t,t,e,e,e,K,b],[e,e,t,t,t,t,t,e,t,t],[t,e,e,e,t,t,t,e,e,t],[t,e,t,e,G(),b,t,e,t,t],[t,e,t,e,t,t,t,e,t,t],[t,e,t,t,t,e,t,e,t,t],[t,e,e,e,t,e,t,e,e,t],[t,t,t,e,t,e,t,t,e,t],[b,F,e,e,e,e,e,e,e,t],[t,t,t,t,t,t,t,t,t,t]],Xe=[[e,t,e,e,e,t,t,t,K,b],[e,t,e,e,e,e,e,t,e,e],[e,t,t,t,e,e,e,t,t,e],[e,t,e,t,t,b,e,t,e,e],[e,t,e,t,t,t,e,t,e,e],[e,t,K,e,e,t,e,t,e,e],[e,t,t,t,b,t,e,t,t,e],[e,e,e,t,e,t,e,e,t,e],[t,F,t,t,G(),t,G(),t,t,e],[e,e,e,e,e,e,e,e,e,e]],te=[Ve,ze,He,Qe,Re,Ue,We,Xe];function de(l,n,r){const o=l.slice();return o[25]=n[r],o}function pe(l,n,r){const o=l.slice();return o[28]=n[r],o}function he(l,n,r){const o=l.slice();return o[31]=n[r],o[33]=r,o}function _e(l,n,r){const o=l.slice();return o[34]=n[r],o[36]=r,o}function ge(l,n,r){const o=l.slice();return o[37]=n[r],o}function Ye(l){let n,r;return{c(){var o,i;n=w("img"),B(n.src,r=`/${l[34].name||`${l[34].type}${(o=l[34].attributes)!=null&&o.status?`-${(i=l[34].attributes)==null?void 0:i.status}`:""}`}.png`)||g(n,"src",r),g(n,"class","p-1 w-full h-full"),g(n,"alt","field")},m(o,i){M(o,n,i)},p(o,i){var f,s;i[0]&1&&!B(n.src,r=`/${o[34].name||`${o[34].type}${(f=o[34].attributes)!=null&&f.status?`-${(s=o[34].attributes)==null?void 0:s.status}`:""}`}.png`)&&g(n,"src",r)},d(o){o&&$(n)}}}function Ze(l){let n,r,o,i,f=l[10],s=[];for(let a=0;a<f.length;a+=1)s[a]=me(ge(l,f,a));return{c(){n=w("div"),r=w("img"),i=P();for(let a=0;a<s.length;a+=1)s[a].c();B(r.src,o="/user.png")||g(r,"src",o),g(r,"width","100%"),g(r,"class","p-1"),g(r,"alt","user"),g(n,"class","relative")},m(a,d){M(a,n,d),m(n,r),m(n,i);for(let c=0;c<s.length;c+=1)s[c].m(n,null)},p(a,d){if(d[0]&3328){f=a[10];let c;for(c=0;c<f.length;c+=1){const y=ge(a,f,c);s[c]?s[c].p(y,d):(s[c]=me(y),s[c].c(),s[c].m(n,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=f.length}},d(a){a&&$(n),W(s,a)}}}function me(l){let n,r,o=l[11][l[37]]+"",i,f,s,a,d;function c(){return l[14](l[37])}return{c(){n=w("div"),r=w("button"),i=X(o),f=P(),g(r,"class","text-3xl font-bold cursor-pointer"),g(n,"class",s=`absolute ${l[37]==="down"?"top-[100%] left-0 right-0":""} ${l[37]==="right"?"left-[100%] top-0 bottom-0":""} ${l[37]==="left"?"right-[100%] top-0 bottom-0":""} ${l[37]==="up"?"bottom-[100%] left-0 right-0":""} grid place-items-center`)},m(y,h){M(y,n,h),m(n,r),m(r,i),m(n,f),a||(d=Oe(r,"click",c),a=!0)},p(y,h){l=y,h[0]&1024&&o!==(o=l[11][l[37]]+"")&&Se(i,o),h[0]&1024&&s!==(s=`absolute ${l[37]==="down"?"top-[100%] left-0 right-0":""} ${l[37]==="right"?"left-[100%] top-0 bottom-0":""} ${l[37]==="left"?"right-[100%] top-0 bottom-0":""} ${l[37]==="up"?"bottom-[100%] left-0 right-0":""} grid place-items-center`)&&g(n,"class",s)},d(y){y&&$(n),a=!1,d()}}}function be(l){let n,r,o,i;function f(d,c){if(c[0]&512&&(r=null),d[1][0]===d[33]&&d[1][1]===d[36])return Ze;if(r==null&&(r=!d[9]([d[33],d[36]])),r)return Ye}let s=f(l,[-1,-1]),a=s&&s(l);return{c(){n=w("div"),a&&a.c(),o=P(),g(n,"class",i=`border ${l[34].bgColor}`)},m(d,c){M(d,n,c),a&&a.m(n,null),m(n,o)},p(d,c){s===(s=f(d,c))&&a?a.p(d,c):(a&&a.d(1),a=s&&s(d),a&&(a.c(),a.m(n,o))),c[0]&1&&i!==(i=`border ${d[34].bgColor}`)&&g(n,"class",i)},d(d){d&&$(n),a&&a.d()}}}function ye(l){let n,r=l[31],o=[];for(let i=0;i<r.length;i+=1)o[i]=be(_e(l,r,i));return{c(){for(let i=0;i<o.length;i+=1)o[i].c();n=Ne()},m(i,f){for(let s=0;s<o.length;s+=1)o[s].m(i,f);M(i,n,f)},p(i,f){if(f[0]&3843){r=i[31];let s;for(s=0;s<r.length;s+=1){const a=_e(i,r,s);o[s]?o[s].p(a,f):(o[s]=be(a),o[s].c(),o[s].m(n.parentNode,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},d(i){W(o,i),i&&$(n)}}}function ve(l){let n,r,o,i;return{c(){n=w("div"),r=w("img"),i=P(),B(r.src,o=`/${l[28].name}.png`)||g(r,"src",o),g(r,"class","w-8 h-8 inline"),g(r,"alt","item")},m(f,s){M(f,n,s),m(n,r),m(n,i)},p(f,s){s[0]&4&&!B(r.src,o=`/${f[28].name}.png`)&&g(r,"src",o)},d(f){f&&$(n)}}}function ke(l){let n,r,o=l[11][l[8].direction]+"",i,f,s,a=[1,2,3,4,5,6,7,8,9],d=[];for(let c=0;c<9;c+=1)d[c]=Ce(de(l,a,c));return{c(){n=w("div"),r=w("div"),i=X(o),f=P(),s=w("div");for(let c=0;c<9;c+=1)d[c].c();g(r,"class","text-center text-4xl p-2"),g(s,"class","grid grid-cols-9 gap-1 mt-4 justify-center"),g(n,"class","fixed bottom-0 left-0 right-0 p-1")},m(c,y){M(c,n,y),m(n,r),m(r,i),m(n,f),m(n,s);for(let h=0;h<9;h+=1)d[h].m(s,null)},p(c,y){if(y[0]&256&&o!==(o=c[11][c[8].direction]+"")&&Se(i,o),y[0]&4352){a=[1,2,3,4,5,6,7,8,9];let h;for(h=0;h<9;h+=1){const S=de(c,a,h);d[h]?d[h].p(S,y):(d[h]=Ce(S),d[h].c(),d[h].m(s,null))}for(;h<9;h+=1)d[h].d(1)}},d(c){c&&$(n),W(d,c)}}}function Ce(l){let n,r,o,i,f;function s(){return l[15](l[25])}return{c(){n=w("button"),r=X(l[25]),o=P(),g(n,"class","border p-1 text-6xl disabled:text-gray-400")},m(a,d){M(a,n,d),m(n,r),m(n,o),i||(f=Oe(n,"click",s),i=!0)},p(a,d){l=a},d(a){a&&$(n),i=!1,f()}}}function xe(l){let n,r,o,i,f,s,a,d,c,y,h,S,O,v,j,Y,V,L,Q,Z,I,x,T=l[0],E=[];for(let u=0;u<T.length;u+=1)E[u]=ye(he(l,T,u));let q=l[2],A=[];for(let u=0;u<q.length;u+=1)A[u]=ve(pe(l,q,u));let J=l[8]&&ke(l);return{c(){n=w("main"),r=w("div"),o=w("div"),i=w("div");for(let u=0;u<E.length;u+=1)E[u].c();f=P(),s=w("div");for(let u=0;u<A.length;u+=1)A[u].c();a=P(),J&&J.c(),d=P(),c=w("audio"),h=P(),S=w("audio"),v=P(),j=w("audio"),V=P(),L=w("audio"),Z=P(),I=w("audio"),g(i,"class","grid justify-center grid-cols-[repeat(10,68px)] grid-rows-[repeat(10,68px)]"),g(s,"class","flex flex-wrap gap-4 p-2"),g(o,"class","p-4 pt-16"),g(r,"class",""),B(c.src,y="/footsteps.wav")||g(c,"src",y),B(S.src,O="/invalid.mp3")||g(S,"src",O),B(j.src,Y="/lick.wav")||g(j,"src",Y),B(L.src,Q="/victory.mp3")||g(L,"src",Q),B(I.src,x="/key.wav")||g(I,"src",x)},m(u,k){M(u,n,k),m(n,r),m(r,o),m(o,i);for(let p=0;p<E.length;p+=1)E[p].m(i,null);m(o,f),m(o,s);for(let p=0;p<A.length;p+=1)A[p].m(s,null);m(o,a),J&&J.m(o,null),m(n,d),m(n,c),l[16](c),m(n,h),m(n,S),l[17](S),m(n,v),m(n,j),l[18](j),m(n,V),m(n,L),l[19](L),m(n,Z),m(n,I),l[20](I)},p(u,k){if(k[0]&3843){T=u[0];let p;for(p=0;p<T.length;p+=1){const N=he(u,T,p);E[p]?E[p].p(N,k):(E[p]=ye(N),E[p].c(),E[p].m(i,null))}for(;p<E.length;p+=1)E[p].d(1);E.length=T.length}if(k[0]&4){q=u[2];let p;for(p=0;p<q.length;p+=1){const N=pe(u,q,p);A[p]?A[p].p(N,k):(A[p]=ve(N),A[p].c(),A[p].m(s,null))}for(;p<A.length;p+=1)A[p].d(1);A.length=q.length}u[8]?J?J.p(u,k):(J=ke(u),J.c(),J.m(o,null)):J&&(J.d(1),J=null)},i:U,o:U,d(u){u&&$(n),W(E,u),W(A,u),J&&J.d(),l[16](null),l[17](null),l[18](null),l[19](null),l[20](null)}}}function et(l,n,r){let o,i,f,s,a,d,c,y,h,S=5,O=te[S],v=[0,0],j;const Y={up:"⬆️",down:"⬇️",left:"⬅️",right:"➡️"};let V=[],L=[];const Q=(u,k)=>{const[p,N]=v;let C=o.find(re=>re.direction===u&&re.delta===k);if(V=[...V,{direction:u,delta:k,isValid:C}],!C){y.play();return}switch(a.play(),u){case"up":r(1,v[0]=p-k,v);break;case"down":r(1,v[0]=p+k,v);break;case"left":r(1,v[1]=N-k,v);break;case"right":r(1,v[1]=N+k,v);break}const _=O[v[0]][v[1]];if(_.type==="item"){if(L.find(ue=>ue.field[0]===v[0]&&ue.field[1]===v[1]))return;_.onStep&&(_.onStep({board:O}),r(0,O=[...O])),_.name==="lollipop"?d.play():_.name==="key"&&h.play(),r(2,L=[...L,{name:_.name,field:[...v]}])}r(8,j=null),Z()&&(c.play(),setTimeout(()=>{alert("Bravo! 🎉🎉🎉🎉🎉🎉"),V=[],r(2,L=[]),r(1,v=[0,0]),te[S+1]?(S++,r(0,O=te[S])):(S=0,r(0,O=te[S]))},1e3))};console.log({totalLollipopsInGame:f});const Z=()=>f===L.filter(u=>u.name==="lollipop").length,I=u=>r(8,j={action:"move",direction:u}),x=u=>Q(j.direction,u);function T(u){D[u?"unshift":"push"](()=>{a=u,r(3,a)})}function E(u){D[u?"unshift":"push"](()=>{y=u,r(6,y)})}function q(u){D[u?"unshift":"push"](()=>{d=u,r(4,d)})}function A(u){D[u?"unshift":"push"](()=>{c=u,r(5,c)})}function J(u){D[u?"unshift":"push"](()=>{h=u,r(7,h)})}return l.$$.update=()=>{l.$$.dirty[0]&3&&r(13,o=Ke.map(u=>{const[k,p]=v,N=[];switch(u.direction){case"up":for(let C=1;C<=k;C++){const _=O[k-C][p];if(_!=null&&_.userCanStep)N.push({...u,delta:C});else{if(_!=null&&_.userCanJumpOver)continue;break}}break;case"down":for(let C=1;C<=O.length-1-k;C++){const _=O[k+C][p];if(_!=null&&_.userCanStep)N.push({...u,delta:C});else{if(_!=null&&_.userCanJumpOver)continue;break}}break;case"left":for(let C=1;C<=p;C++){const _=O[k][p-C];if(_!=null&&_.userCanStep)N.push({...u,delta:C});else{if(_!=null&&_.userCanJumpOver)continue;break}}break;case"right":for(let C=1;C<=O[0].length-1-p;C++){const _=O[k][p+C];if(_!=null&&_.userCanStep)N.push({...u,delta:C});else{if(_!=null&&_.userCanJumpOver)continue;break}}break}return N}).flat()),l.$$.dirty[0]&8192&&r(10,i=[...new Set(o.map(u=>u.direction))]),l.$$.dirty[0]&1&&(f=O.flat().filter(u=>u.name==="lollipop").length),l.$$.dirty[0]&4&&r(9,s=u=>!!L.find(p=>p.field[0]===u[0]&&p.field[1]===u[1]))},[O,v,L,a,d,c,y,h,j,s,i,Y,Q,o,I,x,T,E,q,A,J]}class tt extends Ge{constructor(n){super(),De(this,n,et,xe,Ae,{},null,[-1,-1])}}new tt({target:document.getElementById("app")});
