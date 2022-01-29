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
      //first ship
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
      this.load.spritesheet("boom", "assets/spritesheets/explosion.png",{
        frameWidth: 16,
        frameHeight: 16
      });
      // 2.1 load the spritesheet
      this.load.spritesheet("pow-up", "assets/spritesheets/power-up.png",{
        frameWidth: 16,
        frameHeight: 16
      });
      //player controlled ship spritesheet
      this.load.spritesheet("PLAYER", "assets/spritesheets/player.png",{
        frameWidth: 16,
        frameHeight: 16
      });
    }
    //add the objects into the game
    create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("pGame");
    //   this.anims.create({
    //     key: "ID FOR ANIMATION",
    //     frames: AN ARRAY OF FRAMES,
    //     frameRate: THE SPEED OF THE ANIMATION,
    //     repeat: WILL IT LOOP? Infinte loops = -1 use 0 to run once
            //hideOnCompete to make animation disappear if true
    //   });

      this.anims.create({
        key: "s1-anim",
        frames: this.anims.generateFrameNumbers("s1"),
        frameRate: 20,
        repeat: -1
      });
      this.anims.create({
        key: "s2-anim",
        frames: this.anims.generateFrameNumbers("s2"),
        frameRate: 20,
        repeat: -1
      });
      this.anims.create({
        key: "s3-anim",
        frames: this.anims.generateFrameNumbers("s3"),
        frameRate: 20,
        repeat: -1
      });
  
      this.anims.create({
        key: "kaboom",
        frames: this.anims.generateFrameNumbers("boom"),
        frameRate: 20,
        repeat: 0,
        hideOnComplete: true
      });
      //run animation on all ships
      this.ship1.play("s1-anim");
      this.ship2.play("s2-anim");
      this.ship3.play("s3-anim");
      //destroy all ships and make them disappear when activated
      this.ship1.setInteractive();
      this.ship2.setInteractive();
      this.ship3.setInteractive();
      //event listener for when a ship is clicked
      this.input.on('gameobjectdown', this.destroyShip, this);
  
      this.add.text(20, 20, "Playing game", {
        font: "25px Arial",
        fill: "yellow"
      });
  
      // POWER UPS
  
      //2.1 Two Animations for the power ups
      this.anims.create({
        key: "r",
        frames: this.anims.generateFrameNumbers("pow-up", {
            //specify different frame from the same sprite sheet
          start: 0,
          end: 1
        }),
        frameRate: 20,
        repeat: -1
      });
      this.anims.create({
        key: "g",
        frames: this.anims.generateFrameNumbers("pow-up", {
            //specify different frame from the same sprite sheet
          start: 2,
          end: 3
        }),
        frameRate: 20,
        repeat: -1
      });

      this.anims.create({
        key: "fly",
        frames: this.anims.generateFrameNumbers("PLAYER"),
        frameRate: 20,
        repeat: -1
      });

    }
  }