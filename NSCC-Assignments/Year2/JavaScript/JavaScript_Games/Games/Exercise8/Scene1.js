//class definition filename same as class name
class Scene1 extends Phaser.Scene {
  constructor() {
            //class which makes the class inherit all the characteristics of its 
        //predecessor the class Scene from phaser
    super("bootGame");
  }
//load music and images into memory
  preload(){
            //load images and spritesheets from assests folder
        //using a key to idenitfy image and a string path to the folder
    this.load.image("bg", "assets/images/background.png");
    ////first ship
    this.load.spritesheet("s1", "assets/spritesheets/ship.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    //second ship
    this.load.spritesheet("s2", "assets/spritesheets/ship2.png",{
      frameWidth: 32,
      frameHeight: 16
    });
    //third ship
    this.load.spritesheet("s3", "assets/spritesheets/ship3.png",{
      frameWidth: 32,
      frameHeight: 32
    });
    //explosion spritesheet for ships
    this.load.spritesheet("exp", "assets/spritesheets/explosion.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    //powerUp spriteSheet
    this.load.spritesheet("pow", "assets/spritesheets/power-up.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    //player controlled ship spritesheet
    this.load.spritesheet("play", "assets/spritesheets/player.png",{
      frameWidth: 16,
      frameHeight: 24
    });
    //beam spritesheet
    this.load.spritesheet("fire", "assets/spritesheets/beam.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    //font for score board
    this.load.bitmapFont("pixel", "assets/font/font.png", "assets/font/font.xml");

    // 1.1 load sounds in both formats mp3 and ogg
    this.load.audio("a_beam", ["assets/sounds/beam.ogg", "assets/sounds/beam.mp3"]);
    this.load.audio("a_explosion", ["assets/sounds/explosion.ogg", "assets/sounds/explosion.mp3"]);
    this.load.audio("a_pickup", ["assets/sounds/pickup.ogg", "assets/sounds/pickup.mp3"]);
    this.load.audio("song", ["assets/sounds/sci-fi_platformer12.ogg", "assets/sounds/sci-fi_platformer12.mp3"]);
  }
//add the objects into the game
  create() {
    //   this.anims.create({
    //     key: "ID FOR ANIMATION",
    //     frames: AN ARRAY OF FRAMES,
    //     frameRate: THE SPEED OF THE ANIMATION,
    //     repeat: WILL IT LOOP? Infinte loops = -1 use 0 to run once
            //hideOnCompete to make animation disappear if true
            //start //specify start frame from the same sprite sheet
            //end //specify end frame from the same sprite sheet
    //   });


    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
    //ship1 animation
    this.anims.create({
      key: "s1_anim",
      frames: this.anims.generateFrameNumbers("s1"),
      frameRate: 20,
      repeat: -1
    });
    //ship2 animation
    this.anims.create({
      key: "s2_anim",
      frames: this.anims.generateFrameNumbers("s2"),
      frameRate: 20,
      repeat: -1
    });
    //ship3 animation
    this.anims.create({
      key: "s3_anim",
      frames: this.anims.generateFrameNumbers("s3"),
      frameRate: 20,
      repeat: -1
    });
    //explode animation
    this.anims.create({
      key: "boom",
      frames: this.anims.generateFrameNumbers("exp"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });
    //red power-up animation
    this.anims.create({
      key: "r",
      frames: this.anims.generateFrameNumbers("pow", {
        start: 0,
        end: 1
      }),
      frameRate: 20,
      repeat: -1
    });
    //grey power-up animation
    this.anims.create({
      key: "g",
      frames: this.anims.generateFrameNumbers("pow", {
        start: 2,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });
    //player ship aninmation
    this.anims.create({
      key: "rust",
      frames: this.anims.generateFrameNumbers("play"),
      frameRate: 20,
      repeat: -1
    });
    //player ship fire animation
    this.anims.create({
      key: "fire_anim",
      frames: this.anims.generateFrameNumbers("fire"),
      frameRate: 20,
      repeat: -1
    });



  }
}
