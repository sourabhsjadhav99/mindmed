// Home.js
import { homeContent } from "../utils/homeContent"; // Adjust the path based on your folder structure
import who_we_are from "../assets/images/who_we_are.jpg";
import Card from "../components/home/Card";
import { IoIosArrowDroprightCircle } from "react-icons/io";
export default function Home() {
  return (
    <div className="w-full m-0 flex flex-col items-center">
      {/* Heading */}
      <section className="flex flex-col gap-4 p-10 bg-white">
        <h3 className="text-lg text-gray-500 font-semibold text-center uppercase tracking-wide">
          {homeContent.heading}
        </h3>
        <h1 className="text-6xl font-bold text-center text-gray-700 ">
          <span className="text-primary">Innovating Healthcare for a</span>{" "}
          <span className="text-secondary">Better Tomorrow</span>
        </h1>

        <p className="text-center text-primary text-lg">
          {homeContent.introduction}
        </p>
      </section>

      {/* Who We Are Section */}
      <section className="w-[100%]  md:h-[500px] flex flex-col md:flex-row justify-between items-center bg-white mb-8">
        <div className="md:w-[40%] pl-10 p-5 flex flex-col gap-4">
          <h3 className="text-3xl font-semibold mb-4 text-primary">
            {homeContent.whoWeAre.title}
          </h3>
          <p className=" text-primary text-lg">
            {homeContent.whoWeAre.description}
          </p>
        </div>
        <div className="md:w-[60%] h-[100%]">
          <img
            src={who_we_are}
            alt=""
            className="w-[100%] rounded-l-full h-[100%]"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-[100%] md:w-[95%] lg:w-[90%] xl:w-[80%] flex flex-col p-5 pb-10 justify-center items-center ">
        <h3 className="text-3xl font-semibold mb-4 text-primary">
          {homeContent.visionMission.vision.title}
        </h3>
        <p className="text-primary text-md">
          {homeContent.visionMission.vision.description}
        </p>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-secondary flex justify-center items-center">
        <div className="w-[100%] md:w-[95%] lg:w-[90%] xl:w-[80%] flex flex-col items-center rounded-xl mb-8 p-5">
          <h3 className="text-3xl font-semibold mb-4 text-white ">
            {homeContent.visionMission.mission.title}
          </h3>
          {/* <ul className="list-inside grid grid-cols-1 md:grid-cols-3 gap-5">
            {homeContent.visionMission.mission.points.map((point, index) => (
              <li
                key={index}
                className="bg-white text-lg rounded-xl p-5"
              >
                {point}
              </li>
            ))}
          </ul> */}
          <ul className="list-inside">
            {homeContent.visionMission.mission.points.map((point, index) => (
              <li
                key={index}
                className="text-white font-semibold text-lg p-2 flex gap-3 items-center"
              >
                <div className="text-2xl">
                  <IoIosArrowDroprightCircle />
                </div>
                <div>
                  <p> {point}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white flex justify-center items-center">
        <div className="w-[100%] md:w-[95%] lg:w-[90%] xl:w-[80%] flex flex-col items-center rounded-xl mb-8 p-5 ">
          <h3 className="text-3xl font-semibold mb-4">
            {homeContent.services.title}
          </h3>
          <div className="grid  grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-4">
            {homeContent.services.items.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                className="mb-2"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          {homeContent.whyChooseUs.title}
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          {homeContent.whyChooseUs.items.map((service, index) => (
            <li key={index} className="mb-2">
              <strong>{service.title}:</strong> {service.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Clients Section */}
      <section className="mb-8 ">
        <h3 className="text-2xl font-semibold mb-4 ">
          {homeContent.clients.title}
        </h3>
        <p className="text-gray-600">{homeContent.clients.description}</p>
      </section>

      {/* Call to Action Section */}
      <section className="text-center w-[100%]  bg-primary p-5">
        <h3 className="text-3xl font-semibold mb-4 text-white">
          {homeContent.callToAction.title}
        </h3>
        <p className="mb-4 text-white">
          {homeContent.callToAction.description}
        </p>
      </section>
    </div>
  );
}
