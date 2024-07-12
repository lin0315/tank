import Boss from "./canvas/Boss"
import Steel from "./canvas/Steel"
import Wall from "./canvas/Wall"
import Water from "./canvas/Water"
import config from "./config"

export function isModelTouch(
  x: number, y: number,
  width = config.model.width,
  height = config.model.height,
  models = [...Water.models, ...Wall.models, ...Steel.models, ...Boss.models]
): IModel | undefined {

  return models.find(model => {
    const state =
      x + width <= model.x ||
      x >= model.x + model.width ||
      y + height <= model.y ||
      y >= model.y + model.height
    return !state
  })

}

export function isCanvasTouch(
  x: number, y: number,
  width = config.model.width,
  height = config.model.height
): boolean {

  return (
    x < 0 ||
    x + width > config.canvas.width ||
    y < 0 ||
    y + height > config.canvas.height
  )

}