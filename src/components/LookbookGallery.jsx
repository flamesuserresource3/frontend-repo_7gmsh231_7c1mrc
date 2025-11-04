import { motion } from "framer-motion";

const shots = [
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520975922327-c073f0a7d3a1?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop",
];

export default function LookbookGallery() {
  return (
    <section id="lookbook" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Lookbook</h2>
            <p className="mt-2 max-w-prose text-sm text-zinc-400">Cinematic frames from the season campaign.</p>
          </div>
        </div>

        <div className="relative">
          <motion.div
            className="flex cursor-grab gap-6 active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {shots.map((src, i) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="group relative aspect-[3/4] w-[70vw] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl sm:w-[40vw] lg:w-[28vw]"
              >
                <img src={src} alt="look" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
