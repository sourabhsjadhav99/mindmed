// Services.js
import React from 'react';
import { servicesContent } from '../utils/servicesContent'; // Adjust the path based on your folder structure

export default function Services() {
  return (
    <div className="container mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">{servicesContent.heading}</h1>
      <p className="text-center text-gray-600 mb-8">
        {servicesContent.introduction}
      </p>
      
      <h2 className="text-2xl font-semibold mb-6 text-center">{servicesContent.subheading}</h2>

      {/* Render each service */}
      {servicesContent.services.map((service, index) => (
        <section key={index} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{index + 1}. {service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          {service.additionalInfo && <p className="text-gray-600 mb-4">{service.additionalInfo}</p>}
          <ul className="list-disc list-inside text-gray-600 mb-4">
            {service.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </section>
      ))}

      {/* Why Choose Us Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">{servicesContent.whyChooseUs.title}</h3>
        <ul className="list-disc list-inside text-gray-600">
          {servicesContent.whyChooseUs.items.map((item, index) => (
            <li key={index} className="mb-2">
            <strong>{item.title}:</strong> {item.description}
          </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
