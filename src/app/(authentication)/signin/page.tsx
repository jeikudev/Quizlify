import React from "react";
import { SignInPageSection } from "@/sections/authentication/views";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | Sign In",
  description: "Sign In page for authentication.",
};

function SignInPage() {
  return <SignInPageSection />;
}

export default SignInPage;
