import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import audio from "../server/audio";

export default abstract class ModelAbstract {
  abstract name: string
  abstract render(): void
  abstract image(): HTMLImageElement
  abstract canvas: ICanvas
  public direction: directionEnum = directionEnum.top
  public width = config.model.width
  public height = config.model.height
  constructor(public x: number, public y: number) {
    this.randomDirection()
  }

  // 获取随机方向
  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }

  protected draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height)
  }

  public destroy() {
    this.canvas.removeModel(this)
    this.canvas.renderModels()
  }

  protected blast(model: IModel) {
    if (model.name === "tank") {
      audio.blast();
    }

    Array(...Array(8).keys()).reduce((promise, index) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const img = new Image
          img.src = `/src/static/images/blasts/blast${index}.gif`
          img.onload = () => {
            this.canvas.ctx.drawImage(img, model.x, model.y, model.width, model.height)
            resolve(promise)
          }
        }, 100);
      })
    }, Promise.resolve())
  }
}