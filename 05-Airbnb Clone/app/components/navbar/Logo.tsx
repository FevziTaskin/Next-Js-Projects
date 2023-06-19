"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation"; // => next 13

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="
        hidden md:block cursor-pointer
    "
      height="100"
      width="140"
      src="/images/logo.png"
    />
  );
};

export default Logo;
