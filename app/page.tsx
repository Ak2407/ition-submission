"use client";

import Filter from "@/components/Filter";
import Movie from "@/components/Movie";
import data from "@/data.json";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [movies] = useState(data);
  const [filteredMovies, setFilteredMovies] = useState(data);

  return (
    <div className="flex  items-center flex-col gap-10">
      <h1 className="text-5xl text-center font-black mt-4 text-slate-900">
        Movie Showcase
      </h1>
      <div className="  w-[91%] ">
        <Filter movies={movies} setFilter={setFilteredMovies} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 w-[95%]">
        {filteredMovies.map((movie) => {
          return (
            <Link href={movie.imdbmovieid}>
              <Movie
                title={movie.movietitle}
                thumbnail={
                  movie.moviemainphotos.length === 0
                    ? "/blank.jpg"
                    : movie.moviemainphotos[0]
                }
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
