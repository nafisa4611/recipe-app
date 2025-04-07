import ReceipeDetails from "@/components/ui/recipe-list/receipeDetails";
import Link from "next/link";

async function fetchRecipeDetails(currentRecipeId){
  try{
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
    const data = await apiResponse.json();

    return data;
  }catch(e){
    throw new Error(e);
  }
}

export default async function recipeDetailsPage({params}) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details)

  return (
    <div className="p-4">
      <Link href="/recipe-list" className="text-2xl font-bold text-gray-500 mb-12">
        Go Recipe-List
      </Link>
      <ReceipeDetails getRecipeDetails={getRecipeDetails}/>
    </div>
  )
}

