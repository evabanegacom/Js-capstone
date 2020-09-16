import start from '../src/dom.js';
//import buttonfunction from '../src/restart.js';
import pushData from '../src/score.js'
import getData from '../src/score.js'

let player;
let stars;
let bombs;
let platforms;
let cursors;
let score = 0;
let gameOver = false;
let scoreText;

const endgame = document.querySelector('.nameEntry');
const naming = document.querySelector('.formname');
const button = document.querySelector('button');
const restart = document.querySelector('.restart');
const startgame = document.querySelector('.start');
const forminput = document.getElementById('name');
const container = document.querySelector('.score-container');

restart.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});


startgame.addEventListener('click', (e) => {
  e.preventDefault();
  start();
});

button.addEventListener('click', (e) => {
  e.preventDefault();
  //buttonfunction();
  const scorediv = document.createElement('div');
  scorediv.className = 'score';
  const scores = document.createElement('div');
  scores.innerHTML = score;
  const names = document.createElement('div');
  names.innerHTML = forminput.value;
  getData();
  //pushData(forminput.value, score);

  scorediv.appendChild(names);
  scorediv.appendChild(scores);
  container.appendChild(scorediv);
});

function preload() {
  this.load.image('sky', 'assets/sky.jpg');
  this.load.image('ground', 'assets/platform.png');
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assets/bomb.png');
  this.load.audio('song', 'assets/got.mp3');
  this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function collectStar(player, star) {
  star.disableBody(true, true);

  //  Add and update the score
  score += 10;
  scoreText.setText(`Score: ${score}`);
/* eslint-disable */

  if (stars.countActive(true) === 0) {
    //  A new batch of stars to collect
    stars.children.iterate((child) => {
      child.enableBody(true, child.x, 0, true, true);
      child.setBounce(1, 1);
      child.setCollideWorldBounds(true);
      child.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200));
      child.allowGravity = false;
    });

    const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

    const bomb = bombs.create(x, 16, 'bomb');
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;
  }
}

function hitBomb(player) {
  this.physics.pause();
  naming.classList.remove('hide');
  endgame.innerHTML = 'GAME OVER';
  player.setTint(0xff0000);
  //this.gamesound.pause();

  player.anims.play('turn');

  gameOver = true;
}

function create() {
  //  A simple background for our game
  this.add.image(500, 250, 'sky');

  //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = this.physics.add.staticGroup();

  //this.gamesound = this.sound.add('song');
  const soundConfig = {
    mute: false,
    volume: 1,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: true,
    delay: 0,
  };

  //this.gamesound.play(soundConfig);

  //  Here we create the ground.
  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  platforms.create(680, 620, 'ground').setScale(2).refreshBody();

  //  Now let's create some ledges
  platforms.create(600, 450, 'ground');
  platforms.create(1000, 300, 'ground');
  platforms.create(10, 150, 'ground');
  platforms.create(80, 620, 'ground').setScale(2).refreshBody();
  platforms.create(10, 500, 'ground');
  platforms.create(350, 330, 'ground');
  platforms.create(750, 150, 'ground');


  // The player and its settings
  player = this.physics.add.sprite(100, 450, 'dude');

  //  Player physics properties. Give the little guy a slight bounce.
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  //  Our player animations, turning, walking left and walking right.
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: 'turn',
    frames: [{ key: 'dude', frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });

  //  Input Events
  cursors = this.input.keyboard.createCursorKeys();

  //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
  stars = this.physics.add.group({
    key: 'star',
    repeat: 2,
    setXY: { x: 30, y: 0, stepX: 100 },
  });

  stars.children.iterate((child) => {
    // Give each star a slightly different bounce
    child.setBounce(1, 1);
    child.setCollideWorldBounds(true);
    child.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200));
    child.allowGravity = false;
  });

  bombs = this.physics.add.group();

  //  The score
  scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

  //  Collide the player and the stars with the platforms
  this.physics.add.collider(player, platforms);
  this.physics.add.collider(stars, platforms);
  this.physics.add.collider(bombs, platforms);

  this.physics.add.overlap(player, stars, collectStar, null, this);

  this.physics.add.collider(player, bombs, hitBomb, null, this);
}

function update() {
  if (gameOver) {
    return;
  }

  if (cursors.left.isDown) {
    player.setVelocityX(-160);

    player.anims.play('left', true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);

    player.anims.play('right', true);
  } else {
    player.setVelocityX(0);

    player.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }
}


const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 650,
  parent: 'gamebody',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};


const game = new Phaser.Game(config);


game;
/* eslint-enable */
export default score;