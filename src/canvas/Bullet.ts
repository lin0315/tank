import CanvasAbstract from "./CanvasAbstract";
import BulletModel from "../model/Bullet";

class Bullet extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0;
  }
  model(): ModelConstructor {
    return BulletModel
  }
  render() {
    super.createModels();
    super.renderModels()
  }
}

export default new Bullet()