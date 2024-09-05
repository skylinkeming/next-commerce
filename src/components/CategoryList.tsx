import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryList() {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link
          className="flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6 w-full"
          href="/list?cat=test"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          className="flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6 w-full"
          href="/list?cat=test"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          className="flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6 w-full"
          href="/list?cat=test"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          className="flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6 w-full"
          href="/list?cat=test"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          className="flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6 w-full"
          href="/list?cat=test"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
}
