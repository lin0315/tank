/// <reference types="vite/client" />

interface ModelConstructor {
  new(canvas: CanvasRenderingContext2D, x: number, y: number): IModel
}

interface IModel {
  render(): void,
  image(): HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number


}

interface ICanvas {
  model(): ModelConstructor
  num(): number
}