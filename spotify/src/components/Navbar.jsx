import { Row, Col } from "react-bootstrap";
const Navbar = () => {
  return (
    /*  <!-- VERTICAL NAVBAR --> */

    <div className="">
      <div className="row">
        <div className="col-4 horizontalnav" id="">
          <div id="wrapper" class="d-flex">
            <div id="navbar" class="w-15">
              <div class="menu-nav">
                <div class="links1-nav">
                  <div id="logo">
                    <img
                      src="assets/spotify.png"
                      width="150px"
                      height="60px"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="links-nav">
                  <a href="homepage.html">
                    <img
                      src="./assets/home.png"
                      width="22px"
                      height="22px"
                      alt="..."
                    />
                    <a href="homepage.html">
                      <p>Home</p>
                    </a>
                  </a>
                </div>
                <div class="links-nav">
                  <a href="search.html">
                    <img
                      src="./assets/search.png"
                      width="24px"
                      height="24px"
                      alt="..."
                    />
                    <a href="search.html">
                      <p>Search</p>
                    </a>
                  </a>
                </div>
                <div id="yourLibrary" class="links-nav">
                  <a href="album.html">
                    <img
                      src="assets/library.png"
                      width="22px"
                      height="22px"
                      alt="..."
                    />
                    <a href="album.html">
                      <p>Your Library</p>
                    </a>
                  </a>
                </div>
                <div class="links-nav">
                  <a href="#">
                    <img
                      src="assets/creat-playlist.png"
                      width="25px"
                      height="25px"
                      alt="..."
                    />
                    <p>Create Playlist</p>
                  </a>
                </div>
                <div class="links-nav">
                  <a href="artist.html">
                    <img
                      src="assets/liked-song.png"
                      width="25px"
                      height="25px"
                      alt="..."
                    />
                    <a href="artist.html">
                      <p>Liked Songs</p>
                    </a>
                  </a>
                </div>
              </div>
              <hr />
              <div
                id="scrollbar1"
                class="scrollbar sidebar-bottom scrollbar-black bordered-black square"
              >
                <div class="">
                  <div class="links-small-nav">
                    <a href="#">
                      <p>Funky Heavy bluesy</p>
                    </a>
                  </div>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>Your Top Songs 2020</p>
                  </a>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>In love with you</p>
                  </a>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>It is road stewart</p>
                  </a>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>FRANCHISE it ft.Young Thug...</p>
                  </a>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>Your Top Songs 2019</p>
                  </a>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>Palleggio</p>
                  </a>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>This is Joe Bonamassa</p>
                  </a>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>Yacht Rock</p>
                  </a>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>JAZZ in the background</p>
                  </a>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>Cafe Chillout</p>
                  </a>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>Soft Pop Hits</p>
                  </a>
                </div>
                <div class="links-small-nav">
                  <a href="#">
                    <p>Liked Songs</p>
                  </a>
                </div>
              </div>
              <div id="installApp-sticky">
                <i class="fas fa-arrow-alt-circle-down"></i>
                <span>Install App</span>
              </div>
            </div>
          </div>
          {/*     Horizontal navbar */}{" "}
        </div>
        <div className="col-8 horizontalnav" id="">
          <div id="content" class="w-85 h-100">
            <div class="h-100 overflow-auto">
              <nav
                id="horizontal-nav"
                class="navbar navbar-expand-lg sticky-top"
                onscroll="showMenu()"
              >
                <a href="#" id="lessThan" class="previous round ml-3"></a>
                <a href="#" id="greaterThan" class="next round"></a>
                <div class="dropdown">
                  <button
                    class="btn btn-user btn-sm dropdown-toggle justify-content-end mt-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-toggle="dropdown"
                    /*  style={{border-radius: '2rem'}} */
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="covers/Recently-played/le-bask.jpg"
                      height="30px"
                      alt=""
                      id="imgnav"
                      /*  style={{border-radius: '2rem'}} */
                    />
                    <span id="username1"></span>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Account
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="start.html">
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
