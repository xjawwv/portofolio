"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Github, Mail, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { MouseEvent } from "react";

export function Hero() {
  // Initialize to center (0.5 * width, 0.5 * height) to start flat
  const mouseX = useMotionValue(160); 
  const mouseY = useMotionValue(200);

  // Smooth springs for the glow effect
  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 px-4 pt-28"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT: Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
            >
              {profile.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-400 font-medium uppercase tracking-widest"
            >
              {profile.tagline}
            </motion.p>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 text-lg leading-relaxed max-w-lg"
          >
            {profile.bio}
          </motion.p>

          {/* Capsule / Action Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="backdrop-blur-md bg-neutral-900/50 border border-neutral-800 rounded-2xl p-2 pr-6 flex items-center gap-4 transition-transform hover:scale-105">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-green-500/20">
                <Image
                  src={profile.avatarUrl || "/avatar.png"}
                  alt="Status Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-xs text-neutral-500 font-bold tracking-wider mb-0.5">STATUS</div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-bold text-white">Online</span>
                </div>
              </div>
            </div>

            <a
               href="#contact"
               className="group flex items-center gap-3 px-8 py-4 bg-white text-neutral-950 rounded-2xl font-bold hover:bg-neutral-200 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
               Let&apos;s Talk
               <Mail className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
             <a href="#projects" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm font-medium">
                View Selected Projects <ArrowRight className="w-4 h-4" />
             </a>
          </motion.div>
        </div>

        {/* RIGHT: Jelly Glow Card */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group perspective-1000">
            {/* Outer Glow */}
            <motion.div
              className="absolute -inset-10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    350px circle at ${springX}px ${springY}px,
                    rgba(59, 130, 246, 0.6),
                    transparent 80%
                  )
                `,
              }}
            />

            {/* Main Image Card with Stronger 3D Tilt & Jelly */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                rotateX: useSpring(useTransform(mouseY, [0, 400], [25, -25]), { stiffness: 300, damping: 20 }),
                rotateY: useSpring(useTransform(mouseX, [0, 320], [-25, 25]), { stiffness: 300, damping: 20 }),
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                mouseX.set(160); // Reset to center (approx width/2)
                mouseY.set(200); // Reset to center (approx height/2)
              }}
              className="relative w-[300px] sm:w-[350px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl transition-all duration-300"
            >
              <Image
                src={profile.avatarUrl || "/avatar.png"}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
              
              {/* Brighter Inner Glow (follows mouse) */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      250px circle at ${mouseX}px ${mouseY}px,
                      rgba(255, 255, 255, 0.7),
                      transparent 80%
                    )
                  `,
                }}
              />

              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

