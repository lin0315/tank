import _ from 'lodash'
import { directionEnum } from "../enum/directionEnum";
import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import config from '../config';
import TankCanvas from '../canvas/Tank';
import { isCanvasTouch, isModelTouch } from '../util';


export default class Tank extends ModelAbstract implements IModel {
  canvas: ICanvas = TankCanvas;
  name: string = 'tank'

  render(): void {
    this.move()
    if (_.random(20) == 1) this.direction = directionEnum.bottom;
  }

  protected move(): void {
    while (true) {
      let x = this.x;
      let y = this.y;
      switch (this.direction) {
        case directionEnum.top:
          y--;
          break;
        case directionEnum.right:
          x++;
          break;
        case directionEnum.bottom:
          y++;
          break;
        case directionEnum.left:
          x--;
          break;
        default:
          break;
      }
      if (isModelTouch(x, y) || isCanvasTouch(x, y)) {
        this.randomDirection()
      } else {
        this.x = x;
        this.y = y;
        break;
      }
    }
    super.draw()
  }




  image() {
    let direction = this.name + _.upperFirst(this.direction)
    return images.get(direction as keyof typeof config.images)!
  }

}