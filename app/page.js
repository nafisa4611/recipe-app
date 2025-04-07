import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Hello from Recipe App</h1>
      <Link
        href="/recipe-list"
        className="text-xl font-medium text-white bg-blue-400 px-6 py-3 rounded-lg hover:bg-cyan-600 transition duration-300"
      >
        Explore Recipes
      </Link>
    </div>
  );
}
