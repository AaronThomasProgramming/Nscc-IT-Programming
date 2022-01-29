class Scene1 extends BaseScene{

    constructor(){
        super("Level1");

        console.log("Finished child constructor for Scene 1");

    }

    preload(){
        
        //call the super pre load
        super.preload("mapLevel1","assets/tilemaps/Level1.json");

        //load level1 sound
        this.load.audio("audio_crowd", "assets/sounds/angry_crowd.mp3");
    }

    create(){
        //call the super create
        super.create("mapLevel1");

        //configure and start level 1 sound
        this.levelMusic = this.sound.add("audio_crowd");

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
        super.kingEscapes("Level2");
    }
    
}