import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import StrawCanvas from "../canvas/Straw";

export default class Straw extends ModelAbstract implements IModel {
  canvas: ICanvas = StrawCanvas;
  name: string = 'straw';
  image(): HTMLImageElement {
    return images.get('straw')!
  }
  render(): void {
    super.draw()
  }

}