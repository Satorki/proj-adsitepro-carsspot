import React from "react";
import CallButton from "../atoms/CallButton";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroText = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div className="mx-5 min-h-[85vh] sm:min-h-0 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[960px] xl:max-w-[var(--container-width)] flex flex-col mt-10 sm:mt-[120px] mb-5 sm:mb-[120px] md:mb-[240px]  lg:mb-[362px] sm:mx-auto gap-12 justify-between sm:justify-normal">
      <div className="flex flex-col gap-2 sm:gap-8">
        <motion.h1
          style={{ opacity }}
          className="text-[var(--mainBlack)] text-[76.29px] font-bebasNeue leading-[83.92px] tracking-[-0.04em] max-w-[1120px] sm:h-[168px]"
        >
          SPRZEDAJEMY SAMOCHODY <br /> Z EUROPY
        </motion.h1>
        <motion.p
          style={{ opacity}}
          className="text-[var(--mainBlack)] font-robotoCondensed md:w-[602px] h-[48px] leading-6"
        >
          Kup komfortowy pojazd, aby każda podróż <br />
          była wyjątkowym przeżyciem.
        </motion.p>
      </div>
      <motion.div
        style={{ opacity }}
        className="flex gap-6 justify-center sm:justify-normal h-[100px] sm:h-0 "
      >
        <CallButton content="Zobacz zdjęcia" to="gallery" />
        <CallButton
          content="Zadzwoń do nas"
          backgroundColor="var(--backgroundWhite)"
          textColor="var(--mainBlue)"
          hasBorder
        />
      </motion.div>
    </div>
  );
};

export default HeroText;
