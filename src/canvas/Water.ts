import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import WaterModel from "../model/Water";

class Water extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.water.num
  }
  model(): ModelConstructor {
    return WaterModel
  }
  render() {
    super.createModels();
    super.renderModels()
  }
}

export default new Water('water')