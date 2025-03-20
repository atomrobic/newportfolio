import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactSection() {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_dfcblti', // Replace with your EmailJS service ID
        'template_ckawbsb', // Replace with your EmailJS template ID
        e.target, // Form reference
        'HaQqnaAE-oCak0Lug' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          setIsEmailSent(true); // Show success message
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Contact Form */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-white">Send Me a Message</h3>
            {!isEmailSent ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="from_name" // Field name matches EmailJS template
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-100"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="from_email" // Field name matches EmailJS template
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-100"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message" // Field name matches EmailJS template
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-100"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="p-4 bg-green-600 text-white rounded-lg text-center" aria-live="polite">
                <p className="font-medium">Your message has been sent successfully!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;