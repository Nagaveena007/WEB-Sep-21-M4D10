import "./Artist.css";
import { fetchArtist } from "../../apicalls";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SingleAlbum from "../../components/SingleAlbum/SingleAlbum";
const Artist = () => {
  const [artist, setArtist] = useState({});
  const params = useParams();

  useEffect(() => {
    fetchArtist(params.id).then((res) => setArtist(res));
  }, []);
  return (
    <div className="artist__wrap">
      <h2>Albums</h2>
      <div>
        {artist?.albums?.map((album) => (
          <SingleAlbum src={album.cover_medium} key={album.id} />
        ))}
      </div>
    </div>
  );
};
export default Artist;
