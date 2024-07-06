import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import BulletCanvas from "../canvas/Bullet";
import { directionEnum } from "../enum/directionEnum";

export default class Bullet extends ModelAbstract implements IModel {
  canvas: ICanvas = BulletCanvas;
  name: string = 'bullet';

  constructor(public tank: IModel) {
    super(tank.width + tank.width / 2, tank.y + tank.y / 2)
    this.direction = tank.direction as unknown as directionEnum
  }

  image(): HTMLImageElement {
    return images.get('bullet')!
  }
  render(): void {
    super.draw()
  }

}