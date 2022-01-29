// //IIFE - script at bottom
// (function(){
//     //put our code here - safe from global context

//     //set up our game config
//     let config = {
//         type: Phaser.AUTO,
//         width: 800,
//         height: 600,
//         backgroundColor: "2d2d2d",
//         parent: "palace-revolt",
//         pixelArt: true,
//         physics: {
//             default: "matter",
//             matter: {
//                 gravity: { y: 0},
//                 debug: true
//             }
//         },
//         scene: {
//             preload: preload,
//             create: create,
//             update: update
//         }
//     };

//     let game = new Phaser.Game(config);

//     //global var for king next idle position
//     let nextKingIdle = "king-idle-back";

//     function preload(){
//         //preload all the tile sets
//         this.load.image('dungeon_barrels','assets/tilesets/Barrels/Barrels.png');
//         this.load.image('dungeon_bookcases','assets/tilesets/Bookcases/Bookcases.png');
//         this.load.image('dungeon_carpets','assets/tilesets/Carpets/Carpets.png');
//         this.load.image('dungeon_columns','assets/tilesets/Columns/Columns.png');
//         this.load.image('dungeon_floors','assets/tilesets/Floors/Floors.png');
//         this.load.image('dungeon_props','assets/tilesets/Props/Props.png');
//         this.load.image('dungeon_stairs','assets/tilesets/Stairs/Stairs.png');
//         this.load.image('dungeon_walls','assets/tilesets/Walls/Walls.png');

//         //preload the map
//         this.load.tilemapTiledJSON('map','assets/tilemaps/Level1.json');

//         //preload the character spritesheet
//         this.load.multiatlas('character_sprites','assets/spritesheets/characters/Characters.json',
//             'assets/spritesheets/characters');
//     }
//     function create(){
//         //create the map
//         const map = this.add.tilemap("map");
//         //add the tilesets to the map - not using columns and stairs at present
//         const tileset1 = map.addTilesetImage("Barrels","dungeon_barrels");
//         const tileset2 = map.addTilesetImage("Bookcases","dungeon_bookcases");
//         const tileset3 = map.addTilesetImage("Carpets","dungeon_carpets");
//         const tileset4 = map.addTilesetImage("Floors","dungeon_floors");
//         const tileset5 = map.addTilesetImage("Props","dungeon_props");
//         const tileset6 = map.addTilesetImage("Walls","dungeon_walls");

//         //add the map layers to the scene
//         const floorLayer = map.createLayer("Floors",[tileset4],0,0);
//         const carpetLayer = map.createLayer("Carpets",[tileset3],0,0);
//         const foundationLayer = map.createLayer("Foundations",[tileset6],0,0);
//         const propLayer = map.createLayer("Props",[tileset5],0,0);
//         const bookcaseLayer = map.createLayer("Bookcases",[tileset2],0,0);
//         const barrelLayer = map.createLayer("Barrels",[tileset1],0,0);

//         //set the camera's start position so we are in the map -- now camera is centered on King
//         // this.cameras.main.scrollX = 600;
//         // this.cameras.main.scrollY = 600;

//         //turn on the cursor keys so we can pan around the map
//         this.cursors = this.input.keyboard.createCursorKeys();

//         //create the king sprite and scale up the king
//         this.king = this.matter.add.sprite(400, 1300, 'character_sprites', 'king-back-0.png');
//         this.king.setScale(2);

//         //set the camera to follow the king and stay within the map
//         this.cameras.main.setBounds(-(map.widthInPixels / 2), 0, 
//             map.widthInPixels + 265, map.heightInPixels + 256);
//         this.cameras.main.startFollow(this.king);

//         //add the king animations when moving
//         this.anims.create({
//             key: 'king-walk-up',
//             frames: this.anims.generateFrameNames('character-sprites',{
//                 prefix: 'king-back-',
//                 suffix: '.png',
//                 start: 0,
//                 end: 2
//             }),
//             frameRate: 10,
//             repeat: -1
//         });
//         this.anims.create({
//             key: 'king-walk-down',
//             frames: this.anims.generateFrameNames('character-sprites',{
//                 prefix: 'king-front-',
//                 suffix: '.png',
//                 start: 0,
//                 end: 2
//             }),
//             frameRate: 10,
//             repeat: -1
//         });
//         this.anims.create({
//             key: 'king-walk-left',
//             frames: this.anims.generateFrameNames('character-sprites',{
//                 prefix: 'king-left-',
//                 suffix: '.png',
//                 start: 0,
//                 end: 2
//             }),
//             frameRate: 10,
//             repeat: -1
//         });
//         this.anims.create({
//             key: 'king-walk-right',
//             frames: this.anims.generateFrameNames('character-sprites',{
//                 prefix: 'king-right-',
//                 suffix: '.png',
//                 start: 0,
//                 end: 2
//             }),
//             frameRate: 10,
//             repeat: -1
//         });

//         //king standing still animations
//         this.anims.create({
//             key: 'king-idle-front',
//             frames: [{
//                 key: 'character-sprites',
//                 frame: 'king-front-0.png'
//             }]
//         });
//         this.anims.create({
//             key: 'king-idle-back',
//             frames: [{
//                 key: 'character-sprites',
//                 frame: 'king-back-0.png'
//             }]
//         });
//         this.anims.create({
//             key: 'king-idle-left',
//             frames: [{
//                 key: 'character-sprites',
//                 frame: 'king-left-0.png'
//             }]
//         });
//         this.anims.create({
//             key: 'king-idle-right',
//             frames: [{
//                 key: 'character-sprites',
//                 frame: 'king-right-0.png'
//             }]
//         });
        
//     }
//     function update(){
//         if(this.cursors.up.isDown)//north
//         {
//             this.king.setVelocityY(-10);
//             this.king.setVelocityX(0);
//             this.king.play('king-walk-up', true);
//             nextKingIdle = 'king-idle-back';
//         }
//         else if(this.cursors.down.isDown)//south
//         {
//             this.king.setVelocityY(10);
//             this.king.setVelocityX(0);
//             this.king.play('king-walk-down', true);
//             nextKingIdle = 'king-idle-front';
//         }
//         else if(this.cursors.right.isDown)//east
//         {
//             this.king.setVelocityY(0);
//             this.king.setVelocityX(10);
//             this.king.play('king-walk-right', true);
//             nextKingIdle = 'king-idle-right';
//         }
//         else if(this.cursors.left.isDown)//west
//         {
//             this.king.setVelocityY(0);
//             this.king.setVelocityX(-10);
//             this.king.play('king-walk-left', true);
//             nextKingIdle = 'king-idle-left';
//         }
//         else// the king is standiong still so next idle animation
//         {
//             this.king.setVelocityY(0);
//             this.king.setVelocityX(0);
//             this.king.play(nextKingIdle, true);
//         }
        

//     }


// })();






//IIFE - script at bottom
(function(){
    //put our code here - safe from global context

    //set up our game config
    let config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        backgroundColor: "2d2d2d",
        parent: "palace-revolt",
        pixelArt: true,
        physics: {
            default: "matter",
            matter: {
                gravity: { y: 0},
                debug: true
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    let game = new Phaser.Game(config);

    function preload(){
        //preload all the tile sets
        this.load.image('dungeon_barrels','assets/tilesets/Barrels/Barrels.png');
        this.load.image('dungeon_bookcases','assets/tilesets/Bookcases/Bookcases.png');
        this.load.image('dungeon_carpets','assets/tilesets/Carpets/Carpets.png');
        this.load.image('dungeon_columns','assets/tilesets/Columns/Columns.png');
        this.load.image('dungeon_floors','assets/tilesets/Floors/Floors.png');
        this.load.image('dungeon_props','assets/tilesets/Props/Props.png');
        this.load.image('dungeon_stairs','assets/tilesets/Stairs/Stairs.png');
        this.load.image('dungeon_walls','assets/tilesets/Walls/Walls.png');

        //preload the map
        this.load.tilemapTiledJSON('map','assets/tilemaps/Level1.json');
    }
    function create(){
        //create the map
        const map = this.add.tilemap("map");
        //add the tilesets to the map - not using columns and stairs at present
        const tileset1 = map.addTilesetImage("Barrels","dungeon_barrels");
        const tileset2 = map.addTilesetImage("Bookcases","dungeon_bookcases");
        const tileset3 = map.addTilesetImage("Carpets","dungeon_carpets");
        const tileset4 = map.addTilesetImage("Floors","dungeon_floors");
        const tileset5 = map.addTilesetImage("Props","dungeon_props");
        const tileset6 = map.addTilesetImage("Walls","dungeon_walls");

        //add the map layers to the scene
        const floorLayer = map.createLayer("Floors",[tileset4],0,0);
        const carpetLayer = map.createLayer("Carpets",[tileset3],0,0);
        const foundationLayer = map.createLayer("Foundations",[tileset6],0,0);
        const propLayer = map.createLayer("Props",[tileset5],0,0);
        const bookcaseLayer = map.createLayer("Bookcases",[tileset2],0,0);
        const barrelLayer = map.createLayer("Barrels",[tileset1],0,0);

        //set the camera's start position so we are in the map
        this.cameras.main.scrollX = 600;
        this.cameras.main.scrollY = 600;

        //turn on the cursor keys so we can pan around the map
        this.cursors = this.input.keyboard.createCursorKeys();
        
    }
    function update(){
        if(this.cursors.up.isDown)// North Direction
        {
            this.cameras.main.scrollY -= 10;
        }
        else if(this.cursors.down.isDown)// South Direction
        {
            this.cameras.main.scrollY += 10;
        }
        else if(this.cursors.right.isDown)// East Direction
        {
            this.cameras.main.scrollX += 10;
        }
        else if(this.cursors.left.isDown)// West Direction
        {
            this.cameras.main.scrollX -= 10;
        }
        

    }


})();