import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Monolith Puffer",
    price: "$380",
    image:
      "https://images.unsplash.com/photo-1548883354-94bcfe321c99?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Spectra Hoodie",
    price: "$160",
    image:
      "https://images.unsplash.com/photo-1520975922327-c073f0a7d3a1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Vector Cargo",
    price: "$210",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Aero Sneaker",
    price: "$240",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Halo Tee",
    price: "$75",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Trace Jacket",
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function CollectionGrid() {
  return (
    <section id="shop" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Collection</h2>
            <p className="mt-2 max-w-prose text-sm text-zinc-400">
              Curated essentials with architectural lines and premium construction.
            </p>
          </div>
          <a href="#" className="text-sm text-zinc-300 underline-offset-4 hover:underline">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 backdrop-blur-[1px] transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-md">
                    {p.price}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs backdrop-blur hover:bg-white/20">
                    Quick View
                  </button>
                  <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow hover:bg-zinc-100">
                    Add to Bag
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
