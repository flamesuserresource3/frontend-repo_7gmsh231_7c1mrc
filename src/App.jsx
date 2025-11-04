import Hero from "./components/Hero";
import CollectionGrid from "./components/CollectionGrid";
import LookbookGallery from "./components/LookbookGallery";
import BrandStoryContact from "./components/BrandStoryContact";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      {/* Sticky, minimal nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-lg tracking-tight">VANTA</a>
          <nav className="hidden gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#shop" className="hover:text-white">Shop</a>
            <a href="#lookbook" className="hover:text-white">Lookbook</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#shop" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow hover:bg-zinc-100">Shop Now</a>
        </div>
      </header>

      <main>
        <Hero />
        <CollectionGrid />
        <LookbookGallery />
        <BrandStoryContact />
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} VANTA — All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
