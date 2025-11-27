import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#fff" }}
      >
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "25%" }}
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav my-lg-0">
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    SignUp
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/product"
                  >
                    Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/support"
                  >
                    Support
                  </Link>
                </li>
                <li class="nav-item">
                  <i
                    class="fa-solid fa-bars"
                    style={{ marginTop: "13px", marginLeft: "30px" }}
                  ></i>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
