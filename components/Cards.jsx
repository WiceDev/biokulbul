import React from "react";

function Cards() {
  const cities = ["istanbul", "ankara", "izmir"];
  return (
    <div className="flex justify-center flex-col items-center py-20 text-black">
      <h3 className="xl:text-5xl lg:text-4xl py-5 text-2xl font-extrabold text-blue-600 ">
        Tüm okullar aynı yerde
      </h3>
      <p className="lg:text-xl px-10 w-full max-w-3xl text-center">
        İstanbul, Ankara ve İzmir' de bulunan on binlerce eğitim kurumu
        arasından sizin kriterlerinize en uygun olanlara rahatlıkla
        ulaşabilirsiniz
      </p>
      <p className="py-2 px-4 lg:text-xl md:text-sm rounded-full  bg-sky-200 text-sky-700 mt-5">
        Tüm okullar
      </p>
      <div className="flex max-w-5xl px-10  w-full xl:gap-10 lg:gap-7 gap-2 items-center justify-center mt-10 ">
        {cities.map((city, index) => {
          return (
            <div
              key={index}
              className="w-full aspect-square hover:scale-105 overflow-hidden active:scale-95 select-none relative hover:shadow-2xl transition-all bg-cover rounded-lg shadow-xl cursor-pointer"
              style={{ backgroundImage: `url(${city}.jpg)` }}
            >
              <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-b from-transparent to-black">
                <div className="w-full h-full text-white lg:text-3xl md:text-xl text-lg font-extrabold capitalize items-end flex md:p-5 p-2">
                  {city}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
