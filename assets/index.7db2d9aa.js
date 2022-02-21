import{c as _,a as y,b as v,I as $,A as L,u as c,g as u,d as k,w as d,Q as C,r as x,o as E,e as p,f,h as A,t as q,i as w,j as I,k as b,p as D,D as O,l as P,m as Q}from"./vendor.3353b92a.js";const S=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};S();const N="modulepreload",m={},V="/rick-and-morty-app/",i=function(o,s){return!s||s.length===0?o():Promise.all(s.map(a=>{if(a=`${V}${a}`,a in m)return;m[a]=!0;const e=a.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":N,e||(n.as="script",n.crossOrigin=""),n.href=a,document.head.appendChild(n),e)return new Promise((h,g)=>{n.addEventListener("load",h),n.addEventListener("error",g)})})).then(()=>o())},R=[{name:"index",path:"/",component:()=>i(()=>import("./Index.e19a1630.js"),["assets/Index.e19a1630.js","assets/vendor.3353b92a.js","assets/index.bf72e3f5.js","assets/QPage.649c26d0.js","assets/QAvatar.80e9b097.js"])},{name:"character",path:"/character/:id",component:()=>i(()=>import("./Character.6b15a0b4.js"),["assets/Character.6b15a0b4.js","assets/vendor.3353b92a.js","assets/index.bf72e3f5.js","assets/QPage.649c26d0.js"])},{name:"episode",path:"/episode/:id",component:()=>i(()=>import("./Episode.e82ef16d.js"),["assets/Episode.e82ef16d.js","assets/vendor.3353b92a.js","assets/QPage.649c26d0.js","assets/QAvatar.80e9b097.js"])},{path:"/:pathMatch(.*)",redirect:"/"}],B=_({history:y(),routes:R,scrollBehavior(){return{top:0}}});const T=v({uri:"https://rickandmortyapi.com/graphql"}),H=new $,M=new L({link:T,cache:H});function J(r){return c(u`
		query getCharacterList($page: Int, $name: String, $status: String, $gender: String) {
			characters(page: $page, filter: {
				name: $name
				status: $status
				gender: $gender
			}) {
				info {
					count
					pages
				}
				results {
					id
					name
					image
					gender
					episode {
						id
					}
				}
			}
		}
	`,r)}function U(r){return c(u`
		query getCharacter($id: ID!) {
			character(id: $id) {
				id
				name
				image
				gender
				status
				species
				origin {
					id
					name
				}
				episode {
					id
					name
					episode
				}
			}
		}
	`,{id:r})}function X(r){return c(u`
		query getEpisode($id: ID!) {
			episode(id: $id) {
				id
				name
				episode
				air_date
				characters {
					id
					name
					image
					status
				}
			}
		}
	`,{id:r})}const F={class:"text-center text-caption q-mt-xl"},W=f("a",{class:"text-white",href:"https://acauamontiel.com.br",target:"_blank"},"Acau\xE3 Montiel",-1);function j(r,o,s,a,e,t){const n=x("router-view");return E(),k(C,null,{default:d(()=>[p(w,{class:"q-pa-sm"},{default:d(()=>[p(n),f("p",F,[A("\xA9 "+q(new Date().getFullYear())+" ",1),W])]),_:1})]),_:1})}var G=(r,o)=>{const s=r.__vccOpts||r;for(const[a,e]of o)s[a]=e;return s};const K={setup(){const r=b(),o=I();return r.dark.set(!0),D(O,M),{loading:o}}};var Y=G(K,[["render",j]]);const l=P(Y);l.use(Q);l.use(B);l.mount("#app");export{G as _,U as a,X as b,J as g};
