import CanvasAbstract from "./CanvasAbstract";
import BulletModel from "../model/Bullet";
import Tank from "./Tank";

class Bullet extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0;
  }
  model(): BulletModelConstructor {
    return BulletModel
  }
  render() {
    // super.createModels();
    // super.renderModels()
    setTimeout(() => {
      this.createBullet()
    }, 100);
  }

  createBullet() {
    Tank.models.forEach(tank => {
      const isExists = this.models.some(m => m.tank === tank)
      if (!isExists) {
        this.models.push(new BulletModel(tank))
      }
    })
  }
}

export default new Bullet('bullet')