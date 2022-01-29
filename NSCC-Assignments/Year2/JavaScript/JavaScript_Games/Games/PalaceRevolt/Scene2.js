class Scene2 extends BaseScene{

    constructor(){
        super("Level2");

        console.log("Finished child constructor for Scene 2");

    }

    preload(){
        
        //call the super pre load
        super.preload("mapLevel2","assets/tilemaps/Level2.json");

        //load level1 sound
        this.load.audio("audio_chipmunk", "assets/sounds/angry_chipmunk.mp3");
    }

    create(){
        //call the super create
        super.create("mapLevel2");

        //configure and start level 2 sound
        this.levelMusic = this.sound.add("audio_chipmunk");

        let musicCOnfig = {
            mute: false,
            volume: 0.2,
            rate: 1,
            detune: 0,
            loop: true,
            delay: 0
        };

        //start the level sound
        this.levelMusic.play(musicCOnfig);
    }
    
    update(){
        //call the super update
        super.update();
    }
    kingEscapes(){
        //stop level sound
        this.levelMusic.stop();

        //cal super king escapes
        super.kingEscapes(null);
    }
    
}