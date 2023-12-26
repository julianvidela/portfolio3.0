"use client";

// Importa las bibliotecas y componentes necesarios
import React, { ReactNode } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

// Definición de las propiedades del componente AnimatedScroll
interface AnimatedScrollProps {
  children: ReactNode;
}

// Definición del componente AnimatedScroll
const AnimatedScroll: React.FC<AnimatedScrollProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0], [0.1, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 3]);
  

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      transition={{ duration: 0.1 }} 
    >
      {children}
    </motion.div>
  );
};

// Exporta el componente AnimatedScroll
export default AnimatedScroll;
