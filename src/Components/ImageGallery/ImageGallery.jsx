import React, { useEffect, useState } from "react";
import "./ImageGallery.css";

const images = [
  "https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function ImageGallery() {
  const [groupSize, setGroupSize] = useState(5); // Default group size for desktop

  // Update group size based on screen width
  useEffect(() => {
    const updateGroupSize = () => {
      const width = window.innerWidth;
      if (width >= 1400) {
        setGroupSize(6); // Desktop
      } else if (width >= 1200) {
        setGroupSize(5); // Tablet
      }else if (width >= 700) {
        setGroupSize(4); // Tablet
      } else {
        setGroupSize(2); // Mobile
      }
    };

    updateGroupSize();
    window.addEventListener("resize", updateGroupSize);

    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

  // Function to group images
  const groupImages = (images, groupSize) => {
    const groupedImages = [];
    for (let i = 0; i < images.length; i += groupSize) {
      groupedImages.push(images.slice(i, i + groupSize));
    }
    return groupedImages;
  };

  const groupedImages = groupImages(images, groupSize);

  return (
    <div className="image-gallery">
      <div className="gallery-div">
        {groupedImages.map((group, index) => (
          <div key={index} className="carousel">
            {group.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`Image ${idx + 1}`}
                className="image-item"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
