import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";

export default class Straw extends ModelAbstract implements IModel {
  render(): void {
    super.draw(images.get('wall')!)
  }
}