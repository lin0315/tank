import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import SteelModel from "../model/Steel";

class Straw extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.steel.num
  }
  model(): ModelConstructor {
    return SteelModel
  }

  render() {
    super.createModels();
    super.renderModels()
  }
}

export default new Straw('stell')