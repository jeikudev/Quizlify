import { quizlifyFirebaseApp } from "@/config";
import { User } from "@/types";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(quizlifyFirebaseApp);

export default async function signIn({ email, password }: User) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
