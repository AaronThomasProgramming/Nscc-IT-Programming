const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  heigth: 640,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
    },
  }
};

const game = new Phaser.Game(config);

function preload() {
  //add the background image separately
  this.load.image('bg', 'assets/images/background.png');
  // Load the tileImages image file, for the tileMap
  this.load.image('tileMap', 'assets/tilesets/platformPack_tilesheet.png');
  // load the Spike image separately for Phaser 3 to render it
  this.load.image('spikeImage', 'assets/images/spike.png');
  // Load the export Tiled JSON
  this.load.tilemapTiledJSON('tileMap', 'assets/tilemaps/level1.json');
  // Load thePlayer animations from the thePlayer spritesheet and atlas JSON
  this.load.atlas('thePlayer', 'assets/images/kenney_player.png',
    'assets/images/kenney_player_atlas.json');
}

function create() {
  // Create a tileMap, which is used to bring our level to Phaser
  const tileMap = this.make.tilemap({ key: 'tileMap' });
  // Add the tileImages to the tileMap
  const tileImages = tileMap.addTilesetImage('kenney_simple_platformer', 'tileMap');
  // Place the background image
  const tileBackgroundImage = this.add.image(0, 0, 'bg').setOrigin(0, 0);
  // Scale the image to better match our game's resolution
  tileBackgroundImage.setScale(2, 0.8);
  // Add the platform layer as a static group, the thePlayer would be able
  // to jumpFrame on tilePlatforms
  const tilePlatforms = tileMap.createStaticLayer('Platforms', tileImages, 0, 200);
  //players to collide with all tilePlatforms set collisions for every tile 
  //in our platform layer whose index isn't -1.
  tilePlatforms.setCollisionByExclusion(-1, true);

  // Add the thePlayer to the game world
  this.thePlayer = this.physics.add.sprite(50, 300, 'thePlayer');
  // our thePlayer will bounce from tiles
  this.thePlayer.setBounce(0.1);
  // don't go out of the tileMap
  this.thePlayer.setCollideWorldBounds(true);
  //player collides with tile platforms
  this.physics.add.collider(this.thePlayer, tilePlatforms);

  // Create the walking animation using the last 2 frames
  this.anims.create({
    key: 'walkPlayer',
    frames: this.anims.generateFrameNames('thePlayer', {
      prefix: 'robo_player_',
      start: 2,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1
  });

  // Create an idleFrame animation with the first frame
  this.anims.create({
    key: 'idleFrame',
    frames: [{ key: 'thePlayer', frame: 'robo_player_0' }],
    frameRate: 10,
  });

  // Use the second frame of the atlas for jumping
  this.anims.create({
    key: 'jumpFrame',
    frames: [{ key: 'thePlayer', frame: 'robo_player_1' }],
    frameRate: 10,
  });

  // Enable user input via cursor keys
  this.cursorKeys = this.input.keyboard.createCursorKeys();

  // Create a sprite group for all spikeGroup,
  // set sprites in the group so they don't move via gravity or by thePlayer collisions
  this.spikeGroup = this.physics.add.group({
    allowGravity: false,
    immovable: true
  });

  // Get the spikeGroup from the object layer of our Tiled tileMap.
  const spikeObjects = tileMap.getObjectLayer('Spikes')['objects'];
  spikeObjects.forEach(spikeObject => {
    // Add new spikeGroup to our sprite group
    const dangerSpikes = this.spikeGroup.create(spikeObject.x, spikeObject.y + 200 - spikeObject.height, 'spikeImage').setOrigin(0, 0);
    // resize the sprite to reduce the amount of whitespace used by the sprite
    dangerSpikes.body.setSize(dangerSpikes.width, dangerSpikes.height - 20).setOffset(0, 20);
  });

  // Add collision between the thePlayer and the spikeGroup
  this.physics.add.collider(this.thePlayer, this.spikeGroup, spikesHitPlayers, null, this);
}

function update() {
  // Control the thePlayer with left keys
  if (this.cursorKeys.left.isDown) {
    this.thePlayer.setVelocityX(-200);
    if (this.thePlayer.body.onFloor()) {
      this.thePlayer.play('walkPlayer', true);
    }
    // Control the thePlayer with right keys
  } else if (this.cursorKeys.right.isDown) {
    this.thePlayer.setVelocityX(200);
    if (this.thePlayer.body.onFloor()) {
      this.thePlayer.play('walkPlayer', true);
    }
  } else {
    // If no keys are pressed, the thePlayer keeps still
    this.thePlayer.setVelocityX(0);
    // Only show the idleFrame animation if the thePlayer is on the floor and not moving
    if (this.thePlayer.body.onFloor()) {
      this.thePlayer.play('idleFrame', true);
    }
  }

  //player can jump in any direction with up key or space bar
  if ((this.cursorKeys.space.isDown || this.cursorKeys.up.isDown) && this.thePlayer.body.onFloor()) {
    this.thePlayer.setVelocityY(-350);
    this.thePlayer.play('jumpFrame', true);
  }

  // If the thePlayer is moving to the right, keep them facing forward
  if (this.thePlayer.body.velocity.x > 0) {
    this.thePlayer.setFlipX(false);
  } else if (this.thePlayer.body.velocity.x < 0) {
    // otherwise, make them face the other side
    this.thePlayer.setFlipX(true);
  }
}

/**
 resets the thePlayer's when it hits a spike 
 * @param {*} thePlayer - thePlayer sprite
 * @param {*} spike - spike thePlayer collided with
 */
function spikesHitPlayers(thePlayer, spike) {
  // Set velocity back to 0
  thePlayer.setVelocity(0, 0);
  // Put the thePlayer back in its starting position
  thePlayer.setX(50);
  thePlayer.setY(300);
  // Use `idleFrame` animation
  thePlayer.play('idleFrame', true);
  // Set the alpha to 0 to hide the thePlayer
  thePlayer.setAlpha(0);
  // Add a tween that 'blinks' until the thePlayer alpha is set to 1
  let tw = this.tweens.add({
    targets: thePlayer,
    alpha: 1,
    duration: 100,
    ease: 'Linear',
    repeat: 5,
  });
}
