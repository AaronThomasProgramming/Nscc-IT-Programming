//extend the sprite game object
class Explosion extends Phaser.GameObjects.Sprite{
  constructor(scene,x,y){
    //play the explosion animation
    super(scene, x, y, "exp");
    scene.add.existing(this);
    this.play("boom");
  }
}
