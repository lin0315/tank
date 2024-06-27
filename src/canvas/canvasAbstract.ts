import config from "../config";
import Position from '../server/Postition'

export default abstract class CanvasAbstract {
  private models: IModel[] = []
  abstract num(): number
  abstract model(): ModelConstructor
  abstract render(): void
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
  }

  // 创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  // 生产模型实例
  protected createModels() {
    Position.getCollection(this.num()).forEach((position) => {
      const model = this.model()
      const instance = new model(this.canvas, position.x, position.y)
      this.models.push(instance)
    })
  }


  // 渲染模型到画布
  protected renderModels() {
    this.models.forEach(model => model.render())
  }


}