import Link from "next/link";
import { Playfair_Display, Inter } from 'next/font/google';
import { ChevronRight, UtensilsCrossed, Sparkles, BookOpen } from "lucide-react";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function Home() {
  return (
    <div className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-[#FBFBFA] text-gray-900`}>

      {/* Hero Section: The Statement Piece */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Pro Background Treatment */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1543353071-873f17a7a088"
            alt="Artistic food spread"
            fill
            className="object-cover scale-105"
          />
          {/* Magazine-style vignette overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FBFBFA]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="uppercase tracking-[0.4em] text-[10px] font-black text-orange-400 mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
            The Art of Gastronomy
          </span>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Cook with <br />
            <span className="italic text-orange-400 font-normal">Intention.</span>
          </h1>

          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
            Discover a curated collection of world-class recipes designed for the modern home kitchen. Simple steps, extraordinary flavors.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Link
              href="/recipe-list"
              className="group flex items-center gap-3 px-10 py-5 bg-orange-500 hover:bg-white hover:text-gray-900 text-white font-bold rounded-2xl transition-all shadow-2xl active:scale-95"
            >
              <span className="uppercase tracking-widest text-xs">Explore Directory</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl transition-all hover:bg-white/20 uppercase tracking-widest text-xs">
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid: The "Curated" Look */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          <div className="group space-y-6">
            <div className="w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-3xl font-black text-gray-900 italic">Chef Curated</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              Every recipe is tested and refined by culinary professionals to ensure restaurant-quality results at home.
            </p>
          </div>

          <div className="group space-y-6">
            <div className="w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-3xl font-black text-gray-900 italic">Nutritious Focus</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              We balance indulgence with health, providing detailed nutritional data for every single meal.
            </p>
          </div>

          <div className="group space-y-6">
            <div className="w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-3xl font-black text-gray-900 italic">Kitchen Mastery</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              Learn the why behind the how with technique-focused instructions and expert cooking tips.
            </p>
          </div>

        </div>
      </section>

      {/* Modern Horizontal Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gray-200" />
      </div>

      {/* Branding Footer Hint */}
      <footer className="py-20 text-center">
        <h2 className="font-serif text-2xl italic text-gray-300">The Kitchen Collective</h2>
      </footer>
    </div>
  );
}