import Image from "next/image";
import React from "react";

type Props = {};

const Video = (props: Props) => {
  return (
    <div className="h-[698px] bg-white">
      <div className="container flex flex-col items-center py-20 relative">
        <Image
          src="/ease-of-use-text.svg"
          alt="Vercel Logo"
          width={503}
          height={58}
          priority
        />
        <Image
          src="/gold-flying-star.svg"
          alt="Vercel Logo"
          className="absolute left-0 top-40"
          width={49}
          height={43}
          priority
        />
        <Image
          src="/blue-flying-star.svg"
          alt="Vercel Logo"
          className="absolute left-16 top-36"
          width={25}
          height={18}
          priority
        />
        <Image
          src="/blue-flying-star.svg"
          alt="Vercel Logo"
          className="absolute left-16 top-52"
          width={25}
          height={18}
          priority
        />
        <Image
          src="/gold-flying-star.svg"
          alt="Vercel Logo"
          className="absolute right-10 bottom-40"
          width={29}
          height={25}
          priority
        />
        <Image
          src="/blue-flying-star.svg"
          alt="Vercel Logo"
          className="absolute right-0 bottom-52"
          width={25}
          height={18}
          priority
        />

        <iframe
          className="my-14 rounded-xl"
          width={780}
          height={404}
          src="https://www.youtube.com/embed/6qmkhYYoaQM?si=nMB_qRkmEtfyGu1y"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
