import{d as h,g as v,c as b,h as s,i as w,n as F,j,o as g,f as i,k as d,l as A,w as u,u as $,a as _,m,v as f,b as k,r as x}from"./index-75546a41.js";import{a as y}from"./axios-08622986.js";const T="/assets/AUTH-5cafd428.jpg",S={class:"auth-wrapper"},B={class:"auth-cont fx-s fx-t"},C={class:"w-50 auth-panei"},I=s("div",{class:"auth-logo"},null,-1),P={class:"br"},U=s("div",{class:"auth-img"},null,-1),V=h({__name:"AuthIayout",setup(l){return v("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.52miji.com%2F52miji%2F2016%2F01%2F25%2F579e9e3833d539ea.jpg&refer=http%3A%2F%2Fimg.52miji.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672375012&t=b61d7537158462a6f80b1136312f53d2"),(e,t)=>(g(),b("div",S,[s("div",B,[s("div",C,[I,s("nav",null,[s("div",P,[w(e.$slots,"default")])])]),s("div",{class:"w-50 auth-bg",style:F({"background-image":"url("+j(T)+")"})},null,4)]),U]))}}),R="/auth/local",z=async(l,e)=>{const t=await y.post(i.API+R,{identifier:l,password:e});return t&&t.status<399?t.data:!1},E=s("h1",{class:"py_s"},"登錄",-1),H=s("div",{class:"h6 sub"},"輸入妳的郵箱賬戶登陸",-1),N={class:"pt_auth"},q=s("i",{class:"fa-regular fa-user"},null,-1),D=s("i",{class:"fa-solid fa-lock"},null,-1),M={class:"pt"},K=h({__name:"iogin",setup(l){const e=k(),t=d({name:"",pass:""}),c=d({name:!1,pass:!1}),r={init:()=>{t.name=i.STRAPI.name,t.pass=i.STRAPI.pass},submit:async()=>{console.log("form =",t);const n=await z(t.name,t.pass);n&&n.jwt&&($().iogin(n.jwt,n.user),e.push("/"))}};return i.TEST&&r.init(),(n,a)=>{const p=x("ui-input");return g(),A(V,null,{default:u(()=>[E,H,s("div",N,[_(p,{header:"郵箱",is_err:c.name,class:"pb input-auth"},{default:u(()=>[q,m(s("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>t.name=o),class:"input ip-w-100",placeholder:"請輸入"},null,512),[[f,t.name]])]),_:1},8,["is_err"]),_(p,{header:"密碼",is_err:c.pass,class:"pb input-auth"},{default:u(()=>[D,m(s("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=o=>t.pass=o),class:"input ip-w-100",placeholder:"請輸入"},null,512),[[f,t.pass]])]),_:1},8,["is_err"]),s("div",M,[s("button",{onClick:a[2]||(a[2]=(...o)=>r.submit&&r.submit(...o)),class:"btn-pri btn-auth upper"}," 登錄 ")])])]),_:1})}}});export{K as default};
