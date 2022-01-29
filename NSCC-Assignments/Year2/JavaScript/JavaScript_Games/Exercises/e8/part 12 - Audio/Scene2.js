//class definition filename same as class name
class Scene2 extends Phaser.Scene {
  constructor() {
            //class which makes the class inherit all the characteristics of its 
        //predecessor the class Scene from phaser
    super("playGame");

  }
  //add the objects into the game
  create() {
        //load BACKGROUND in the the preload function form Scene1.js
        //set BACKGROUND image to the top left corner
        //tile sprite image to move BACKGROUND
    this.bg = this.add.tileSprite(0, 0, config.width, config.height, "bg");
    this.bg.setOrigin(0, 0);
        //load ships in the the preload function form Scene1.js
    this.s1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "s1");
    this.s2 = this.add.sprite(config.width / 2, config.height / 2, "s2");
    this.s3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "s3");
    //add all enemies into a group
    this.badShip = this.physics.add.group();
    this.badShip.add(this.s1);
    this.badShip.add(this.s2);
    this.badShip.add(this.s3);

//run animation on all ships
    this.s1.play("s1_anim");
    this.s2.play("s2_anim");
    this.s3.play("s3_anim");
//destroy all ships and make them disappear when activated
    this.s1.setInteractive();
    this.s2.setInteractive();
    this.s3.setInteractive();
//event listener for when a ship is clicked
    this.input.on('gameobjectdown', this.destShip, this);

    this.physics.world.setBoundsCollision();

    this.powUps = this.physics.add.group();

      // 2.2 Add multiple objects
      //create four power up objects in a loop
    for (var i = 0; i < gSettings.maxPowerups; i++) {
      var pUp = this.physics.add.sprite(16, 16, "pow");
      //add them to group call "POWERUPS"
      this.powUps.add(pUp);
      //give them random random spawn coordinates inside the screen area
      pUp.setRandomPosition(0, 0, game.config.width, game.config.height);
        // set random animation
        //between red or grey
      if (Math.random() > 0.5) {
        pUp.play("r");
      } else {
        pUp.play("g");
      }
      // setVelocity speed
      pUp.setVelocity(gSettings.powerUpVel, gSettings.powerUpVel);
      //avoid power ups from leaving the canvas
      pUp.setCollideWorldBounds(true);
      //bounce off the edges
      pUp.setBounce(1);

    }

    //load PLAYER sprite
    this.thePlayer = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, "play");
    //play thrust animation
    this.thePlayer.play("rust");
    //get input from keyboard
    this.keys = this.input.keyboard.createCursorKeys();
    //prevent PLAYER from leaving the canvas
    this.thePlayer.setCollideWorldBounds(true);


    //button for PLAYER to shoot
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    //create group to hold all beam instances
    this.beamProjectiles
     = this.add.group();
    //collision detection between beams and powerUPS
    //aninymous function called back when the collision occurs
    this.physics.add.collider(this.beamProjectiles
      , this.powUps, function(projectile, powerUp) {
      //destroy beam once it collides
      projectile.destroy();
    });
    //calculate physics between thePlayer and powerUPs
    //first two parameters are the object that check check to collide, third is a function
    this.physics.add.overlap(this.thePlayer, this.powUps, this.pickPowUp, null, this);
    //calculate physics between thePlayer and enemies
    //first two parameters are the object that check check to collide, third is a function
    this.physics.add.overlap(this.thePlayer, this.badShip, this.deadPlayer, null, this);
    //calculate physics between beam and enemies
    //first two parameters are the object that check check to collide, third is a function
    this.physics.add.overlap(this.beamProjectiles
      , this.badShip, this.hitEnemy, null, this);
    //add black background hud for score
    var graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    //draw the polyigon lines with the coordinates provided
    graphics.beginPath();
    graphics.moveTo(0, 0);
    graphics.lineTo(config.width, 0);
    graphics.lineTo(config.width, 20);
    graphics.lineTo(0, 20);
    graphics.lineTo(0, 0);
    //close and fill path
    graphics.closePath();
    graphics.fillPath();
    //keep track of score points
    this.currentScore = 0;
    var scoreFormated = this.zeroScore(this.currentScore, 6);
    //add score label variable with the bitmap text function
    this.scoreString = this.add.bitmapText(10, 5, "pixel", "SCORE " + scoreFormated  , 16);

    // 1.2 create the sounds to be used
    this.fireSound = this.sound.add("a_beam");
    this.boomSound = this.sound.add("a_explosion");
    this.pUpSound = this.sound.add("a_pickup");

    // 2.1 create music
    this.music = this.sound.add("song");
    //config variable for music
    var musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    }
    //play music
    this.music.play(musicConfig);

  }

  pickPowUp(thePlayer, upP) {
    //hide powerUp after thePlayer touches it
    upP.disableBody(true, true);
    // 1.4 play pickUp sounds
    this.pUpSound.play();
  }

  deadPlayer(thePlayer, enemy) {
    //shake camera
    this.cameras.main.shake();
    //reset enemy ship if it collides with thePlayer
    this.rPosition(enemy);
    //prevent thePlayer from being spawned killed if transparent
    if(this.thePlayer.alpha < 1){
        return;
    }
    //thePlayer explodes id they get hurt
    var explosion = new Explosion(this, thePlayer.x, thePlayer.y);
    //hide thePlayer after explosion
    thePlayer.disableBody(true, true);
    //reset thePlayer position
    this.time.addEvent({
      //delay respawn time
      delay: 1000,
      //respawn after a second
      callback: this.rPlayer,
      callbackScope: this,
      loop: false
    });
  }

  rPlayer(){
    //reset position of the thePlayer ship
    var xP = config.width / 2 - 8;
    var yP = config.height + 64;
    //enable thePlayer at reset position
    this.thePlayer.enableBody(true, xP, yP, true, true);

    //make thePlayer tranparent
    this.thePlayer.alpha = 0.5;

    var tWeen = this.tweens.add({
      //target thePlayer ship
      targets: this.thePlayer,
      y: config.height - 64,
      ease: 'Power1',
      //transparnetcy lasts for one and a half seconds
      duration: 1500,
      repeat:0,
      onComplete: function(){
        //remove tranparency 
        this.thePlayer.alpha = 1;
      },
      callbackScope: this
    });
  }

  hitEnemy(beamFire, enemyShip) {
    //trigger explsion anim for enemy ship
    var boom = new Explosion(this, enemyShip.x, enemyShip.y);
    //destoy beam
    beamFire.destroy();
    //respawn enemy ship
    this.rPosition(enemyShip);
    //increment score for each enemy hit
    this.currentScore += 15;
    //update scoreboard
     var formatScore = this.zeroScore(this.currentScore, 6);
     this.scoreString.text = "SCORE " + formatScore;

     // 1.4 play explosion sounds
     this.boomSound.play();
  }

  //add zeros to score output
  zeroScore(num, scoreSize){
    //take a number and return it as a string 
    //with the specfied zeros to the left
      var stringNum = String(num);
      while(stringNum.length < (scoreSize || 2)){
        stringNum = "0" + stringNum;
      }
      return stringNum;
  }




  update() {


    //call function to move each ship at different speeds
    this.moveEnemyShip(this.s1, 1);
    this.moveEnemyShip(this.s2, 2);
    this.moveEnemyShip(this.s3, 3);
    // for testing purpouses
    // this.ship1.destroy();
    // this.ship2.destroy();
    // this.ship3.destroy();
    //move the BACKGROUND image to create interactivity
    this.bg.tilePositionY -= 0.5;

    //control movement of players ship
    this.movePlayer();
    //fire button input
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      //if thePlayer is alive allow them to shoot
      if(this.thePlayer.active){
          this.shootFire();
      }
    }
    //iterate through each element of the projectile group 
    //to run the update of each beam
    for (var i = 0; i < this.beamProjectiles
      .getChildren().length; i++) {
      var beam = this.beamProjectiles
      .getChildren()[i];
      beam.update();
    }


  }

  shootFire() {
    //pass the scene as a parameter
      var fire = new Beam(this);
      // 1.3 play beam sounds
      this.fireSound.play();
  }


  movePlayer() {

    this.thePlayer.setVelocity(0);
    //move left 
    if (this.keys.left.isDown) {
      this.thePlayer.setVelocityX(-gSettings.playerSpeed);
      //move right 
    } else if (this.keys.right.isDown) {
      this.thePlayer.setVelocityX(gSettings.playerSpeed);
    }

    if (this.keys.up.isDown) {
      //move up
      this.thePlayer.setVelocityY(-gSettings.playerSpeed);
      //move down
    } else if (this.keys.down.isDown) {
      this.thePlayer.setVelocityY(gSettings.playerSpeed);
    }
  }


//function to move ship
  moveEnemyShip(enemyShip, enemySpeed) {
    //ship.y controls direction and speed control velocity
    enemyShip.y += enemySpeed;
    //reset postion to top of canvas if ship hits bottom
    if (enemyShip.y > config.height) {
      this.rPosition(enemyShip);
    }
  }
//function to reset ship to the top of the screen
  rPosition(resetShip) {
    //ship at top of screen 
    resetShip.y = 0;
    //place ship on random x coordinate
    var rX = Phaser.Math.Between(0, config.width);
    resetShip.x = rX;
  }


//pass mouse pointer for when ship is clicked
  destShip(pointer, gObject) {
    //switch texture for explosion animation
    gObject.setTexture("exp");
    gObject.play("boom");
  }


}
