import{j as l,r as d,R as p,a as u}from"./vendor.1ff8a53a.js";const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};f();var h="https://manuelver.github.io/gh-page-manuelver/assets/logo.ecc203fb.svg";const t=l.exports.jsx,n=l.exports.jsxs;function m(){const[i,o]=d.exports.useState(0);return t("div",{className:"App",children:n("header",{className:"App-header",children:[t("img",{src:h,className:"App-logo",alt:"logo"}),t("p",{children:"Hola Vite + React!"}),t("p",{children:n("button",{type:"button",onClick:()=>o(s=>s+1),children:["Contador: ",i]})}),n("p",{children:["Editando ",t("code",{children:"App.jsx"})," y subiendo los cambios puedo hace pruebas frontend est\xE1ticas."]}),n("p",{children:[t("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})," | ",t("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer",children:"Vite Docs"})," | ",t("a",{className:"App-link",href:"https://vergaracarmona.es",target:"_blank",rel:"noopener noreferrer",children:"Web Man"})]})]})})}p.render(t(u.StrictMode,{children:t(m,{})}),document.getElementById("root"));
