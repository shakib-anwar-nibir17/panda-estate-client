import "./style/subscribe.css";

const Subscribe = () => {
  return (
    <section className="px-2 py-40">
      <div className="container relative mx-auto flex flex-col justify-center content-center px-12 py-20 bg-gradient-to-tl from-custom-red-900 to-custom-red-500 rounded shadow-lg overflow-hidden crossing-shapes">
        <div className="copy-container text-center mb-5 z-10">
          <p className="text-gray-50 text-4xl font-bold">
            Get Exclusive Offers
          </p>
          <p className="text-gray-50 text-4xl font-bold mb-8 sm:mb-4">
            Get notified about Supportflow today.
          </p>
          <p className="text-gray-100 leading-tight text-base max-w-lg mx-auto ">
            Have our Agents help you guide through your unique experience to
            make your dream house come true.
          </p>
        </div>
        <div className="button-container mx-auto mt-8 sm:mt-0 z-10">
          <div className="inline">
            <label className="" htmlFor="email"></label>
            <input
              required=""
              placeholder="Enter your email"
              className="rounded mb-2 pl-6 pr-20 py-2"
              name="email"
              type="email"
            />
          </div>
          <button className="bg-custom-main text-gray-50 px-6 py-2 mx-0 sm:mx-1 rounded text-base shadow hover:bg-custom-red-500 hover:shadow-lg transition ease-in-out mt-3 xs:mt-0">
            Notify Me
          </button>
          <p className="text-gray-300 mt-2 sm:mt-0">
            <small>
              We care about the protection of your data. Read our
              <a href="">
                <span className="text-gray-50 font-bold underline hover:text-custom-red-100 transition ease-in-out">
                  Private Policy.
                </span>
              </a>
            </small>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
