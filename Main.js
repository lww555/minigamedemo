import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./js/Director.js";

export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.DataStore = DataStore.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map))

    }

    onResourceFirstLoaded(map) {
        this.DataStore.ctx = this.ctx;
        this.DataStore.res = map;
        this.init();
    }

    init() {
        this.DataStore.put('background', new BackGround(this.ctx, this.DataStore.res.get('background')))
        Director.getInstance().run()
    }
}