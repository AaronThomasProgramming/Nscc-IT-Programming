class Scene2 extends BaseScene{

    constructor(){
        super("Level2");

        console.log("Finished child constructor for Scene 2");

    }

    preload(){
        
        //call the super pre load
        super.preload("mapLevel2","assets/tilemaps/Level2.json");
    }

    create(){
        //call the super create
        super.create("mapLevel2");
    }
    
    update(){
        //call the super update
        super.update();
    }
    kingEscapes(){
        //cal super king escapes
        super.kingEscapes(null);
    }
    
}