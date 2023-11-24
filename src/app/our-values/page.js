export const metadata = {
  title: "Our Values",
  description: `providing the best of services and excellence`,
};

export default function OurValues() {
  return (
    <section className="container p-6 px-6 mx-auto text-gray dark:text-light">
      <div className="mb-16 text-center">
        <h1 className="text-base font-semibold tracking-wide text-orange-500 uppercase">
          Our Values
        </h1>
        <p className="mt-2 text-lg font-extrabold leading-8 tracking-tight capitalize">
          Respect the environment and the traditions
        </p>
        <p className="mt-2 leading-8">
          Our journeys benefit the local communities, protect the environment by
          minimizing pollution, and respect local traditions, religion, and
          heritage.
        </p>
      </div>
      <div className="flex flex-wrap my-12">
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
          <div className="flex items-center mb-6">
            <div className="ml-4 text-base capitalize font-semibold">
              Dedication to the client
            </div>
          </div>
          <p className="leading-loose text-md">
            We always make sure that our client's demand are always respected,
            that client's safety is always ensured and experience is memorable.
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
          <div className="flex items-center mb-6">
            <div className="ml-4 text-base capitalize font-semibold">
              Professional staff and service quality
            </div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            We are working with professionals, who know perfectly the treks, the
            roads and the environmental conditions and will make the treks and
            tours well organized.
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
          <div className="flex items-center mb-6">
            <div className="ml-4 text-base capitalize font-semibold">
              Quality gear
            </div>
          </div>
          <p className="leading-loose text-md">
            Your comfort is important for us, your safety is mandatory. All the
            equipments we provide are good quality and always checked before
            departure.
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
          <div className="flex items-center mb-6">
            <div className="ml-4 text-base capitalize font-semibold">
              Trust and Reliability
            </div>
          </div>
          <p className="leading-loose text-md">
            Our travel experts have extensive local knowledge and expertise, so
            they can plan for you the perfect trip and give you insider tips and
            recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
