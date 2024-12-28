"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductImages({ items }: { items: any }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <div className="w-full h-full relative gap-4">
          <Image
            src={items[index].image?.url}
            alt=""
            fill
            className="object-cover rounded-md"
            sizes="30vw"
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item: any, idx: number) => (
          <div
            key={item._id}
            className="w-1/4 h-32 relative gap-4 mt-8"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={item.image?.url}
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
