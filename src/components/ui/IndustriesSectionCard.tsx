"use client";
import Image from "next/image";
import { motion } from "motion/react";

interface CardProps {
  title: string;
  description: string;
  imgUrl: string;
}

export const IndustriesSectionCard = ({
  title,
  description,
  imgUrl,
}: CardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 25px rgba(0,0,0,0.3)",
      }}
      className="relative aspect-[16/12] bg-white rounded-2xl overflow-hidden shadow-md group"
    >
      {/* Image */}
      <Image
        src={imgUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           33vw"
        className="object-cover group-hover:scale-115 transition-transform duration-500"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end text-center items-center p-4 
             bg-gradient-to-b from-transparent via-black/20 to-black group"
      >
        {/* Title always visible */}
        <h3 className="text-gray-200 text-xl font-semibold mb-2 z-10">
          {title}
        </h3>

        {/* Description appears on hover */}
        <p
          className="text-gray-300 text-sm z-10 md:max-h-0 overflow-hidden md:opacity-0 
             group-hover:max-h-40 group-hover:opacity-100 
             transition-all duration-500 ease-in-out"
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};
