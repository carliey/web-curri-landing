import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#23272A] text-white ">
      <div className="container">
        <div className="flex justify-between items-center py-10">
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
              height={24}
              priority
            />
          </div>
          <ul className="flex gap-20">
            <li className="text-[14px] ">A Product by Schoola</li>
            <li className="text-[14px]">&copy;Curri AI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
