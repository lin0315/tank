import { images } from "../server/image";
import ModelAbstract from "./ModelAbstract";

export default class Steel extends ModelAbstract implements IModel {
  render(): void {
    super.draw(images.get('steel')!)
  }
}