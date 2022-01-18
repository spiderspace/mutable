import{C as fs,S as rl,i as ul,n as il,e,t as l,j as u,c as s,a as n,g as p,d as t,m as i,b as o,K as _,f as dl,F as a,L as kl,s as He,J as mo,M as Oe,N as vl,O as hl}from"../chunks/vendor-7ffe92ef.js";const Eo=d=>{const{subscribe:c,set:h}=fs({value:d});return{subscribe:c,update:g=>{if(g){const m=g(d);m!==void 0&&m!==d&&(d=m)}h({value:d})},set:g=>{d=g,h({value:d})}}},fl=d=>{let c=!1;const h={value:d},g={value:d},{subscribe:m,set:D}=fs(h);return{subscribe:m,update:C=>{c=!c;const E=c?g:h;if(C){const W=C(d);W!==void 0&&W!==d&&(d=E.value=W)}D(E)},set:C=>{c=!c;const E=c?g:h;d=E.value=C,D(E)}}},bl='<span class="token keyword">const</span> writableMap <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>',gl=`$writableMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>`,ml=`$writableMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> $writableMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$writableMap <span class="token operator">=</span> $writableMap<span class="token punctuation">;</span>`,El='<span class="token keyword">const</span> writableMapCloned <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>',wl=`$writableMapCloned<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>`,_l=`$writableMapCloned<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> $writableMapCloned<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$writableMapCloned <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>$writableMapCloned<span class="token punctuation">)</span><span class="token punctuation">;</span>`,Ml='<span class="token keyword">const</span> derivedWritableMap <span class="token operator">=</span> <span class="token function">derived</span><span class="token punctuation">(</span>writableMap<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">$v</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> $v<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>',Dl=`$derivedWritableMap<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>`,Cl=`$writableMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> $writableMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$writableMap <span class="token operator">=</span> $writableMap<span class="token punctuation">;</span>`,Pl='<span class="token keyword">const</span> mutableMap <span class="token operator">=</span> <span class="token function">mutable</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>',Rl=`$mutableMap<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>`,Hl=`mutableMap<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">$v</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	$v<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> $v<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`,Ol='<span class="token keyword">const</span> fastMutableMap <span class="token operator">=</span> <span class="token function">fastMutable</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>',Al=`$fastMutableMap<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>`,yl=`fastMutableMap<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">$v</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	$v<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> $v<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`,Wl='<span class="token keyword">const</span> mutableMapManual <span class="token operator">=</span> <span class="token function">mutable</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>',Tl=`$mutableMapManual<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>`,Ll=`$mutableMapManual<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> $mutableMapManual<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mutableMapManual<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`,Fl=`$mutableMapManual<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> $mutableMapManual<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$mutableMapManual <span class="token operator">=</span> $mutableMapManual<span class="token punctuation">.</span>value<span class="token punctuation">;</span>`,Sl='$mutableMapManual <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>',Nl='mutableMapManual<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>';var b={ADef:bl,ARead:gl,AWrite:ml,BDef:El,BRead:wl,BWrite:_l,CDef:Ml,CRead:Dl,CWrite:Cl,DDef:Pl,DRead:Rl,DWrite:Hl,EDef:Ol,ERead:Al,EWrite:yl,FDef:Wl,FRead:Tl,F1Write:Ll,F2Write:Fl,F3Write:Sl,F4Write:Nl};function $l(d){let c,h,g,m,D,C,E,W,M,q,ca,B,ra,ua,P,Be,Ie,k,bs,da,gs,ms,Es,R,ka,wo=b.ADef+"",ws,j,V,va,Ae=d[0].get("a")+"",qe,_s,ha,_o=b.ARead+"",Ms,T,Ds,fa,Cs,Ps,G,Rs,Rn="{",Hs,Os,As,ys,ba,Mo=b.AWrite+"",Ws,K,Ts,ga,Ls,Fs,Ss,H,ma,Do=b.BDef+"",Ns,U,Q,Ea,ye=d[1].get("a")+"",je,$s,wa,Co=b.BRead+"",Bs,L,Is,_a,qs,js,Ma,Vs,Gs,Ks,Da,Po=b.BWrite+"",Us,Qs,Js,J,zs,Ca,Xs,Ys,Zs,xs,at,F,et,Pa,st,tt,Ra,nt,ot,lt,O,Ha,Ro=b.CDef+"",pt,z,X,Oa,We=d[3].value.get("a")+"",Ve,ct,Aa,Ho=b.CRead+"",rt,Y,ut,ya,it,dt,kt,Wa,Oo=b.CWrite+"",vt,Z,ht,Ta,La,ft,bt,gt,A,Fa,Ao=b.DDef+"",mt,x,aa,Sa,Te=d[4].value.get("a")+"",Ge,Et,Na,yo=b.DRead+"",wt,S,_t,$a,Ba,Mt,Dt,Ia,Ct,Pt,Rt,qa,Wo=b.DWrite+"",Ht,ea,Ot,ja,Va,At,yt,Wt,y,Ga,To=b.EDef+"",Tt,sa,ta,Ka,Le=d[5].value.get("a")+"",Ke,Lt,Ua,Lo=b.ERead+"",Ft,N,St,Qa,Ja,Nt,$t,za,Xa,Bt,It,qt,Ya,Fo=b.EWrite+"",jt,na,Vt,Za,xa,Gt,Kt,Ut,ae,So=b.FDef+"",Qt,f,oa,la,ee,Fe=d[2].value.get("a")+"",Ue,Jt,se,No=b.FRead+"",zt,$,Xt,te,ne,Yt,Zt,oe,xt,an,en,le,$o=b.F1Write+"",sn,I,tn,pe,nn,on,ce,ln,pn,cn,re,Bo=b.F2Write+"",rn,ia,un,ue,dn,kn,vn,ie,Io=b.F3Write+"",hn,Se,fn,bn,de,qo=b.F4Write+"",gn,mn,En,pa,ke,wn,ve,_n,Mn,Ne,he,Dn,Cn,Hn;return{c(){c=e("main"),h=e("header"),g=e("h1"),m=e("a"),D=l("mutable"),C=u(),E=e("blockquote"),W=l("using mutable values in Svelte stores with the "),M=e("code"),q=l("immutable"),ca=l(` compiler flag \u2014
			`),B=e("a"),ra=l("learn more on GitHub"),ua=u(),P=e("button"),Be=l("click me to make number++ go up"),Ie=u(),k=e("h2"),bs=l("A. "),da=e("code"),gs=l("writable"),ms=l(" store (broken! D:)"),Es=u(),R=e("section"),ka=e("pre"),ws=u(),j=e("div"),V=e("p"),va=e("span"),qe=l(Ae),_s=u(),ha=e("span"),Ms=u(),T=e("p"),Ds=l("fails to update as a "),fa=e("code"),Cs=l("writable"),Ps=l(" store because "),G=e("code"),Rs=l("immutable="),Hs=l(Rn),Os=l("true}"),As=l(` and
				we're mutating the map`),ys=u(),ba=e("pre"),Ws=u(),K=e("h2"),Ts=l("B. cloned "),ga=e("code"),Ls=l("writable"),Fs=l(" store"),Ss=u(),H=e("section"),ma=e("pre"),Ns=u(),U=e("div"),Q=e("p"),Ea=e("span"),je=l(ye),$s=u(),wa=e("span"),Bs=u(),L=e("p"),Is=l("works for "),_a=e("code"),qs=l("Map"),js=l(`, but in some cases, causes tremendous garbage and slowness; also,
				it does not work for `),Ma=e("code"),Vs=l("WeakMap"),Gs=l(", one of the motivating usecases for this document"),Ks=u(),Da=e("pre"),Us=u(),Qs=e("hr"),Js=u(),J=e("blockquote"),zs=l("in the examples below, notice that you need to access "),Ca=e("code"),Xs=l(".value"),Ys=l(" for reads, unlike above"),Zs=u(),xs=e("hr"),at=u(),F=e("h2"),et=l("C. "),Pa=e("code"),st=l("derived"),tt=l(" from "),Ra=e("code"),nt=l("writable"),ot=l(" store"),lt=u(),O=e("section"),Ha=e("pre"),pt=u(),z=e("div"),X=e("p"),Oa=e("span"),Ve=l(We),ct=u(),Aa=e("span"),rt=u(),Y=e("p"),ut=l(`works with no new modules, and doesn't clone the map, but now we're juggling two stores, one
				for writes and one for reads; is error prone because reading the `),ya=e("code"),it=l("writable"),dt=l(` isn't
				reactive!`),kt=u(),Wa=e("pre"),vt=u(),Z=e("h2"),ht=l("D. "),Ta=e("code"),La=e("a"),ft=l("mutable"),bt=l(" store"),gt=u(),A=e("section"),Fa=e("pre"),mt=u(),x=e("div"),aa=e("p"),Sa=e("span"),Ge=l(Te),Et=u(),Na=e("span"),wt=u(),S=e("p"),_t=l("works because it's a "),$a=e("code"),Ba=e("a"),Mt=l("mutable"),Dt=l(`
				store; doesn't clone the map; however notice that you need to access `),Ia=e("code"),Ct=l(".value"),Pt=l(" on reads"),Rt=u(),qa=e("pre"),Ht=u(),ea=e("h2"),Ot=l("E. "),ja=e("code"),Va=e("a"),At=l("fastMutable"),yt=l(" store"),Wt=u(),y=e("section"),Ga=e("pre"),Tt=u(),sa=e("div"),ta=e("p"),Ka=e("span"),Ke=l(Le),Lt=u(),Ua=e("span"),Ft=u(),N=e("p"),St=l("works because it's a "),Qa=e("code"),Ja=e("a"),Nt=l("fastMutable"),$t=l(`
				store, which compared to
				`),za=e("code"),Xa=e("a"),Bt=l("mutable"),It=l(` is slightly more efficient because it swaps between two stable object references, so there's
				no extra garbage created, but it doesn't compose as an immutable value stream, so it may be a
				dangerously too-clever design`),qt=u(),Ya=e("pre"),jt=u(),na=e("h2"),Vt=l("F. "),Za=e("code"),xa=e("a"),Gt=l("mutable"),Kt=l(" store with manual update and set"),Ut=u(),ae=e("pre"),Qt=u(),f=e("section"),oa=e("div"),la=e("p"),ee=e("span"),Ue=l(Fe),Jt=u(),se=e("span"),zt=u(),$=e("p"),Xt=l("works because it's a "),te=e("code"),ne=e("a"),Yt=l("mutable"),Zt=l(`
				store, but mutates the value directly and then manually calls `),oe=e("code"),xt=l(".update()"),an=l(`, which
				may be an antipattern`),en=u(),le=e("pre"),sn=u(),I=e("p"),tn=l("an alternative using the store's "),pe=e("code"),nn=l("set"),on=l(` method, which is extra awkward because of
			the `),ce=e("code"),ln=l(".value"),pn=l(":"),cn=u(),re=e("pre"),rn=u(),ia=e("p"),un=l("and you can set a new value if you need to, but if this is all you need, prefer a "),ue=e("code"),dn=l("writable"),kn=l(":"),vn=u(),ie=e("pre"),hn=u(),Se=e("p"),fn=l("or:"),bn=u(),de=e("pre"),gn=u(),mn=e("hr"),En=u(),pa=e("footer"),ke=e("p"),wn=l("want to discuss or help with some open questions? "),ve=e("a"),_n=l("go here"),Mn=u(),Ne=e("p"),he=e("a"),Dn=l("get the docs and public domain source code on GitHub"),this.h()},l(v){c=s(v,"MAIN",{class:!0});var r=n(c);h=s(r,"HEADER",{});var Qe=n(h);g=s(Qe,"H1",{class:!0});var On=n(g);m=s(On,"A",{href:!0});var An=n(m);D=p(An,"mutable"),An.forEach(t),On.forEach(t),C=i(Qe),E=s(Qe,"BLOCKQUOTE",{});var $e=n(E);W=p($e,"using mutable values in Svelte stores with the "),M=s($e,"CODE",{class:!0});var yn=n(M);q=p(yn,"immutable"),yn.forEach(t),ca=p($e,` compiler flag \u2014
			`),B=s($e,"A",{href:!0});var Wn=n(B);ra=p(Wn,"learn more on GitHub"),Wn.forEach(t),$e.forEach(t),Qe.forEach(t),ua=i(r),P=s(r,"BUTTON",{class:!0});var Tn=n(P);Be=p(Tn,"click me to make number++ go up"),Tn.forEach(t),Ie=i(r),k=s(r,"H2",{class:!0});var Je=n(k);bs=p(Je,"A. "),da=s(Je,"CODE",{class:!0});var Ln=n(da);gs=p(Ln,"writable"),Ln.forEach(t),ms=p(Je," store (broken! D:)"),Je.forEach(t),Es=i(r),R=s(r,"SECTION",{});var fe=n(R);ka=s(fe,"PRE",{class:!0});var jo=n(ka);jo.forEach(t),ws=i(fe),j=s(fe,"DIV",{class:!0});var ze=n(j);V=s(ze,"P",{class:!0});var Xe=n(V);va=s(Xe,"SPAN",{class:!0});var Fn=n(va);qe=p(Fn,Ae),Fn.forEach(t),_s=i(Xe),ha=s(Xe,"SPAN",{class:!0});var Vo=n(ha);Vo.forEach(t),Xe.forEach(t),Ms=i(ze),T=s(ze,"P",{class:!0});var be=n(T);Ds=p(be,"fails to update as a "),fa=s(be,"CODE",{class:!0});var Sn=n(fa);Cs=p(Sn,"writable"),Sn.forEach(t),Ps=p(be," store because "),G=s(be,"CODE",{class:!0});var Ye=n(G);Rs=p(Ye,"immutable="),Hs=p(Ye,Rn),Os=p(Ye,"true}"),Ye.forEach(t),As=p(be,` and
				we're mutating the map`),be.forEach(t),ze.forEach(t),ys=i(fe),ba=s(fe,"PRE",{class:!0});var Go=n(ba);Go.forEach(t),fe.forEach(t),Ws=i(r),K=s(r,"H2",{class:!0});var Ze=n(K);Ts=p(Ze,"B. cloned "),ga=s(Ze,"CODE",{class:!0});var Nn=n(ga);Ls=p(Nn,"writable"),Nn.forEach(t),Fs=p(Ze," store"),Ze.forEach(t),Ss=i(r),H=s(r,"SECTION",{});var ge=n(H);ma=s(ge,"PRE",{class:!0});var Ko=n(ma);Ko.forEach(t),Ns=i(ge),U=s(ge,"DIV",{class:!0});var xe=n(U);Q=s(xe,"P",{class:!0});var as=n(Q);Ea=s(as,"SPAN",{class:!0});var $n=n(Ea);je=p($n,ye),$n.forEach(t),$s=i(as),wa=s(as,"SPAN",{class:!0});var Uo=n(wa);Uo.forEach(t),as.forEach(t),Bs=i(xe),L=s(xe,"P",{class:!0});var me=n(L);Is=p(me,"works for "),_a=s(me,"CODE",{class:!0});var Bn=n(_a);qs=p(Bn,"Map"),Bn.forEach(t),js=p(me,`, but in some cases, causes tremendous garbage and slowness; also,
				it does not work for `),Ma=s(me,"CODE",{class:!0});var In=n(Ma);Vs=p(In,"WeakMap"),In.forEach(t),Gs=p(me,", one of the motivating usecases for this document"),me.forEach(t),xe.forEach(t),Ks=i(ge),Da=s(ge,"PRE",{class:!0});var Qo=n(Da);Qo.forEach(t),ge.forEach(t),Us=i(r),Qs=s(r,"HR",{}),Js=i(r),J=s(r,"BLOCKQUOTE",{style:!0});var es=n(J);zs=p(es,"in the examples below, notice that you need to access "),Ca=s(es,"CODE",{class:!0});var qn=n(Ca);Xs=p(qn,".value"),qn.forEach(t),Ys=p(es," for reads, unlike above"),es.forEach(t),Zs=i(r),xs=s(r,"HR",{}),at=i(r),F=s(r,"H2",{class:!0});var Ee=n(F);et=p(Ee,"C. "),Pa=s(Ee,"CODE",{class:!0});var jn=n(Pa);st=p(jn,"derived"),jn.forEach(t),tt=p(Ee," from "),Ra=s(Ee,"CODE",{class:!0});var Vn=n(Ra);nt=p(Vn,"writable"),Vn.forEach(t),ot=p(Ee," store"),Ee.forEach(t),lt=i(r),O=s(r,"SECTION",{});var we=n(O);Ha=s(we,"PRE",{class:!0});var Jo=n(Ha);Jo.forEach(t),pt=i(we),z=s(we,"DIV",{class:!0});var ss=n(z);X=s(ss,"P",{class:!0});var ts=n(X);Oa=s(ts,"SPAN",{class:!0});var Gn=n(Oa);Ve=p(Gn,We),Gn.forEach(t),ct=i(ts),Aa=s(ts,"SPAN",{class:!0});var zo=n(Aa);zo.forEach(t),ts.forEach(t),rt=i(ss),Y=s(ss,"P",{class:!0});var ns=n(Y);ut=p(ns,`works with no new modules, and doesn't clone the map, but now we're juggling two stores, one
				for writes and one for reads; is error prone because reading the `),ya=s(ns,"CODE",{class:!0});var Kn=n(ya);it=p(Kn,"writable"),Kn.forEach(t),dt=p(ns,` isn't
				reactive!`),ns.forEach(t),ss.forEach(t),kt=i(we),Wa=s(we,"PRE",{class:!0});var Xo=n(Wa);Xo.forEach(t),we.forEach(t),vt=i(r),Z=s(r,"H2",{class:!0});var os=n(Z);ht=p(os,"D. "),Ta=s(os,"CODE",{class:!0});var Un=n(Ta);La=s(Un,"A",{href:!0});var Qn=n(La);ft=p(Qn,"mutable"),Qn.forEach(t),Un.forEach(t),bt=p(os," store"),os.forEach(t),gt=i(r),A=s(r,"SECTION",{});var _e=n(A);Fa=s(_e,"PRE",{class:!0});var Yo=n(Fa);Yo.forEach(t),mt=i(_e),x=s(_e,"DIV",{class:!0});var ls=n(x);aa=s(ls,"P",{class:!0});var ps=n(aa);Sa=s(ps,"SPAN",{class:!0});var Jn=n(Sa);Ge=p(Jn,Te),Jn.forEach(t),Et=i(ps),Na=s(ps,"SPAN",{class:!0});var Zo=n(Na);Zo.forEach(t),ps.forEach(t),wt=i(ls),S=s(ls,"P",{class:!0});var Me=n(S);_t=p(Me,"works because it's a "),$a=s(Me,"CODE",{class:!0});var zn=n($a);Ba=s(zn,"A",{href:!0});var Xn=n(Ba);Mt=p(Xn,"mutable"),Xn.forEach(t),zn.forEach(t),Dt=p(Me,`
				store; doesn't clone the map; however notice that you need to access `),Ia=s(Me,"CODE",{class:!0});var Yn=n(Ia);Ct=p(Yn,".value"),Yn.forEach(t),Pt=p(Me," on reads"),Me.forEach(t),ls.forEach(t),Rt=i(_e),qa=s(_e,"PRE",{class:!0});var xo=n(qa);xo.forEach(t),_e.forEach(t),Ht=i(r),ea=s(r,"H2",{class:!0});var cs=n(ea);Ot=p(cs,"E. "),ja=s(cs,"CODE",{class:!0});var Zn=n(ja);Va=s(Zn,"A",{href:!0});var xn=n(Va);At=p(xn,"fastMutable"),xn.forEach(t),Zn.forEach(t),yt=p(cs," store"),cs.forEach(t),Wt=i(r),y=s(r,"SECTION",{});var De=n(y);Ga=s(De,"PRE",{class:!0});var al=n(Ga);al.forEach(t),Tt=i(De),sa=s(De,"DIV",{class:!0});var rs=n(sa);ta=s(rs,"P",{class:!0});var us=n(ta);Ka=s(us,"SPAN",{class:!0});var ao=n(Ka);Ke=p(ao,Le),ao.forEach(t),Lt=i(us),Ua=s(us,"SPAN",{class:!0});var el=n(Ua);el.forEach(t),us.forEach(t),Ft=i(rs),N=s(rs,"P",{class:!0});var Ce=n(N);St=p(Ce,"works because it's a "),Qa=s(Ce,"CODE",{class:!0});var eo=n(Qa);Ja=s(eo,"A",{href:!0});var so=n(Ja);Nt=p(so,"fastMutable"),so.forEach(t),eo.forEach(t),$t=p(Ce,`
				store, which compared to
				`),za=s(Ce,"CODE",{class:!0});var to=n(za);Xa=s(to,"A",{href:!0});var no=n(Xa);Bt=p(no,"mutable"),no.forEach(t),to.forEach(t),It=p(Ce,` is slightly more efficient because it swaps between two stable object references, so there's
				no extra garbage created, but it doesn't compose as an immutable value stream, so it may be a
				dangerously too-clever design`),Ce.forEach(t),rs.forEach(t),qt=i(De),Ya=s(De,"PRE",{class:!0});var sl=n(Ya);sl.forEach(t),De.forEach(t),jt=i(r),na=s(r,"H2",{class:!0});var is=n(na);Vt=p(is,"F. "),Za=s(is,"CODE",{class:!0});var oo=n(Za);xa=s(oo,"A",{href:!0});var lo=n(xa);Gt=p(lo,"mutable"),lo.forEach(t),oo.forEach(t),Kt=p(is," store with manual update and set"),is.forEach(t),Ut=i(r),ae=s(r,"PRE",{class:!0});var tl=n(ae);tl.forEach(t),Qt=i(r),f=s(r,"SECTION",{});var w=n(f);oa=s(w,"DIV",{class:!0});var ds=n(oa);la=s(ds,"P",{class:!0});var ks=n(la);ee=s(ks,"SPAN",{class:!0});var po=n(ee);Ue=p(po,Fe),po.forEach(t),Jt=i(ks),se=s(ks,"SPAN",{class:!0});var nl=n(se);nl.forEach(t),ks.forEach(t),zt=i(ds),$=s(ds,"P",{class:!0});var Pe=n($);Xt=p(Pe,"works because it's a "),te=s(Pe,"CODE",{class:!0});var co=n(te);ne=s(co,"A",{href:!0});var ro=n(ne);Yt=p(ro,"mutable"),ro.forEach(t),co.forEach(t),Zt=p(Pe,`
				store, but mutates the value directly and then manually calls `),oe=s(Pe,"CODE",{class:!0});var uo=n(oe);xt=p(uo,".update()"),uo.forEach(t),an=p(Pe,`, which
				may be an antipattern`),Pe.forEach(t),ds.forEach(t),en=i(w),le=s(w,"PRE",{class:!0});var ol=n(le);ol.forEach(t),sn=i(w),I=s(w,"P",{});var Re=n(I);tn=p(Re,"an alternative using the store's "),pe=s(Re,"CODE",{class:!0});var io=n(pe);nn=p(io,"set"),io.forEach(t),on=p(Re,` method, which is extra awkward because of
			the `),ce=s(Re,"CODE",{class:!0});var ko=n(ce);ln=p(ko,".value"),ko.forEach(t),pn=p(Re,":"),Re.forEach(t),cn=i(w),re=s(w,"PRE",{class:!0});var ll=n(re);ll.forEach(t),rn=i(w),ia=s(w,"P",{});var vs=n(ia);un=p(vs,"and you can set a new value if you need to, but if this is all you need, prefer a "),ue=s(vs,"CODE",{class:!0});var vo=n(ue);dn=p(vo,"writable"),vo.forEach(t),kn=p(vs,":"),vs.forEach(t),vn=i(w),ie=s(w,"PRE",{class:!0});var pl=n(ie);pl.forEach(t),hn=i(w),Se=s(w,"P",{});var ho=n(Se);fn=p(ho,"or:"),ho.forEach(t),bn=i(w),de=s(w,"PRE",{class:!0});var cl=n(de);cl.forEach(t),w.forEach(t),gn=i(r),mn=s(r,"HR",{}),En=i(r),pa=s(r,"FOOTER",{class:!0});var hs=n(pa);ke=s(hs,"P",{});var Pn=n(ke);wn=p(Pn,"want to discuss or help with some open questions? "),ve=s(Pn,"A",{href:!0});var fo=n(ve);_n=p(fo,"go here"),fo.forEach(t),Pn.forEach(t),Mn=i(hs),Ne=s(hs,"P",{});var bo=n(Ne);he=s(bo,"A",{href:!0});var go=n(he);Dn=p(go,"get the docs and public domain source code on GitHub"),go.forEach(t),bo.forEach(t),hs.forEach(t),r.forEach(t),this.h()},h(){o(m,"href","https://github.com/spiderspace/mutable"),o(g,"class","svelte-eogddl"),o(M,"class","svelte-eogddl"),o(B,"href","https://github.com/spiderspace/mutable"),o(P,"class","svelte-eogddl"),o(da,"class","svelte-eogddl"),o(k,"class","svelte-eogddl"),o(ka,"class","panel-inset svelte-eogddl"),o(va,"class","count svelte-eogddl"),o(ha,"class","read-example svelte-eogddl"),o(V,"class","count-wrapper panel-outset svelte-eogddl"),o(fa,"class","svelte-eogddl"),o(G,"class","svelte-eogddl"),o(T,"class","count-label svelte-eogddl"),o(j,"class","count-with-label svelte-eogddl"),o(ba,"class","panel-inset svelte-eogddl"),_(R,"--hue",d[12](d[0].get("a")),!1),o(ga,"class","svelte-eogddl"),o(K,"class","svelte-eogddl"),o(ma,"class","panel-inset svelte-eogddl"),o(Ea,"class","count svelte-eogddl"),o(wa,"class","read-example svelte-eogddl"),o(Q,"class","count-wrapper panel-outset svelte-eogddl"),o(_a,"class","svelte-eogddl"),o(Ma,"class","svelte-eogddl"),o(L,"class","count-label svelte-eogddl"),o(U,"class","count-with-label svelte-eogddl"),o(Da,"class","panel-inset svelte-eogddl"),_(H,"--hue",d[12](d[1].get("a")),!1),o(Ca,"class","svelte-eogddl"),_(J,"margin-bottom","0"),o(Pa,"class","svelte-eogddl"),o(Ra,"class","svelte-eogddl"),o(F,"class","svelte-eogddl"),o(Ha,"class","panel-inset svelte-eogddl"),o(Oa,"class","count svelte-eogddl"),o(Aa,"class","read-example svelte-eogddl"),o(X,"class","count-wrapper panel-outset svelte-eogddl"),o(ya,"class","svelte-eogddl"),o(Y,"class","count-label svelte-eogddl"),o(z,"class","count-with-label svelte-eogddl"),o(Wa,"class","panel-inset svelte-eogddl"),_(O,"--hue",d[12](d[3].value.get("a")),!1),o(La,"href","https://github.com/spiderspace/mutable/blob/main/src/lib/mutable.ts"),o(Ta,"class","svelte-eogddl"),o(Z,"class","svelte-eogddl"),o(Fa,"class","panel-inset svelte-eogddl"),o(Sa,"class","count svelte-eogddl"),o(Na,"class","read-example svelte-eogddl"),o(aa,"class","count-wrapper panel-outset svelte-eogddl"),o(Ba,"href","https://github.com/spiderspace/mutable/blob/main/src/lib/mutable.ts"),o($a,"class","svelte-eogddl"),o(Ia,"class","svelte-eogddl"),o(S,"class","count-label svelte-eogddl"),o(x,"class","count-with-label svelte-eogddl"),o(qa,"class","panel-inset svelte-eogddl"),_(A,"--hue",d[12](d[4].value.get("a")),!1),o(Va,"href","https://github.com/spiderspace/mutable/blob/main/src/lib/fastMutable.ts"),o(ja,"class","svelte-eogddl"),o(ea,"class","svelte-eogddl"),o(Ga,"class","panel-inset svelte-eogddl"),o(Ka,"class","count svelte-eogddl"),o(Ua,"class","read-example svelte-eogddl"),o(ta,"class","count-wrapper panel-outset svelte-eogddl"),o(Ja,"href","https://github.com/spiderspace/mutable/blob/main/src/lib/fastMutable.ts"),o(Qa,"class","svelte-eogddl"),o(Xa,"href","https://github.com/spiderspace/mutable/blob/main/src/lib/mutable.ts"),o(za,"class","svelte-eogddl"),o(N,"class","count-label svelte-eogddl"),o(sa,"class","count-with-label svelte-eogddl"),o(Ya,"class","panel-inset svelte-eogddl"),_(y,"--hue",d[12](d[5].value.get("a")),!1),o(xa,"href","https://github.com/spiderspace/mutable/blob/main/src/lib/mutable.ts"),o(Za,"class","svelte-eogddl"),o(na,"class","svelte-eogddl"),o(ae,"class","panel-inset svelte-eogddl"),o(ee,"class","count svelte-eogddl"),o(se,"class","read-example svelte-eogddl"),o(la,"class","count-wrapper panel-outset svelte-eogddl"),o(ne,"href","https://github.com/spiderspace/mutable/blob/main/src/lib/mutable.ts"),o(te,"class","svelte-eogddl"),o(oe,"class","svelte-eogddl"),o($,"class","count-label svelte-eogddl"),o(oa,"class","count-with-label svelte-eogddl"),o(le,"class","panel-inset svelte-eogddl"),o(pe,"class","svelte-eogddl"),o(ce,"class","svelte-eogddl"),o(re,"class","panel-inset svelte-eogddl"),o(ue,"class","svelte-eogddl"),o(ie,"class","panel-inset svelte-eogddl"),o(de,"class","panel-inset svelte-eogddl"),_(f,"--hue",d[12](d[2].value.get("a")),!1),o(ve,"href","https://github.com/spiderspace/spiderspace/discussions/5"),o(he,"href","https://github.com/spiderspace/mutable"),o(pa,"class","markup svelte-eogddl"),o(c,"class","markup column svelte-eogddl")},m(v,r){dl(v,c,r),a(c,h),a(h,g),a(g,m),a(m,D),a(h,C),a(h,E),a(E,W),a(E,M),a(M,q),a(E,ca),a(E,B),a(B,ra),a(c,ua),a(c,P),a(P,Be),a(c,Ie),a(c,k),a(k,bs),a(k,da),a(da,gs),a(k,ms),a(c,Es),a(c,R),a(R,ka),ka.innerHTML=wo,a(R,ws),a(R,j),a(j,V),a(V,va),a(va,qe),a(V,_s),a(V,ha),ha.innerHTML=_o,a(j,Ms),a(j,T),a(T,Ds),a(T,fa),a(fa,Cs),a(T,Ps),a(T,G),a(G,Rs),a(G,Hs),a(G,Os),a(T,As),a(R,ys),a(R,ba),ba.innerHTML=Mo,a(c,Ws),a(c,K),a(K,Ts),a(K,ga),a(ga,Ls),a(K,Fs),a(c,Ss),a(c,H),a(H,ma),ma.innerHTML=Do,a(H,Ns),a(H,U),a(U,Q),a(Q,Ea),a(Ea,je),a(Q,$s),a(Q,wa),wa.innerHTML=Co,a(U,Bs),a(U,L),a(L,Is),a(L,_a),a(_a,qs),a(L,js),a(L,Ma),a(Ma,Vs),a(L,Gs),a(H,Ks),a(H,Da),Da.innerHTML=Po,a(c,Us),a(c,Qs),a(c,Js),a(c,J),a(J,zs),a(J,Ca),a(Ca,Xs),a(J,Ys),a(c,Zs),a(c,xs),a(c,at),a(c,F),a(F,et),a(F,Pa),a(Pa,st),a(F,tt),a(F,Ra),a(Ra,nt),a(F,ot),a(c,lt),a(c,O),a(O,Ha),Ha.innerHTML=Ro,a(O,pt),a(O,z),a(z,X),a(X,Oa),a(Oa,Ve),a(X,ct),a(X,Aa),Aa.innerHTML=Ho,a(z,rt),a(z,Y),a(Y,ut),a(Y,ya),a(ya,it),a(Y,dt),a(O,kt),a(O,Wa),Wa.innerHTML=Oo,a(c,vt),a(c,Z),a(Z,ht),a(Z,Ta),a(Ta,La),a(La,ft),a(Z,bt),a(c,gt),a(c,A),a(A,Fa),Fa.innerHTML=Ao,a(A,mt),a(A,x),a(x,aa),a(aa,Sa),a(Sa,Ge),a(aa,Et),a(aa,Na),Na.innerHTML=yo,a(x,wt),a(x,S),a(S,_t),a(S,$a),a($a,Ba),a(Ba,Mt),a(S,Dt),a(S,Ia),a(Ia,Ct),a(S,Pt),a(A,Rt),a(A,qa),qa.innerHTML=Wo,a(c,Ht),a(c,ea),a(ea,Ot),a(ea,ja),a(ja,Va),a(Va,At),a(ea,yt),a(c,Wt),a(c,y),a(y,Ga),Ga.innerHTML=To,a(y,Tt),a(y,sa),a(sa,ta),a(ta,Ka),a(Ka,Ke),a(ta,Lt),a(ta,Ua),Ua.innerHTML=Lo,a(sa,Ft),a(sa,N),a(N,St),a(N,Qa),a(Qa,Ja),a(Ja,Nt),a(N,$t),a(N,za),a(za,Xa),a(Xa,Bt),a(N,It),a(y,qt),a(y,Ya),Ya.innerHTML=Fo,a(c,jt),a(c,na),a(na,Vt),a(na,Za),a(Za,xa),a(xa,Gt),a(na,Kt),a(c,Ut),a(c,ae),ae.innerHTML=So,a(c,Qt),a(c,f),a(f,oa),a(oa,la),a(la,ee),a(ee,Ue),a(la,Jt),a(la,se),se.innerHTML=No,a(oa,zt),a(oa,$),a($,Xt),a($,te),a(te,ne),a(ne,Yt),a($,Zt),a($,oe),a(oe,xt),a($,an),a(f,en),a(f,le),le.innerHTML=$o,a(f,sn),a(f,I),a(I,tn),a(I,pe),a(pe,nn),a(I,on),a(I,ce),a(ce,ln),a(I,pn),a(f,cn),a(f,re),re.innerHTML=Bo,a(f,rn),a(f,ia),a(ia,un),a(ia,ue),a(ue,dn),a(ia,kn),a(f,vn),a(f,ie),ie.innerHTML=Io,a(f,hn),a(f,Se),a(Se,fn),a(f,bn),a(f,de),de.innerHTML=qo,a(c,gn),a(c,mn),a(c,En),a(c,pa),a(pa,ke),a(ke,wn),a(ke,ve),a(ve,_n),a(pa,Mn),a(pa,Ne),a(Ne,he),a(he,Dn),Cn||(Hn=kl(P,"click",d[13]),Cn=!0)},p(v,[r]){r&1&&Ae!==(Ae=v[0].get("a")+"")&&He(qe,Ae),r&1&&_(R,"--hue",v[12](v[0].get("a")),!1),r&2&&ye!==(ye=v[1].get("a")+"")&&He(je,ye),r&2&&_(H,"--hue",v[12](v[1].get("a")),!1),r&8&&We!==(We=v[3].value.get("a")+"")&&He(Ve,We),r&8&&_(O,"--hue",v[12](v[3].value.get("a")),!1),r&16&&Te!==(Te=v[4].value.get("a")+"")&&He(Ge,Te),r&16&&_(A,"--hue",v[12](v[4].value.get("a")),!1),r&32&&Le!==(Le=v[5].value.get("a")+"")&&He(Ke,Le),r&32&&_(y,"--hue",v[12](v[5].value.get("a")),!1),r&4&&Fe!==(Fe=v[2].value.get("a")+"")&&He(Ue,Fe),r&4&&_(f,"--hue",v[12](v[2].value.get("a")),!1)},i:mo,o:mo,d(v){v&&t(c),Cn=!1,Hn()}}}function Bl(d,c,h){let g,m,D,C,E,W;const M=[["a",1]],q=fs(new Map(M));Oe(d,q,k=>h(0,g=k));const ca=fs(new Map(M));Oe(d,ca,k=>h(1,m=k));const B=vl(q,k=>({value:k}));Oe(d,B,k=>h(3,C=k));const ra=Eo(new Map(M));Oe(d,ra,k=>h(4,E=k));const ua=fl(new Map(M));Oe(d,ua,k=>h(5,W=k));const P=Eo(new Map(M));return Oe(d,P,k=>h(2,D=k)),[g,m,D,C,E,W,q,ca,B,ra,ua,P,k=>k*37+"",()=>{g.set("a",g.get("a")+1),q.set(g),m.set("a",m.get("a")+1),hl(ca,m=new Map(m),m),ra.update(k=>{k.set("a",k.get("a")+1)}),ua.update(k=>{k.set("a",k.get("a")+1)}),D.value.set("a",D.value.get("a")+1),P.update()}]}class ql extends rl{constructor(c){super();ul(this,c,Bl,$l,il,{})}}export{ql as default};
