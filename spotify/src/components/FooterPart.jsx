import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsPlayCircleFill,
  BsFillVolumeUpFill,
  BsDisplayFill,
} from "react-icons/bs";
import { CgPlayBackwards, CgPlayForwards, CgPlayList } from "react-icons/cg";

const FooterPart = () => {
  return (
    <footer className="mt-2">
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="songInfo col-md-3 pt-4">
            <div className="box1">
              <div className="box_image">
                <img
                  src="covers\burning-jazz-rock.jpg"
                  alt="..."
                  width="60px"
                />
              </div>
              <span className="box_title">Burning jazz rock- 2010 </span>
            </div>
          </div>
          <div className="col-md-7">
            <div className="icons">
              <CgPlayBackwards />

              <BsPlayCircleFill />
              <CgPlayForwards />
            </div>
            <input
              type="range"
              name="range"
              id="myProgressBar"
              className="bg-secondary"
              min="0"
              value="0"
              max="100"
            />
          </div>
          <div className="icons1 col-md-2">
            <CgPlayList />
            <BsDisplayFill />
            <BsFillVolumeUpFill />
            <div className="slidecontainer">
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                className="slider"
                id="myRange"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterPart;
