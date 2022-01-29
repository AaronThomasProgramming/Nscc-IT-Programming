//class definition filename same as class name
class Scene2 extends Phaser.Scene {
    constructor() {
        //class which makes the class inherit all the characteristics of its 
        //predecessor the class Scene from phaser
      super("playGame");
    }
  //add the objects into the game
    create() {
        //load background in the the preload function form Scene1.js
        //set background image to the top left corner
        //tile sprite image to move background
      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0, 0);
        //load ships in the the preload function form Scene1.js
      this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship");
      this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
      this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");
  
      // 3.1
      this.physics.world.setBoundsCollision();
  
      this.powerUps = this.physics.add.group();
  
      // 2.2 Add multiple objects
      //create four power up objects in a loop
      var maxObjects = 4;
      for (var i = 0; i <= maxObjects; i++) {
        var powerUp = this.physics.add.sprite(16, 16, "power-up");
        //add them to group call "powerUps"
        this.powerUps.add(powerUp);
        //give them random random spawn coordinates inside the screen area
         powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);
  
        // set random animation
        //between red or grey
        if (Math.random() > 0.5) {
          powerUp.play("red");
        } else {
          powerUp.play("gray");
        }
  
        // setVelocity speed
        powerUp.setVelocity(100, 100);
        // 3.2
        //avoid power ups from leaving the canvas
        powerUp.setCollideWorldBounds(true);
        // 3.3
        //bounce off the edges
       powerUp.setBounce(1);

  
      }
      //load player sprite
      this.player = this.physics.add.sprite(config.width / 2 - 8, config.height -64, "player");
      //play thrust animation
      this.player.play("thrust");
      //get input from keyboard
      this.cursorKeys = this.input.keyboard.createCursorKeys();
      //prevent player from leaving the canvas
      this.player.setCollideWorldBounds(true);
      //button for player to shoot
      this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  
    }
    
    update() {
        //call function to move each ship at different speeds
      this.moveShip(this.ship1, 1);
      this.moveShip(this.ship2, 2);
      this.moveShip(this.ship3, 3);
        //move the background image to create interactivity
      this.background.tilePositionY -= 0.5;
        //control movement of players ship
      this.movePlayerManager();
        //log fire button input
      if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
          console.log("Fire!");
      }
  
    }

    movePlayerManager(){
        //move left 
        if(this.cursorKeys.left.isDown){
            this.player.setVelocityX(-gameS.pSpeed);
            //move right
        } else if(this.cursorKeys.right.isDown){
            this.player.setVelocityX(gameS.pSpeed);
        } 
        //move up 
        else if(this.cursorKeys.up.isDown){
            this.player.setVelocityY(-gameS.pSpeed);
            //move down 
        } else if(this.cursorKeys.down.isDown){
            this.player.setVelocityY(gameS.pSpeed);
        }
        //when no keys pressed set x and y velocity to 0
        else{
            this.player.setVelocityY(0);
            this.player.setVelocityX(0);
        }
    }
    //function to move ship
    moveShip(ship, speed) {
        //ship.y controls direction and speed control velocity
      ship.y += speed;
      //reset postion to top of canvas if ship hits bottom
      if (ship.y > config.height) {
        this.resetShipPos(ship);
      }
    }
    //function to reset ship to the top of the screen
    resetShipPos(ship) {
        //ship at top of screen 
      ship.y = 0;
      //place ship on random x coordinate
      var randomX = Phaser.Math.Between(0, config.width);
      ship.x = randomX;
    }
    //pass mouse pointer for when ship is clicked
    destroyShip(pointer, gameObject) {
        //switch texture for explosion animation
      gameObject.setTexture("explosion");
      gameObject.play("explode");
    }
  
  
  }