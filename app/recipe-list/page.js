import RecipeList from "@/components/ui/recipe-list/RecipeList";
import Link from "next/link";
import { ChevronLeft, PlusCircle } from "lucide-react";


import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

async function fetchListofRecipes() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes", {
      next: { revalidate: 3600 }
    });

    if (!apiResponse.ok) throw new Error("Failed to fetch recipes");

    const data = await apiResponse.json();
    return data?.recipes;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default async function RecipeListPage() {
  const recipeList = await fetchListofRecipes();

  return (
    <main className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-[#FBFBFA]`}>
      {/* Editorial Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center text-xs font-black uppercase tracking-widest text-gray-500 hover:text-orange-600 transition-all"
          >
            <div className="p-2 mr-3 bg-gray-50 rounded-full group-hover:bg-orange-100 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </div>
            {`Back to Home`}
          </Link>

          <div className="hidden md:block">
            <span className="font-serif italic text-lg text-gray-400">{`The Kitchen Directory`}</span>
          </div>

          <button className="px-5 py-2 bg-gray-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95 shadow-lg">
            {`My Favorites`}
          </button>
        </div>
      </nav>

      {/* Main Content Animation Wrapper */}
      <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
        <RecipeList recipeList={recipeList} />
      </div>

      {/* Modern Editorial Footer CTA */}
      <footer className="relative mt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                {`Hungry for `}
                <span className="italic text-orange-400">{`Something Else?`}</span>
              </h3>
              <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                {`If our curated list does not have what you are looking for, let us know.`}
                <br />
                {`We are adding global flavors every week.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-white hover:text-gray-900 transition-all shadow-xl">
                  <PlusCircle className="w-4 h-4" />
                  {`Request Recipe`}
                </button>
                <button className="px-8 py-4 bg-white/10 text-white border border-white/20 font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md">
                  {`Browse Categories`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}