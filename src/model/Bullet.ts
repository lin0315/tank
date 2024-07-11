import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import BulletCanvas from "../canvas/Bullet";
import { directionEnum } from "../enum/directionEnum";
import { isCanvasTouch, isModelTouch } from "../util";
import Wall from "../canvas/Wall";

export default class Bullet extends ModelAbstract implements IModel {
  canvas: ICanvas = BulletCanvas;
  name: string = 'bullet';

  constructor(public tank: IModel) {
    super(tank.x + tank.width / 2, tank.y + tank.height / 2)
    this.direction = tank.direction as unknown as directionEnum
  }

  image(): HTMLImageElement {
    return images.get('bullet')!
  }
  render(): void {
    let x = this.x;
    let y = this.y;
    switch (this.direction) {
      case directionEnum.top:
        y -= 2;
        break;
      case directionEnum.right:
        x += 2;
        break;
      case directionEnum.bottom:
        y += 2;
        break;
      case directionEnum.left:
        x -= 2;
        break;
      default:
        break;
    }

    // 碰撞检测
    const touchModel = isModelTouch(x, y, 2, 2, [...Wall.models])
    if (isCanvasTouch(x, y, 2, 2)) {
      this.destroy()
    } else if (touchModel) {
      this.destroy()
      if (touchModel.name !== 'stell') touchModel.destroy()
      this.blast(touchModel)
    } else {
      this.x = x;
      this.y = y;
      this.draw()
    }
  }

  protected draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2)
  }


}