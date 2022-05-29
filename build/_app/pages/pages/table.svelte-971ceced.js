import{S as fs,i as bs,s as us,e as a,t as r,k as n,x as ls,c as s,a as l,h as o,d as e,m as i,y as rs,b as h,f as os,g as ms,F as t,z as ns,n as ys,r as is,p as cs,C as hs}from"../../chunks/index-427cb11b.js";import{T as ds,t as vs}from"../../chunks/tableStyles-b061a170.js";function gs(Ht){let u,E,at,Ot,Ut,I,j,Ft,q,Gt,Wt,H,Vt,O,Bt,zt,U,Mt,Jt,w,st,_,lt,Kt,Qt,rt,Xt,Yt,A,ot,Zt,te,nt,v,ee,F,ae,se,G,le,re,oe,it,S,ct,ne,ie,ht,ce,he,c,dt,de,pe,pt,fe,be,ft,N,ue,va="<Table {tableProps}",me,ye,ve,bt,ge,Ee,d,P,we,W,_e,Se,Te,C,Ie,V,Ae,Ne,Le,R,Pe,B,Ce,Re,ke,k,De,z,$e,xe,je,D,qe,M,He,Oe,Ue,ut,Fe,Ge,f,mt,We,Ve,yt,Be,ze,vt,Me,Je,gt,Ke,Qe,Et,Xe,Ye,wt,Ze,ta,_t,ea,aa,St,L,sa,ga=`const tableProps = {
                    id: 'demo-table',
                    ariaLabel: 'demo',
                    ariaDescription: 'svve11 team information',
                    columnNames: ['Name', 'Age', 'Favorite Color'],
                    rowsContent: [
                        ['Nurbek', '19', 'White'],
                        ['Paul', '26', 'Red'],
                        ['Tim', '29', 'Blue'],
                        ['Simon', '26', 'Green']
                    ],
                    styles: {
                        overallStyles: 'background-color: powderblue',
                        titleStyles: 'text-align: left;',
                        headersRowStyles: 'background-color: grey',
                        generalRowStyles: 'font-weight: lighter',
                        oddRowStyles: 'background-color: white',
                        evenRowStyles: 'background-color: lightgrey',
                    }
                };
        
            <Table {tableProps} />`,la,ra,oa,Tt,na,ia,J,$,ca,It,T,At,ha,da,Nt,pa,fa,g,x,Lt;return $=new ds({props:{tableProps:{id:"demo-table",ariaLabel:"demo",ariaDescription:"svve11 team information",columnNames:["Name","Age","Favorite Color"],rowsContent:[["Nurbek","19","White"],["Paul","26","Red"],["Tim","29","Blue"],["Simon","26","Green"]],styles:{overallStyles:"background-color: powderblue",titleStyles:"text-align: left;",headersRowStyles:"background-color: grey",generalRowStyles:"font-weight: lighter",oddRowStyles:"background-color: white",evenRowStyles:"background-color: lightgrey"}}}}),x=new ds({props:{tableProps:Ht[0]}}),{c(){u=a("article"),E=a("header"),at=a("h1"),Ot=r(ps),Ut=n(),I=a("ul"),j=a("li"),Ft=r("Source: "),q=a("a"),Gt=r(ma),Wt=n(),H=a("li"),Vt=r("WAI-ARIA: "),O=a("a"),Bt=r(ya),zt=n(),U=a("p"),Mt=r(`A table is a tabular structure constructed of rows of data stored in individual cells within
			the row. Tables are not widgets, and therefore are not focusable.`),Jt=n(),w=a("main"),st=a("section"),_=a("fieldset"),lt=a("legend"),Kt=r("Installation"),Qt=n(),rt=a("h2"),Xt=r("Installation"),Yt=n(),A=a("section"),ot=a("p"),Zt=r("Import the component in the script section of your Svelte file:"),te=n(),nt=a("pre"),v=a("code"),ee=r(`
              import `),F=a("span"),ae=r("\u2774"),se=r(" Table "),G=a("span"),le=r("\u2775"),re=r(` from 'svve11'
            `),oe=n(),it=a("section"),S=a("fieldset"),ct=a("legend"),ne=r("Usage"),ie=n(),ht=a("h2"),ce=r("Usage"),he=n(),c=a("section"),dt=a("h3"),de=r("Creating a Table"),pe=n(),pt=a("p"),fe=r(`A table instance can be created by placing the code below in the body of your Svelte
						file.`),be=n(),ft=a("pre"),N=a("code"),ue=r(`
              `),me=r(va),ye=r(`
              `),ve=n(),bt=a("p"),ge=r(`To supply the table with its contents, a tableProps object is passed as a prop to the
						table. This object can be created in the script section of the .svelte file or imported
						in from another location. The tableProps object has (6) properties.`),Ee=n(),d=a("ul"),P=a("li"),we=r("ariaLabel (string): This property is "),W=a("span"),_e=r("required"),Se=r(`, and sets
							the aria-label attribute of the table`),Te=n(),C=a("li"),Ie=r("ariaDescription (string): This property is "),V=a("span"),Ae=r("required"),Ne=r(`,
							and sets the title of the table. It will also set the table's aria-description
							attribute.`),Le=n(),R=a("li"),Pe=r("columnNames (array of strings): This property is "),B=a("span"),Ce=r("required"),Re=r(`. Each string in the array corresponds to column name of the table. Column names will
							be added in the order they are input into this array.`),ke=n(),k=a("li"),De=r("rowsContent (array of arrays of strings): This property is "),z=a("span"),$e=r("required"),xe=r(`. Each array in the main array corresponds to a row in the table. Each string within
							each array corresponds to the entry in a cell in the row, again with the order of
							strings matching the order they will be placed in the row cells. The number of strings
							in each array must match the number of columns, thus an empty string should be
							supplied where an empty cell is desired.`),je=n(),D=a("li"),qe=r("id (string): This property is "),M=a("span"),He=r("optional"),Oe=r(`, and sets the id
							attribtue of the table.`),Ue=n(),ut=a("li"),Fe=r(`styles (object): sets the styles for the various table components. Each key in the
							object is defined as follows:`),Ge=n(),f=a("ul"),mt=a("li"),We=r("overallStyles (string): sets the style attribute of the overall table element."),Ve=n(),yt=a("li"),Be=r("titleStyles (string): sets the style attribute of the table's title"),ze=n(),vt=a("li"),Me=r(`headersRowStyles (string): sets the style attribute of the first row of the table
								which contains the column names.`),Je=n(),gt=a("li"),Ke=r("generalRowStyles (string): sets the attribute of all the table's rows."),Qe=n(),Et=a("li"),Xe=r("oddRowStyles (string): sets the style attributes of all the table's odd rows."),Ye=n(),wt=a("li"),Ze=r("evenRowStyles (string): sets the style attribute of all the table's even rows."),ta=n(),_t=a("h4"),ea=r("Example Table Code:"),aa=n(),St=a("pre"),L=a("code"),sa=r(`
            `),la=r(ga),ra=r(`
              `),oa=n(),Tt=a("h4"),na=r("Example Table:"),ia=n(),J=a("div"),ls($.$$.fragment),ca=n(),It=a("section"),T=a("fieldset"),At=a("legend"),ha=r("Component API"),da=n(),Nt=a("h2"),pa=r("Component API"),fa=n(),g=a("div"),ls(x.$$.fragment),this.h()},l(y){u=s(y,"ARTICLE",{class:!0});var K=l(u);E=s(K,"HEADER",{});var Q=l(E);at=s(Q,"H1",{});var Ea=l(at);Ot=o(Ea,ps),Ea.forEach(e),Ut=i(Q),I=s(Q,"UL",{class:!0});var Pt=l(I);j=s(Pt,"LI",{});var ba=l(j);Ft=o(ba,"Source: "),q=s(ba,"A",{href:!0});var wa=l(q);Gt=o(wa,ma),wa.forEach(e),ba.forEach(e),Wt=i(Pt),H=s(Pt,"LI",{});var ua=l(H);Vt=o(ua,"WAI-ARIA: "),O=s(ua,"A",{href:!0});var _a=l(O);Bt=o(_a,ya),_a.forEach(e),ua.forEach(e),Pt.forEach(e),zt=i(Q),U=s(Q,"P",{class:!0});var Sa=l(U);Mt=o(Sa,`A table is a tabular structure constructed of rows of data stored in individual cells within
			the row. Tables are not widgets, and therefore are not focusable.`),Sa.forEach(e),Q.forEach(e),Jt=i(K),w=s(K,"MAIN",{});var X=l(w);st=s(X,"SECTION",{});var Ta=l(st);_=s(Ta,"FIELDSET",{});var Y=l(_);lt=s(Y,"LEGEND",{});var Ia=l(lt);Kt=o(Ia,"Installation"),Ia.forEach(e),Qt=i(Y),rt=s(Y,"H2",{});var Aa=l(rt);Xt=o(Aa,"Installation"),Aa.forEach(e),Yt=i(Y),A=s(Y,"SECTION",{class:!0});var Ct=l(A);ot=s(Ct,"P",{});var Na=l(ot);Zt=o(Na,"Import the component in the script section of your Svelte file:"),Na.forEach(e),te=i(Ct),nt=s(Ct,"PRE",{});var La=l(nt);v=s(La,"CODE",{class:!0});var Z=l(v);ee=o(Z,`
              import `),F=s(Z,"SPAN",{class:!0});var Pa=l(F);ae=o(Pa,"\u2774"),Pa.forEach(e),se=o(Z," Table "),G=s(Z,"SPAN",{class:!0});var Ca=l(G);le=o(Ca,"\u2775"),Ca.forEach(e),re=o(Z,` from 'svve11'
            `),Z.forEach(e),La.forEach(e),Ct.forEach(e),Y.forEach(e),Ta.forEach(e),oe=i(X),it=s(X,"SECTION",{});var Ra=l(it);S=s(Ra,"FIELDSET",{});var tt=l(S);ct=s(tt,"LEGEND",{});var ka=l(ct);ne=o(ka,"Usage"),ka.forEach(e),ie=i(tt),ht=s(tt,"H2",{});var Da=l(ht);ce=o(Da,"Usage"),Da.forEach(e),he=i(tt),c=s(tt,"SECTION",{class:!0});var p=l(c);dt=s(p,"H3",{});var $a=l(dt);de=o($a,"Creating a Table"),$a.forEach(e),pe=i(p),pt=s(p,"P",{});var xa=l(pt);fe=o(xa,`A table instance can be created by placing the code below in the body of your Svelte
						file.`),xa.forEach(e),be=i(p),ft=s(p,"PRE",{});var ja=l(ft);N=s(ja,"CODE",{class:!0});var Rt=l(N);ue=o(Rt,`
              `),me=o(Rt,va),ye=o(Rt,`
              `),Rt.forEach(e),ja.forEach(e),ve=i(p),bt=s(p,"P",{});var qa=l(bt);ge=o(qa,`To supply the table with its contents, a tableProps object is passed as a prop to the
						table. This object can be created in the script section of the .svelte file or imported
						in from another location. The tableProps object has (6) properties.`),qa.forEach(e),Ee=i(p),d=s(p,"UL",{class:!0});var b=l(d);P=s(b,"LI",{});var kt=l(P);we=o(kt,"ariaLabel (string): This property is "),W=s(kt,"SPAN",{class:!0});var Ha=l(W);_e=o(Ha,"required"),Ha.forEach(e),Se=o(kt,`, and sets
							the aria-label attribute of the table`),kt.forEach(e),Te=i(b),C=s(b,"LI",{});var Dt=l(C);Ie=o(Dt,"ariaDescription (string): This property is "),V=s(Dt,"SPAN",{class:!0});var Oa=l(V);Ae=o(Oa,"required"),Oa.forEach(e),Ne=o(Dt,`,
							and sets the title of the table. It will also set the table's aria-description
							attribute.`),Dt.forEach(e),Le=i(b),R=s(b,"LI",{});var $t=l(R);Pe=o($t,"columnNames (array of strings): This property is "),B=s($t,"SPAN",{class:!0});var Ua=l(B);Ce=o(Ua,"required"),Ua.forEach(e),Re=o($t,`. Each string in the array corresponds to column name of the table. Column names will
							be added in the order they are input into this array.`),$t.forEach(e),ke=i(b),k=s(b,"LI",{});var xt=l(k);De=o(xt,"rowsContent (array of arrays of strings): This property is "),z=s(xt,"SPAN",{class:!0});var Fa=l(z);$e=o(Fa,"required"),Fa.forEach(e),xe=o(xt,`. Each array in the main array corresponds to a row in the table. Each string within
							each array corresponds to the entry in a cell in the row, again with the order of
							strings matching the order they will be placed in the row cells. The number of strings
							in each array must match the number of columns, thus an empty string should be
							supplied where an empty cell is desired.`),xt.forEach(e),je=i(b),D=s(b,"LI",{});var jt=l(D);qe=o(jt,"id (string): This property is "),M=s(jt,"SPAN",{class:!0});var Ga=l(M);He=o(Ga,"optional"),Ga.forEach(e),Oe=o(jt,`, and sets the id
							attribtue of the table.`),jt.forEach(e),Ue=i(b),ut=s(b,"LI",{});var Wa=l(ut);Fe=o(Wa,`styles (object): sets the styles for the various table components. Each key in the
							object is defined as follows:`),Wa.forEach(e),Ge=i(b),f=s(b,"UL",{});var m=l(f);mt=s(m,"LI",{});var Va=l(mt);We=o(Va,"overallStyles (string): sets the style attribute of the overall table element."),Va.forEach(e),Ve=i(m),yt=s(m,"LI",{});var Ba=l(yt);Be=o(Ba,"titleStyles (string): sets the style attribute of the table's title"),Ba.forEach(e),ze=i(m),vt=s(m,"LI",{});var za=l(vt);Me=o(za,`headersRowStyles (string): sets the style attribute of the first row of the table
								which contains the column names.`),za.forEach(e),Je=i(m),gt=s(m,"LI",{});var Ma=l(gt);Ke=o(Ma,"generalRowStyles (string): sets the attribute of all the table's rows."),Ma.forEach(e),Qe=i(m),Et=s(m,"LI",{});var Ja=l(Et);Xe=o(Ja,"oddRowStyles (string): sets the style attributes of all the table's odd rows."),Ja.forEach(e),Ye=i(m),wt=s(m,"LI",{});var Ka=l(wt);Ze=o(Ka,"evenRowStyles (string): sets the style attribute of all the table's even rows."),Ka.forEach(e),m.forEach(e),b.forEach(e),ta=i(p),_t=s(p,"H4",{});var Qa=l(_t);ea=o(Qa,"Example Table Code:"),Qa.forEach(e),aa=i(p),St=s(p,"PRE",{});var Xa=l(St);L=s(Xa,"CODE",{class:!0});var qt=l(L);sa=o(qt,`
            `),la=o(qt,ga),ra=o(qt,`
              `),qt.forEach(e),Xa.forEach(e),oa=i(p),Tt=s(p,"H4",{});var Ya=l(Tt);na=o(Ya,"Example Table:"),Ya.forEach(e),ia=i(p),J=s(p,"DIV",{class:!0});var Za=l(J);rs($.$$.fragment,Za),Za.forEach(e),p.forEach(e),tt.forEach(e),Ra.forEach(e),ca=i(X),It=s(X,"SECTION",{});var ts=l(It);T=s(ts,"FIELDSET",{});var et=l(T);At=s(et,"LEGEND",{});var es=l(At);ha=o(es,"Component API"),es.forEach(e),da=i(et),Nt=s(et,"H2",{});var as=l(Nt);pa=o(as,"Component API"),as.forEach(e),fa=i(et),g=s(et,"DIV",{role:!0,tabindex:!0,style:!0,class:!0});var ss=l(g);rs(x.$$.fragment,ss),ss.forEach(e),et.forEach(e),ts.forEach(e),X.forEach(e),K.forEach(e),this.h()},h(){h(q,"href",ma),h(O,"href",ya),h(I,"class","resource-links-list"),h(U,"class","header-paragraph"),h(F,"class","curly-symbol"),h(G,"class","curly-symbol"),h(v,"class","code-block"),h(A,"class","content-section"),h(N,"class","code-block"),h(W,"class","bold-word"),h(V,"class","bold-word"),h(B,"class","bold-word"),h(z,"class","bold-word"),h(M,"class","bold-word"),h(d,"class","options-object-list"),h(L,"class","code-block"),h(J,"class","example-text-input"),h(c,"class","content-section"),h(g,"role","region"),h(g,"tabindex","0"),os(g,"max-width","100%"),os(g,"overflow","auto"),h(g,"class","props-table"),h(u,"class","page-component")},m(y,K){ms(y,u,K),t(u,E),t(E,at),t(at,Ot),t(E,Ut),t(E,I),t(I,j),t(j,Ft),t(j,q),t(q,Gt),t(I,Wt),t(I,H),t(H,Vt),t(H,O),t(O,Bt),t(E,zt),t(E,U),t(U,Mt),t(u,Jt),t(u,w),t(w,st),t(st,_),t(_,lt),t(lt,Kt),t(_,Qt),t(_,rt),t(rt,Xt),t(_,Yt),t(_,A),t(A,ot),t(ot,Zt),t(A,te),t(A,nt),t(nt,v),t(v,ee),t(v,F),t(F,ae),t(v,se),t(v,G),t(G,le),t(v,re),t(w,oe),t(w,it),t(it,S),t(S,ct),t(ct,ne),t(S,ie),t(S,ht),t(ht,ce),t(S,he),t(S,c),t(c,dt),t(dt,de),t(c,pe),t(c,pt),t(pt,fe),t(c,be),t(c,ft),t(ft,N),t(N,ue),t(N,me),t(N,ye),t(c,ve),t(c,bt),t(bt,ge),t(c,Ee),t(c,d),t(d,P),t(P,we),t(P,W),t(W,_e),t(P,Se),t(d,Te),t(d,C),t(C,Ie),t(C,V),t(V,Ae),t(C,Ne),t(d,Le),t(d,R),t(R,Pe),t(R,B),t(B,Ce),t(R,Re),t(d,ke),t(d,k),t(k,De),t(k,z),t(z,$e),t(k,xe),t(d,je),t(d,D),t(D,qe),t(D,M),t(M,He),t(D,Oe),t(d,Ue),t(d,ut),t(ut,Fe),t(d,Ge),t(d,f),t(f,mt),t(mt,We),t(f,Ve),t(f,yt),t(yt,Be),t(f,ze),t(f,vt),t(vt,Me),t(f,Je),t(f,gt),t(gt,Ke),t(f,Qe),t(f,Et),t(Et,Xe),t(f,Ye),t(f,wt),t(wt,Ze),t(c,ta),t(c,_t),t(_t,ea),t(c,aa),t(c,St),t(St,L),t(L,sa),t(L,la),t(L,ra),t(c,oa),t(c,Tt),t(Tt,na),t(c,ia),t(c,J),ns($,J,null),t(w,ca),t(w,It),t(It,T),t(T,At),t(At,ha),t(T,da),t(T,Nt),t(Nt,pa),t(T,fa),t(T,g),ns(x,g,null),Lt=!0},p:ys,i(y){Lt||(is($.$$.fragment,y),is(x.$$.fragment,y),Lt=!0)},o(y){cs($.$$.fragment,y),cs(x.$$.fragment,y),Lt=!1},d(y){y&&e(u),hs($),hs(x)}}}const ps="Table",ma="https://github.com/Svve11/",ya="https://w3c.github.io/aria-practices/#table";function Es(Ht){return[{id:"props-table-table",ariaLabel:"Table props table",ariaDescription:"This table describes the props that should be passed to the table component",columnNames:["Prop","Type","Required","Default Value"],rowsContent:[["ariaLabel","string","true","N/A"],["ariaDescription","string","true","N/A"],["columnNames","array of strings","true","N/A"],["rowsContent","array of arrays of strings","true","N/A"],["id","string","false","N/A"],["style","object","false","N/A"]],styles:vs}]}class Ss extends fs{constructor(u){super(),bs(this,u,Es,gs,us,{})}}export{Ss as default};