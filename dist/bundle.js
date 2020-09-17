!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);const n=async()=>{await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cCm80CLUyO7HIMn3WlTB/scores/",{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"},credentials:"same-origin"}).then(e=>{e.json().then(e=>{!function(e){const t=document.querySelector(".topscores"),s=document.createElement("div");s.className="scoreDisplay";const n=document.createElement("p");n.innerHTML=Object.values(e);const r=document.createElement("p");s.appendChild(r),s.appendChild(n),t.appendChild(s)}(e),console.log(e)})}).catch(e=>{e.message})};document.querySelector(".top").addEventListener("click",e=>{e.preventDefault();document.querySelector(".scoreBoard").classList.remove("hide"),n()});const r=document.getElementById("name"),a=document.querySelector(".score-container");var o=function(e){const t=document.createElement("div");t.className="score";const s=document.createElement("div");s.innerHTML=e;const n=document.createElement("div");n.innerHTML=r.value,0===r.value.length?alert("name is required"):((async(e,t)=>{await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cCm80CLUyO7HIMn3WlTB/scores/",{method:"POST",body:JSON.stringify({user:e,score:t}),headers:{"Content-Type":"application/json; charset=utf-8"},credentials:"same-origin"}).then(e=>(e.status,e.statusText,e.headers,e.url,e.text())).catch(e=>{e.message})})(r.value,e),alert("score updated")),t.appendChild(n),t.appendChild(s),a.appendChild(t)};let i,c,d,l,u,h,p=0,m=!1;const y=document.querySelector(".nameEntry"),f=document.querySelector(".formname"),g=document.querySelector("button"),v=document.querySelector(".restart"),b=document.querySelector(".start");function B(e,t){if(t.disableBody(!0,!0),p+=10,h.setText("Score: "+p),0===c.countActive(!0)){c.children.iterate(e=>{e.enableBody(!0,e.x,0,!0,!0),e.setBounce(1,1),e.setCollideWorldBounds(!0),e.setVelocity(Phaser.Math.Between(-200,200),Phaser.Math.Between(-200,200)),e.allowGravity=!1});const t=e.x<400?Phaser.Math.Between(400,800):Phaser.Math.Between(0,400),s=d.create(t,16,"bomb");s.setBounce(1),s.setCollideWorldBounds(!0),s.setVelocity(Phaser.Math.Between(-200,200),20),s.allowGravity=!1}}function S(e){this.physics.pause(),f.classList.remove("hide"),y.innerHTML="GAME OVER",e.setTint(16711680),e.anims.play("turn"),m=!0}v.addEventListener("click",e=>{e.preventDefault(),window.location.reload()}),b.addEventListener("click",e=>{e.preventDefault(),function(){const e=document.querySelector(".menudiv");document.querySelector(".scoreBoard").classList.add("hide"),e.classList.add("hide"),document.querySelector(".gamediv").classList.remove("hide")}()}),g.addEventListener("click",e=>{e.preventDefault(),o(p)});const w={type:Phaser.AUTO,width:1e3,height:650,parent:"gamebody",physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:{preload:function(){this.load.image("sky","assets/sky.jpg"),this.load.image("ground","assets/platform.png"),this.load.image("star","assets/star.png"),this.load.image("bomb","assets/bomb.png"),this.load.audio("song","assets/got.mp3"),this.load.spritesheet("dude","assets/dude.png",{frameWidth:32,frameHeight:48})},create:function(){this.add.image(500,250,"sky"),l=this.physics.add.staticGroup(),l.create(680,620,"ground").setScale(2).refreshBody(),l.create(600,450,"ground"),l.create(1e3,300,"ground"),l.create(10,150,"ground"),l.create(80,620,"ground").setScale(2).refreshBody(),l.create(10,500,"ground"),l.create(350,330,"ground"),l.create(750,150,"ground"),i=this.physics.add.sprite(100,450,"dude"),i.setBounce(.2),i.setCollideWorldBounds(!0),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("dude",{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"dude",frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("dude",{start:5,end:8}),frameRate:10,repeat:-1}),u=this.input.keyboard.createCursorKeys(),c=this.physics.add.group({key:"star",repeat:2,setXY:{x:30,y:0,stepX:100}}),c.children.iterate(e=>{e.setBounce(1,1),e.setCollideWorldBounds(!0),e.setVelocity(Phaser.Math.Between(-200,200),Phaser.Math.Between(-200,200)),e.allowGravity=!1}),d=this.physics.add.group(),h=this.add.text(16,16,"score: 0",{fontSize:"32px",fill:"#000"}),this.physics.add.collider(i,l),this.physics.add.collider(c,l),this.physics.add.collider(d,l),this.physics.add.overlap(i,c,B,null,this),this.physics.add.collider(i,d,S,null,this)},update:function(){m||(u.left.isDown?(i.setVelocityX(-160),i.anims.play("left",!0)):u.right.isDown?(i.setVelocityX(160),i.anims.play("right",!0)):(i.setVelocityX(0),i.anims.play("turn")),u.up.isDown&&i.body.touching.down&&i.setVelocityY(-330))}}};new Phaser.Game(w);t.default=p}]);