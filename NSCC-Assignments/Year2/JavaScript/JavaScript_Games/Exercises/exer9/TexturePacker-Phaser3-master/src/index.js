import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    //canvas dimensions
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var walkingGame = new Phaser.Game(config);
var walkingGuy;
//preload images from assets folder
function preload()
{
    //The first parameter 'cScene' specifies the key that can be used to access 
    //the atlas after it has been loaded. The second parameter 'assets/cityscene.json' 
    //is the atlas definition to load, the last parameter 'assets' is the name of the 
    //folder in which the image files are stored.
    this.load.multiatlas('cScene', 'assets/cityscene.json', "assets");
}
//setup the game scene
function create()
{
    // background
    //add background sprite to the top left corner to the canvas
    var neighbourhoodBg = this.add.sprite(0, 0, 'cScene', 'background.png');

    // sprite
    //create sprite with the first frame of the animation
    walkingGuy = this.add.sprite(0, 400, 'cScene', 'capguy/walk/0001.png');
    //shrink sprite to fit on screen
    walkingGuy.setScale(0.5, 0.5);

    // animation
    //add frame names by creating zero-padded numbers between start and end, 
    //surrounded by prefix and suffix). 1 is the start index, 8 the end index and the 4 is 
    //the number of digits to use:
    var frameNames = this.anims.generateFrameNames('cScene', { start: 1, end: 8, zeroPad: 4, prefix:'capguy/walk/', suffix:'.png' });
    //create walking animation 
    this.anims.create({ key: 'walk', frames: frameNames, frameRate: 10, repeat: -1 });
    //play animation
    walkingGuy.anims.play('walk');
}

function update(updateTime, walkingDelta)
{   
    //move walking guy to the right.
    walkingGuy.x += walkingDelta/8;
    //reset x position to -50 if x > 800
    if(walkingGuy.x > 800)
    {
        walkingGuy.x = -50;
    }
}
