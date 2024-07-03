import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";
import WallCanvas from "../canvas/Wall";

export default class Wall extends ModelAbstract implements IModel {
  canvas: ICanvas = WallCanvas;
  name: string = "wall";
  image(): HTMLImageElement {
    return images.get('wall')!;
  }
  render(): void {
    super.draw()
  }
}