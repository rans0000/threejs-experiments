var e=globalThis,t={},i={},o=e.parcelRequire03bf;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequire03bf=o),(0,o.register)("7MGRS",function(e,t){Object.defineProperty(e.exports,"default",{get:()=>o,set:void 0,enumerable:!0,configurable:!0});var i=function(){var e=0,t=document.createElement("div");function o(e){return t.appendChild(e.dom),e}function n(i){for(var o=0;o<t.children.length;o++)t.children[o].style.display=o===i?"block":"none";e=i}t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(i){i.preventDefault(),n(++e%t.children.length)},!1);var r=(performance||Date).now(),l=r,a=0,s=o(new i.Panel("FPS","#0ff","#002")),d=o(new i.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=o(new i.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:o,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){a++;var e=(performance||Date).now();if(d.update(e-r,200),e>=l+1e3&&(s.update(1e3*a/(e-l),100),l=e,a=0,c)){var t=performance.memory;c.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){r=this.end()},domElement:t,setMode:n}};i.Panel=function(e,t,i){var o=1/0,n=0,r=Math.round,l=r(window.devicePixelRatio||1),a=80*l,s=48*l,d=3*l,c=2*l,w=3*l,u=15*l,p=74*l,f=30*l,h=document.createElement("canvas");h.width=a,h.height=s,h.style.cssText="width:80px;height:48px";var y=h.getContext("2d");return y.font="bold "+9*l+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=i,y.fillRect(0,0,a,s),y.fillStyle=t,y.fillText(e,d,c),y.fillRect(w,u,p,f),y.fillStyle=i,y.globalAlpha=.9,y.fillRect(w,u,p,f),{dom:h,update:function(s,m){o=Math.min(o,s),n=Math.max(n,s),y.fillStyle=i,y.globalAlpha=1,y.fillRect(0,0,a,u),y.fillStyle=t,y.fillText(r(s)+" "+e+" ("+r(o)+"-"+r(n)+")",d,c),y.drawImage(h,w+l,u,p-l,f,w,u,p-l,f),y.fillRect(w+p-l,u,l,f),y.fillStyle=i,y.globalAlpha=.9,y.fillRect(w+p-l,u,l,r((1-s/m)*f))}}};var o=i});var n=o("2LLMu"),r=o("ccy7r"),l=o("e7TkJ"),a=o("fK5g3"),s=o("ilwiq"),d=o("5Rd1x"),c=o("jiuw3");const w=[];let u={showAxis:!0};const p={camera:"pointerLock",cameraPos:[0,1,4],fov:75,lightType:"directional"},f={floorCID:0,carChasisCID:1,wheelCID:2},h={};async function y(e,t,i,o){let l=new s.Mesh(new s.BoxGeometry(100,1,100),new s.MeshPhongMaterial);l.receiveShadow=!0,l.position.y=-1;let a=i.createRigidBody((0,n.RigidBodyDesc).fixed().setTranslation(0,-1,0)),d=(0,n.ColliderDesc).cuboid(50,.5,50);i.createCollider(d,a);let c=new r.RenderableEntity(t,i,l,"floor",a);c.addToScene(),e.push(c);let w=new m(t,i);await w.init([0,1,0],new s.Vector3(.5,-.5,1.5),new s.Vector3(0,0,0)),e.push(w)}(0,n.init)().then(async()=>{let e;let{world:t,scene:i,camera:o,controls:n,renderer:r,pivot:f,stats:m}=(0,a.initBasicScene)(h,p);await y(w,i,t,f);let g=new l.default(i,t),R=new s.AxesHelper(3);u.showAxis&&i.add(R);let C=new s.Clock,x=new c.GUI;x.add(g,"enabled").name("Rapier Degug Renderer"),x.add(u,"showAxis").name("Show Axis").onChange(e=>{e?i.add(R):i.remove(R)}),window.requestAnimationFrame(function l(){for(let i of(e=C.getDelta(),t.timestep=Math.min(e,.1),t.step(),w))i.update(t.timestep);n instanceof d.OrbitControls&&n.update(),g.update(),r.render(i,o),m.update(),window.requestAnimationFrame(l)})});class m extends r.Entity{constructor(e,t){super(e,"tempCar"),this.world=t}async init(e,t,i){let o=(0,a.generateCollisionId)([f.carChasisCID],[f.floorCID]),r=(0,a.generateCollisionId)([f.wheelCID],[f.floorCID]),l=new(0,n.RigidBodyDesc)((0,n.RigidBodyType).Dynamic).setTranslation(...e).setCanSleep(!0),d=this.world.createRigidBody(l),c=(0,n.ColliderDesc).cuboid(.9,.6,2).setTranslation(0,0,0).setMass(1500).setRestitution(.1).setFriction(.6).setCollisionGroups(o);this.world.createCollider(c,d);let w=new(0,n.RigidBodyDesc)((0,n.RigidBodyType).Dynamic).setCanSleep(!0),u=this.world.createRigidBody(w),p=(0,n.ColliderDesc).cylinder(.2,.3).setTranslation(0,0,0).setRotation(new(0,s.Quaternion)().setFromAxisAngle(new s.Vector3(0,0,1),Math.PI/2)).setMass(7).setFriction(.6).setRestitution(.1).setCollisionGroups(r);this.world.createCollider(p,u),this.world.createImpulseJoint((0,n.JointData).revolute(new s.Vector3(-t.x,t.y,t.z),new s.Vector3(0,0,0),new s.Vector3(-1,0,0)),d,u,!0);let h=new(0,n.RigidBodyDesc)((0,n.RigidBodyType).Dynamic).setCanSleep(!0),y=this.world.createRigidBody(h),m=(0,n.ColliderDesc).cylinder(.2,.3).setTranslation(0,0,0).setRotation(new(0,s.Quaternion)().setFromAxisAngle(new s.Vector3(0,0,1),Math.PI/2)).setMass(7).setFriction(.6).setRestitution(.1).setCollisionGroups(r);this.world.createCollider(m,y),this.world.createImpulseJoint((0,n.JointData).revolute(new s.Vector3(t.x,t.y,t.z),new s.Vector3(0,0,0),new s.Vector3(-1,0,0)),d,y,!0);let g=new(0,n.RigidBodyDesc)((0,n.RigidBodyType).Dynamic).setCanSleep(!0),R=this.world.createRigidBody(g),C=(0,n.ColliderDesc).cylinder(.2,.3).setTranslation(0,0,0).setFriction(.6).setRotation(new(0,s.Quaternion)().setFromAxisAngle(new s.Vector3(0,0,1),Math.PI/2)).setMass(7).setCollisionGroups(r);this.world.createCollider(C,R),this.wheelBRMotor=this.world.createImpulseJoint((0,n.JointData).revolute(new s.Vector3(-t.x,t.y,-t.z),new s.Vector3(0,0,0),new s.Vector3(-1,0,0)),d,R,!0);let x=new(0,n.RigidBodyDesc)((0,n.RigidBodyType).Dynamic).setCanSleep(!0),D=this.world.createRigidBody(x),v=(0,n.ColliderDesc).cylinder(.2,.3).setTranslation(0,0,0).setFriction(.6).setRotation(new(0,s.Quaternion)().setFromAxisAngle(new s.Vector3(0,0,1),Math.PI/2)).setMass(7).setCollisionGroups(r);this.world.createCollider(v,D),this.wheelBLMotor=this.world.createImpulseJoint((0,n.JointData).revolute(new s.Vector3(t.x,t.y,-t.z),new s.Vector3(0,0,0),new s.Vector3(-1,0,0)),d,D,!0)}update(e){let t=0;h.KeyW&&(t=-500),h.KeyS&&(t=200),this.wheelBLMotor.configureMotorVelocity(t,2),this.wheelBRMotor.configureMotorVelocity(t,2)}}
//# sourceMappingURL=test-car.285d9dab.js.map