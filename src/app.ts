import './style.scss'
import { imagesPromise } from './server/image'
import Wall from './canvas/Wall'
import config from './config'
import Water from './canvas/Water'
import Steel from './canvas/Steel'
import Straw from './canvas/Straw'
import Tank from './canvas/Tank'
import Bullet from './canvas/Bullet'
import Boss from './canvas/Boss'
import Play from './canvas/Play'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

export default {
  isStart: false,
  bootstrap() {
    app.addEventListener('click', () => {
      if (!this.isStart) {
        this.isStart = true;
        this.start()
      }
    })
  },
  stop() { },
  async start() {
    app.style.backgroundImage = "none";
    app.style.cursor = "none"
    await Promise.all(imagesPromise)
    Straw.render()
    Wall.render()
    Water.render()
    Steel.render()
    Tank.render()
    Bullet.render()
    Boss.render()
    Play.render()
  }
}

