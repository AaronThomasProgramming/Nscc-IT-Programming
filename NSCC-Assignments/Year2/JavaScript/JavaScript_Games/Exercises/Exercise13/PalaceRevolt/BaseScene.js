class BaseScene extends Phaser.Scene{

    //static var for game pasued boolean
    static gamePaused = false;

    //static var for checking if character sprites already preloaded
    static charactersLoaded = false;

    constructor(sceneName){

        super(sceneName);

        // var for king next idle position
        this.nextKingIdle = "king-idle-back";

        console.log("Finished parent constructor for Base Scene");

    }

    preload(mapKey, mapFile){
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
        this.load.tilemapTiledJSON(mapKey, mapFile);

        //preload the character spritesheet if not already loaded
        if(!BaseScene.charactersLoaded)
        {
            this.load.multiatlas('character_sprites','assets/spritesheets/characters/Characters.json',
            'assets/spritesheets/characters');
            BaseScene.charactersLoaded = true;

        }
    }

    create(mapKey){
        //create the map
        const map = this.add.tilemap(mapKey);
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

        //set the camera's start position so we are in the map -- now camera is centered on King
        // this.cameras.main.scrollX = 600;
        // this.cameras.main.scrollY = 600;

        //turn on the cursor keys so we can pan around the map
        this.cursors = this.input.keyboard.createCursorKeys();

        //create the king sprite and scale up the king
        this.king = this.matter.add.sprite(400, 1300, 'character_sprites', 'king-back-0.png');
        this.king.setName("king");
        this.king.setScale(2);

        //set my king to not get rotated by collision with collision zones
        this.king.setBounce(0.2);
        this.king.setFixedRotation();

        //set the camera to follow the king and stay within the map
        // this.cameras.main.setBounds(-(map.widthInPixels / 2), 0, 
        //     map.widthInPixels + 265, map.heightInPixels + 256);
        this.cameras.main.startFollow(this.king);

        //WOULD HAVE BEEN GREATE IF THIS WORKED AS MATTE+PAHSER+TILED
        //ALL GET THEIR ISOMETRIC ACT TOGETHER
        //BUT IN ISOMETRIEC ALL X AND Y POSITIONS OF COLLISION ZONES ARE NaN
        // foundationLayer.setCollisionbyProperty( {collides: true});
        // this.matter.world.convertTilemapLayer(foundationLayer);

        let matterInstance = this.matter;

        //manually add colision zones for foundations layer
        foundationLayer.forEachTile(function(tile){
            let tileWorldPos = foundationLayer.tileToWorldXY(tile.x,tile.y);
            let collisionGroup = tileset6.getTileCollisionGroup(tile.index);

            if(!collisionGroup || collisionGroup.objects.length === 0)
            {
                return;
            }
            collisionGroup.objects.forEach(function(collisionItem){
                if(collisionItem.rectangle)
                {
                    let objectX = tileWorldPos.x + collisionItem.x + collisionItem.width /2;
                    let objectY = tileWorldPos.y + collisionItem.y + collisionItem.height /2;

                    let tmpSprite = matterInstance.add.sprite(objectX,objectY,"__DEFAULT");

                    //scale sprite and set immovale
                    tmpSprite.setStatic(true);
                    tmpSprite.setDisplaySize(collisionItem.width, collisionItem.height);

                    //check if the current collision zone is the escape point for this level
                    if(collisionItem.properties && collisionItem.properties.length > 0)
                    {
                        tmpSprite.setName(collisionItem.properties[0].name)
                    }
                }
                else
                {
                    console.log("unsupported collision item shape!")
                }
            });
        });

        //manually add colision zones for props layer
        propLayer.forEachTile(function(tile){
            let tileWorldPos = propLayer.tileToWorldXY(tile.x,tile.y);
            let collisionGroup = tileset5.getTileCollisionGroup(tile.index);

            if(!collisionGroup || collisionGroup.objects.length === 0)
            {
                return;
            }
            collisionGroup.objects.forEach(function(collisionItem){
                if(collisionItem.rectangle)
                {
                    let objectX = tileWorldPos.x + collisionItem.x + collisionItem.width /2;
                    let objectY = tileWorldPos.y + collisionItem.y + collisionItem.height /2;

                    let tmpSprite = matterInstance.add.sprite(objectX,objectY,"__DEFAULT");

                    //scale sprite and set immovale
                    tmpSprite.setStatic(true);
                    tmpSprite.setDisplaySize(collisionItem.width, collisionItem.height);
                }
                else
                {
                    console.log("unsupported collision item shape!")
                }
            });
        });

        //manually add colision zones for barrel layer
        barrelLayer.forEachTile(function(tile){
            let tileWorldPos = barrelLayer.tileToWorldXY(tile.x,tile.y);
            let collisionGroup = tileset1.getTileCollisionGroup(tile.index);

            if(!collisionGroup || collisionGroup.objects.length === 0)
            {
                return;
            }
            collisionGroup.objects.forEach(function(collisionItem){
                if(collisionItem.rectangle)
                {
                    let objectX = tileWorldPos.x + collisionItem.x + collisionItem.width /2;
                    let objectY = tileWorldPos.y + collisionItem.y + collisionItem.height /2;

                    let tmpSprite = matterInstance.add.sprite(objectX,objectY,"__DEFAULT");

                    //scale sprite and set immovale
                    tmpSprite.setStatic(true);
                    tmpSprite.setDisplaySize(collisionItem.width, collisionItem.height);
                }
                else
                {
                    console.log("unsupported collision item shape!")
                }
            });
        });

        //manually add colision zones for bookcase layer
        bookcaseLayer.forEachTile(function(tile){
            let tileWorldPos = bookcaseLayer.tileToWorldXY(tile.x,tile.y);
            let collisionGroup = tileset2.getTileCollisionGroup(tile.index);

            if(!collisionGroup || collisionGroup.objects.length === 0)
            {
                return;
            }
            collisionGroup.objects.forEach(function(collisionItem){
                if(collisionItem.rectangle)
                {
                    let objectX = tileWorldPos.x + collisionItem.x + collisionItem.width /2;
                    let objectY = tileWorldPos.y + collisionItem.y + collisionItem.height /2;

                    let tmpSprite = matterInstance.add.sprite(objectX,objectY,"__DEFAULT");

                    //scale sprite and set immovale
                    tmpSprite.setStatic(true);
                    tmpSprite.setDisplaySize(collisionItem.width, collisionItem.height);
                }
                else
                {
                    console.log("unsupported collision item shape!")
                }
            });
        });

        //add the king animations when moving
        this.anims.create({
            key: 'king-walk-up',
            frames: this.anims.generateFrameNames('character_sprites',{
                prefix: 'king-back-',
                suffix: '.png',
                start: 0,
                end: 2
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'king-walk-down',
            frames: this.anims.generateFrameNames('character_sprites',{
                prefix: 'king-front-',
                suffix: '.png',
                start: 0,
                end: 2
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'king-walk-left',
            frames: this.anims.generateFrameNames('character_sprites',{
                prefix: 'king-left-',
                suffix: '.png',
                start: 0,
                end: 2
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'king-walk-right',
            frames: this.anims.generateFrameNames('character_sprites',{
                prefix: 'king-right-',
                suffix: '.png',
                start: 0,
                end: 2
            }),
            frameRate: 10,
            repeat: -1
        });

        //king standing still animations
        this.anims.create({
            key: 'king-idle-front',
            frames: [{
                key: 'character_sprites',
                frame: 'king-front-0.png'
            }]
        });
        this.anims.create({
            key: 'king-idle-back',
            frames: [{
                key: 'character_sprites',
                frame: 'king-back-0.png'
            }]
        });
        this.anims.create({
            key: 'king-idle-left',
            frames: [{
                key: 'character_sprites',
                frame: 'king-left-0.png'
            }]
        });
        this.anims.create({
            key: 'king-idle-right',
            frames: [{
                key: 'character_sprites',
                frame: 'king-right-0.png'
            }]
        });

        //handle matter collision types
        this.matter.world.on("collisionstart", (event, bodyA, bodyB) => {

            //see if this is collision between king and escapePoint
            if(bodyA.gameObject.name === "king" && bodyB.gameObject.name === "escapePoint"||
                bodyA.gameObject.name === "escapePoint" && bodyB.gameObject.name === "king")
            {
                //console.log("The king has escaped through the escape point!");
                this.kingEscapes();
            }
        });

        //handle matter pasue event
        this.matter.world.on("pause",() => {
            console.log("Game Paused");
            BaseScene.gamePaused = true;
        })
        
    }
    
    update(){
        if(!BaseScene.gamePaused)
        {

            //letds add in diagonal movement
            if(this.cursors.up.isDown && this.cursors.right.isDown)//northeast
            {
                this.king.setVelocityY(-5);
                this.king.setVelocityX(10);
                this.king.play('king-walk-right', true);
                this.nextKingIdle = 'king-idle-right';
            }
            else if(this.cursors.down.isDown && this.cursors.right.isDown)//southeast
            {
                this.king.setVelocityY(5);
                this.king.setVelocityX(10);
                this.king.play('king-walk-right', true);
                this.nextKingIdle = 'king-idle-right';
            }
            else if(this.cursors.up.isDown && this.cursors.left.isDown)//northeast
            {
                this.king.setVelocityY(-5);
                this.king.setVelocityX(-10);
                this.king.play('king-walk-left', true);
                this.nextKingIdle = 'king-idle-left';
            }
            else if(this.cursors.down.isDown && this.cursors.left.isDown)//southwest
            {
                this.king.setVelocityY(5);
                this.king.setVelocityX(-10);
                this.king.play('king-walk-left', true);
                this.nextKingIdle = 'king-idle-left';
            }

            else if(this.cursors.up.isDown)//north
            {
                this.king.setVelocityY(-10);
                this.king.setVelocityX(0);
                this.king.play('king-walk-up', true);
                this.nextKingIdle = 'king-idle-back';
            }
            else if(this.cursors.down.isDown)//south
            {
                this.king.setVelocityY(10);
                this.king.setVelocityX(0);
                this.king.play('king-walk-down', true);
                this.nextKingIdle = 'king-idle-front';
            }
            else if(this.cursors.right.isDown)//east
            {
                this.king.setVelocityY(0);
                this.king.setVelocityX(10);
                this.king.play('king-walk-right', true);
                this.nextKingIdle = 'king-idle-right';
            }
            else if(this.cursors.left.isDown)//west
            {
                this.king.setVelocityY(0);
                this.king.setVelocityX(-10);
                this.king.play('king-walk-left', true);
                this.nextKingIdle = 'king-idle-left';
            }
            else// the king is standiong still so next idle animation
            {
                this.king.setVelocityY(0);
                this.king.setVelocityX(0);
                this.king.play(this.nextKingIdle, true);
            }
        
        }//end of not paused condition
    }
        //this function will be called wehen the kings escpaes the current level
    kingEscapes(nextLevel)
    {
        if(nextLevel === null)
        {
            console.log("Game Over");
            //pause the matter physics engine
            this.matter.world.pause();

            //set the king's tint to red and stop the king animation
            this.king.setTint(0xff0000);
            this.king.play(this.nextKingIdle, true);
        }
        else
        {
        //load next scene of passed in, if null end the game
        console.log("King escaped to: " + nextLevel)

        //pause the matter physics engine
        this.scene.start(nextLevel);

        }

    }
    
}