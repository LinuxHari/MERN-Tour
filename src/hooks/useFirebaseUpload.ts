import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";
import firebase from "../config/firebaseConfig";
import { ImgType } from "../type";

type Image = { file: File };

const uploadImage = async ({ file: image }: Image, name: string) => {
  const storageRef = ref(firebase.storage, `/${ImgType.tours}/${Date.now()}-${name.replaceAll(" ","-")}`);

  const response = await uploadBytes(storageRef, image);
  const url = await getDownloadURL(response.ref);
  return url;
};

const uploadImages = async (images:Image[], name:string) => {
  const imagePromises = Array.from(images, (image) => uploadImage(image, name));

  const imageRes = await Promise.all(imagePromises);
  return imageRes;
};

const deleteImage = async(url:string) => {
  const imageRef = ref(firebase.storage, url);

  await deleteObject(imageRef)
}

const deleteImages = async (urls: string[]) => {
  console.log(urls, "images to delete");
  
  await Promise.all(urls.map(url => deleteImage(url)))
}

const useFirebaseUpload = () => {
    return {uploadImage, uploadImages, deleteImages, deleteImage}
};

export default useFirebaseUpload
