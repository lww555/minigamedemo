import {Sprite} from "../base/Sprite.js";

export class BackGround extends Sprite{
    constructor(ctx,img) {
        super(ctx, img, 0, 0, img.width, img.height, 0, 0, window.innerWidth, window.innerHeight)
    }
}