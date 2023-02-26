import React from "react";
import Filter from "./Filter";

function Hero() {
  return (
    <div className="relative w-screen h-[800px]">
      <img
        src="/bg.jpg"
        className="absolute w-full object-cover h-full left-0"
        alt=""
      />
      <div className="w-full h-full p-10 bg-black/70 absolute flex justify-center items-center">
        <div className="max-w-7xl w-full flex flex-col items-center text-center lg:text-left lg:items-start text-primary">
          <h2 className="text-2xl font-semibold lg:text-3xl text-white">
            Aradığınız Okulu Hemen Bulun
          </h2>
          <h1 className="lg:text-6xl text-5xl font-extrabold text-white mt-5">
            BİOKULBUL
          </h1>
          <p className="text-gray-200 lg:text-xl mt-4 max-w-3xl">
            Okul aramak ve bulmak artık çok kolay . İstanbul, Ankara ve İzmir'
            de bulunan on binlerce eğitim kurumu arasından sizin kriterlerinize
            en uygun olanlara rahatlıkla ulaşabilirsiniz
          </p>
          <Filter />
          {/* <div className="w-full flex gap-10 items-center justify-center mt-10">
              <div className="flex items-center justify-center w-24 aspect-square bg-white rounded-2xl"></div>
              <div className="flex items-center justify-center w-24 aspect-square bg-white rounded-2xl"></div>
              <div className="flex items-center justify-center w-24 aspect-square bg-white rounded-2xl"></div>
              <div className="flex items-center justify-center w-24 aspect-square bg-white rounded-2xl"></div>
              <div className="flex items-center justify-center w-24 aspect-square bg-white rounded-2xl"></div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
