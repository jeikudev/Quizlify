"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function StartingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/signin");
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="h-5 w-5 mr-2.5 rounded-full bg-primary animate-pulse [animation-delay:-0.3s]"></div>
      <div className="h-5 w-5 mr-2.5 rounded-full bg-primary animate-pulse [animation-delay:-0.1s]"></div>
      <div className="h-5 w-5 mr-2.5 rounded-full bg-primary animate-pulse [animation-delay:0.1s]"></div>
      <div className="h-5 w-5 mr-2.5 rounded-full bg-primary animate-pulse [animation-delay:0.3s]"></div>
      <div className="h-5 w-5 rounded-full bg-primary animate-pulse"></div>
    </div>
  );
}

export default StartingPage;
