import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import WaterModel from "../model/Water";

class Water extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.water.num, WaterModel);
  }
  render() {
    super.renderModels()
  }
}

export default new Water()