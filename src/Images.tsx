import { Img, staticFile, useCurrentFrame } from "remotion";
import React from "react";
import { AudioFile } from "./Audio";
import { Intro } from "./Intro";

const IMAGES_COUNT = 5;

export const Images: React.FC = () => {
  const frame = useCurrentFrame();
  const isIntro = frame <= 100;

  // Calculate the current image index based on the current frame and the duration of each image
  const currentImageIndex = Math.floor(frame / (25 * IMAGES_COUNT));

  // Calculate the opacity of the current image based on the current frame and the duration of each image
  const currentImageOpacity = (frame % (25 * IMAGES_COUNT)) / (25 * IMAGES_COUNT);

  // Calculate the opacity of the previous image based on the current frame and the duration of each image
  const prevImageOpacity = 1 - currentImageOpacity;

  // Render the current image and the previous image with their respective opacity values
  return (
    <>
      {isIntro ? (
        <Intro />
      ) : (
        <div style={{ background: "linear-gradient(to bottom, #000000, #000000)" }}>
          <Img
            src={staticFile(`image${currentImageIndex}.jpg`)}
            style={{
              opacity: currentImageOpacity,
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
              width: "100%",
            }}
          />
          <Img
            src={staticFile(`image${(currentImageIndex + IMAGES_COUNT - 1) % IMAGES_COUNT}.jpg`)}
            style={{ opacity: prevImageOpacity }}
          />
          <AudioFile />
        </div>
      )}
    </>
  );
};
