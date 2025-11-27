import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" alt="awards-image" />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Versity, the largest and most comprehensive resource on the web for
            learning about stock markets, is now available within our app. Learn
            at your own pace with easy-to-understand lessons, illustrations, and
            quizzes.
          </p>
          <a href="Versity" style={{ textDecoration: "none" }}>
            Versity <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-5">
            Trading Q&A, our community-driven knowledge platform, is now
            integrated into the app. Get your questions answered by experts and
            fellow traders, and share your knowledge with others.
          </p>
          <a href="Trading" style={{ textDecoration: "none" }}>
            Trading Q&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
