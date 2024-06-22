import config from "../config";

type MapKey = keyof typeof config.images;
export const images = new Map<MapKey, HTMLImageElement>()

export const imagesPromise = Object.entries(config.images).map(([key, value]) => {
  return new Promise((resolve) => {
    const img = document.createElement('img');
    img.src = value;
    img.onload = () => {
      images.set(key as MapKey, img)
      resolve(img)
    }
  })
})