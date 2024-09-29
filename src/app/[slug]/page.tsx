import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";
import React from "react";

export default function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, modi
          unde! Maiores pariatur, quos quis dignissimos voluptas voluptate
          voluptatem, dolores at odio perferendis ex mollitia nihil,
          consequuntur voluptatibus aliquam eligendi!
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="text-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProduct />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            eligendi amet eveniet at, molestias autem corrupti nulla! Doloremque
            officiis possimus quam eveniet dolorem id provident molestiae omnis!
            Molestias, veritatis alias?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            eligendi amet eveniet at, molestias autem corrupti nulla! Doloremque
            officiis possimus quam eveniet dolorem id provident molestiae omnis!
            Molestias, veritatis alias?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            eligendi amet eveniet at, molestias autem corrupti nulla! Doloremque
            officiis possimus quam eveniet dolorem id provident molestiae omnis!
            Molestias, veritatis alias?
          </p>
        </div>
      </div>
    </div>
  );
}
