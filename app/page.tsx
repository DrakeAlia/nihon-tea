import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      {/* <section className="rounded-lg bg-blue-400 bg-blue-50"> */}
      <h1 className="text-4xl font-bold text-yellow-400 sm:text-6xl">
        Nihon Che Essence
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-forground text-yellow-500">
        Crafting Tranquility Through Authentic Japanese Tea
      </p>
      <p className="mt-3 text-lg max-w-prose text-muted-forground text-yellow-500">
        Discover the art of tea-making, immerse yourself in mindful rituals, and
        savor the serenity of Nihon Cha Essence – where every cup is an ode to
        the soul-soothing essence of Japanese tea.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6"></div>
      <Link href="/shop" className={buttonVariants()}>
        Shop Tea
      </Link>
      {/* </section> */}
    </div>
  );
}
