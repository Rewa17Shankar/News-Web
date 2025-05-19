import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-50 to-white">
      <main className="max-w-4xl mx-auto p-10 bg-white rounded-xl shadow-lg mt-16 mb-24">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-900 tracking-wide">
          About Headliner
        </h1>

        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          Headliner was founded with the vision to transform how people consume news in the digital age. In an era flooded with information,
          we strive to be the beacon of trustworthy, insightful, and timely journalism that empowers our readers to stay informed and make
          well-rounded decisions.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          Our platform delivers a wide range of news categories including politics, technology, business, entertainment, science, and lifestyle.
          We are committed to editorial integrity, accuracy, and depth, collaborating with a global network of experienced journalists and editors.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          At Headliner, innovation drives us. We leverage modern technology and data analytics to personalize your news experience,
          ensuring you see the stories that matter most to you without overwhelming noise. Whether you prefer quick summaries or
          detailed investigative reports, Headliner adapts to your reading preferences.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          We also prioritize community engagement — encouraging open dialogue, diverse perspectives, and feedback to continuously improve
          our service. Your voice matters here.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Thank you for trusting Headliner as your news companion. Together, we can navigate the world of news smarter and with confidence.
        </p>
      </main>

      <footer className="bg-white border-t border-gray-300 py-8 shadow-inner">
        <div className="max-w-4xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex space-x-6 items-center">
            <span className="text-gray-800 font-semibold text-lg">Follow us on:</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-pink-600 hover:text-pink-800 transition transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:text-blue-900 transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            © {new Date().getFullYear()} Headliner.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;
