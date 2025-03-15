import * as PIXI from 'pixi.js';
import { ZScene } from "zImporter_PIXI/ZScene";
import { ZSceneStack } from "zImporter_PIXI/ZSceneStack";
import { ZTimeline } from "zImporter_PIXI/ZTimeline";
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

            
            
        });
    }

    update(deltaMS: number) {
        
    }
    
}