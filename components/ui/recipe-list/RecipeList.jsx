import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";

export default function RecipeList({ recipeList }) {
  return (
    <div className="bg-[#FBFBFA] min-h-screen pb-20 font-sans">
      {/* Search & Header Section */}
      <header className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
            {`Handpicked Collections`}
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-gray-900 mb-8 tracking-tight">
            {`Our `}
            <span className="italic text-gray-400">{`Recipes`}</span>
          </h2>
          
          {/* Pro Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
            </div>
            <input 
              type="text"
              placeholder="Search by ingredient, cuisine, or name..."
              className="w-full bg-white border border-gray-100 py-5 pl-16 pr-6 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-700 font-medium"
            />
            <div className="absolute inset-y-2 right-2">
              <button className="h-full px-6 bg-gray-900 text-white rounded-full flex items-center gap-2 hover:bg-orange-600 transition-all active:scale-95">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">{`Filters`}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-6">
          <div className="flex gap-8">
            <button className="text-sm font-black uppercase tracking-widest text-gray-900 border-b-2 border-orange-500 pb-1">{`All`}</button>
            <button className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">{`Popular`}</button>
            <button className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">{`Newest`}</button>
          </div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden md:block">
            {`${recipeList?.length || 0} Curated Dishes`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {recipeList && recipeList.length > 0 ? (
            recipeList.map((recipe) => (
              <Link href={`/recipe-list/${recipe.id}`} key={recipe.id} className="group block">
                <article className="relative">
                  {/* Image with Custom Border Radius */}
                  <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    {/* Glassmorphism Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between shadow-lg">
                        <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">
                          {recipe.cuisine}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500 text-xs">{`★`}</span>
                          <span className="text-xs font-black text-gray-900">{recipe.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-6 px-2 text-center">
                    <h3 className="font-serif text-2xl font-black text-gray-900 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                      {recipe.name}
                    </h3>
                    <div className="mt-3 flex items-center justify-center gap-3">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {recipe.difficulty}
                      </span>
                      <span className="w-1 h-1 bg-gray-200 rounded-full" />
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {`${recipe.caloriesPerServing} kcal`}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-32 text-center">
              <p className="text-2xl font-serif italic text-gray-400">
                {`Empty kitchen... try searching for something else.`}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}