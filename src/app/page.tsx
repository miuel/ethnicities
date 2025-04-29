import { LoginForm } from "@/components/login-form";
import Reveal from "@/components/motion/Reveal";

export default function Home() {
  return (
    <>
      <div className="hidden md:grid grid-cols-12 grid-rows-12 gap-5 h-svh max-w-[1512px] mx-auto relative">
        <div className="col-start-1 col-span-6 row-start-1 row-span-12 ">
          <img
            className="clip-me w-full h-full object-cover"
            src="/images/mask-izq.png"
            alt="Descriptioin of image"
            loading="lazy"
          />
        </div>
        <div className="col-start-5 col-span-4 row-start-5 z-10 ">
          <Reveal delay={0.8}>
            <LoginForm />
          </Reveal>
        </div>
        <div className="col-start-7 col-span-6 row-start-1 row-span-12 ">
          <img
            className="clip-me scale-x-[-1] w-full h-full object-cover"
            src="/images/dibakar.jpg"
            alt="Description of image"
            loading="lazy"
          />
        </div>

        <div className="col-start-2 col-span-3 row-start-7 row-span-2 z-10 ">
          <h1 className=" italic font-bold text-7xl font-editorialNew text-white">
            Human
          </h1>
          <h1 className="text-7xl text-white">Ethnicities</h1>
        </div>
        <div className="col-start-2 row-start-9 col-span-2 z-10 ">
          <p className="w-fit p-4 bg-black rounded-sm text-white">
            faces of the world
          </p>
        </div>
        <div className="col-start-8 row-start-10 col-span-3 z-10 text-white">
          <p>Technical Test: </p>
          <p>React Developer Next.js + TypeScript + Tailwind Css</p>
        </div>
        <div className="col-start-1 col-span-1 row-start-12 z-10">
          <img
            className=""
            src="/images/logo_asafe.png"
            alt="Description of image"
            loading="lazy"
          />
        </div>
        <div className="col-start-12 col-span-2 row-start-12 z-10">
          <a
            className="text-asafeBlack font-editorialNew italic"
            href="https://mr-web-iota.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="bg-asafeBlack text-white p-1 mr-1">by</span>
            Miguel Rivas
          </a>
        </div>
      </div>
      <div className="md:hidden flex flex-col items-center justify-evenly h-screen">
        <div>
          <h1 className="italic font-bold text-5xl font-editorialNew text-white">
            Human
          </h1>
          <h1 className="text-5xl text-white">Ethnicities</h1>
        </div>
        <img
          className=" w-full h-full object-cover absolute top-0 left-0 -z-10"
          src="/images/fadhil.jpg"
          alt="Descriptioin of image"
          loading="lazy"
        />
        <LoginForm />
        <div className="mx-5 md:mx-0 text-asafeBlack md:text-white">
          <p>Technical Test: </p>
          <p>React Developer Next.js + TypeScript + Tailwind Css</p>
        </div>
        <div className="flex flex-col text-asafeBlack items-center">
          <div className="absolute left-5 bottom-4 flex justify-between w-full">
           
            <a
              className="text-white font-editorialNew italic"
              href="https://mr-web-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className="bg-asafeBlack text-white p-1 mr-1">by</span>
              Miguel Rivas
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
