import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row p-3">
        <div className="col-5 p-3">
          <img src={imageURL} alt="#" />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-6 mt-5 align-items-center">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div className="mb-4">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              className="text-decoration-none"
              style={{ marginLeft: "50px" }}
            >
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="#" />
            </a>
            <a href={appStore} style={{ marginLeft: "30px" }}>
              <img src="media/images/appStoreBadge.svg" alt="#" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
