import * as PIXI from 'pixi.js';
import { ZContainer, ZScene, ZSceneStack, ZTimeline } from "zImporter_PIXI";

//https://gamesupply.itch.io/fruits-and-vegetables
export class Game{
    
    stage: PIXI.Container;
    constructor(stage: PIXI.Container){
        this.stage = stage;

        let scene:ZScene = new ZScene();
        scene.load("./assets/robo/",()=>{
            ZSceneStack.push(scene);

            let robots:string[] = ["RobotHurt","RobotPuncher","RobotStander","RobotWalker","RobotWalkShotGun","RobotHurtShotGun","RobotFireShotGun"];
            let posX = 100;
            robots.forEach((robot)=>{
                let walker = ZSceneStack.spawn(robot) as ZTimeline;
                stage.addChild(walker);
                walker.x = posX;
                walker.y = 200;
                walker.play();
                posX+=100;
            });

            let scene1:ZScene = new ZScene();
            scene1.load("./assets/yonny/",()=>{
                ZSceneStack.push(scene1);
                let c:ZContainer = ZSceneStack.spawn("TextItemTemplate") as ZContainer;
                stage.addChild(c);
                c.x = this.stage.width/2;
                c.y = this.stage.height/2;
            }); 
        });

          
    }

    update(deltaMS: number) {
        
    }
    
}