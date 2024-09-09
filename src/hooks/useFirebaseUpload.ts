import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import firebase from "../config/firebaseConfig";

type Image = { file: File };

const uploadImage = async ({ file: image }: Image, name: string) => {
  const storageRef = ref(firebase.storage, `/tours/${Date.now()}-${name.replaceAll(" ","-")}`);

  const response = await uploadBytes(storageRef, image);
  const url = await getDownloadURL(response.ref);
  return url;
};

const uploadImages = async (images:Image[], name:string) => {
  const imagePromises = Array.from(images, (image) => uploadImage(image, name));

  const imageRes = await Promise.all(imagePromises);
  return imageRes;
};

const useFirebaseUpload = () => {
    return {uploadImage, uploadImages}
};

export default useFirebaseUpload
