import React from "react";
import { aboutUsContent } from "../utils/aboutUs";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Carousel from "../components/aboutUs/Carousel";
import { DoctorsTeam, leadershipTeam } from "../utils/aboutUs";
const AboutUs = () => {
  return (
    <div>
      {/* Dynamic Section Rendering */}
      <section className="w-[100%] flex-box mb-5">
        <div className="w-[100%] responsive flex flex-col gap-5">
          {Object.entries(aboutUsContent).map(([key, section]) => (
            <div key={key} className="bg-white p-5 rounded-lg shadow-lg">
              <h2 className="text-lg font-medium mb-2">{section.title}</h2>
              {section.points && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {section.points.map((point, index) => {
                    return (
                      <li
                        key={index}
                        className=" font-semibold text-lg flex gap-3 items-start"
                      >
                        <div className="text-2xl py-2">
                          <IoIosArrowDroprightCircle />
                        </div>
                        <div>
                          <p> {point}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="w-[100%] flex-box">
        <div className="w-[100%] responsive flex flex-col gap-5 p-5 bg-secondary rounded-lg">
          <Carousel data={DoctorsTeam}/>
          <Carousel data={leadershipTeam}/>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

