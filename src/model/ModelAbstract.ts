import config from "../config";
import { directionEnum } from "../enum/directionEnum";

export default abstract class ModelAbstract {
  abstract name: string
  abstract render(): void
  abstract image(): HTMLImageElement
  protected direction: directionEnum = directionEnum.top
  public width = config.model.width
  public height = config.model.height
  constructor(protected canvas: CanvasRenderingContext2D, public x: number, public y: number) {
    this.randomDirection()
  }

  // 获取随机方向
  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }

  protected draw() {
    this.canvas.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height)
  }
}