import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";

export default class Wall extends ModelAbstract implements IModel {
  name: string = "wall";
  image(): HTMLImageElement {
    return images.get('wall')!;
  }
  render(): void {
    super.draw()
  }
}