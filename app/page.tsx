

import React from "react";
import { redirect } from 'next/navigation';
export default function Home() {
  redirect('/home')
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello, Next.js!
      </h1>
    </div>
  )
}
