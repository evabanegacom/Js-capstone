!function(e){var t={};function r(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var a=r.p+"47a86b192804f1490beeb0b5da46a797.png",i=r.p+"69db09bf9618dbe6c387797aa333b102.png",s=r.p+"a7cb585cf61f7dafb028b7b4b16db12f.png",n=r.p+"1344cabbbf6c61010d6ead4118219e91.png",o=r.p+"96aa753af441d2464d09c1e971befb79.png";let d,c,u,l=0;const f={type:Phaser.AUTO,width:800,height:600,physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:{preload:function(){this.load.image("sky",a),this.load.image("ground",i),this.load.image("star",s),this.load.image("bomb",n),this.load.spritesheet("dude",o,{frameWidth:32,frameHeight:48})},create:function(){this.add.image(400,300,"sky"),c=this.physics.add.staticGroup(),d=this.physics.add.sprite(100,450,"dude"),d.body.setGravityY(300),this.physics.add.collider(d,c),c.create(400,568,"ground").setScale(2).refreshBody(),c.create(600,400,"ground"),c.create(50,250,"ground"),c.create(750,220,"ground"),this.add.image(400,300,"star"),d.setBounce(.2),d.setCollideWorldBounds(!0),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("dude",{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"dude",frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("dude",{start:5,end:8}),frameRate:10,repeat:-1});const e=this.physics.add.group({key:"star",repeat:11,setXY:{x:12,y:0,stepX:70}});e.children.iterate(e=>{e.setBounceY(Phaser.Math.FloatBetween(.4,.8))}),this.physics.add.collider(e,c),this.physics.add.overlap(d,e,(function(e,t){t.disableBody(!0,!0),l+=10,u.setText("Score: "+l)}),null,this),u=this.add.text(16,16,"score: 0",{fontSize:"32px",fill:"#000"})},update:function(){const e=this.input.keyboard.createCursorKeys();e.left.isDown?(d.setVelocityX(-160),d.anims.play("left",!0)):e.right.isDown?(d.setVelocityX(160),d.anims.play("right",!0)):(d.setVelocityX(0),d.anims.play("turn"));e.up.isDown&&d.body.touching.down&&d.setVelocityY(-330)}}};new Phaser.Game(f)}]);