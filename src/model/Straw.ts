import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";

export default class Straw extends ModelAbstract implements IModel {
  name: string = 'straw';
  image(): HTMLImageElement {
    return images.get('straw')!
  }
  render(): void {
    super.draw()
  }

}