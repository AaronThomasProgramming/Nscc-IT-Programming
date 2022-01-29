var config = {
    //rendering context
    type: Phaser.AUTO,
    //canvas size & resolution
    width: 800,
    height: 600,
    //use arcade physics
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var Player;
var starGroup;
var bombGroup;
var plat;
var curs;
//Player scoreCOunter counter
var scoreCOunter = 0;
var youLose = false;
//scoreCOunter to be displayed on screen
var sText;

var startGame = new Phaser.Game(config);
//load assests needed for startGame into memory
function preload ()
{
    //sky background
    this.load.image('sky', 'assets/sky.png');
    //ground texture
    this.load.image('ground', 'assets/platform.png');
    //texture for starGroup to collect
    this.load.image('star', 'assets/star.png');
    //texture for bombGroup
    this.load.image('bomb', 'assets/bomb.png');
    //spritesheet for the Player
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}
//add objects to the startGame
function create ()
{
    //  A simple background for our startGame
    this.add.image(400, 300, 'sky');

    //contains all the plat as one single unit allows Player, starGroup and bombGroup
    //to collide with them
    //  The plat group contains the ground and the 2 ledges we can jump on
    plat = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the startGame (the original sprite is 400x32 in size)
    //refreshBody() is required because there is now a scaled static physics body
    plat.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    plat.create(600, 400, 'ground');
    plat.create(50, 250, 'ground');
    plat.create(750, 220, 'ground');

    // The Player and its settings
    Player = this.physics.add.sprite(100, 450, 'dude');

    //  Player physics properties. Give the little guy a slight bounce.
    Player.setBounce(0.2);
    Player.setCollideWorldBounds(true);

    //  Our Player animations, turning, walking left and walking right.
    //sprite sheet contains animation frames
    //walking left animation
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    //turning left or right animation
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });
    //walking right animation
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    curs = this.input.keyboard.createCursorKeys();

    //create group of starGroup and populate it
    //  Some starGroup to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    starGroup = this.physics.add.group({
        key: 'star',
        //create number of starGroup
        repeat: 11,
        //set the position where the starGroup will spawn space from each other
        setXY: { x: 12, y: 0, stepX: 70 }
    });
    //dynamic physics group for the starGroup to move and bounce
    starGroup.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });
    //put bombGroup in a group
    bombGroup = this.physics.add.group();

    //  The scoreCOunter displayed on screen
    sText = this.add.text(16, 16, 'scoreCOunter: 0', { fontSize: '32px', fill: '#000' });

    //  Collide the Player, starGroup, and bombGroup with the plat
    this.physics.add.collider(Player, plat);
    this.physics.add.collider(starGroup, plat);
    this.physics.add.collider(bombGroup, plat);

    //  Checks to see if the Player overlaps with any of the starGroup, if he does call the collectAllStars function
    this.physics.add.overlap(Player, starGroup, collectAllStars, null, this);
//  Checks to see if the Player overlaps with any of the bombGroup, if he does call the doNotHitBomb function
    this.physics.add.collider(Player, bombGroup, doNotHitBomb, null, this);
}
//constantly running to update the startGame
function update ()
{
    if (youLose)
    {
        return;
    }
    //move left when left arrow key is pressed down
    if (curs.left.isDown)
    {
        Player.setVelocityX(-160);

        Player.anims.play('left', true);
    }
    //move right when right arrow key is pressed down
    else if (curs.right.isDown)
    {
        Player.setVelocityX(160);

        Player.anims.play('right', true);
    }
    //the time it takes to turn
    else
    {
        Player.setVelocityX(0);

        Player.anims.play('turn');
    }
    //how fast the Player will fall
    if (curs.up.isDown && Player.body.touching.down)
    {
        Player.setVelocityY(-330);
    }
}
//function to check for overlap between the Player and star
function collectAllStars (Player, star)
{
    //remove star from startGame if collision detected
    star.disableBody(true, true);

    //  Add and update the scoreCOunter 
    // when the Player collects a star
    scoreCOunter += 10;
    //display scoreCOunter in startGame
    sText.setText('Score: ' + scoreCOunter);
    //if Player collects all starGroup
    if (starGroup.countActive(true) === 0)
    {
        //  A new batch of starGroup to collect
        starGroup.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });
        //create bomb pick random x coordinate opposite side of the screen to the Player
        var x = (Player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        //spawn bomb
        var bomb = bombGroup.create(x, 16, 'bomb');

        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        //set random speed for bomb
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }
}
//function for when Player hits bomb
function doNotHitBomb (Player, bomb)
{
    //stop the startGame
    this.physics.pause();
    //turn Player red
    Player.setTint(0xff0000);
    //start turn animation
    Player.anims.play('turn');
    //the startGame is over you lose
    youLose = true;
}