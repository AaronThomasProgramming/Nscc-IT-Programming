class Scene1 extends BaseScene{

    constructor(){
        super("Level1");

        console.log("Finished child constructor for Scene 1");

    }

    preload(){
        
        //call the super pre load
        super.preload("mapLevel1","assets/tilemaps/Level1.json");
    }

    create(){
        //call the super create
        super.create("mapLevel1");
    }
    
    update(){
        //call the super update
        super.update();
    }

    kingEscapes(){
        //cal super king escapes
        super.kingEscapes("Level2");
    }
    
}