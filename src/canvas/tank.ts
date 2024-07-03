import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import TankModel from "../model/Tank";
import Postition from "../server/Postition";

class Straw extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.tank.num
  }
  model(): ModelConstructor {
    return TankModel
  }
  render() {
    this.createModels();
    this.renderModels()
    setInterval(() => { this.renderModels() }, config.timeout)
  }

  // 渲染模型到画布
  protected renderModels() {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height)
    super.renderModels()
  }

  protected createModels() {
    for (let i = 0; i < this.num(); i++) {
      const pos = Postition.position()
      const model = this.model()
      const instance = new model(pos.x, 0)
      this.models.push(instance)
    }
  }
}

export default new Straw()