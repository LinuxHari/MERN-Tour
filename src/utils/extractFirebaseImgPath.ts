import { ImgPath } from "../type";

export const extractFirebaseImgPath = (urls: string[], path: ImgPath) => {
  const firstIndexToSlice = urls[0].indexOf(path);

  return urls.map((url) => decodeURIComponent(url.slice(firstIndexToSlice, url.indexOf("?"))));
}
