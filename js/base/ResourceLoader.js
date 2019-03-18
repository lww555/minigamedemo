// 资源文件记载器，确保图片加载完成之后在渲染
import {Resources} from  './Resources.js'
export class  ResourceLoader {
    map = null;
    constructor() {
        this.map = new Map(Resources)
        console.log(this.map)
        for (let [key,value] of this.map) {
            const image = new Image()
            image.src = value;
            this.map.set(key, image);
        }
    }
    onLoaded(callback) {
        let loadedCount = 0;
        for (let value of this.map.values()) {
            value.onload = () => {
                loadedCount++ ;
                if(loadedCount >= this.map.size) {
                    callback(this.map)
                }
            }
        }
    }

    static create() {
        return new ResourceLoader()
    }
}