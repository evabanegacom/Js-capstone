!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);const n=async()=>{await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BulHvxB2vf6EwvbAg88l/scores/",{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"},credentials:"same-origin"}).then(e=>{e.json().then(e=>{!function(e){const t=document.querySelector(".topscores"),s=document.createElement("div");s.className="scoreDisplay";const n=document.createElement("p");n.innerHTML=function(e){for(let t=0;t<e.sort((e,t)=>t.score-e.score).length;t+=1){const t=10,s=e.slice(0,t);return s.map(e=>`<p>${e.score}</p>`).join("")}}(e);const r=document.createElement("p");r.innerHTML=function(e){for(let t=0;t<e.sort((e,t)=>t.score-e.score).length;t+=1){const t=10,s=e.slice(0,t).map(e=>`<p>${e.user}</p>`);return s.join("")}}(e),s.appendChild(r),s.appendChild(n),t.appendChild(s)}(e.result)})}).catch(e=>{e.message})};const r=document.querySelector(".top");r.addEventListener("click",e=>{e.preventDefault();document.querySelector(".scoreBoard").classList.remove("hide"),r.classList.add("hide"),n()});const a=document.getElementById("name"),o=document.querySelector(".score-container"),i=document.querySelector(".nameEntry");var c=function(e){if(0===a.value.length)i.innerHTML="name is required";else{const t=document.createElement("div");t.className="score";const s=document.createElement("div");s.innerHTML=e;const n=document.createElement("div");n.innerHTML=a.value,t.appendChild(n),t.appendChild(s),o.appendChild(t),(async(e,t)=>{await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BulHvxB2vf6EwvbAg88l/scores/",{method:"POST",body:JSON.stringify({user:e,score:t}),headers:{"Content-Type":"application/json; charset=utf-8"},credentials:"same-origin"}).then(e=>(e.status,e.statusText,e.headers,e.url,e.text())).catch(e=>{e.message})})(a.value,e),i.innerHTML="score updated"}};let d,l,u,h,p,m,y=0,f=!1;const g=document.querySelector(".nameEntry"),v=document.querySelector(".formname"),b=document.querySelector("button"),B=document.querySelector(".restart"),S=document.querySelector(".start");function w(e,t){if(t.disableBody(!0,!0),y+=10,m.setText("Score: "+y),0===l.countActive(!0)){l.children.iterate(e=>{e.enableBody(!0,e.x,0,!0,!0),e.setBounce(1,1),e.setCollideWorldBounds(!0),e.setVelocity(Phaser.Math.Between(-200,200),Phaser.Math.Between(-200,200)),e.allowGravity=!1});const t=e.x<400?Phaser.Math.Between(400,800):Phaser.Math.Between(0,400),s=u.create(t,16,"bomb");s.setBounce(1),s.setCollideWorldBounds(!0),s.setVelocity(Phaser.Math.Between(-200,200),20),s.allowGravity=!1}}function M(e){this.physics.pause(),v.classList.remove("hide"),g.innerHTML="GAME OVER",e.setTint(16711680),this.gamesound.pause(),e.anims.play("turn"),f=!0}B.addEventListener("click",e=>{e.preventDefault(),window.location.reload()}),S.addEventListener("click",e=>{e.preventDefault(),function(){const e=document.querySelector(".menudiv");document.querySelector(".scoreBoard").classList.add("hide"),e.classList.add("hide"),document.querySelector(".gamediv").classList.remove("hide")}()}),b.addEventListener("click",e=>{e.preventDefault(),c(y)});const E={type:Phaser.AUTO,width:1e3,height:650,parent:"gamebody",physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:{preload:function(){this.load.image("sky","assets/sky.jpg"),this.load.image("ground","assets/platform.png"),this.load.image("star","assets/star.png"),this.load.image("bomb","assets/bomb.png"),this.load.audio("song","assets/got.mp3"),this.load.spritesheet("dude","assets/dude.png",{frameWidth:32,frameHeight:48})},create:function(){this.add.image(500,250,"sky"),h=this.physics.add.staticGroup(),h.create(680,620,"ground").setScale(2).refreshBody(),h.create(600,450,"ground"),h.create(1e3,300,"ground"),h.create(10,150,"ground"),h.create(80,620,"ground").setScale(2).refreshBody(),h.create(10,500,"ground"),h.create(350,330,"ground"),h.create(750,150,"ground"),d=this.physics.add.sprite(100,450,"dude"),d.setBounce(.2),d.setCollideWorldBounds(!0),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("dude",{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"dude",frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("dude",{start:5,end:8}),frameRate:10,repeat:-1}),p=this.input.keyboard.createCursorKeys(),l=this.physics.add.group({key:"star",repeat:10,setXY:{x:30,y:0,stepX:100}}),l.children.iterate(e=>{e.setBounce(1,1),e.setCollideWorldBounds(!0),e.setVelocity(Phaser.Math.Between(-200,200),Phaser.Math.Between(-200,200)),e.allowGravity=!1}),u=this.physics.add.group(),m=this.add.text(16,16,"score: 0",{fontSize:"32px",fill:"#000"}),this.physics.add.collider(d,h),this.physics.add.collider(l,h),this.physics.add.collider(u,h),this.physics.add.overlap(d,l,w,null,this),this.physics.add.collider(d,u,M,null,this)},update:function(){f||(p.left.isDown?(d.setVelocityX(-160),d.anims.play("left",!0)):p.right.isDown?(d.setVelocityX(160),d.anims.play("right",!0)):(d.setVelocityX(0),d.anims.play("turn")),p.up.isDown&&d.body.touching.down&&d.setVelocityY(-330))}}};new Phaser.Game(E);t.default=y}]);