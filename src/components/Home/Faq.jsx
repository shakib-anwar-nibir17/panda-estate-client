import { useState } from "react";

const Faq = () => {
  // add your array of object data
  const array = [1, 2, 3, 4];

  // toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  return (
    <section className="container mx-auto flex justify-center">
      <div className="w-1/3 flex items-center">
        <h1 className="text-4xl text-custom-red-400 font-bold">
          FREQUENTLY ASKED QUESTION !!
        </h1>
      </div>
      <div className="flex justify-center">
        <div className=" w-full rounded-lg py-20 space-y-6 cursor-pointer">
          {/* maping each accordion  */}
          {array.map((arr, idx) => (
            <div
              key={idx}
              onClick={() => handleToggle(idx)}
              className="flex items-center"
            >
              {/* the index div  */}
              <div className="w-16 h-16 bg-custom-red-400 flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                <span>0{idx + 1}</span>
              </div>
              <div className="w-10 h-[2px] bg-custom-red-400 relative">
                <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-custom-red-400"></span>
                <span className="bg-custom-red-400 w-10 h-1"></span>
              </div>
              {/* main accordion div  */}
              <div>
                <div className="max-w-[450px] bg-custom-main shadow-md border-t-[12px] p-3 border-custom-red-400 relative">
                  <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-custom-red-400 absolute top-0 right-0"></span>
                  <h1 className="text-custom-red-400 text-xl text-center">
                    This is my title
                  </h1>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                    isOpen === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-custom-red-400 text-white p-6 text-center text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolor nam ipsam sint illo odio sed voluptates suscipit,
                      rerum esse ratione non alias obcaecati error harum
                      nesciunt. Vitae optio commodi illum!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
