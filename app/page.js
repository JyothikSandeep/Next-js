import Image from "next/image";
import Link from "next/link"
import Header from "./components/Header";
export default function Home() {
  console.log("helo")
  return (
    <div>
      <p>hi</p>
      <Header></Header>
      <p><Link href="/about">about</Link></p>
    </div>
  );
}
