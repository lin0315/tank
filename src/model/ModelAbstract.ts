import config from "../config";
import { images } from "../server/image";

export default abstract class ModelAbstract {
  abstract render(): void
  constructor(protected canvas: CanvasRenderingContext2D, protected x: number, protected y: number) {
  }

  draw() {
    this.canvas.drawImage(images.get('straw')!, this.x, this.y, config.model.width, config.model.height)
  }
}