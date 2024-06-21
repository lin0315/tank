import config from "../config";
import imgUrl from '../static/images/straw/straw.png'


export default abstract class CanvasAbstract {
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
    this.drawModels()
  }

  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  protected drawModels() {
    const img = document.createElement('img');
    img.src = imgUrl;
    img.onload = () => {
      const options = this.position();
      this.canvas.drawImage(img, options.x, options.y, config.model.width, config.model.height)
    }
  }

  protected position() {
    return {
      x: 220,
      y: 30
    }
  }
}