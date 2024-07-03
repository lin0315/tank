import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import SteelCanvas from "../canvas/Steel";

export default class Steel extends ModelAbstract implements IModel {
  canvas: ICanvas = SteelCanvas;;
  name: string = "stell";
  image(): HTMLImageElement {
    return images.get('steel')!
  }
  render(): void {
    super.draw()
  }
}