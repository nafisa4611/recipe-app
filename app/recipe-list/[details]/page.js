"use client";

import { useEffect, useState, use } from "react"; // Added 'use'
import ReceipeDetails from "@/components/ui/recipe-list/ReceipeDetails";
import Link from "next/link";
import { ArrowLeft, Home, Share2, Heart } from "lucide-react";
import useFavorites from "@/hooks/useFavorites";

// Better fetch with error handling
async function fetchRecipeDetails(id) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default function RecipeDetailsPage({ params }) {
  // Unwrap params using React's 'use' hook for Next.js 15
  const resolvedParams = use(params); 
  const { favorites, toggleFavorite } = useFavorites();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (resolvedParams.details) { // Check for your folder name [details]
      fetchRecipeDetails(resolvedParams.details).then(setRecipe);
    }
  }, [resolvedParams.details]);

  if (!recipe) return (
    <div className="h-screen flex items-center justify-center font-serif italic text-gray-400">
      Loading your culinary masterpiece...
    </div>
  );

  return (
    <div className="min-h-screen pb-20 dark:bg-background dark:text-foreground bg-[#FBFBFA] text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl flex justify-between items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl px-6 py-3 shadow-lg border border-white/20">
        <Link href="/recipe-list" className="flex items-center gap-2 font-bold text-gray-800 dark:text-gray-100 hover:text-orange-500 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest">{`Back`}</span>
        </Link>

        <div className="flex items-center gap-3">
          <button onClick={() => toggleFavorite(recipe)} className="p-2 hover:scale-110 transition-transform">
            <Heart
              className={`w-6 h-6 ${
                favorites.find((f) => f.id === recipe.id)
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400 dark:text-gray-300"
              }`}
            />
          </button>
          <button className="p-2 hover:text-blue-500">
            <Share2 className="w-5 h-5 text-gray-400 dark:text-gray-300" />
          </button>
          <Link href="/" className="p-2 hover:text-orange-500">
            <Home className="w-5 h-5 text-gray-800 dark:text-gray-100" />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative w-full h-[65vh] overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name || "Recipe"} 
          className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-1000" 
        />
        {/* Added overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FBFBFA] dark:to-background" />
      </header>

      {/* Details */}
      <main className="max-w-6xl mx-auto px-6 mt-12">
        <div className="bg-white dark:bg-gray-900 rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 dark:border-gray-800 -mt-32 relative z-10">
          <ReceipeDetails getRecipeDetails={recipe} />
        </div>
      </main>
    </div>
  );
}