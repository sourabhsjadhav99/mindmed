// Home.js
import React from "react";
import { homeContent } from "../utils/homeContent"; // Adjust the path based on your folder structure

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        {homeContent.heading}
      </h1>
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
        {homeContent.subheading}
      </h2>

      <p className="text-center text-gray-600 mb-8">
        {homeContent.introduction}
      </p>

      {/* Who We Are Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          {homeContent.whoWeAre.title}
        </h3>
        <p className="text-gray-600">{homeContent.whoWeAre.description}</p>
      </section>

      {/* Vision and Mission Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          {homeContent.visionMission.vision.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {homeContent.visionMission.vision.description}
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          {homeContent.visionMission.mission.title}
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          {homeContent.visionMission.mission.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Services Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          {homeContent.services.title}
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          {homeContent.services.items.map((service, index) => (
            <li key={index} className="mb-2">
              <strong>{service.title}:</strong> {service.description}
            </li>
          ))}
        </ul>
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
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          {homeContent.clients.title}
        </h3>
        <p className="text-gray-600">{homeContent.clients.description}</p>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          {homeContent.callToAction.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {homeContent.callToAction.description}
        </p>
      </section>
    </div>
  );
}
