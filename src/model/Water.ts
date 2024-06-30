import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";

export default class Water extends ModelAbstract implements IModel {
  name: string = 'water';
  image(): HTMLImageElement {
    return images.get('water')!;
  }
  render(): void {
    super.draw()
  }
}