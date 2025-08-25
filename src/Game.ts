import * as PIXI from 'pixi.js';
import { ZButton, ZContainer, ZScene, ZState } from 'zimporter-pixi';
import { ZSceneStack } from 'zimporter-pixi';
export class Game {

    stage: PIXI.Container;
    constructor(stage: PIXI.Container, forceRenderFnc: Function | null = null) {
        this.stage = stage;
        let loadPath = (window as any).loadPath || "./assets/scroll/";
        console.log("Game constructor " + loadPath);
        let scene: ZScene = new ZScene("testScene");
        scene.load(loadPath, () => {
            ZSceneStack.push(scene);
            scene.loadStage(this.stage);
            let sceneStage: ZContainer = scene.sceneStage;
            forceRenderFnc?.();
        });
    }

    spawnTemplate(x: number, y: number): void {
        let myTemplate: ZContainer = ZSceneStack.spawn("MyTemplate") as ZContainer;
        this.stage.addChild(myTemplate);
        let numbersHolder: ZState = myTemplate.get("numbersHolder") as ZState;
        let num: number = 1;
        numbersHolder.setState("num" + num);


        let myBTN: ZButton = myTemplate.get("myBTN") as ZButton;
        myBTN.setText("Click Me");
        myBTN.setCallback(() => {
            console.log("Button clicked!");
            num++;
            numbersHolder.setState("num" + num);
        });

    }


    update(deltaMS: number) {

    }

}