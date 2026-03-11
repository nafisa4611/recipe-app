import { Check } from "lucide-react";

export default function ReceipeDetails({ getRecipeDetails }) {
  if (!getRecipeDetails) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

      {/* Sidebar: Ingredients */}
      <aside className="lg:col-span-4 lg:sticky lg:top-32 order-2 lg:order-1">
        <div className="relative p-8 rounded-[2rem] bg-[#FAFAF9] dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-serif text-2xl font-black text-gray-900 dark:text-gray-100">Ingredients</h3>
            <span className="text-[10px] font-black bg-white dark:bg-gray-900 px-3 py-1 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 text-gray-400 dark:text-gray-500 uppercase">
              {`${getRecipeDetails.ingredients?.length} Total`}
            </span>
          </div>

          <ul className="space-y-6">
            {getRecipeDetails.ingredients?.map((ingredient, i) => (
              <li key={i} className="group flex items-start gap-4 cursor-pointer">
                <div className="mt-1 w-5 h-5 rounded-full border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 transition-all">
                  <Check className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {ingredient}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Column: Instructions */}
      <div className="lg:col-span-8 order-1 lg:order-2 space-y-16">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 py-8 border-y border-gray-100 dark:border-gray-700">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Active Prep</p>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{`${getRecipeDetails.prepTimeMinutes} Mins`}</p>
          </div>
          <div className="text-center md:text-left border-x border-gray-100 dark:border-gray-700 px-4">
            <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Total Cook</p>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{`${getRecipeDetails.cookTimeMinutes} Mins`}</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Yields</p>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{`${getRecipeDetails.servings} Servings`}</p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          <h2 className="font-serif text-4xl font-black text-gray-900 dark:text-gray-100">The Preparation</h2>
          <div className="space-y-16">
            {getRecipeDetails.instructions?.map((step, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="flex-none">
                  <span className="text-7xl font-serif font-black text-gray-100 dark:text-gray-600 group-hover:text-orange-100 transition-colors leading-none">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-[1.6] font-medium">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="pt-12 flex flex-wrap gap-3">
          {getRecipeDetails.tags?.map(tag => (
            <span key={tag} className="px-5 py-2 bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 text-[10px] font-bold uppercase tracking-widest rounded-full hover:text-orange-500 transition-colors cursor-default">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}