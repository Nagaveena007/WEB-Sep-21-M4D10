import { useEffect, useState } from "react";
import Movie from "./Movies";

const Home = () => {
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState([]); // comments will go here

  useEffect(() => {
    fetchImages();
  }, []);
  const fetchImages = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search/?q=queen",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2MzcyNDQ1NjksImV4cCI6MTYzODQ1NDE2OX0.AD4TW8bRFhxmk9LhiA4t4Ue5P1kS6KSGk4QbaEWqTdU",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let movies = await response.json();
        setMovies(movies);
        setIsError(false);
      } else {
        console.log("error");
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Good Morning</h1>
      </div>

      <div className="row">
        {movies.map((movies) => (
          <Movie movies={movies} key={movies.id} />
        ))}
      </div>
    </div>
  );
};
export default Home;

{
  /*    <div className="box_image">
     <img src={movies.album.cover_medium} alt="..." />
   </div>
   <div className="box_title">{movies.album.title}</div>
   <div className="box col-md-2 col-sm-6"></div> */
}
