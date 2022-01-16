import{C as Et,S as zs,i as Vs,n as Xs,e as s,t,j as h,c as l,a as r,g as a,d as o,m as p,b as u,K as g,f as Ys,F as e,L as Zs,s as Re,J as Qs,M as Te,N as xs,O as el}from"../chunks/vendor-7ffe92ef.js";const Js=v=>{const{subscribe:n,set:b}=Et({value:v});return{subscribe:n,update:f=>{if(f){const m=f(v);m!==void 0&&m!==v&&(v=m)}b({value:v})},set:f=>{v=f,b({value:v})}}},tl=v=>{let n=!1;const b={value:v},f={value:v},{subscribe:m,set:q}=Et(b);return{subscribe:m,update:j=>{if(j){const M=j(v);M!==void 0&&M!==v&&(v=b.value=f.value=M)}q((n=!n)?f:b)},set:j=>{v=b.value=f.value=j,q((n=!n)?f:b)}}};function al(v){let n,b,f,m,q,j,M,ee,_,T,Q,D,J,z,C,Qe,Je,d,Mt,te,_t,wt,gt,P,S,ae,Ie=v[0].get("a")+"",ze,qt,se,jt,Ct,I,Ot,os="{",$t,kt,Dt,le,Pt,St,B,Ht,oe,Nt,At,yt,H,re,ne,Be=v[1].get("a")+"",Ve,Rt,Tt,ce,It,Bt,V,Ft,ue,Gt,Wt,Kt,O,Lt,ve,Ut,Qt,de,Jt,zt,Vt,N,he,pe,Fe=v[3].value.get("a")+"",Xe,Xt,Yt,F,Zt,rs="{",xt,ea,ta,G,aa,ie,sa,la,oa,A,y,be,Ge=v[4].value.get("a")+"",Ye,ra,fe,na,ca,me,ua,va,W,da,ns="{",ha,pa,ia,K,ba,Ee,fa,ma,Ea,R,$,Me,We=v[5].value.get("a")+"",Ze,Ma,_e,_a,wa,we,ga,qa,ja,L,Ca,cs="{",Oa,$a,ka,U,Da,ge,Pa,Sa,Ha,E,k,qe,Ke=v[2].value.get("a")+"",xe,Na,je,Aa,ya,Ce,Ra,Ta,Ia,Oe,Ba,Fa,X,Ga,$e,Wa,Ka,La,ke,Ua,Qa,Y,Ja,De,za,Va,Xa,Pe,Ya,Za,xa,es,Se,Le,He,ts,as,us;return{c(){n=s("main"),b=s("header"),f=s("h1"),m=s("a"),q=t("mutable"),j=h(),M=s("blockquote"),ee=t("using mutable values in Svelte stores with the "),_=s("code"),T=t("immutable"),Q=t(` compiler flag.
			`),D=s("a"),J=t("learn more on GitHub"),z=h(),C=s("button"),Qe=t("click me to make number++ go up"),Je=h(),d=s("h2"),Mt=t("A. "),te=s("code"),_t=t("writable"),wt=t(" store (broken! D:)"),gt=h(),P=s("section"),S=s("p"),ae=s("span"),ze=t(Ie),qt=t(`
			\u2190 fails to update as a `),se=s("code"),jt=t("writable"),Ct=t(" store because "),I=s("code"),Ot=t("immutable="),$t=t(os),kt=t("true}"),Dt=h(),le=s("pre"),Pt=t(`$writableMap.set('a', $writableMap.get('a') + 1);
$writableMap = $writableMap;`),St=h(),B=s("h2"),Ht=t("B. cloned "),oe=s("code"),Nt=t("writable"),At=t(" store"),yt=h(),H=s("section"),re=s("p"),ne=s("span"),Ve=t(Be),Rt=t(`
			\u2190 works, but causes heart pain and in some cases tremendous garbage and slowness`),Tt=h(),ce=s("pre"),It=t(`$writableMapCloned.set('a', $writableMapCloned.get('a') + 1);
$writableMapCloned = new Map($writableMapCloned);`),Bt=h(),V=s("blockquote"),Ft=t("in the examples below, notice that you need to access "),ue=s("code"),Gt=t(".value"),Wt=t(" for reads, unlike above"),Kt=h(),O=s("h2"),Lt=t("C. "),ve=s("code"),Ut=t("derived"),Qt=t(" from "),de=s("code"),Jt=t("writable"),zt=t(" store"),Vt=h(),N=s("section"),he=s("p"),pe=s("span"),Xe=t(Fe),Xt=t(`
			\u2190 works with no new libraries, and doesn't clone the map, but we're juggling two stores, one for
			writes and one for reads, and it creates garbage every change`),Yt=h(),F=s("pre"),Zt=t("const derivedWritableMap = derived(writableMap, ($v) => ("),xt=t(rs),ea=t("value: $v}));"),ta=h(),G=s("h2"),aa=t("D. "),ie=s("code"),sa=t("mutable"),la=t(" store"),oa=h(),A=s("section"),y=s("p"),be=s("span"),Ye=t(Ge),ra=t(`
			\u2190 works because it's a `),fe=s("code"),na=t("mutable"),ca=t(` store; doesn't clone the map; however notice that
			you need to access `),me=s("code"),ua=t(".value"),va=h(),W=s("pre"),da=t("mutableMap.update(($v) => "),ha=t(ns),pa=t(`
	$v.set('a', $v.get('a') + 1);
});`),ia=h(),K=s("h2"),ba=t("E. "),Ee=s("code"),fa=t("fastMutable"),ma=t(" store"),Ea=h(),R=s("section"),$=s("p"),Me=s("span"),Ze=t(We),Ma=t(`
			\u2190 works because it's a `),_e=s("code"),_a=t("fastMutable"),wa=t(` store, which compared to
			`),we=s("code"),ga=t("mutable"),qa=t(` is slightly more efficient because it swaps between two stable object references,
			but it doesn't compose as an immutable value stream`),ja=h(),L=s("pre"),Ca=t("fastMutableMap.update(($v) => "),Oa=t(cs),$a=t(`
	$v.set('a', $v.get('a') + 1);
});`),ka=h(),U=s("h2"),Da=t("F. "),ge=s("code"),Pa=t("mutable"),Sa=t(" store with manual update and set"),Ha=h(),E=s("section"),k=s("p"),qe=s("span"),xe=t(Ke),Na=t(`
			\u2190 works because it's a `),je=s("code"),Aa=t("mutable"),ya=t(` store, but mutates the value directly and then
			manually calls `),Ce=s("code"),Ra=t(".update()"),Ta=t(", which seems like an antipattern"),Ia=h(),Oe=s("pre"),Ba=t(`$mutableMapManual.value.set('a', $mutableMapManual.value.get('a') + 1);
mutableMapManual.update();`),Fa=h(),X=s("p"),Ga=t("an alternative using the store's "),$e=s("code"),Wa=t("set"),Ka=t(" method:"),La=h(),ke=s("pre"),Ua=t(`$mutableMapManual.value.set('a', $mutableMapManual.value.get('a') + 1);
$mutableMapManual = $mutableMapManual.value;`),Qa=h(),Y=s("p"),Ja=t("and you can set a new value if you need to, but if this is all you need, prefer a "),De=s("code"),za=t("writable"),Va=t(":"),Xa=h(),Pe=s("pre"),Ya=t(`$mutableMapManual = new Map([/*...*/]);
mutableMapManual.update(() => new Map([/*...*/]));`),Za=h(),xa=s("hr"),es=h(),Se=s("footer"),Le=s("p"),He=s("a"),ts=t("get the docs and public domain source code on GitHub"),this.h()},l(i){n=l(i,"MAIN",{class:!0});var c=r(n);b=l(c,"HEADER",{});var et=r(b);f=l(et,"H1",{class:!0});var vs=r(f);m=l(vs,"A",{href:!0});var ds=r(m);q=a(ds,"mutable"),ds.forEach(o),vs.forEach(o),j=p(et),M=l(et,"BLOCKQUOTE",{});var Ue=r(M);ee=a(Ue,"using mutable values in Svelte stores with the "),_=l(Ue,"CODE",{class:!0});var hs=r(_);T=a(hs,"immutable"),hs.forEach(o),Q=a(Ue,` compiler flag.
			`),D=l(Ue,"A",{href:!0});var ps=r(D);J=a(ps,"learn more on GitHub"),ps.forEach(o),Ue.forEach(o),et.forEach(o),z=p(c),C=l(c,"BUTTON",{class:!0});var is=r(C);Qe=a(is,"click me to make number++ go up"),is.forEach(o),Je=p(c),d=l(c,"H2",{class:!0});var tt=r(d);Mt=a(tt,"A. "),te=l(tt,"CODE",{class:!0});var bs=r(te);_t=a(bs,"writable"),bs.forEach(o),wt=a(tt," store (broken! D:)"),tt.forEach(o),gt=p(c),P=l(c,"SECTION",{});var at=r(P);S=l(at,"P",{});var Ne=r(S);ae=l(Ne,"SPAN",{class:!0});var fs=r(ae);ze=a(fs,Ie),fs.forEach(o),qt=a(Ne,`
			\u2190 fails to update as a `),se=l(Ne,"CODE",{class:!0});var ms=r(se);jt=a(ms,"writable"),ms.forEach(o),Ct=a(Ne," store because "),I=l(Ne,"CODE",{class:!0});var st=r(I);Ot=a(st,"immutable="),$t=a(st,os),kt=a(st,"true}"),st.forEach(o),Ne.forEach(o),Dt=p(at),le=l(at,"PRE",{class:!0});var Es=r(le);Pt=a(Es,`$writableMap.set('a', $writableMap.get('a') + 1);
$writableMap = $writableMap;`),Es.forEach(o),at.forEach(o),St=p(c),B=l(c,"H2",{class:!0});var lt=r(B);Ht=a(lt,"B. cloned "),oe=l(lt,"CODE",{class:!0});var Ms=r(oe);Nt=a(Ms,"writable"),Ms.forEach(o),At=a(lt," store"),lt.forEach(o),yt=p(c),H=l(c,"SECTION",{});var ot=r(H);re=l(ot,"P",{});var ss=r(re);ne=l(ss,"SPAN",{class:!0});var _s=r(ne);Ve=a(_s,Be),_s.forEach(o),Rt=a(ss,`
			\u2190 works, but causes heart pain and in some cases tremendous garbage and slowness`),ss.forEach(o),Tt=p(ot),ce=l(ot,"PRE",{class:!0});var ws=r(ce);It=a(ws,`$writableMapCloned.set('a', $writableMapCloned.get('a') + 1);
$writableMapCloned = new Map($writableMapCloned);`),ws.forEach(o),ot.forEach(o),Bt=p(c),V=l(c,"BLOCKQUOTE",{});var rt=r(V);Ft=a(rt,"in the examples below, notice that you need to access "),ue=l(rt,"CODE",{class:!0});var gs=r(ue);Gt=a(gs,".value"),gs.forEach(o),Wt=a(rt," for reads, unlike above"),rt.forEach(o),Kt=p(c),O=l(c,"H2",{class:!0});var Ae=r(O);Lt=a(Ae,"C. "),ve=l(Ae,"CODE",{class:!0});var qs=r(ve);Ut=a(qs,"derived"),qs.forEach(o),Qt=a(Ae," from "),de=l(Ae,"CODE",{class:!0});var js=r(de);Jt=a(js,"writable"),js.forEach(o),zt=a(Ae," store"),Ae.forEach(o),Vt=p(c),N=l(c,"SECTION",{});var nt=r(N);he=l(nt,"P",{});var ls=r(he);pe=l(ls,"SPAN",{class:!0});var Cs=r(pe);Xe=a(Cs,Fe),Cs.forEach(o),Xt=a(ls,`
			\u2190 works with no new libraries, and doesn't clone the map, but we're juggling two stores, one for
			writes and one for reads, and it creates garbage every change`),ls.forEach(o),Yt=p(nt),F=l(nt,"PRE",{class:!0});var ct=r(F);Zt=a(ct,"const derivedWritableMap = derived(writableMap, ($v) => ("),xt=a(ct,rs),ea=a(ct,"value: $v}));"),ct.forEach(o),nt.forEach(o),ta=p(c),G=l(c,"H2",{class:!0});var ut=r(G);aa=a(ut,"D. "),ie=l(ut,"CODE",{class:!0});var Os=r(ie);sa=a(Os,"mutable"),Os.forEach(o),la=a(ut," store"),ut.forEach(o),oa=p(c),A=l(c,"SECTION",{});var vt=r(A);y=l(vt,"P",{});var ye=r(y);be=l(ye,"SPAN",{class:!0});var $s=r(be);Ye=a($s,Ge),$s.forEach(o),ra=a(ye,`
			\u2190 works because it's a `),fe=l(ye,"CODE",{class:!0});var ks=r(fe);na=a(ks,"mutable"),ks.forEach(o),ca=a(ye,` store; doesn't clone the map; however notice that
			you need to access `),me=l(ye,"CODE",{class:!0});var Ds=r(me);ua=a(Ds,".value"),Ds.forEach(o),ye.forEach(o),va=p(vt),W=l(vt,"PRE",{class:!0});var dt=r(W);da=a(dt,"mutableMap.update(($v) => "),ha=a(dt,ns),pa=a(dt,`
	$v.set('a', $v.get('a') + 1);
});`),dt.forEach(o),vt.forEach(o),ia=p(c),K=l(c,"H2",{class:!0});var ht=r(K);ba=a(ht,"E. "),Ee=l(ht,"CODE",{class:!0});var Ps=r(Ee);fa=a(Ps,"fastMutable"),Ps.forEach(o),ma=a(ht," store"),ht.forEach(o),Ea=p(c),R=l(c,"SECTION",{});var pt=r(R);$=l(pt,"P",{});var Z=r($);Me=l(Z,"SPAN",{class:!0});var Ss=r(Me);Ze=a(Ss,We),Ss.forEach(o),Ma=a(Z,`
			\u2190 works because it's a `),_e=l(Z,"CODE",{class:!0});var Hs=r(_e);_a=a(Hs,"fastMutable"),Hs.forEach(o),wa=a(Z,` store, which compared to
			`),we=l(Z,"CODE",{class:!0});var Ns=r(we);ga=a(Ns,"mutable"),Ns.forEach(o),qa=a(Z,` is slightly more efficient because it swaps between two stable object references,
			but it doesn't compose as an immutable value stream`),Z.forEach(o),ja=p(pt),L=l(pt,"PRE",{class:!0});var it=r(L);Ca=a(it,"fastMutableMap.update(($v) => "),Oa=a(it,cs),$a=a(it,`
	$v.set('a', $v.get('a') + 1);
});`),it.forEach(o),pt.forEach(o),ka=p(c),U=l(c,"H2",{class:!0});var bt=r(U);Da=a(bt,"F. "),ge=l(bt,"CODE",{class:!0});var As=r(ge);Pa=a(As,"mutable"),As.forEach(o),Sa=a(bt," store with manual update and set"),bt.forEach(o),Ha=p(c),E=l(c,"SECTION",{});var w=r(E);k=l(w,"P",{});var x=r(k);qe=l(x,"SPAN",{class:!0});var ys=r(qe);xe=a(ys,Ke),ys.forEach(o),Na=a(x,`
			\u2190 works because it's a `),je=l(x,"CODE",{class:!0});var Rs=r(je);Aa=a(Rs,"mutable"),Rs.forEach(o),ya=a(x,` store, but mutates the value directly and then
			manually calls `),Ce=l(x,"CODE",{class:!0});var Ts=r(Ce);Ra=a(Ts,".update()"),Ts.forEach(o),Ta=a(x,", which seems like an antipattern"),x.forEach(o),Ia=p(w),Oe=l(w,"PRE",{class:!0});var Is=r(Oe);Ba=a(Is,`$mutableMapManual.value.set('a', $mutableMapManual.value.get('a') + 1);
mutableMapManual.update();`),Is.forEach(o),Fa=p(w),X=l(w,"P",{});var ft=r(X);Ga=a(ft,"an alternative using the store's "),$e=l(ft,"CODE",{class:!0});var Bs=r($e);Wa=a(Bs,"set"),Bs.forEach(o),Ka=a(ft," method:"),ft.forEach(o),La=p(w),ke=l(w,"PRE",{class:!0});var Fs=r(ke);Ua=a(Fs,`$mutableMapManual.value.set('a', $mutableMapManual.value.get('a') + 1);
$mutableMapManual = $mutableMapManual.value;`),Fs.forEach(o),Qa=p(w),Y=l(w,"P",{});var mt=r(Y);Ja=a(mt,"and you can set a new value if you need to, but if this is all you need, prefer a "),De=l(mt,"CODE",{class:!0});var Gs=r(De);za=a(Gs,"writable"),Gs.forEach(o),Va=a(mt,":"),mt.forEach(o),Xa=p(w),Pe=l(w,"PRE",{class:!0});var Ws=r(Pe);Ya=a(Ws,`$mutableMapManual = new Map([/*...*/]);
mutableMapManual.update(() => new Map([/*...*/]));`),Ws.forEach(o),w.forEach(o),Za=p(c),xa=l(c,"HR",{}),es=p(c),Se=l(c,"FOOTER",{class:!0});var Ks=r(Se);Le=l(Ks,"P",{});var Ls=r(Le);He=l(Ls,"A",{href:!0});var Us=r(He);ts=a(Us,"get the docs and public domain source code on GitHub"),Us.forEach(o),Ls.forEach(o),Ks.forEach(o),c.forEach(o),this.h()},h(){u(m,"href","https://github.com/spiderspace/mutable"),u(f,"class","svelte-5qhvja"),u(_,"class","svelte-5qhvja"),u(D,"href","https://github.com/spiderspace/mutable"),u(C,"class","svelte-5qhvja"),u(te,"class","svelte-5qhvja"),u(d,"class","svelte-5qhvja"),u(ae,"class","count svelte-5qhvja"),u(se,"class","svelte-5qhvja"),u(I,"class","svelte-5qhvja"),u(le,"class","panel-inset svelte-5qhvja"),g(P,"--hue",v[12](v[0].get("a")),!1),u(oe,"class","svelte-5qhvja"),u(B,"class","svelte-5qhvja"),u(ne,"class","count svelte-5qhvja"),u(ce,"class","panel-inset svelte-5qhvja"),g(H,"--hue",v[12](v[1].get("a")),!1),u(ue,"class","svelte-5qhvja"),u(ve,"class","svelte-5qhvja"),u(de,"class","svelte-5qhvja"),u(O,"class","svelte-5qhvja"),u(pe,"class","count svelte-5qhvja"),u(F,"class","panel-inset svelte-5qhvja"),g(N,"--hue",v[12](v[3].value.get("a")),!1),u(ie,"class","svelte-5qhvja"),u(G,"class","svelte-5qhvja"),u(be,"class","count svelte-5qhvja"),u(fe,"class","svelte-5qhvja"),u(me,"class","svelte-5qhvja"),u(W,"class","panel-inset svelte-5qhvja"),g(A,"--hue",v[12](v[4].value.get("a")),!1),u(Ee,"class","svelte-5qhvja"),u(K,"class","svelte-5qhvja"),u(Me,"class","count svelte-5qhvja"),u(_e,"class","svelte-5qhvja"),u(we,"class","svelte-5qhvja"),u(L,"class","panel-inset svelte-5qhvja"),g(R,"--hue",v[12](v[5].value.get("a")),!1),u(ge,"class","svelte-5qhvja"),u(U,"class","svelte-5qhvja"),u(qe,"class","count svelte-5qhvja"),u(je,"class","svelte-5qhvja"),u(Ce,"class","svelte-5qhvja"),u(Oe,"class","panel-inset svelte-5qhvja"),u($e,"class","svelte-5qhvja"),u(ke,"class","panel-inset svelte-5qhvja"),u(De,"class","svelte-5qhvja"),u(Pe,"class","panel-inset svelte-5qhvja"),g(E,"--hue",v[12](v[2].value.get("a")),!1),u(He,"href","https://github.com/spiderspace/mutable"),u(Se,"class","svelte-5qhvja"),u(n,"class","markup column svelte-5qhvja")},m(i,c){Ys(i,n,c),e(n,b),e(b,f),e(f,m),e(m,q),e(b,j),e(b,M),e(M,ee),e(M,_),e(_,T),e(M,Q),e(M,D),e(D,J),e(n,z),e(n,C),e(C,Qe),e(n,Je),e(n,d),e(d,Mt),e(d,te),e(te,_t),e(d,wt),e(n,gt),e(n,P),e(P,S),e(S,ae),e(ae,ze),e(S,qt),e(S,se),e(se,jt),e(S,Ct),e(S,I),e(I,Ot),e(I,$t),e(I,kt),e(P,Dt),e(P,le),e(le,Pt),e(n,St),e(n,B),e(B,Ht),e(B,oe),e(oe,Nt),e(B,At),e(n,yt),e(n,H),e(H,re),e(re,ne),e(ne,Ve),e(re,Rt),e(H,Tt),e(H,ce),e(ce,It),e(n,Bt),e(n,V),e(V,Ft),e(V,ue),e(ue,Gt),e(V,Wt),e(n,Kt),e(n,O),e(O,Lt),e(O,ve),e(ve,Ut),e(O,Qt),e(O,de),e(de,Jt),e(O,zt),e(n,Vt),e(n,N),e(N,he),e(he,pe),e(pe,Xe),e(he,Xt),e(N,Yt),e(N,F),e(F,Zt),e(F,xt),e(F,ea),e(n,ta),e(n,G),e(G,aa),e(G,ie),e(ie,sa),e(G,la),e(n,oa),e(n,A),e(A,y),e(y,be),e(be,Ye),e(y,ra),e(y,fe),e(fe,na),e(y,ca),e(y,me),e(me,ua),e(A,va),e(A,W),e(W,da),e(W,ha),e(W,pa),e(n,ia),e(n,K),e(K,ba),e(K,Ee),e(Ee,fa),e(K,ma),e(n,Ea),e(n,R),e(R,$),e($,Me),e(Me,Ze),e($,Ma),e($,_e),e(_e,_a),e($,wa),e($,we),e(we,ga),e($,qa),e(R,ja),e(R,L),e(L,Ca),e(L,Oa),e(L,$a),e(n,ka),e(n,U),e(U,Da),e(U,ge),e(ge,Pa),e(U,Sa),e(n,Ha),e(n,E),e(E,k),e(k,qe),e(qe,xe),e(k,Na),e(k,je),e(je,Aa),e(k,ya),e(k,Ce),e(Ce,Ra),e(k,Ta),e(E,Ia),e(E,Oe),e(Oe,Ba),e(E,Fa),e(E,X),e(X,Ga),e(X,$e),e($e,Wa),e(X,Ka),e(E,La),e(E,ke),e(ke,Ua),e(E,Qa),e(E,Y),e(Y,Ja),e(Y,De),e(De,za),e(Y,Va),e(E,Xa),e(E,Pe),e(Pe,Ya),e(n,Za),e(n,xa),e(n,es),e(n,Se),e(Se,Le),e(Le,He),e(He,ts),as||(us=Zs(C,"click",v[13]),as=!0)},p(i,[c]){c&1&&Ie!==(Ie=i[0].get("a")+"")&&Re(ze,Ie),c&1&&g(P,"--hue",i[12](i[0].get("a")),!1),c&2&&Be!==(Be=i[1].get("a")+"")&&Re(Ve,Be),c&2&&g(H,"--hue",i[12](i[1].get("a")),!1),c&8&&Fe!==(Fe=i[3].value.get("a")+"")&&Re(Xe,Fe),c&8&&g(N,"--hue",i[12](i[3].value.get("a")),!1),c&16&&Ge!==(Ge=i[4].value.get("a")+"")&&Re(Ye,Ge),c&16&&g(A,"--hue",i[12](i[4].value.get("a")),!1),c&32&&We!==(We=i[5].value.get("a")+"")&&Re(Ze,We),c&32&&g(R,"--hue",i[12](i[5].value.get("a")),!1),c&4&&Ke!==(Ke=i[2].value.get("a")+"")&&Re(xe,Ke),c&4&&g(E,"--hue",i[12](i[2].value.get("a")),!1)},i:Qs,o:Qs,d(i){i&&o(n),as=!1,us()}}}function sl(v,n,b){let f,m,q,j,M,ee;const _=[["a",1]],T=Et(new Map(_));Te(v,T,d=>b(0,f=d));const Q=Et(new Map(_));Te(v,Q,d=>b(1,m=d));const D=xs(T,d=>({value:d}));Te(v,D,d=>b(3,j=d));const J=Js(new Map(_));Te(v,J,d=>b(4,M=d));const z=tl(new Map(_));Te(v,z,d=>b(5,ee=d));const C=Js(new Map(_));return Te(v,C,d=>b(2,q=d)),[f,m,q,j,M,ee,T,Q,D,J,z,C,d=>d*37+"",()=>{f.set("a",f.get("a")+1),T.set(f),m.set("a",m.get("a")+1),el(Q,m=new Map(m),m),J.update(d=>{d.set("a",d.get("a")+1)}),z.update(d=>{d.set("a",d.get("a")+1)}),q.value.set("a",q.value.get("a")+1),C.update()}]}class ol extends zs{constructor(n){super();Vs(this,n,sl,al,Xs,{})}}export{ol as default};
