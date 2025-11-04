import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";

export default function BrandStoryContact() {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_80%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-3xl font-semibold">About the Brand</h3>
            <p className="mt-4 text-zinc-300">
              We merge luxury craftsmanship with progressive design. Our garments explore contrast — soft and
              structural, minimal and expressive — engineered to move with you through city and screen.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <ol className="space-y-4 text-sm text-zinc-300">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-white/70" /> 2018 — Studio founded with a focus on modular silhouettes.</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-white/70" /> 2020 — First runway capsule blending tech textiles.</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-white/70" /> 2023 — Global pop-ups and digital experiences.
                </li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-1 -z-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent blur-2xl" />
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative z-10 space-y-4 rounded-3xl border border-white/10 bg-zinc-900/60 p-6 shadow-xl backdrop-blur"
            >
              <h4 className="font-display text-xl">Contact</h4>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-400 focus:border-white/30 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-400 focus:border-white/30 focus:outline-none"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-400 focus:border-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-100"
              >
                Send Message
              </button>

              <div className="mt-6 flex items-center gap-4 text-sm text-zinc-300">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                  <Instagram size={18} /> Instagram
                </a>
                <a href="mailto:studio@example.com" className="inline-flex items-center gap-2 hover:text-white">
                  <Mail size={18} /> studio@example.com
                </a>
              </div>

              <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title="Instagram Embed"
                  src="https://widgets.sociablekit.com/instagram-feed/iframe/1704"
                  className="h-64 w-full"
                />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
