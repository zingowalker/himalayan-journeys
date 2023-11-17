const ImageCard = ({ src, alt, role, name, bio }) => {
  return (
    <div className="w-full bg-gray-100 px-10 pt-10">
      <div className="container mx-auto">
        <div
          role="list"
          aria-label="Behind the scenes People "
          className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
        >
          <div
            role="listitem"
            className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    src={src}
                    alt={alt}
                    role={role}
                    className="object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-lg text-center mb-1">{name}</h1>
                <p className="text-gray-800 text-sm text-center">{role}</p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  {bio}
                </p>
                <div className="w-full flex justify-center pt-5 pb-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
