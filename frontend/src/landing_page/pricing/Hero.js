import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mb-4 mt-5">
        <h3 className="mt-5">Pricing</h3>
        <p className="mt-3 mb-5 text-muted fs-5">
          Free equity investments, flat ₹20 intraday and F&O trades.
        </p>
        <div className="row p-5 mt-5 text-center">
          <div className="col-4 p-5">
            {" "}
            <img src="media/images/pricingEquity.svg" alt="" />
            <h1 className="fs-3 mt-3">Free equity delivery</h1>
            <p className="text-muted px-5 pt-3">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5">
            {" "}
            <img src="media/images/intradayTrades.svg" alt="" />
            <h1 className="fs-3 mt-3">Intraday and F&O trades</h1>
            <p className="text-muted px-5 pt-3">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-5">
            {" "}
            <img src="media/images/pricingEquity.svg" alt="" />
            <h1 className="fs-3 mt-3">Free direct MF</h1>
            <p className="text-muted px-5 pt-3">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
