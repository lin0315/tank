import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import SteelCanvas from "../canvas/Steel";

export default class Straw extends ModelAbstract implements IModel {
  canvas: ICanvas = SteelCanvas;
  name: string = 'straw';
  image(): HTMLImageElement {
    return images.get('straw')!
  }
  render(): void {
    super.draw()
  }

}