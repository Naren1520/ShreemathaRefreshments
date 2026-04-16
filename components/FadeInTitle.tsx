"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  text1?: string;
  br?: boolean;
  highlight?: string;
  text2?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function FadeInTitle({ text1 = "", br = false, highlight = "", text2 = "", className = "", as = "h2" }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  let letterCount = 0;

  const generateLetters = (text: string, isHighlight = false) => {
    return text.split(/( )/).map((char, index) => {
      const delay = letterCount * 0.03;
      letterCount++;
      return (
        <motion.span
          key={`char-${index}-${letterCount}`}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.5, delay, ease: "easeOut" }}
          className={`inline-block ${char === " " ? "w-[0.25em]" : ""} ${isHighlight ? "whitespace-nowrap" : ""}`}
        >
          {char === " " ? " " : char}
        </motion.span>
      );
    });
  };

  const content = (
    <>
      <span className="inline-block relative">
        {text1 && generateLetters(text1)}
        {br && <br />}
        {highlight && (
          <em className="text-lime italic">
            {" "}{generateLetters(highlight, true)}
          </em>
        )}
        {text2 && generateLetters(text2)}
      </span>
    </>
  );

  if (as === "h1") return <h1 ref={ref} className={className}>{content}</h1>;
  if (as === "h3") return <h3 ref={ref} className={className}>{content}</h3>;
  return <h2 ref={ref} className={className}>{content}</h2>;
}
