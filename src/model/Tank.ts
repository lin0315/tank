import _ from 'lodash'
import { directionEnum } from "../enum/directionEnum";
import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import config from '../config';
import Water from '../canvas/Water';
import Wall from '../canvas/Wall';
import Steel from '../canvas/Steel';
import TankCanvas from '../canvas/Tank';


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
      if (this.isTouch(x, y)) {
        this.randomDirection()
      } else {
        this.x = x;
        this.y = y;
        break;
      }
    }
    super.draw()
  }

  protected isTouch(x: number, y: number): boolean {
    if (
      x < 0 ||
      x + this.width > config.canvas.width ||
      y < 0 ||
      y + this.height > config.canvas.height
    ) return true

    const models = [...Water.models, ...Wall.models, ...Steel.models]

    return models.some(model => {
      const state =
        x + this.width <= model.x ||
        x >= model.x + model.width ||
        y + this.height <= model.y ||
        y >= model.y + model.height
      return !state
    })


  }


  image() {
    let direction = this.name + _.upperFirst(this.direction)
    return images.get(direction as keyof typeof config.images)!
  }

}