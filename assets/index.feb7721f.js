import{c as _,a as g,b as y,I as v,A as $,u as c,g as u,d as L,w as d,Q as k,r as C,o as E,e as p,f as A,h as I,i as q,p as O,D as P,j as w,k as b}from"./vendor.166f174b.js";const D=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};D();const Q="modulepreload",m={},x="/rick-and-morty-app/",i=function(a,s){return!s||s.length===0?a():Promise.all(s.map(o=>{if(o=`${x}${o}`,o in m)return;m[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":Q,e||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),e)return new Promise((f,h)=>{n.addEventListener("load",f),n.addEventListener("error",h)})})).then(()=>a())},R=[{path:"/",component:()=>i(()=>import("./Index.f4a55efe.js"),["assets/Index.f4a55efe.js","assets/vendor.166f174b.js","assets/QPage.ef8d44d6.js","assets/QAvatar.d056f4d8.js"])},{path:"/character/:id",component:()=>i(()=>import("./Character.7a6d0f18.js"),["assets/Character.7a6d0f18.js","assets/vendor.166f174b.js","assets/QPage.ef8d44d6.js"])},{path:"/episode/:id",component:()=>i(()=>import("./Episode.265d753c.js"),["assets/Episode.265d753c.js","assets/vendor.166f174b.js","assets/QPage.ef8d44d6.js","assets/QAvatar.d056f4d8.js"])},{path:"/:pathMatch(.*)",redirect:"/"}],N=_({history:g(),routes:R,scrollBehavior(){return{top:0}}});const S=y({uri:"https://rickandmortyapi.com/graphql"}),V=new v,B=new $({link:S,cache:V});function F(r){return c(u`
		query getCharacterList($page: Int, $name: String) {
			characters(page: $page, filter: {name: $name}) {
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
	`,r)}function G(r){return c(u`
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
	`,{id:r})}function K(r){return c(u`
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
	`,{id:r})}function H(r,a,s,o,e,t){const n=C("router-view");return E(),L(k,null,{default:d(()=>[p(A,{class:"q-pa-sm"},{default:d(()=>[p(n)]),_:1})]),_:1})}var T=(r,a)=>{const s=r.__vccOpts||r;for(const[o,e]of a)s[o]=e;return s};const M={setup(){const r=q(),a=I();return r.dark.set(!0),O(P,B),{loading:a}}};var W=T(M,[["render",H]]);const l=w(W);l.use(b);l.use(N);l.mount("#app");export{T as _,G as a,K as b,F as g};
