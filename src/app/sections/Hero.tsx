import React from "react";
import curri from "./public/curri-star-icon.png";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[#23272A] text-white pb-24">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-2">
            <Image
              src="/curri-star-icon.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={29}
              height={28}
              priority
            />
            <Image
              src="/curri-text-icon.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={74}
              height={28}
              priority
            />
          </div>
          <ul className="flex gap-10">
            <li className="text-[16px] cursor-pointer">Feedback</li>
            <li className="text-[16px] cursor-pointer">Schoola</li>
            <li className="text-[16px] cursor-pointer">Blog</li>
            <li className="text-[16px] cursor-pointer">Contacts</li>
            <li className="text-[16px] cursor-pointer">FAQ</li>
          </ul>
          <button className="bg-white rounded-full w-[65px] h-[38px] text-black p-2 text-[14px]  hover:bg-slate-200">
            Login
          </button>
        </div>

        <div className="flex justify-between items-center mt-16">
          <div className="flex flex-col gap-10">
            <Image
              src="/heading-text.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={452}
              height={100}
              priority
            />
            <p>
              Say goodbye to hours spent creating lesson plans.
              <br /> Creating lesson plans now as easy as a few clicks.
            </p>
            <button className="bg-white rounded-full w-[295px] h-[38px] text-black p-2 text-[14px] hover:bg-slate-200">
              Get Started
            </button>
          </div>
          <Image
            src="/large-curri.svg"
            alt="Vercel Logo"
            className="mr-16"
            width={476}
            height={416}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
