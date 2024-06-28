import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import TankModel from "../model/Tank";
import Postition from "../server/Postition";

class Straw extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.tank.num
  }
  model(): ModelConstructor {
    return TankModel
  }
  render() {
    this.createModels();
    super.renderModels()
  }

  protected createModels() {
    for (let i = 0; i < this.num(); i++) {
      const pos = Postition.position()
      const model = this.model()
      const instance = new model(this.canvas, pos.x, 0)
      this.models.push(instance)
    }
  }
}

export default new Straw()