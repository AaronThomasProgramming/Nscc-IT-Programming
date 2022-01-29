// create a new scene named "Game"
let gScene = new Phaser.Scene('Game');
 
// our game's configuration
let config = {
  type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
  width: 640, // game width
  height: 360, // game height
  scene: gScene // our newly created scene
};
 
// create the game, and pass it the configuration
let game = new Phaser.Game(config);


// some parameters for our scene (our own customer variables - these are NOT part of the Phaser API)
gScene.init = function() {
    this.pSpeed = 1.5;
    this.eMaxY = 280;
    this.eMinY = 80;
}


gScene.restartGame = function() {
 
    // flag to set PLAYER is dead
    this.pAlive = false;
    // shake the camera
    //
    this.cameras.main.shake(500);
    // fade camera
    //fade half way through camera shake
    this.time.delayedCall(250, function() {
    this.cameras.main.fade(250);
    }, [], this);
    // restart game
    //start new game after 500 miliseconds
    this.time.delayedCall(500, function() {
    this.scene.restart();
    }, [], this);
};

// load asset files for our game
gScene.preload = function() {
 
  // load images
  //preload sprites to avoid modifiying later
  this.load.image('background', 'assets/background.png');
  this.load.image('PLAYER', 'assets/PLAYER.png');
  this.load.image('dragon', 'assets/dragon.png');
  this.load.image('treasure', 'assets/treasure.png');

};
 
// executed once, after assets were loaded
gScene.create = function() {
 
    // background
    let backGROUND = this.add.sprite(0, 0, 'background');

    // PLAYER
    //place PLAYER sprite in middle of game
    //define as this.PLAYER to access it from other methods
    this.PLAYER = this.add.sprite(40, this.sys.game.config.height / 2, 'PLAYER');

    // scale down
    //reduce PLAYER sprite size by 50%
    this.PLAYER.setScale(0.5);
        
    // change origin to the top-left of the sprite
    //set top left displays the full image
    backGROUND.setOrigin(0,0);

    // goal
    //add treasure sprite at the end of the level at right hand side
    this.treasure = this.add.sprite(this.sys.game.config.width - 80, this.sys.game.config.height / 2, 'treasure');
    this.treasure.setScale(0.6);

  // group of Dragon
    this.Dragon = this.add.group({
        key: 'dragon',
        //create 6 dragins
        repeat: 5,
        setXY: {
            //first dragon place at 110 100
            x: 110,
            y: 100,
            //move 80x and 20y for every additional dragon
            stepX: 80,
            stepY: 20
        }
    });
    // scale Dragon
    //reduce dragon size by 50%
    Phaser.Actions.ScaleXY(this.Dragon.getChildren(), -0.6, -0.6);

    // set speeds
    Phaser.Actions.Call(this.Dragon.getChildren(), function(enemy) {
    //set random fast for each dragon
    enemy.fast = Math.random() * 2 + 1;
    }, this);

    // PLAYER is alive
    this.pAlive = true;

    // reset camera effects
    //camera is reset back to normal with no effects
    this.cameras.main.resetFX();
};

// executed on every frame (60 times per second)
gScene.update = function() {
    // only if the PLAYER is alive
    if (!this.pAlive) {
        return;
    }
    // check for active input
    //input from left mouse click
    if (this.input.activePointer.isDown) {

    // PLAYER walks
    //increase x position
    this.PLAYER.x += this.pSpeed;
    }
    // treasure collision
    //if collision with PLAYER and treasure detected start new game
    if (Phaser.Geom.Intersects.RectangleToRectangle(this.PLAYER.getBounds(), this.treasure.getBounds())) {
    this.restartGame();
    }

    // enemy movement and collision
    let Dragon = this.Dragon.getChildren();
    let numDragons = Dragon.length;

    for (let i = 0; i < numDragons; i++) {

        // move Dragon
        Dragon[i].y += Dragon[i].fast;

        // reverse movement if reached the edges
        //have dragons move up and down
        if (Dragon[i].y >= this.eMaxY && Dragon[i].fast > 0) {
            Dragon[i].fast *= -1;
        } else if (Dragon[i].y <= this.eMinY && Dragon[i].fast < 0) {
            Dragon[i].fast *= -1;
        }
        // enemy collision
        //if PLAYER colides with the dragons the game is over
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.PLAYER.getBounds(), Dragon[i].getBounds())) {
            this.restartGame();
            break;
        }
    }
};