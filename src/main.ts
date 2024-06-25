import './style.scss'
import Straw from './canvas/Straw'
import { imagesPromise } from './server/image'
import Wall from './canvas/Wall'
import config from './config'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

async function bootstrap() {
  await Promise.all(imagesPromise)
  Straw.render()
  Wall.render()
}

bootstrap()