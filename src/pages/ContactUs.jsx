// ContactUs.js
import React from 'react';
import { contactContent } from '../utils/contactContent'; // Adjust the path based on your folder structure
import ContactForm from '../components/contacts/ContactForm'; // Assuming you have a ContactForm component

export default function ContactUs() {
  return (
    <div className="container mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        {contactContent.heading}
      </h1>
      <p className="text-center text-gray-600 mb-8">
        {contactContent.introText}
      </p>

      {/* How to Reach Us Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          {contactContent.howToReachUs.title}
        </h3>

        {/* Email */}
        <p className="text-gray-600 mb-4">
          <strong>{contactContent.howToReachUs.email.label}:</strong> <br />
          {contactContent.howToReachUs.email.description} <br />
          <a
            href={`mailto:${contactContent.howToReachUs.email.address}`}
            className="text-blue-500 hover:underline"
          >
            {contactContent.howToReachUs.email.address}
          </a>
        </p>

        {/* Phone */}
        <p className="text-gray-600 mb-4">
          <strong>{contactContent.howToReachUs.phone.label}:</strong> <br />
          {contactContent.howToReachUs.phone.description} <br />
          <a
            href={`tel:${contactContent.howToReachUs.phone.number}`}
            className="text-blue-500 hover:underline"
          >
            {contactContent.howToReachUs.phone.number}
          </a>
        </p>

        {/* Office Address */}
        <p className="text-gray-600 mb-4">
          <strong>{contactContent.howToReachUs.office.label}:</strong> <br />
          {contactContent.howToReachUs.office.address.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {/* Business Hours */}
        <p className="text-gray-600 mb-4">
          <strong>{contactContent.howToReachUs.businessHours.label}:</strong> <br />
          {contactContent.howToReachUs.businessHours.hours.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </section>

      {/* Connect with Us Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          {contactContent.connectWithUs.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {contactContent.connectWithUs.description}
        </p>

        <ul className="flex space-x-4">
          {contactContent.connectWithUs.links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} hover:underline`}
              >
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Form */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          {contactContent.contactForm.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {contactContent.contactForm.description}
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
