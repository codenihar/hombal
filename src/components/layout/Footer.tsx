import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-950 to-blue-950 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">
            Pick the call, it is Hombal & Associates
          </h2>
          <p className="text-lg">
            Simplify your Return Filing process with our user-friendly platform.
          </p>
          <div className="flex items-center space-x-3 text-lg">
            <FaMapMarkerAlt className="text-blue-400" />
            <p>
              <strong>Hombal & Associates Chartered Accountants</strong> <br />
              H.O: Shop No GF -08, The Springs building, <br />
              Unakal Bypass Road, <br />
              Hosur, Hubli - 580029.
            </p>
          </div>
          <div className="flex items-center space-x-3 text-lg">
            <FaMapMarkerAlt className="text-blue-400" />
            <p>
              <strong>Hombal & Associates Chartered Accountants</strong> <br />
              B.O: Shop No 31, 1 st Floor, Guggari complex, <br />
              Station Road, <br />
              Gadag - 582101.
            </p>
          </div>
          <div className="flex items-center space-x-3 text-lg">
            <FaPhoneAlt className="text-green-400" />
            <p>
              <strong>Contact:</strong>{" "}
              <a
                href="tel:+917204234244"
                className="text-blue-400 hover:text-blue-600"
              >
                +91-7204234244
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-3 text-lg">
            <FaEnvelope className="text-red-400" />
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:jagadish.b07@gmail.com"
                className="text-blue-400 hover:text-blue-600"
              >
                jagadish.b07@gmail.com
              </a>
            </p>
          </div>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100094048707058"
              className="text-blue-500 hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/taxroofindia/"
              className="text-pink-400 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/tax-roof/"
              className="text-blue-300 hover:text-blue-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/taxroofindia"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Section (Google Maps iframe) */}
        <div className="lg:w-1/2">
          <div
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.067846709083!2d75.6329236!3d15.4314572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8f9004109c581%3A0x46fea42680b8a5fd!2sHombal%20%26%20Associates%2C%20Gadag!5e0!3m2!1sen!2sin!4v1706692838143!5m2!1sen!2sin"
              title="Hombal & Associates, Gadag"
              aria-label="Hombal & Associates, Gadag"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-lg">© Copyright Taxroof. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
