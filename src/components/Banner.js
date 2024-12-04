import React from "react";
import ImageComponent from "./Image";
import "./Banner.css";

function Banner({ slide, slides, onThumbnailClick, activeIndex }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${slide.background})` }}
    >
      <div className="gradient-overlay-horizontal"></div>
      <div className="gradient-overlay-vertical"></div>
      <div className="content">
        <h4 className="more-from">MORE FROM RICO THE DOG</h4>
        <span className="badge">RICO IS BACK!</span>
        <h1 className="main-title">RICOBOT</h1>
        <p className="paragraph">
          Charge into a brand-new supersized adventure with RICO across 50
          exciting and diverse worlds, available now on PS5!
        </p>
        <button className="cta-button">
          LEARN MORE
        </button>
        <div className="thumbnail-container">
          {slides.map((s, index) => (
            <div key={index} className={`image-container ${index === activeIndex ? "active" : ""}`}>
              <ImageComponent
                src={s.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === activeIndex ? "active" : ""}`}
                onClick={() => onThumbnailClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
      {slide.foreground && (
        <div className="image-section">
          <ImageComponent
            src={slide.foreground}
            alt="Rico the Dog"
            className="foreground-image"
          />
        </div>
      )}
    </div>
  );
}

export default Banner;
