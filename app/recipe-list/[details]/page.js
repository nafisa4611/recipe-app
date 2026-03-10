import ReceipeDetails from "@/components/ui/recipe-list/ReceipeDetails";
import Link from "next/link";
import { ArrowLeft, Home, Share2, Heart } from "lucide-react";

import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`, {
      next: { revalidate: 3600 } 
    });
    return apiResponse.ok ? await apiResponse.json() : null;
  } catch (e) {
    return null;
  }
}

export default async function RecipeDetailsPage({ params }) {
  const { details } = await params;
  const getRecipeDetails = await fetchRecipeDetails(details);

  if (!getRecipeDetails) return (
    <div className="h-screen flex items-center justify-center">
      <Link href="/recipe-list" className="text-orange-500 underline">Recipe not found. Go back.</Link>
    </div>
  );

  return (
    <div className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-[#FBFBFA] pb-20`}>
      
      {/* Floating Modern Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-3xl px-6 py-3 flex items-center justify-between">
          <Link href="/recipe-list" className="group flex items-center gap-2 font-bold text-gray-800">
            <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-widest hidden sm:block">Back</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Heart className="w-5 h-5" /></button>
            <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors"><Share2 className="w-5 h-5" /></button>
            <div className="w-px h-4 bg-gray-200 mx-1"></div>
            <Link href="/" className="p-2 text-gray-800 hover:text-orange-500"><Home className="w-5 h-5" /></Link>
          </div>
        </div>
      </nav>

      {/* Magazine Hero Section */}
      <header className="relative w-full h-[65vh] overflow-hidden">
        <img 
          src={getRecipeDetails.image} 
          alt={getRecipeDetails.name} 
          className="w-full h-full object-cover scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#FBFBFA]" />
        
        {/* Overlapping Header Card */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl">
          <div className="bg-white rounded-t-[3rem] p-8 md:p-16 text-center shadow-sm border-x border-t border-gray-50">
            <div className="flex justify-center gap-3 mb-6">
              <span className="px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-tighter">
                {getRecipeDetails.cuisine}
              </span>
              <span className="px-4 py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] font-black uppercase tracking-tighter">
                {getRecipeDetails.difficulty}
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-gray-900 leading-[1.1] mb-6 tracking-tight">
              {getRecipeDetails.name}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
              <span>★ {getRecipeDetails.rating}</span>
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
              <span>{getRecipeDetails.caloriesPerServing} Calories</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-b-[3rem] p-8 md:p-16 -mt-1 shadow-sm border-x border-b border-gray-50">
           <ReceipeDetails getRecipeDetails={getRecipeDetails} />
        </div>
      </main>
    </div>
  );
}