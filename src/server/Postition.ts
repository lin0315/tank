import config from "../config";

type PostitionType = { x: number, y: number }
class Position {
  collection: PostitionType[] = []
  /**
 * 获取随机不重复位置集合
 * @param num 草地数量
 * @returns { x: number, y: number }[]
 */
  public getCollection(num: number) {
    const collections = [] as { x: number, y: number }[]
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position()
        const exists = this.collection.some(m => m.x == position.x && m.y == position.y)
        if (!exists) {
          collections.push(position);
          this.collection.push(position)
          break;
        }
      }
    }
    return collections
  }

  public position() {
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y: Math.floor(Math.random() * (config.canvas.height / config.model.height - 5)) * config.model.height + config.model.height * 2
    }
  }
}

export default new Position()