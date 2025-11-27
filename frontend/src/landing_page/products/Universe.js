import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mb-4">
        <h3 className="mt-5">The Zerodha Universe</h3>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>

        <div className="col-4 p-4">
          {" "}
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={{ width: "50%" }}
          />
          <p className="text-muted px-5 pt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-4 ">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ width: "60%" }}
          />
          <p className=" text-muted px-5 pt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-4 ">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={{ width: "50%" }}
          />
          <p className="text-muted px-5 pt-3">
            India's first platform to offer direct gold investments with zero
            making charges, storage fees, or hidden costs.
          </p>
        </div>
        <div className="col-4 p-4 ">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase" />
          <p className=" text-muted px-5 pt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-4 ">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={{ width: "30%" }}
          />
          <p className="text-muted px-5 pt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 p-4 ">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={{ width: "40%" }}
          />
          <p className="text-muted px-5 pt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <button
          type="button"
          class="btn btn-primary p-2 fs-5 mb-5 mt-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
export default Universe;
