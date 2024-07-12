import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import BossModel from "../model/Boss";

class Boos extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0;
  }
  model(): ModelConstructor {
    return BossModel
  }
  render() {
    this.createModels();
    this.renderModels()
  }

  createModels() {
    [{ x: config.canvas.width / 2, y: config.canvas.height - config.model.height }].forEach(position => {
      const model = this.model() as ModelConstructor
      const instance = new model(position.x, position.y)
      this.models.push(instance)
      console.log(this.models)
    })
  }
}

export default new Boos('boos')