import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container my-5">
      <div className="row p-3 align-items-center">
        <div className="col-5 p-6 mt-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div className="mb-4">
            <a href={learnMore} className="text-decoration-none">
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4 ">
          <img src={imageURL} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
