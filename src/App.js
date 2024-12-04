import React, { useState } from "react";
import Banner from "./components/Banner";

const slides = [
  {
    background: "assets/1-background.png",
    foreground: "assets/1-foreground-cutout.png",
    thumbnail: "assets/1-thumbnail.png",
  },
  {
    background: "assets/2-background.png",
    thumbnail: "assets/2-thumbnail.png",
  },
  {
    background: "assets/3-background.png",
    thumbnail: "assets/3-thumbnail.png",
  },
  {
    background: "assets/4-background.png",
    thumbnail: "assets/4-thumbnail.png",
  },
  {
    background: "assets/5-background.png",
    thumbnail: "assets/5-thumbnail.png",
  },
  {
    background: "assets/6-background.png",
    thumbnail: "assets/6-thumbnail.png",
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="App">
      <Banner
        slide={slides[currentSlide]}
        slides={slides}
        onThumbnailClick={handleThumbnailClick}
        activeIndex={currentSlide}
      />
    </div>
  );
}

export default App;
