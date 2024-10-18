import React, { useState } from 'react';
import GeneralQuestions from '../components/question/GeneralQuestions';
import SOSQuestions from '../components/question/SOSQuestions';
import TechnicalQuestions from '../components/question/TechnicalQuestions';
import SupportQuestions from '../components/question/SupportQuestions';

export default function FAQ() {
  const [activeSection, setActiveSection] = useState('general');

  return (
    <div className="container mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions (FAQs)</h1>
      <p className="text-center text-gray-600 mb-8">
        We’ve compiled answers to some of the most common questions we receive about our services. 
        If you have a question that isn’t addressed here, feel free to reach out to us via our Contact Us page.
      </p>

      {/* Buttons for sections */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveSection('general')}
          className={`px-4 py-2 rounded ${activeSection === 'general' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          General
        </button>
        <button
          onClick={() => setActiveSection('sos')}
          className={`px-4 py-2 rounded ${activeSection === 'sos' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          SOS Application
        </button>
        <button
          onClick={() => setActiveSection('technical')}
          className={`px-4 py-2 rounded ${activeSection === 'technical' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Technical & Security
        </button>
        <button
          onClick={() => setActiveSection('support')}
          className={`px-4 py-2 rounded ${activeSection === 'support' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Support & Payment
        </button>
      </div>

      {/* Render active section */}
      {activeSection === 'general' && <GeneralQuestions />}
      {activeSection === 'sos' && <SOSQuestions />}
      {activeSection === 'technical' && <TechnicalQuestions />}
      {activeSection === 'support' && <SupportQuestions />}
    </div>
  );
}
