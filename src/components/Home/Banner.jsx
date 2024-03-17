const Banner = () => {
  return (
    <>
      <div
        className="relative h-screen w-full flex items-center justify-center bg-fixed text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/GRbH3qY/3d-electric-car-building.jpg)",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <main className="px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
              <span className="text-custom-red-400 font-bold">
                Discover Your Dream Home
              </span>
              ; Explore Our Listings!
            </h2>
            <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
              Find the perfect property that suits your lifestyle. Whether you
              are looking for a cozy apartment or a spacious family home, Panda
              Estate has a range of options to fulfill your real estate needs.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-custom-red-400 hover:bg-custom-red-500 focus:outline-none focus:border-custom-red-500 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  target="_blank"
                  href="https://youtu.be/MBxyYNE6n5k?si=LaMQsYDlqLjtcC0x"
                  rel="noopener noreferrer"
                >
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-custom-red-500 bg-white hover:text-custom-red-400 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-custom-red-400 transition duration-150 ease-in-out md:py-4 md:px-10">
                    Know More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Banner;
