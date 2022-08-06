import React, { useEffect, useState } from "react";

const Home = () => {
  const [page1, setPage1] = useState({});
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((movie) => setPage1(movie));
  }, []);

  console.log("what about my data?", page1);

  if (!page1.results) {
    return null;
  }

  const handleClick = () => {
    console.log("Clicked!");
    setLiked(!liked);
  };

  const currentPage = page1.results;
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {currentPage.map((movie) => (
        <div
          className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          key={movie.id}
        >
          <img
            src={BASE_URL + movie.poster_path}
            className="w-full bg-white"
            alt={movie.title}
          />
          <h4 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-[#555] dark:text-white">
            {movie.title}
          </h4>
          <div className="flex flex-row items-center justify-between	">
            <div className="flex flex-row items-center">
              <i className="ion-android-star mx-2"></i>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {movie.vote_average}
              </p>
            </div>
            <div>
              {liked ? (
                <i
                  className="ion-ios-heart mx-2 text-yellow size-lg"
                  onClick={handleClick}
                ></i>
              ) : (
                <i
                  className="ion-ios-heart-outline mx-2 text-yellow size-lg"
                  onClick={handleClick}
                ></i>
              )}
            </div>
          </div>
        </div>
      ))}
      <p>Shout HOME??!</p>
    </div>
  );
};

export default Home;
