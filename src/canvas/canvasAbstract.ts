import config from "../config";
import { images } from "../server/image";



export default abstract class CanvasAbstract {
  abstract render(): void
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
  }

  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  protected drawModels(num: number) {
    this.postitionCollection(num).forEach((position) => {
      this.canvas.drawImage(images.get('straw')!, position.x, position.y, config.model.width, config.model.height)
    })

  }

  /**
   * 获取随机不重复草地位置集合
   * @param num 草地数量
   * @returns { x: number, y: number }[]
   */
  protected postitionCollection(num: number) {
    const collections = [] as { x: number, y: number }[]
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position()
        const exists = collections.some(m => m.x == position.x && m.y == position.y)
        if (!exists) {
          collections.push(position);
          break;
        }
      }
    }

    return collections
  }

  protected position() {
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y: Math.floor(Math.random() * (config.canvas.height / config.model.height)) * config.model.height
    }
  }
}