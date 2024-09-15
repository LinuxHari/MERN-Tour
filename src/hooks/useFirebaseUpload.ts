import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";
import firebase from "../config/firebaseConfig";
import { ImgPath } from "../type";

type Image = { file: File };

const uploadImage = async ({ file: image }: Image, name: string, id: number) => {
  try {
    const storageRef = ref(
      firebase.storage,
      `/${ImgPath.tours}/${Date.now() + id * image.size}-${name.replaceAll(" ", "-")}`
    );
    const response = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(response.ref);
    return url;
  } catch (err) {
    throw new Error("Failed uploading image");
  }
};

const uploadImages = async (images: Image[], name: string) => {
  const imagePromises = Array.from(images, (image, index) => uploadImage(image, name, index));
  const imageRes = await Promise.all(imagePromises);
  return imageRes;
};

const deleteImage = async (url: string) => {
  try {
    const imageRef = ref(firebase.storage, url);
    await deleteObject(imageRef);
  } catch (err) {
    throw new Error("Failed deleting image");
  }
};

const deleteImages = async (urls: string[]) => {
  await Promise.all(urls.map((url) => deleteImage(url)));
};

const useFirebaseUpload = () => {
  return { uploadImage, uploadImages, deleteImages, deleteImage };
};

export default useFirebaseUpload;
