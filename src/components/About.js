import React from "react";

function About({ image, aboutText1, aboutText2}) {
  // Set default image if 'image' prop is not provided
  const defaultImage =
    "https://via.placeholder.com/215"; // Default image URL
  const altText = "blog logo"; // Alt text for the image

  return (
    <aside>
      <img src={image || defaultImage} alt={altText} />
      <div>
            <p>{aboutText1}</p>
            <p >{aboutText2}</p>
      </div>
    </aside>
  );
}

export default About;
