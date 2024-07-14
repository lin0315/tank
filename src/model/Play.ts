import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import PlayCanvas from "../canvas/Play";
import _ from "lodash";
import { directionEnum } from "../enum/directionEnum";
import { isCanvasTouch, isModelTouch } from "../util";
import Bullet from "../canvas/Bullet";

export default class Play extends ModelAbstract implements IModel {
  canvas: ICanvas = PlayCanvas;
  name: string = "play";
  bindEvent = false;
  image(): HTMLImageElement {
    const direction = this.name + _.upperFirst(this.direction);
    return images.get(direction as any)!;
  }
  render(): void {
    super.draw()
    if (!this.bindEvent) {
      this.bindEvent = true;
      document.addEventListener('keydown', this.changeDirection.bind(this))
      document.addEventListener('keydown', this.move.bind(this))
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.code === "Space") {
          Bullet.addPlayBullet()
        }
      })
    }
  }

  changeDirection(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowUp':
        this.direction = directionEnum.top;
        break;
      case 'ArrowRight':
        this.direction = directionEnum.right;
        break;
      case 'ArrowDown':
        this.direction = directionEnum.bottom;
        break;
      case 'ArrowLeft':
        this.direction = directionEnum.left;
        break;
      default:
        break;
    }
    this.canvas.renderModels()
  }

  move(event: KeyboardEvent) {
    let x = this.x;
    let y = this.y;
    switch (event.code) {
      case 'ArrowUp':
        y -= 5
        break;
      case 'ArrowRight':
        x += 5;
        break;
      case 'ArrowDown':
        y += 5
        break;
      case 'ArrowLeft':
        x -= 5
        break;
      default:
        break;
    }
    if (isCanvasTouch(x, y) || isModelTouch(x, y)) {
      return;
    }
    this.x = x;
    this.y = y;
    this.canvas.renderModels()
  }
}
