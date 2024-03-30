import React, { useEffect } from "react";
import { Footer, Navbar } from "../components";

import smart1 from "../assets/smartpower1.png";
import smart2 from "../assets/smartpower2.png";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const SmartPower = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "SmartPower | Projects";
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative pt-14 pb-48">
        {/* ---------------------------------------------------- */}

        {/* Scroll to Top button */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer border-2 border-cta fixed bottom-10 right-5 bg-white rounded-full p-3 z-50"
        >
          <FaRegArrowAltCircleUp className="text-cta text-2xl" />
        </div>

        {/* ---------------------------------------------------- */}
        <p className="text-3xl text-center font-semibold">
          SmartPower (Final Year Project)
        </p>
        <p className="mt-8 text-lg px-5 lg:px-10 text-center">
          The majority of the modern world depends on an energy delivery system
          that, according to the existing state of affairs, is ineffective and
          unable to keep up with the expanding needs. Innovation and technology
          have transformed other industrial sectors while the electricity grid
          has continued to operate in the same inefficient way for decades.
          Thus, newer technology and innovations need to be applied in this
          inefficient system. The developed project is a Smart-metering system
          which is based on the ‘smart grid’ philosophy of having an
          interconnected network of measuring devices for utilities. The smart
          grid philosophy is in turn derived from the ‘smart city’ concept which
          focuses on automation of tasks and overall increased efficiency in all
          areas. The recording of energy consumption data is a tedious and time
          consuming manual process which has been automated in the developed
          system. The SmartPower system allows for the digital transfer of
          energy consumption data at regular intervals and allows for a more
          granular measurement of energy consumption, which will allow for a
          deeper analysis and understanding of the consumption. The IOT based
          system allows for a better communication channel between the users and
          the providers, as the users are able to view their energy consumption
          in real time, as well as view past usage easily. With the decreasing
          costs of Internet services and cloud computing, a smart metering
          system would become a more efficient method for energy providers as
          well. The developed IOT system will be instrumental in removal of
          repeated manual tasks, thereby allowing more time and resources for
          solving problems, and in building a more connected and cost-effective
          metering system.
        </p>

        <div className="mt-20 px-5 md:px-10 lg:px-32">
          <p className="text-2xl font-medium">Features:</p>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>Eliminates repeated manual task of recording power usage.</li>
            <li>
              Allows for the granular storage of readings which can be later
              aggregated and analysed as required.
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
        </div>

        <div className="mt-20 px-5 md:px-10 lg:px-32">
          <p className="text-2xl font-medium">Tasks Performed:</p>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>
              Developed an IOT based smart electricity meter to measure and
              store electrical usage using Raspberry Pi.
            </li>
            <li>
              Developed an Express based server to communicate with the user and
              perform automated functions to receive and store data from the
              smart meters, predict future usage etc. Deployed on Google Cloud.
            </li>
            <li>
              Developed a React Native based Android app to allow users to
              access the stored data, view predictions etc.
            </li>
          </ul>
        </div>

        <div className="mt-20 border-y-2 py-5">
          <p className="px-5 text-center text-lg font-medium">
            Note: The project has been dismantled and is no longer available to
            use.
          </p>
        </div>

        <div className="mt-24 px-5 lg:px-10 flex flex-wrap max-w-screen gap-10">
          <div className="w-full lg:flex-1">
            <img src={smart1} className="w-full" />
          </div>

          <div className="w-full lg:flex-1">
            <img src={smart2} className="w-full" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SmartPower;
