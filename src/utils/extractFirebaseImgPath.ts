import { ImgType } from "../type";

export const extractFirebaseImgPath = (urls: string[], type: ImgType) => {
  const firstIndexToSlice = urls[0].indexOf("/" + type);

  return urls.map((url) => decodeURIComponent(url.slice(firstIndexToSlice, url.indexOf("?"))));
}
