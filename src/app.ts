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
import audio from './server/audio'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

export default {
  isStart: false, // 是否开始
  state: 6, // 胜负状态
  interval: 0, // 定时器检测是否游戏结束
  bootstrap() {
    app.addEventListener('click', () => {
      if (!this.isStart) {
        this.isStart = true;
        this.start()
        this.interval = setInterval(() => {
          if (!Tank.models.length) this.state = 1;
          if (!Play.models.length || !Boss.models.length) this.state = 0;
          if (this.state !== 6) this.stop()
        }, 300)
      }
    })
  },
  stop() {
    clearInterval(this.interval);
    Tank.stop();
    Bullet.stop();
    this.text();
  },
  text() {
    const el = document.createElement('canvas');
    el.width = config.canvas.width;
    el.height = config.canvas.height;
    const ctx = el.getContext('2d')!
    ctx.fillStyle = "skyblue";
    ctx.font = '80px CascadiaMono';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(this.state === 1 ? "胜利!" : "失败!", config.canvas.width / 2, config.canvas.height / 2)
    app.appendChild(el)
  },
  async start() {
    audio.start();
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

