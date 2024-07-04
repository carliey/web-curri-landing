"use client";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const features = [
  {
    title: "Curri FLN",
    description:
      "A solution targeting formal and non-formal learning in select locations in Africa starting in Nigeria in partnership withgovernment and non-governmental orgnisations.",
    link: "#",
    image: "/curri-fln-image.svg",
  },
  {
    title: "Curri Inside",
    description:
      "Curri also lets you create assessments from scratch or based on existing lesson notes. With Curri, you can create multiple-choice or essay assessments and easily share them to Google Classroom and other supported Ed Tech platforms. ",
    link: "#",
    image: "/curri-inside-image.svg",
  },
  {
    title: "Lesson Note",
    description:
      "A solution targeting formal and non-formal learning in select locations in Africa starting in Nigeria in partnership withgovernment and non-governmental orgnisations.",
    link: "#",
    image: "/lesson-note-image.svg",
  },
];

const About = (props: Props) => {
  return (
    <div className="bg-[#F6F6F6] py-24">
      <div className="container">
        <div className="flex flex-col gap-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex ${
                i % 2 !== 0 && "flex-row-reverse"
              }  items-center justify-between`}
            >
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: "-100%" }}
                  whileInView={{ opacity: 1, x: "0" }}
                  exit={{ opacity: 0, x: 500 }}
                  transition={{
                    type: "just",
                    duration: 0.5,
                  }}
                >
                  <div className="flex flex-col gap-8">
                    <h1 className="font-extrabold">{feature.title}</h1>
                    <p className="w-[444px] text-[#50555F] text-[16px]">
                      {feature.description}
                    </p>
                    <div className="flex gap-5">
                      <p>Meet Our Partners</p> Icon
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  whileInView={{ opacity: 1, x: "0" }}
                  exit={{ opacity: 0, x: 500 }}
                  transition={{
                    type: "just",
                    duration: 0.5,
                  }}
                >
                  <Image
                    src={feature.image}
                    alt="curri-fln"
                    width={449}
                    height={292}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
