import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 text-center border-top">
        <div className="col-8">
          <Link className="text-decoration-none">
            {" "}
            <h3 className="mb-4 fs-5">Brokerage calculator</h3>
          </Link>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5" }}
            className="text-muted"
          >
            <li>Call & Trade: ₹20 per trade (minimum ₹20)</li>
            <li>Digital contact notes will be sent via e_mail</li>
            <li>Physical contract notes will be charged at ₹50 per trade</li>
            <li>Demat account maintenance charges: ₹300 per annum + GST</li>
            <li>Pledge Creation / Closure: ₹25 per request</li>
            <li>
              If the account is inactive for more than 6 months, an inactivity
              charge of ₹100 + GST will be levied
            </li>
          </ul>
        </div>
        <div className="col-4">
          <Link className="text-decoration-none">
            {" "}
            <h3 className="mb-4 fs-5">List of charges</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
