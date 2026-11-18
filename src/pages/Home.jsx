import React, { useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import TrendingGames from "../components/TrendingGames";
import MostPlayed from "../components/MostPlayed";
import Categories from "../components/Categories";
import CtaSection from "../components/CtaSection";

export default function Home({ games, mostPlayed, categories, onAddToCart }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = games.filter(
    (game) =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Features />
      <TrendingGames games={filteredGames} onAddToCart={onAddToCart} />
      <MostPlayed games={mostPlayed} />
      <Categories categories={categories} />
      <CtaSection />
    </>
  );
}