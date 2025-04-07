

export default function RecipeDetails({ getRecipeDetails }) {
    return (
      <div>
        <div className="p-6 mx-auto lg:max-w-6xl md:max-w-2xl">
            
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipe Details</h2>
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="w-full lg:sticky top-0 sm:flex gap-2">
              <img
                src={getRecipeDetails?.image}
                alt={getRecipeDetails?.name}
                className="w-4/5 rounded object-cover"
              />
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {getRecipeDetails?.name}
              </h1>
  
              {/* Ingredients handling */}
              <h3 className="text-lg font-bold text-gray-900 mt-4">Ingredients:</h3>
              {Array.isArray(getRecipeDetails?.ingredients) ? (
                <ul className="list-decimal pl-6">
                  {getRecipeDetails?.ingredients.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg text-gray-600">{getRecipeDetails?.ingredients}</p>
              )}
  
              {/* Instructions handling */}
              <h3 className="text-lg font-bold text-gray-900 mt-4">Instructions:</h3>
              {Array.isArray(getRecipeDetails?.instructions) ? (
                <ol className="list-decimal pl-6">
                  {getRecipeDetails?.instructions.map((step, index) => (
                    <li key={index} className="text-gray-600">{step}</li>
                  ))}
                </ol>
              ) : (
                <p className="text-lg text-gray-600">{getRecipeDetails?.instructions}</p>
              )}
  
              {/* Meal Type */}
              <div className="flex flex-wrap gap-4 mt-5">
                <h3 className="text-lg font-bold text-gray-900 mt-4">Meal Type: {getRecipeDetails?.mealType?.[0]}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  