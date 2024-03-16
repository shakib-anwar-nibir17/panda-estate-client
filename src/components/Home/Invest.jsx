import avatar1 from "../../assets/avatar/avatar-1.png";
import avatar2 from "../../assets/avatar/avatar-2.png";
import avatar3 from "../../assets/avatar/avatar-3.png";
import property from "../../assets/images/property (1).jpeg";

const Invest = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="grid grid-cols-1 overflow-hidden rounded-lg sm:grid-cols-2 md:grid-cols-3">
        <div className="md:col-span-1">
          <img src={property} alt="" className="w-full h-full" />
        </div>
        <div className="relative flex-col gap-5 p-5 md:col-span-2 bg-custom-main text-slate-100 flex-align-center md:flex-row">
          <div className="flex-shrink-0 p-3 -mt-16 rounded-lg bg-white/80 backdrop-blur-sm  sm:-ml-72 md:-ml-20 sm:mt-0">
            <div className="flex-shrink-0 flex-align-center">
              <img
                src={avatar1}
                alt=""
                className="flex-shrink-0 w-8 h-8 rounded-full"
              />
              <img
                src={avatar3}
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full "
              />
              <img
                src={avatar2}
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full "
              />
              <img
                src={avatar3}
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full "
              />
              <div className="grid flex-shrink-0 w-8 h-8 -ml-2 text-white border-2 border-white rounded-full bg-red-500 place-items-center ">
                <h1>+5</h1>
              </div>
            </div>
            <h1 className="mt-2 text-custom-main">
              People Successfull Getting Homes
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              You invest in the apartment of your choice
            </h1>
            <div className="mt-5 flex-align-center gap-x-3">
              <div className="px-3 py-2 bg-white rounded-lg flex-align-center gap-x-2 dark:bg-dark-light ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <input
                  type="text"
                  className="bg-transparent outline-none text-slate-700"
                  placeholder="Find your nice home..."
                />
              </div>
              <button className="px-2 py-2 rounded-md btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
