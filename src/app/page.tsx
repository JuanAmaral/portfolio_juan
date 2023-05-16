import Image from "next/image";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex justify-center items-center">
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Portfolio />
      </section>
    </main>
  );
}
