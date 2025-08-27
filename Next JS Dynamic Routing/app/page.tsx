import Image from "next/image";
import Hello from "./Components/hello";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello/>
    </>
    
  );
}
