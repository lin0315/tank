import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import PlayModel from "../model/Play";

class Play extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0
  }
  model(): ModelConstructor {
    return PlayModel
  }

  render() {
    this.createModels();
    super.renderModels();
  }

  createModels() {
    const cw = config.canvas.width;
    const ch = config.canvas.height;
    const mw = config.model.width;
    const mh = config.model.height;
    [{ x: cw / 2 + mw * 4, y: ch - mh }].forEach(position => {
      const model = this.model() as ModelConstructor
      const instance = new model(position.x, position.y)
      this.models.push(instance)
    })

  }
}

export default new Play('play')