import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { User } from "@/types";
import addData from "./add-data";
import { quizlifyFirebaseApp } from "@/config";

const auth = getAuth(quizlifyFirebaseApp);

export default async function signUp({ email, password }: User) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    addData("users", result.user.uid, { email, password });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
