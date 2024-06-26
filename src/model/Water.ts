import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";

export default class Water extends ModelAbstract implements IModel {
  render(): void {
    super.draw(images.get('water')!)
  }
}