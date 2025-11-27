import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container text-center p-5 mt-5 border-bottom">
      <h1>Zerodha Products</h1>
      <p className="fs-4 text-muted">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p>
        Check out our{" "}
        <Link className="text-decoration-none">
          {" "}
          investment offerings {"  "}
          <i class="fa-solid fa-arrow-right-long"></i>
        </Link>
      </p>
    </div>
  );
}

export default Hero;
