import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/wall.gif'
import water from './static/images/water/water.gif'
import steel from './static/images/wall/steels.gif'
import tankTop from './static/images/tank/top.gif'
import tankRight from './static/images/tank/right.gif'
import tankBottom from './static/images/tank/bottom.gif'
import tankLeft from './static/images/tank/left.gif'
import bullet from './static/images/bullet/bullet.jpg'
import boss from './static/images/boss/boss.png'
import playTop from './static/images/player/top.gif'
import playRight from './static/images/player/right.gif'
import playBottom from './static/images/player/bottom.gif'
import playLeft from './static/images/player/left.gif'

export default {
  timeout: 10,
  canvas: {
    width: 900,
    height: 600
  },

  model: {
    width: 30,
    height: 30
  },

  straw: {
    num: 80
  },

  wall: {
    num: 100
  },

  water: {
    num: 30
  },

  steel: {
    num: 20
  },

  tank: {
    num: 20
  },

  images: {
    straw,
    wall,
    water,
    steel,
    tankTop,
    tankRight,
    tankBottom,
    tankLeft,
    bullet,
    boss,
    playTop,
    playRight,
    playBottom,
    playLeft
  }


}