import { useState } from "react";
import image1 from "./Images/i1.jpg";
import image2 from "./Images/i2.jpg";
import image3 from "./Images/i3.jpg";
import "./home.css";

const Home0 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex + 1 >= images.length ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const previousIndex =
      currentImageIndex - 1 < 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(previousIndex);
  };

  const images = [image1, image2, image3];
  return (
    <div class="slideshow">
      <button onClick={handlePreviousImage}>{"<"}</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <button onClick={handleNextImage}>{">"}</button>
    </div>
  );
};

export default Home0;
