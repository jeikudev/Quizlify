import { quizlifyFirebaseApp } from "@/config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(quizlifyFirebaseApp);
export default async function getDoument(collection: string, id: string) {
  const docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}