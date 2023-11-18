export const metadata = {
  title: "Cancellation Policy",
  description: `Short and simple cancellation policy`,
};

const CancellationPolicy = () => {
  return (
    <article className="flex items-center justify-center max-7xl py-16">
      <div className="container dark:text-neutral-400 border-b-2 border-solid border-dark dark:border-light leading-relaxed text-lg md:text-left md:text-base md:px-30 lg:px-60 px-8">
        <div className="container mx-auto py-12">
          <h1 className="text-lg font-bold mb-6 lg:text-4xl">
            Cancellation Policy – Eco India Journeys
          </h1>
          <ul className="list-none text-gray-800">
            <li className="mb-3">
              Cancellations made less than 48 hours before the trip schedule are
              non-refundable.
            </li>
            <li className="mb-3">
              Cancellations made between 7 to 15 days before the trip schedule
              are subject to a 50% cancellation fee.
            </li>
            <li className="mb-3">
              Cancellations made above 15 days before the trip schedule are
              fully refundable.
            </li>
            <li className="mb-3">
              In the event of cancellation due to unforeseen circumstances or
              natural disasters, we will work with you to find an alternative or
              reschedule your trip.
            </li>
          </ul>
          <p className="mb-3">
            Please note that once you have booked and the trip is confirmed with
            us it means that we have reserved time in our schedule exclusively
            for you.
          </p>
          <p className="mb-3">
            To avoid a cancellation fee, please provide cancellation notice at
            least 7-days prior to your journey.
          </p>
          <p className="mb-3">
            You can cancel or reschedule your trip by emailing us or calling our
            office.
          </p>
          <div>Email: ecoindiajourneys@gmail.com</div>
          <div>Office: +91 8587044340</div>
        </div>
      </div>
    </article>
  );
};

export default CancellationPolicy;
