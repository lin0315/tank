import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import StrawModel from "../model/Straw";

class Straw extends CanvasAbstract {
  render() {
    super.drawModels(config.straw.num, StrawModel);

  }
}

export default new Straw()
