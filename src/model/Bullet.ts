import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import BulletCanvas from "../canvas/Bullet";
import { directionEnum } from "../enum/directionEnum";
import { isCanvasTouch, isModelTouch } from "../util";
import Wall from "../canvas/Wall";
import Boss from "../canvas/Boss";

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
    let step = this.tank.name === "play" ? 10 : 5
    switch (this.direction) {
      case directionEnum.top:
        y -= step;
        break;
      case directionEnum.right:
        x += step;
        break;
      case directionEnum.bottom:
        y += step;
        break;
      case directionEnum.left:
        x -= step;
        break;
      default:
        break;
    }

    // 碰撞检测
    const touchModel = isModelTouch(x, y, 2, 2, [...Wall.models, ...Boss.models])
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