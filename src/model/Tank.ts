import _ from 'lodash'
import { directionEnum } from "../enum/directionEnum";
import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import config from '../config';


export default class Tank extends ModelAbstract implements IModel {
  name: string = 'tank'

  protected direction: directionEnum = directionEnum.top
  render(): void {
    this.randomDirection()
    super.draw(this.randomImage())

    setInterval(() => this.move(), 50)
  }

  protected move(): void {
    this.canvas.clearRect(this.x, this.y, config.model.width, config.model.height)
    switch (this.direction) {
      case directionEnum.top:
        this.y -= 2;
        break;
      case directionEnum.right:
        this.x += 2;
        break;
      case directionEnum.bottom:
        this.y += 2;
        break;
      case directionEnum.left:
        this.x -= 2;
        break;
      default:
        break;
    }
    super.draw(this.randomImage())
  }

  // 获取随机方向
  randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }

  randomImage() {
    let direction = this.name + _.upperFirst(this.direction)
    return images.get(direction as keyof typeof config.images)!
  }

}