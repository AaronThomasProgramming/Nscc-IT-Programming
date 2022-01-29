var gameS = {
    pSpeed: 200,
}
//define basic characteristics of the game
var config = {
    //dimensions canvas size
    width: 256,
    height: 272,
    //background color
    backgroundColor: 0x000000,
    //scenes are places where elements of the game live in
    scene: [Scene1, Scene2],
    pixelArt: true,
    // 1.1 set the physics to arcade
    physics: {
      default: "arcade",
      arcade:{
          debug: false
      }
    }
  }
  //new game instance that can be configured 
  //pass config into game
  var game = new Phaser.Game(config);