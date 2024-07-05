import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import StrawModel from "../model/Straw";

class Straw extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.straw.num
  }
  model(): ModelConstructor {
    return StrawModel
  }
  render() {
    super.createModels();
    super.renderModels()
  }
}

export default new Straw('straw')