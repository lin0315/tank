import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";

export default class Tank extends ModelAbstract implements IModel {
  render(): void {
    super.draw(images.get('tank')!)
  }

}