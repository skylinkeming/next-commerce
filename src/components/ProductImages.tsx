"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];

export default function ProductImages() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <div className="w-full h-full relative gap-4">
          <Image
            src={images[index].url}
            alt=""
            fill
            className="object-cover rounded-md"
            sizes="30vw"
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, idx) => (
          <div
            key={img.id}
            className="w-1/4 h-32 relative gap-4 mt-8"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              className="object-cover rounded-md cursor-pointer"
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
