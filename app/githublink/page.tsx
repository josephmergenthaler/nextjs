"use client";

import Link from "next/link";
import { useState } from "react";


export default function Page() {
  return (
    <>
      <h1>Github Repo</h1>
      <p>Github Repo Link:</p>
      <Link href="https://github.com/josephmergenthaler/nextjs">Github Repo Link</Link>
    </>
  );
}