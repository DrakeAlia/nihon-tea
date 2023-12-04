import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { smythe } from "@/components/ui/font";

// export default function Home() {
//   return (
//     <>
//       <MaxWidthWrapper>
//         <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
//           <section className="rounded-lg bg-blue-300 ">
//             <h1 className="text-4xl font-bold text-yellow-400 sm:text-6xl">
//               Nihon Che Essence
//             </h1>
//             {/*  */}
//             <p className="mt-20 text-lg max-w-prose text-muted-forground text-yellow-400">
//               Crafting Tranquility Through Authentic Japanese Tea
//             </p>
//             <p className="mt-8 text-lg max-w-prose text-muted-forground text-yellow-400">
//               Discover the art of tea-making, immerse yourself in mindful
//               rituals, and savor the serenity of Nihon Cha Essence – where every
//               cup is an ode to the soul-soothing essence of Japanese tea.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 mt-14"></div>
//             <Link href="/shop" className={buttonVariants()}>
//               Shop Tea
//             </Link>
//           </section>
//         </div>
//       </MaxWidthWrapper>
//     </>
//   );
// }

export default function Home() {
  return (
    <div className="bg-white">
      <Image
        className="absolute inset-0 w-full h-full"
        src="/design.jpeg"
        alt=""
        width={1000}
        height={760}
      />
      {/* Navbar container */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <Image
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                width={1000}
                height={760}
              /> */}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="#"
              className={`${smythe.className} rounded-lg bg-gray-800 px-4 py-2 text-xl font-semibold leading-6 text-yellow-400`}
            >
              Product
            </Link>
            <Link
              href="#"
              className={`${smythe.className} rounded-lg bg-gray-800 px-4 py-2 text-xl font-semibold leading-6 text-yellow-400`}
            >
              Features
            </Link>
            <Link
              href="#"
              className={`${smythe.className} rounded-lg bg-gray-800 px-4 py-2 text-xl font-semibold leading-6 text-yellow-400`}
            >
              Marketplace
            </Link>
            <Link
              href="#"
              className={`${smythe.className} rounded-lg bg-gray-800 px-4 py-2 text-xl font-semibold leading-6 text-yellow-400`}
            >
              Company
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="#"
              className={`${smythe.className} text-xl font-semibold leading-6 text-yellow-400`}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
      {/* Description container */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1
              className={`${smythe.className} text-4xl font-bold tracking-tight text-yellow-400 sm:text-6xl`}
            >
              Nihon Che Essence
            </h1>
            <p
              className={`${smythe.className} mt-6 text-lg leading-8 text-yellow-400`}
            >
              Discover the art of tea-making, immerse yourself in mindful
              rituals, and savor the serenity of Nihon Cha Essence where every
              cup is an ode to the soul-soothing essence of Japanese tea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className={`${smythe.className} rounded-lg bg-gray-800 px-6 py-2.5 text-xl font-semibold text-yellow-400 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                Shop Tea &rarr;
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
