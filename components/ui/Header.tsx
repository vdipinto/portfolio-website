import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/ui/Nav";

const Header = () => {
  return <header className="py-8 xl:py-12">
    <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
      <Link href="/" className="text-4xl font-bold">
        <h1 className="text-2xl font-semibold">
            Vito<span className="text-accent">.</span>
        </h1>
      </Link>
      {/* Desktop Nav */}
      <Nav />
    </div>
  </header>;
};

export default Header;