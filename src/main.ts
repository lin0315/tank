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

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

async function bootstrap() {
  await Promise.all(imagesPromise)
  Straw.render()
  Wall.render()
  Water.render()
  Steel.render()
  Tank.render()
  Bullet.render()
  Boss.render()
}

bootstrap()