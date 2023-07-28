import React from "react";

export default function Cards({ image, genres, title, language}) {
  
  return (
    <>
      
        <div className=" cursor-pointer ms-4 mt-5 mb-20 w-[15rem] h-[15rem] rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-lg w-full h-full object-cover hover:scale-90 transition-all duration-500"
            src={image}
            alt="card_img"
          />
          <div className="">
            <p className="mt-2 mb-2  text-lg font-bold text-black ">{title}</p>
            <p className=" text-normal  text-gray-800 ">
              {genres.toString().split("")}
            </p>
            <p className="mt-2 mb-4 text-normal text-gray-800 ">{language}</p>
          </div>
        </div>

    </>
  );
}
