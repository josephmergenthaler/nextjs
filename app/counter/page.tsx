"use client";

import Link from "next/link";
import { useState } from "react";

function CountButton() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((previous) => previous + 1)}>+1</button>
      <div>{count}</div>
    </>
  );
}

export default function Page() {
  return (
    <>
      <h1>JSX: The Process</h1>
      <CountButton />
      <CountButton />
      <CountButton />
    </>
  );
}