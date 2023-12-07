export default function ComingSoon() {
  return (
    <div className="w-full h-screen dark:text-light">
      <div className="w-full h-screen flex flex-col items-center justify-between bg-opacity-70 py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className=" bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center  space-x-2 lg:space-x-4">
            <a href="/" className="text-xl lg:text-2xl xl:text-3xl font-bold">
              Home
            </a>
          </div>
          <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
            Coming Soon
          </h1>
          <div className="flex flex-col items-center space-y-4 mt-24">
            <p className="text-gray-300 uppercase text-sm">
              Notify me when it's ready
            </p>
            <form className="w-full flex items-center">
              <input
                type="email"
                name="email"
                id="email"
                className="w-72 p-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded-tl rounded-bl text-sm"
                placeholder="Email"
                autocomplete="off"
              />
              <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-gray-100 border border-blue-600 rounded-tr rounded-br text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
