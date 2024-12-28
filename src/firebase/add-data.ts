import { quizlifyFirebaseApp } from "@/config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const database = getFirestore(quizlifyFirebaseApp);

export default async function addData(
  collection: string,
  id: string,
  data: Record<string, unknown>
) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(database, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return { result, error };
}
