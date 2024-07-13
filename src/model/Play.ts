import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import PlayCanvas from "../canvas/Play";
import _ from "lodash";
import { directionEnum } from "../enum/directionEnum";

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
}
