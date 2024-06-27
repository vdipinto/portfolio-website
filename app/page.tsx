import Nav from "../components/ui/Nav";
import { Button } from "../components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <section className="py-24 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <p className="text-lg text-muted-foreground">This is a test</p>
        <div className="flex gap-6 py-6 items-center justify-center">
          <Button>Learn More</Button>
          <Button>Enroll Now</Button>
        </div>
      </section>
    </main>
  );
}
