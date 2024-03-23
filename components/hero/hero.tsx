'use client';
import logo from '@/public/blacktag-logo.jpg'
import Image from 'next/image';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import Link from 'next/link'
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { BiFontFamily } from 'react-icons/bi';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logoBT from "@/public/blacktag-logo.jpg";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative w-full grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        
      <Avatar className='h-40 w-40 m-5'>
          <AvatarImage src="https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-1/326883462_542451481186745_981167221096928765_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GoBbgPg6wQEAX-hxUOv&_nc_ht=scontent.ftun6-1.fna&oh=00_AfA74SHzQJNDWjlDc3X0Bx23Sd36cAY9kqUWt1my632kvA&oe=6602B093" />
          <AvatarFallback>BT</AvatarFallback>
      </Avatar>

        <Link href="/drinks" >
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Voir le Menu
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
        </Link>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};