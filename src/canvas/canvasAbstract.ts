import config from "../config";
import Position from '../server/Postition'



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

  protected drawModels(num: number, model: ModelConstructor) {
    Position.getCollection(num).forEach((position) => {
      const instance = new model(this.canvas, position.x, position.y)
      instance.render()
    })

  }


}