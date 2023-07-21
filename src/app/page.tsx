import { NextPage } from "next";
import Image from "next/image";

const HomePage: NextPage = () => {
  return (
    <main className="flex flex-col gap-10 min-h-screen min-w-screen items-center justify-center">
      <Image
        src="/xolyd.svg"
        alt="Vercel Logo"
        width={600}
        height={0}
        priority
        className="shadow-lg"
      />
      <div className="flex flex-col font-mono text-white">
        <h1 className="text-4xl shadow-2xl">Next.JS Starter Kit</h1>
        <span className="text-sm text-right">
          by{" "}
          <span className="font-bold text-lime-600 text-lg">
            Henrique Fernandes
          </span>
        </span>
      </div>
    </main>
  );
};

export default HomePage;
