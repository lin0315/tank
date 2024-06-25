import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import StrawModel from "../model/Straw";

class Straw extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.straw.num, StrawModel);
  }
  render() {
    super.renderModels()
  }
}

export default new Straw()