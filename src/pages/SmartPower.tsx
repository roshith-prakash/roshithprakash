import { useEffect } from "react";
import { Footer, ScrollToTop } from "../components";

const SmartPower = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "SmartPower | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* Scroll to Top button */}
        <ScrollToTop />

        <header className="text-center">
          <h1 className="text-3xl font-semibold">
            SmartPower (Final Year Project)
          </h1>
          <p className="mt-8 text-lg px-5 lg:px-10">
            The majority of the modern world depends on an energy delivery
            system that, according to the existing state of affairs, is
            ineffective and unable to keep up with the expanding needs.
            Innovation and technology have transformed other industrial sectors
            while the electricity grid has continued to operate in the same
            inefficient way for decades. Thus, newer technology and innovations
            need to be applied in this inefficient system. The developed project
            is a smart metering system which is based on the ‘smart grid’
            philosophy of having an interconnected network of measuring devices
            for utilities. The smart grid philosophy is in turn derived from the
            ‘smart city’ concept which focuses on automation of tasks and
            overall increased efficiency in all areas. The recording of energy
            consumption data is a tedious and time consuming manual process
            which has been automated in the developed system. The SmartPower
            system allows for the digital transfer of energy consumption data at
            regular intervals and allows for a more granular measurement of
            energy consumption, which will allow for a deeper analysis and
            understanding of the consumption. The IoT-based system allows for a
            better communication channel between the users and the providers, as
            the users are able to view their energy consumption in real time, as
            well as view past usage easily. With the decreasing costs of
            Internet services and cloud computing, a smart metering system would
            become a more efficient method for energy providers as well. The
            developed IoT system will be instrumental in the removal of repeated
            manual tasks, thereby allowing more time and resources for solving
            problems, and in building a more connected and cost-effective
            metering system.
          </p>
        </header>

        <section className="mt-20 px-5 md:px-10 lg:px-32">
          <h2 className="text-2xl font-medium">Features:</h2>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>
              Eliminates the repeated manual task of recording power usage.
            </li>
            <li>
              Allows for the granular storage of readings which can be later
              aggregated and analyzed as required.
            </li>
            <li>Allows users to view readings in real time.</li>
            <li>
              Allows the representation of data collected in a graphical format.
            </li>
            <li>Allows for the prediction of future usage.</li>
            <li>
              Allows the user to turn on/off devices regardless of their
              location.
            </li>
          </ul>
        </section>

        <section className="mt-20 px-5 md:px-10 lg:px-32">
          <h2 className="text-2xl font-medium">Tasks Performed:</h2>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>
              Developed an IoT-based smart electricity meter to measure and
              store electrical usage using Raspberry Pi.
            </li>
            <li>
              Developed an Express-based server to communicate with the user and
              perform automated functions to receive and store data from the
              smart meters, predict future usage, etc. Deployed on Google Cloud.
            </li>
            <li>
              Developed a React Native-based Android app to allow users to
              access the stored data, view predictions, etc.
            </li>
          </ul>
        </section>

        <section className="mt-20 px-5 md:px-10 lg:px-32">
          <h2 className="text-2xl font-medium">Technologies used:</h2>
          <p className=" text-lg mt-5 px-6 md:px-12">
            React Native, Node JS, Express JS, MySQL, Python, Raspberry Pi,
            Socket IO.
          </p>
        </section>

        <div className="mt-20 border-y-2 py-5">
          <p className="px-5 text-center text-lg font-medium">
            Note: The project has been dismantled and is no longer available to
            use.
          </p>
        </div>

        <section className="mt-24 px-5 lg:px-10 flex flex-wrap max-w-screen gap-10">
          <div className="w-full lg:flex-1">
            <img
              src={
                "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843699/smartpower1_h9zqby.png"
              }
              alt="High-level design of SmartPower"
              className="w-full rounded"
            />
          </div>

          <div className="w-full lg:flex-1">
            <img
              src={
                "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843699/smartpower2_upn7ym.png"
              }
              alt="Circuit design of SmartPower"
              className="w-full rounded"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SmartPower;
