import CanvasAbstract from "./CanvasAbstract";
import BulletModel from "../model/Bullet";
import Tank from "./Tank";
import Play from "./Play";
import audio from "../server/audio";

class Bullet extends CanvasAbstract implements ICanvas {
  intervalId = 0;
  num(): number {
    return 0;
  }
  model(): BulletModelConstructor {
    return BulletModel
  }
  render() {
    this.intervalId = setInterval(() => {
      this.createBullet()
      this.renderModels()
    }, 50);
  }

  createBullet() {
    Tank.models.forEach(tank => {
      const isExists = this.models.some(m => m.tank === tank)
      if (!isExists) {
        this.models.push(new BulletModel(tank))
      }
    })
  }

  addPlayBullet() {
    this.models.push(new BulletModel(Play.models[0]))
    audio.fire();
  }

  stop(): void {
    clearInterval(this.intervalId)
  }
}

export default new Bullet('bullet')