import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";

export default class Steel extends ModelAbstract implements IModel {
  name: string = "stell";
  image(): HTMLImageElement {
    return images.get('steel')!
  }
  render(): void {
    super.draw()
  }
}