import Image from "next/image";
import Link from "next/link";

interface MovieProps {
  title: string;
  thumbnail: string;
  key: string;
}

const Movie = ({ title, thumbnail, key }: MovieProps) => {
  return (
    <div className="flex flex-col items-center justify-between hover:bg-gray-100 cursor-pointer p-4 transition ease-in-out duration-300 rounded-xl">
      <Image
        src={thumbnail}
        alt={title}
        width={150}
        height={200}
        className="min-h-[220px] min-w-[250px] md:min-w-[150px] rounded-lg"
      />
      <div>
        <h2 className="text-md font-semibold text-center ">{title}</h2>
      </div>
    </div>
  );
};

export default Movie;
