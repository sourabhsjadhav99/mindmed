import React from "react";
import { aboutUsContent } from "../utils/aboutUs"; 

const AboutUs = () => {
    return (
      <div className="container mx-auto p-6 space-y-10">
        {/* Dynamic Section Rendering */}
        {Object.entries(aboutUsContent).map(([key, section]) => (
          <div key={key} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">{section.title}</h2>
            {section.points && (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {section.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
            {section.teamMembers && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Our Leadership Team</h3>
                <div className="grid grid-cols-1 grid-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                  {section.teamMembers.map((member, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-gray-300"
                      />
                      <h4 className="mt-3 text-lg font-semibold">{member.name}</h4>
                      <p className="text-gray-600">{member.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default AboutUs;