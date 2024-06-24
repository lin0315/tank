import './style.scss'
import Straw from './canvas/Straw'


import { imagesPromise } from './server/image'

async function bootstrap() {
  await Promise.all(imagesPromise)

  Straw.render()
}

bootstrap()