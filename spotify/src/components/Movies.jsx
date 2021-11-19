const Movie = ({ movie }) => {
  return (
    <>
    
      <div className="box_image">
        <img src={movie.album.cover_medium} alt="..." />
      </div>
      <div className="box_title">{movie.album.title}</div>
      <div className="box col-md-2 col-sm-6"></div>
    </>
  );
};
export default Movie;
