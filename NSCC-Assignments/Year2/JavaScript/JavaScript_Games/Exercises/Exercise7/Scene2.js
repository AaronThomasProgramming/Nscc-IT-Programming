//class definition filename same as class name
class Scene2 extends Phaser.Scene {
    constructor() {
        //class which makes the class inherit all the characteristics of its 
        //predecessor the class Scene from phaser
      super("pGame");
    }
  //add the objects into the game
    create() {
        //load BACKGROUND in the the preload function form Scene1.js
        //set BACKGROUND image to the top left corner
        //tile sprite image to move BACKGROUND
      this.BACKGROUND = this.add.tileSprite(0, 0, config.width, config.height, "bg");
      this.BACKGROUND.setOrigin(0, 0);
        //load ships in the the preload function form Scene1.js
      this.s1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "s1");
      this.s2 = this.add.sprite(config.width / 2, config.height / 2, "s2");
      this.s3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "s3");
  
      // 3.1
      this.physics.world.setBoundsCollision();
  
      this.POWERUPS = this.physics.add.group();
  
      // 2.2 Add multiple objects
      //create four power up objects in a loop
      var mObjects = 4;
      for (var i = 0; i <= mObjects; i++) {
        var powUp = this.physics.add.sprite(16, 16, "pow-up");
        //add them to group call "POWERUPS"
        this.POWERUPS.add(powUp);
        //give them random random spawn coordinates inside the screen area
         powUp.setRandomPosition(0, 0, game.config.width, game.config.height);
  
        // set random animation
        //between red or grey
        if (Math.random() > 0.5) {
          powUp.play("r");
        } else {
          powUp.play("g");
        }
  
        // setVelocity speed
        powUp.setVelocity(100, 100);
        // 3.2
        //avoid power ups from leaving the canvas
        powUp.setCollideWorldBounds(true);
        // 3.3
        //bounce off the edges
       powUp.setBounce(1);

  
      }
      //load PLAYER sprite
      this.PLAYER = this.physics.add.sprite(config.width / 2 - 8, config.height -64, "PLAYER");
      //play thrust animation
      this.PLAYER.play("fly");
      //get input from keyboard
      this.aKeys = this.input.keyboard.createCursorKeys();
      //prevent PLAYER from leaving the canvas
      this.PLAYER.setCollideWorldBounds(true);
      //button for PLAYER to shoot
      this.SPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  
    }
    
    update() {
        //call function to move each ship at different speeds
      this.mShip(this.s1, 1);
      this.mShip(this.s2, 2);
      this.mShip(this.s3, 3);
        //move the BACKGROUND image to create interactivity
      this.BACKGROUND.tilePositionY -= 0.5;
        //control movement of players ship
      this.movePlayer();
        //log fire button input
      if(Phaser.Input.Keyboard.JustDown(this.SPACEBAR)){
          console.log("Fire!");
      }
  
    }

    movePlayer(){
        //move left 
        if(this.aKeys.left.isDown){
            this.PLAYER.setVelocityX(-gameS.pSpeed);
            //move right
        } else if(this.aKeys.right.isDown){
            this.PLAYER.setVelocityX(gameS.pSpeed);
        } 
        //move up 
        else if(this.aKeys.up.isDown){
            this.PLAYER.setVelocityY(-gameS.pSpeed);
            //move down 
        } else if(this.aKeys.down.isDown){
            this.PLAYER.setVelocityY(gameS.pSpeed);
        }
        //when no keys pressed set x and y velocity to 0
        else{
            this.PLAYER.setVelocityY(0);
            this.PLAYER.setVelocityX(0);
        }
    }
    //function to move ship
    mShip(theShip, FAST) {
        //ship.y controls direction and speed control velocity
        theShip.y += FAST;
      //reset postion to top of canvas if ship hits bottom
      if (theShip.y > config.height) {
        this.resetShip(theShip);
      }
    }
    //function to reset ship to the top of the screen
    resetShip(theShip) {
        //ship at top of screen 
        theShip.y = 0;
      //place ship on random x coordinate
      var rX = Phaser.Math.Between(0, config.width);
      theShip.x = rX;
    }
    //pass mouse pointer for when ship is clicked
    destroyShip(pointer, gObject) {
        //switch texture for explosion animation
      gObject.setTexture("boom");
      gObject.play("kaboom");
    }
  
  
  }