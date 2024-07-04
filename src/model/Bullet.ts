import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import BulletCanvas from "../canvas/Bullet";

export default class Bullet extends ModelAbstract implements IModel {
  canvas: ICanvas = BulletCanvas;
  name: string = 'bullet';
  image(): HTMLImageElement {
    return images.get('bullet')!
  }
  render(): void {
    super.draw()
  }

}