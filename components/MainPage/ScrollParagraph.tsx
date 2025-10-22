import React, { useRef } from "react";
import styles from "./ScrollParagraph.module.scss";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import { Noto_Serif_Display } from "next/font/google";
import { span } from "framer-motion/client";

const notoserif = Noto_Serif_Display({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "700", "900", "600", "500", "300"],
});

const value =
  "At Creative Media Flims,  we believe that every wedding is a unique story waiting to be told. Our passion for wedding photography  drives us to capture those fleeting moments  that define your special day,  ensuring that every smile and tear is beautifully preserved.";

export default function Paragraph() {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "end 0.6"],
  });

  const words = value.split(" ");
  return (
    <div className="flex justify-center px-10 py-30  md:px-30l lg:px-50 lg:py-60 items-center">
      <p
        ref={element}
        className={`text-[30px] md:text-5xl  max-w-[1280px] leading-none  text-center  italic font-bold  flex flex-wrap text-balance  ${notoserif.className}`}
      >
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={index} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={`mr-3 mt-3 relative`}>
    <span className={`absolute opacity-20`}>{children}</span>
    <motion.span style={{ opacity }} >
      {children}{" "}
    </motion.span>
    </span>
  );
};
