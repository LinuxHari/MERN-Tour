import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import firebase from "../config/firebaseConfig";

type Image = { file: File };

const uploadImage = async ({ file: image }: Image) => {
  const storageRef = ref(firebase.storage, `/posts/${Date.now()}-${image.name}`);

  const response = await uploadBytes(storageRef, image);
  const url = await getDownloadURL(response.ref);
  return url;
};

const uploadImages = async (images:Image[]) => {
  const imagePromises = Array.from(images, (image) => uploadImage(image));

  const imageRes = await Promise.all(imagePromises);
  return imageRes;
};

const useFirebaseUpload = () => {
    return {uploadImage, uploadImages}
};

export default useFirebaseUpload
