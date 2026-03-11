"use client";

import { useState, useEffect } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const toggleFavorite = (recipe) => {
    let updated;
    if (favorites.find((f) => f.id === recipe.id)) {
      updated = favorites.filter((f) => f.id !== recipe.id);
    } else {
      updated = [...favorites, recipe];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return { favorites, toggleFavorite };
}