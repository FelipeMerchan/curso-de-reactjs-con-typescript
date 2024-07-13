"use client";
import { useState } from "react";

import { RandomFox } from "@/components/RandomFox";

/* Generate a random function between 1 and 123 */
const random = () => Math.floor(Math.random() * 123) + 1;

export const ImageList = (): JSX.Element => {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <>
      {images.map((image, index) => (
        <div key={index} className="p-4">
          <RandomFox image={image} />
        </div>
      ))}
    </>
  );
};
