import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <Link style={{ textDecoration: "none", color: "white" }}>
          Track Tickets
        </Link>
      </div>
      <div className="row p-5" id="supportSearchWrapper">
        <div className="col-6 p-5">
          <h4 classN>
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input
            type="text"
            className="form-control mt-4 mb-3 p-3"
            placeholder="Eg : how do i activate F&O, account opening, etc"
          />
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "20px",
            }}
          >
            Track Account opening
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "20px",
            }}
          >
            Track segement activation
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "20px",
            }}
          >
            Intraday
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "20px",
            }}
          >
            margins
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "20px",
            }}
          >
            Kite user mannual
          </Link>
        </div>
        <div className="col-6 p-5">
          <h4>Featured</h4>
          <ol>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Current Takeovers and Delisting - January 2024
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Latest Intraday leverages - MIS & CO
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
