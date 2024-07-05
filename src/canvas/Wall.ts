import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import WallModel from "../model/Wall";

class Wall extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.wall.num
  }
  model(): ModelConstructor {
    return WallModel
  }

  render() {
    super.createModels();
    super.renderModels()
  }
}

export default new Wall('wall')