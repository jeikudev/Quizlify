import { userSchema } from "@/validation";
import { z } from "zod";

export type User = z.infer<typeof userSchema>;
