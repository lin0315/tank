import config from "../config";
import CanvasAbstract from "./CanvasAbstract";
import TankModel from "../model/Tank";
import Postition from "../server/Postition";

class Tank extends CanvasAbstract implements ICanvas {
  intervalId = 0;
  num(): number {
    return config.tank.num
  }
  model(): ModelConstructor {
    return TankModel
  }
  render() {
    this.createModels();
    this.renderModels()
    this.intervalId = setInterval(() => { this.renderModels() }, config.timeout)
  }

  stop(): void {
    clearInterval(this.intervalId)
  }

  // 渲染模型到画布
  public renderModels() {
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

export default new Tank('tank')