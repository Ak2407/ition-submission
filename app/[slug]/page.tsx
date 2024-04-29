import { Separator } from "@/components/ui/separator";
import data from "@/data.json";
import Image from "next/image";

const MovieDetail = ({ params }) => {
  const movie = data.find((m) => m.imdbmovieid === params.slug);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <div className="lg:hidden flex flex-col gap-8 p-8 ">
        <h1 className="text-4xl text-center font-bold ">{movie.movietitle}</h1>

        <div className="flex items-center justify-center">
          <Image
            src={movie.moviemainphotos[0]}
            alt={movie.movietitle}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <Separator />

        <div className="flex flex-col gap-2">
          <h1 className="text-lg ">About</h1>
          <p className="text-lg font-light text-[#8A8686]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg ">Genre</h1>
          <p className="text-lg font-light text-[#8A8686]">
            {movie.moviegenres.join(", ")}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg ">Countries Available In</h1>
          <p className="text-lg font-light text-[#8A8686]">
            {movie.moviecountries.join(", ")}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg ">Languages Available In</h1>
          <p className="text-lg font-light text-[#8A8686]">
            {movie.movielanguages.join(", ")}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex gap-8 h-screen p-20 ">
        <div className="flex items-center justify-center">
          <Image
            src={movie.moviemainphotos[0]}
            alt={movie.movietitle}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-col gap-10 w-[50%]">
          <h1 className="text-6xl font-bold">{movie.movietitle}</h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg ">About</h1>
            <p className="text-lg font-light text-[#8A8686]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg ">Genre</h1>
            <p className="text-lg font-light text-[#8A8686]">
              {movie.moviegenres.join(", ")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg ">Countries Available In</h1>
            <p className="text-lg font-light text-[#8A8686]">
              {movie.moviecountries.join(", ")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg ">Languages Available In</h1>
            <p className="text-lg font-light text-[#8A8686]">
              {movie.movielanguages.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
