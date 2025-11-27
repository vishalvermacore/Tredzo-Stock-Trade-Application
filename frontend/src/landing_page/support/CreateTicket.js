import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mb-5">
        <h3 className="mb-5">To create a ticket, select a relevant topic</h3>
        <div className="col-4 mt-4">
          <p className="fs-5 ">
            <i class="fa-solid fa-circle-plus"> </i>
            {"  "}Account Opening
          </p>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Online Account Opening
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Offline Account Opening
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership and HUF Accounts
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Opening
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Opening
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charges at Zerodha
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Zerodha IDFC First Bank 3-in-1 Account
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Getting Started
          </Link>
          <br></br>
        </div>
        <div className="col-4 mt-4">
          <p className="fs-5">
            <i class="fa-solid fa-user"></i> {"  "}Your Zerodha Account
          </p>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Login Credentials
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account Modification and Segment Addition
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            DP ID and bank account details
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Your Profile
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transfer and Conversion of shares
          </Link>
        </div>
        <div className="col-4 mt-4">
          <p className="fs-5">
            <i class="fa-solid fa-chart-column"></i> {"  "}Your Zerodha Account
          </p>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Margin/leverage, Product and Order types
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Kite Web and Mobile
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading FAQs
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Corporate Actions
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Sentinel
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Kite API
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Pi and other platforms
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Stock and ETF investments
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>GTT</Link>
        </div>
        <div className="col-4 mt-4">
          <p className="fs-5">
            <i class="fa-solid fa-folder-closed"></i> {"  "}Funds
          </p>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Adding Funds
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fund Withdrawal
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            eMandates
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Adding Bank Account
          </Link>
        </div>
        <div className="col-4 mt-4">
          <p className="fs-5">
            <i class="fa-solid fa-circle-notch"></i> {"  "}Console
          </p>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Reports
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Ledger
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Portfolio
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            60 Day Challenge
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>IPO</Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Referral Program
          </Link>
        </div>
        <div className="col-4 mt-4">
          <p className="fs-5">
            <i class="fa-solid fa-coins"></i> {"  "}Coin
          </p>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Understanding Mutual Funds
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            About Coin
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Buying and Selling through Coin
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Starting an SIP
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Managing your Portfolio
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Coin App
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Moving to Coin
          </Link>
          <br></br>
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Government Securities
          </Link>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
