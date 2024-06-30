import _ from 'lodash'
import { directionEnum } from "../enum/directionEnum";
import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import config from '../config';


export default class Tank extends ModelAbstract implements IModel {
  name: string = 'tank'

  render(): void {
    this.move()

  }

  protected move(): void {
    this.canvas.clearRect(this.x, this.y, config.model.width, config.model.height)
    switch (this.direction) {
      case directionEnum.top:
        this.y--;
        break;
      case directionEnum.right:
        this.x++;
        break;
      case directionEnum.bottom:
        this.y++;
        break;
      case directionEnum.left:
        this.x--;
        break;
      default:
        break;
    }
    super.draw()
  }


  image() {
    let direction = this.name + _.upperFirst(this.direction)
    return images.get(direction as keyof typeof config.images)!
  }

}