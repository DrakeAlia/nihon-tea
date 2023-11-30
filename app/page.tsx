import Image from 'next/image'

export default function Home() {
  return (
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl font-bold text-yellow-500 sm:text-6xl">
        Nihon Che Essence
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-forground">
        Crafting Tranquility Through Authentic Japanese Tea
      </p>
      <p className="mt-3 text-lg max-w-prose text-muted-forground">
        Discover the art of tea-making, immerse yourself in mindful rituals, and
        savor the serenity of Nihon Cha Essence – where every cup is an ode to
        the soul-soothing essence of Japanese tea.
      </p>
    </div>
  );
}
