"use client";

import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="h-2 w-2 mr-2 rounded-full bg-primary animate-pulse [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 mr-2 rounded-full bg-primary animate-pulse [animation-delay:-0.1s]"></div>
      <div className="h-2 w-2 mr-2 rounded-full bg-primary animate-pulse [animation-delay:0.1s]"></div>
      <div className="h-2 w-2 mr-2 rounded-full bg-primary animate-pulse [animation-delay:0.3s]"></div>
      <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
    </div>
  );
}

export default Loading;
