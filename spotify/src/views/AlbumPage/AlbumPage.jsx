import { useEffect, useState } from "react";
import "./AlbumPage.css";
import { Link, useParams } from "react-router-dom";
import { fetchAlbum } from "../../apicalls";
import SingleSong from "../../components/SingleSong/SingleSong";
const AlbumPage = (props) => {
  const [album, setAlbum] = useState({});
  const params = useParams();
  useEffect(() => {
    fetchAlbum(params.id).then((res) => setAlbum(res));
  }, []);
  return (
    <div className="album__wrap">
      <h2>{album.title}</h2>
      {album?.tracks?.data.map((track) => (
        <SingleSong
          title={track.title}
          artist={track.artist.name}
          duration={track.duration / 60}
        />
      ))}
    </div>
  );
};
export default AlbumPage;
