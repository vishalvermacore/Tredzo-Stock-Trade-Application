import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-1 mb-5">Trust with confidence</h1>
          <h2 className="fs-3">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customer trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-3">No spam or gimmicks</h2>
          <p className="text-muted">
            No spam or gimmicks. We believe in building long-term relationships
            with our customers. High quality service and customer support is our
            priority.
          </p>
          <h2 className="fs-3">The Zerodha universe</h2>
          <p className="text-muted">
            We have built a complete ecosystem around Zerodha to help you invest
            better. From educational initiatives to powerful trading platforms,
            we have you covered.
          </p>
          <h2 className="fs-3">Do better with money</h2>
          <p className="text-muted">
            We believe everyone should have access to the best financial
            services. Our mission is to make investing and trading accessible to
            all.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            style={{ width: "90%" }}
            alt="stats-image"
          />
          <div className="text-center">
            <a
              href=" Explore our Products"
              className="mx-5"
              style={{ textDecoration: "none" }}
            >
              Explore our Products <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="Try Kite demo" style={{ textDecoration: "none" }}>
              Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
