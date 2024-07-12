import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import BossCanvas from "../canvas/Boss";

export default class Boss extends ModelAbstract implements IModel {
  canvas: ICanvas = BossCanvas;
  name: string = 'boss';
  image(): HTMLImageElement {
    return images.get('boss')!
  }
  render(): void {
    super.draw()
  }

}