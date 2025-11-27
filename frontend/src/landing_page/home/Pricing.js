import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            Our pricing plans are designed to fit your needs and budget. Choose
            the plan that works best for you and enjoy premium features without
            breaking the bank.
          </p>
          <a href="See pricing" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and <br></br>direct mutual funds.
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
