import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import WaterCanvas from "../canvas/Water";

export default class Water extends ModelAbstract implements IModel {
  canvas: ICanvas = WaterCanvas;
  name: string = 'water';
  image(): HTMLImageElement {
    return images.get('water')!;
  }
  render(): void {
    super.draw()
  }
}