"use client";
import { useState } from "react";
import type { MouseEventHandler } from "react";

import { LazyImage } from "@/components/LazyImage";

/* Generate a random function between 1 and 123 */
const random = () => Math.floor(Math.random() * 123) + 1;

/* Generate simple unique id */
const generateId = () => Math.random().toString(36).substr(2, 9);

export const ImageList = (): JSX.Element => {
  const [images, setImages] = useState<Array<IImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const newImageItem: IImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([...images, newImageItem]);
    /* window.plausible("add_fox"); */
  };

  return (
    <>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(({ id, url }, index) => (
        <div key={id} className="p-4">
          <LazyImage
            src={url}
            className="rounded bg-gray-300"
            width="320"
            height="auto"
            alt="Random Fox"
            title="Random Fox"
            onLazyLoad={(img) => console.log(`Image #${index} loaded`, img)}
          />
        </div>
      ))}
    </>
  );
};
