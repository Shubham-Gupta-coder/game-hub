import React, { useEffect, useState } from "react";

const Games = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.rawg.io/api/games?key=3deaa2f5f8e64ccfa91064d33d80d2f5")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.error("Error: ", err));
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="min-h-[15rem] flex flex-col">
          <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
            <div className="flex justify-center">
              <div
                className="animate-spin inline-block w-14 h-14 border-[10px] border-current border-t-transparent text-blue-600 rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <a
            className="flex m-2 flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] col-span-1"
            key={game.id}
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src={game.background_image}
                alt="Image Description"
              />
            </div>
            <div className="p-4 mt-2 md:p-5 flex items-center justify-center flex-col">
              <h3 className="text-lg font-bold text-center text-gray-800 dark:text-white">
                {game.name}
              </h3>
              <select className="w-full py-5 px-2 rounded-md mt-3 text-md border-4 bg-slate-100 border-gray-300 text-gray-600">
                {game.platforms.map(({ platform }) => (
                  <option key={game.id} className="text-white bg-gray-300">
                    {platform.name}
                  </option>
                ))}
              </select>
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Games;
