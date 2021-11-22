import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMusic } from "../../apicalls";
import Header from "../../components/Header/Header";
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum";
import "./Home.css";

const Home = () => {
  const [greenDay, setGreenDay] = useState([]);
  const [oliviaRodrigo, setOliviaRodrigo] = useState([]);
  useEffect(() => {
    fetchMusic("green day").then((res) => setGreenDay(res));
    fetchMusic("olivia Rodrigo").then((res) => setOliviaRodrigo(res));
  }, []);
  return (
    <div className="home__wrap">
      <Header />
      {/* section1 */}
      <h2>Time machine</h2>
      <div className="home__line">
        {greenDay &&
          greenDay.slice(0, 6).map((song) => (
            <Link to={"album/" + song.album.id}>
              {" "}
              <SingleAlbum src={song.album.cover_medium} key={song.id} />
            </Link>
          ))}
      </div>
      {/* section2 */}
      <h2>New releases</h2>
      <div className="home__line">
        {oliviaRodrigo &&
          oliviaRodrigo.slice(0, 6).map((song) => (
            <Link to={"album/" + song.album.id}>
              <SingleAlbum src={song.album.cover_medium} key={song.id} />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Home;
