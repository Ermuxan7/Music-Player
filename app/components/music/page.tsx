"use client";
import Image from "next/image";
import image from "@/public/Image.png";

const Music = () => {
  return (
    <div className="w-full h-full p-6">
      <Image src={image} alt="image" className="w-full object-cover" />
      <div className="flex flex-col gap-2 mt-3">
        <h3 className="text-2xl text-bold">Lorem ipsum dolor sit amet.</h3>
        <p className="text-gray-400 text-md">Music author</p>
      </div>
    </div>
  );
};

export default Music;
