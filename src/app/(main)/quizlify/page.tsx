"use client";

import { Button } from "@/components/ui/button";
import { quizlifyFirebaseAuth } from "@/config";
import { useAuthContext } from "@/context";
import { signOut } from "firebase/auth";
import "firebase/compat/auth";
import { useRouter } from "next/navigation";
import React from "react";

function MainPage() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user, router]);

  const handleSignOut = async () => {
    try {
      await signOut(quizlifyFirebaseAuth);
      router.push("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h1>Only logged-in users can view this page. Welcome, {user?.email}!</h1>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
}

export default MainPage;
