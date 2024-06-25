import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import WallModel from "../model/Wall";

class Wall extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.wall.num, WallModel);
  }
  render() {
    super.renderModels()
  }
}

export default new Wall()