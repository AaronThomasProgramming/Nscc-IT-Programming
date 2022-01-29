//extend class sprite and define beam class
class Beam extends Phaser.GameObjects.Sprite{
  //reference scene
  constructor(scene){
    //x and y position for beam
    var x = scene.thePlayer.x;
    var y = scene.thePlayer.y - 16;
    //pass parameters to the father
    super(scene, x, y, "fire");
    //add projectiles to screen
    scene.add.existing(this);
    //play beam animation
    this.play("fire_anim");
    scene.physics.world.enableBody(this);
    //set velocity to go upwards
    this.body.velocity.y = - 250;

    scene.beamProjectiles.add(this);
  

  }


  update(){
    //delete beam instance if it reaches the top
    if(this.y < 32 ){
      this.destroy();
    }
  }
}
