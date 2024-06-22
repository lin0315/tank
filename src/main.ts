import './style.scss'
import Straw from './canvas/Straw'


import { images, imagesPromise } from './server/image'

async function bootstrap() {
  await Promise.all(imagesPromise)

  Straw.render()
}

bootstrap()