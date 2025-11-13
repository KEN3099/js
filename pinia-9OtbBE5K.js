import{ar as i,r as l,aq as p}from"./@vue-C4NowhOt.js";/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const u=Symbol();var r;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(r||(r={}));function h(){const t=i(!0),o=t.run(()=>l({}));let c=[],n=[];const a=p({install(e){a._a=e,e.provide(u,a),e.config.globalProperties.$pinia=a,n.forEach(s=>c.push(s)),n=[]},use(e){return this._a?c.push(e):n.push(e),this},_p:c,_a:null,_e:t,_s:new Map,state:o});return a}export{h as c};
