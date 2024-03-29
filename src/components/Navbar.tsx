import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image 
          src={logo} 
          width={40} 
          height={40} 
          alt="flow logo" 
          />
          <span className="text-xl tracking-tight font-bold">Flow Jobs</span>
        </Link>
        <Button asChild>
          <Link href="/jobs/new">Post A Job</Link>
        </Button>
      </nav>
    </header>
  );
}
