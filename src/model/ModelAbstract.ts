import config from "../config";

export default abstract class ModelAbstract {
  abstract render(): void
  constructor(protected canvas: CanvasRenderingContext2D, protected x: number, protected y: number) {
  }

  draw(img: HTMLImageElement) {
    this.canvas.drawImage(img, this.x, this.y, config.model.width, config.model.height)
  }
}