import{o as u,c as m,b as _,d as s,e as f}from"./app.f7382d9e.js";const b={id:"public",style:{width:"100%",display:"flex","justify-content":"center","margin-top":"30px"}},C={__name:"Public",setup(h){return function(){fetch("https://vt.panghair.com:5000/room/public").then(e=>e.json()).then(e=>{let a=document.getElementById("public"),r=document.createElement("table"),d=document.createElement("tr"),l=["\u6807\u9898","\u623F\u95F4\u540D","\u4EBA\u6570"];for(let t=0;t<l.length;t++){var c=document.createElement("th");c.innerHTML=l[t],d.appendChild(c)}r.appendChild(d);for(let t=0;t<e.length;t++){let n=document.createElement("tr"),i=document.createElement("td");i.innerHTML=e[t].videoTitle;let o=document.createElement("td");o.innerHTML=e[t].name;let p=document.createElement("td");p.innerHTML=e[t].userCount,n.appendChild(i),n.appendChild(o),n.appendChild(p),r.appendChild(n)}a.appendChild(r),document.querySelector("#test").innerHTML=e})}(),(e,a)=>(u(),m("div",b))}},E=s("h1",{id:"\u516C\u5171\u623F\u95F4\u5217\u8868",tabindex:"-1"},[f("\u516C\u5171\u623F\u95F4\u5217\u8868 "),s("a",{class:"header-anchor",href:"#\u516C\u5171\u623F\u95F4\u5217\u8868","aria-hidden":"true"},"#")],-1),x=JSON.parse('{"title":"\u516C\u5171\u623F\u95F4\u5217\u8868","description":"","frontmatter":{},"headers":[],"relativePath":"public.md","lastUpdated":null}'),g={name:"public.md"},T=Object.assign(g,{setup(h){return(e,a)=>(u(),m("div",null,[E,_(C)]))}});export{x as __pageData,T as default};
