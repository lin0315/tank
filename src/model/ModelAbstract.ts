import config from "../config";
import { directionEnum } from "../enum/directionEnum";

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
}