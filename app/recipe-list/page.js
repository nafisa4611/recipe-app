import RecipeList from "@/components/ui/recipe-list/RecipeList";
import Link from "next/link";

async function fetchListofRecipes(){
  try{
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();

    return data?.recipes;
  }catch(e){
    throw new Error(e);
  }
}

export default async function recipeListPage() {
  const recipeList = await fetchListofRecipes()

  return (
    <div className="p-4">
      <Link href="/" className="text-2xl font-bold text-gray-500 mb-12">Home</Link>
      <RecipeList recipeList={recipeList}/>
    </div>
  )
}
