var e=globalThis,t={},n={},i=e.parcelRequire03bf;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire03bf=i),i.register;var r=i("2LLMu"),o=i("ccy7r"),a=i("ilwiq"),d=i("5Rd1x");const l=[];(0,r.default).init().then(()=>{let e;let{world:t,scene:n,camera:i,controls:s,renderer:w}=function(){let e=new r.default.World({x:0,y:-9.81,z:0}),t=new a.Scene,n=new a.SpotLight(void 0,10*Math.PI);n.position.set(2.5,5,5),n.angle=Math.PI/3,n.penumbra=.5,n.castShadow=!0,n.shadow.blurSamples=10,n.shadow.radius=5,t.add(n);let i=new a.PerspectiveCamera(50,window.innerWidth/window.innerHeight,.1,100);i.position.set(0,2,5);let o=new a.WebGLRenderer({antialias:!0});o.setSize(window.innerWidth,window.innerHeight),o.shadowMap.enabled=!0,o.shadowMap.type=a.VSMShadowMap,document.body.appendChild(o.domElement),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)});let l=new d.OrbitControls(i,o.domElement);return l.enableDamping=!0,l.target.y=1,{world:e,scene:t,renderer:o,camera:i,controls:l}}();!function(e,t,n){let i=new a.Mesh(new a.BoxGeometry(1,1,1),new a.MeshNormalMaterial);i.castShadow=!0;let d=n.createRigidBody((0,r.default).RigidBodyDesc.dynamic().setTranslation(0,5,0).setCanSleep(!1)),l=(0,r.default).ColliderDesc.cuboid(.5,.5,.5).setMass(1).setRestitution(.2);n.createCollider(l,d);let s=new o.RenderableEntity(t,n,i,"cube",d);s.addToScene(),e.push(s);let w=new a.Mesh(new a.BoxGeometry(100,1,100),new a.MeshPhongMaterial);w.receiveShadow=!0,w.position.y=-1;let c=n.createRigidBody((0,r.default).RigidBodyDesc.fixed().setTranslation(0,-1,0)),u=(0,r.default).ColliderDesc.cuboid(50,.5,50);n.createCollider(u,c);let h=new o.RenderableEntity(t,n,w,"floor",c);h.addToScene(),e.push(h)}(l,n,t);let c=new a.Clock;window.requestAnimationFrame(function r(){for(let n of(e=c.getDelta(),t.timestep=Math.min(e,.1),t.step(),l))n.update(t.timestep);s.update(),w.render(n,i),window.requestAnimationFrame(r)})});
//# sourceMappingURL=basic-rapier3d.6c02a342.js.map