import Image from "next/image";
import Link from "next/link";

export default async function NotFoundComponent() {
  return (
    <div className="w-full">
      <div class="lg:px-24 lg:py-24 md:py-16 md:px-44 px-4 py-18 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div class="relative">
            <div class="absolute">
              <div class="">
                <h1 class="my-2 text-gray-800 font-bold text-2xl">
                  {`Looks like you've found the
                            doorway to the great nothing`}
                </h1>
                <p class="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <Link href={"/"}>
                  <button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                    Take me there!
                  </button>
                </Link>
              </div>
            </div>
            <div>
              {/* <Image
                fill
                alt="no found"
                s
                src="https://i.ibb.co/G9DC8S0/404-2.png"
              /> */}
            </div>
          </div>
        </div>
        <div>
          {/* <Image fill alt="no found" src="https://i.ibb.co/ck1SGFJ/Group.png" /> */}
        </div>
      </div>
    </div>
  );
}
