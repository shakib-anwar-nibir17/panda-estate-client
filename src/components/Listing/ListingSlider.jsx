import { useState } from "react";

const ListingSlider = (item) => {
  const [sliders, setSliders] = useState([item]);
  const [currentSlider, setCurrentSlider] = useState(0);

  return (
    <div className="flex flex-row-reverse justify-between">
      <div
        className="w-full h-72 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${item[currentSlider]})` }}
      >
        {/* text container here */}
      </div>
      {/* slider container */}
      <div className="flex flex-col justify-center items-center gap-3 p-2">
        {/* item */}
        {sliders.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide}
            className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${
              currentSlider === inx ? "border-2 border-black p-px" : ""
            } rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={slide}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingSlider;
