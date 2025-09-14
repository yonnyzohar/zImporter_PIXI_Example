import * as PIXI from 'pixi.js';
import { ZButton, ZContainer, ZScene, ZState } from 'zimporter-pixi';
import { ZSceneStack } from 'zimporter-pixi';
export class Game {

    stage: PIXI.Container;
    constructor(stage: PIXI.Container, forceRenderFnc: Function | null = null) {
        this.stage = stage;
        let loadPath = (window as any).loadPath || "./assets/zStudioTest/";
        console.log("Game constructor " + loadPath);
        let scene: ZScene = new ZScene("testScene");
        scene.load(loadPath, () => {
            ZSceneStack.push(scene);
            scene.loadStage(this.stage);
            let sceneStage: ZContainer = scene.sceneStage;
            forceRenderFnc?.();
        });
    }



    update(deltaMS: number) {

    }

}