import Steel from "./canvas/Steel"
import Wall from "./canvas/Wall"
import Water from "./canvas/Water"
import config from "./config"

export function isModelTouch(
  x: number, y: number,
  width = config.model.width,
  height = config.model.height,
  models = [...Water.models, ...Wall.models, ...Steel.models]
): boolean {
  if (
    x < 0 ||
    x + width > config.canvas.width ||
    y < 0 ||
    y + height > config.canvas.height
  ) return true


  return models.some(model => {
    const state =
      x + width <= model.x ||
      x >= model.x + model.width ||
      y + height <= model.y ||
      y >= model.y + model.height
    return !state
  })

}