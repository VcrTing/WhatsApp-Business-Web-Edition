import{_ as l,o,c as a,a as e,t as i,b as h,E as f,d as c,e as g,f as d,h as b,l as y,g as v}from"./index.346ab207.js";const k={props:["head"]},x={class:"setting-app-bar"},S={class:"app-header"},E=e("div",{class:"rh-icon h4"},[e("i",{class:"fa-solid fa-arrow-left"})],-1),A={class:"pl_x pr_x3 h4"},B={class:"app-cont"};function C(t,n,s,u,p,r){return o(),a("div",x,[e("nav",S,[e("div",{onClick:n[0]||(n[0]=_=>t.$emit("barTap")),class:"fx-l hand bar-tap"},[E,e("div",A,i(s.head),1)])]),e("div",B,[h(t.$slots,"default")])])}const U=l(k,[["render",C]]);const w={components:{EosUserAvatarDef:f},props:["img"]},N={class:"eos-user-avatar"},V={key:1};function z(t,n,s,u,p,r){const _=c("eos-user-avatar-def");return o(),a("nav",N,[s.img?(o(),a("div",{key:0,style:g({background:"url("+s.img+")","background-size":"cover","background-repeat":"no-repeat","background-position":"center"})},null,4)):(o(),a("div",V,[d(_)]))])}const D=l(w,[["render",z]]),O={props:["head"]},T={class:"sou-panner"},I={key:0};function P(t,n,s,u,p,r){return o(),a("div",T,[s.head?(o(),a("div",I,i(s.head),1)):b("",!0),e("nav",null,[h(t.$slots,"default")])])}const W=l(O,[["render",P]]);const j={components:{SettingAppIayout:U,EosUserAvatar:D,ComSouPanner:W},mounted(){},computed:{me(){return this.pina().me}}},q={class:"sou-cover"},F={class:"sou-name"},G=e("div",{class:"sub sou-panner-sub"}," \u9019\u4E26\u975E\u60A8\u7684\u7528\u6236\u540D\u6216\u500B\u4EBA\u8B58\u5225\u78BC\uFF0C\u60A8\u7684 WhatsApp \u7684\u806F\u7CFB\u4EBA\u5C07\u53EF\u770B\u898B\u5B83\u3002 ",-1),H=e("br",null,null,-1),J=e("br",null,null,-1),K=e("br",null,null,-1);function L(t,n,s,u,p,r){const _=c("eos-user-avatar"),m=c("com-sou-panner"),$=c("setting-app-iayout");return o(),y($,{onBarTap:n[0]||(n[0]=M=>t.$emit("ciose")),head:"\u500B\u4EBA\u4FE1\u606F"},{default:v(()=>[e("div",q,[e("nav",null,[d(_)])]),d(m,{head:"\u60A8\u7684\u59D3\u540D"},{default:v(()=>[e("div",F,i(r.me.username),1)]),_:1}),G,d(m,{head:"\u806F\u7D61\u96FB\u8A71"},{default:v(()=>[e("div",null,i(r.me.phone_number_view),1)]),_:1}),H,J,K]),_:1})}const R=l(j,[["render",L]]);export{D as E,R as S,U as a};