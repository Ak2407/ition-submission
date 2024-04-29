"use client";

import { SlidersHorizontal } from "lucide-react";

import { Country } from "./Country";
import { Language } from "./Language";
import { Genre } from "./Genre";
import { useEffect, useState } from "react";

interface FilterProps {
  movies: string[];
  setFilter: (filter: string) => void;
}

const Filter = ({ setFilter, movies }: FilterProps) => {
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");

  function capitalize(words) {
    var separateWord = words.toLowerCase().split(" ");
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(" ");
  }

  useEffect(() => {
    if (country === "") {
      console.log(movies);
      setFilter(movies);
      return;
    }

    const filterCountry = capitalize(country);
    console.log(filterCountry);

    const filteredMovies = movies.filter((movie) =>
      movie.moviecountries.includes(filterCountry),
    );
    console.log(filteredMovies);
    setFilter(filteredMovies);
  }, [country, movies]);

  useEffect(() => {
    if (genre === "") {
      setFilter(movies);
      return;
    }

    const filterGenre = capitalize(genre);

    const filteredMovies = movies.filter((movie) =>
      movie.moviegenres.includes(filterGenre),
    );
    setFilter(filteredMovies);
  }, [genre, movies]);

  useEffect(() => {
    if (language === "") {
      setFilter(movies);
      return;
    }

    const filterLanguage = capitalize(language);

    const filteredMovies = movies.filter((movie) =>
      movie.movielanguages.includes(filterLanguage),
    );
    setFilter(filteredMovies);
  }, [language, movies]);

  return (
    <div className="flex gap-4 items-center justify-start">
      <SlidersHorizontal size={20} className="hidden lg:inline-block" />
      <h1 className="text-xl hidden lg:inline-block">Filters : </h1>
      <Country setCountry={setCountry} />
      <Language setLanguage={setLanguage} />
      <Genre setGenre={setGenre} />
    </div>
  );
};

export default Filter;
