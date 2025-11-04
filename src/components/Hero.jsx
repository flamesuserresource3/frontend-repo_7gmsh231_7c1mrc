import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_80%_-10%,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Background video/image */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-70"
          src="https://cdn.coverr.co/videos/coverr-stylish-woman-walking-1015/1080p.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      </div>

      {/* Floating glow */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-zinc-200 backdrop-blur-sm"
        >
          New Drop • AW Collection
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display bg-gradient-to-b from-white to-zinc-200 bg-clip-text text-5xl font-semibold text-transparent sm:text-6xl md:text-7xl"
        >
          LUXE STREET • DIGITAL EDGE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mt-6 max-w-2xl text-balance text-base text-zinc-300 sm:text-lg"
        >
          Minimal silhouettes. Elevated materials. Designed for motion — crafted for the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#shop"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/90 px-8 py-3 text-sm font-medium text-black transition focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-white via-zinc-200 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10">Shop Now</span>
          </a>
          <a
            href="#lookbook"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white/90 backdrop-blur-md transition hover:border-white/40 hover:bg-white/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/70 group-hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.4)]" />
            View Lookbook
          </a>
        </motion.div>
      </motion.div>

      {/* Soft bottom shadow for depth */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
