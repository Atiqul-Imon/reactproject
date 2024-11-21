import logo from "../assets/sbarilogo.png"

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-sm">
        <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          <img src={logo} alt="Logo" width="auto" height="60" />
        </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
                Navigation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link mx-2 active" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#">
                    Media Coverage
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
