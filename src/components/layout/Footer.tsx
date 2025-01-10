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
          <h2 className="text-2xl font-bold">Pick the call, it is Taxroof</h2>
          <p className="text-lg">
            Simplify your Return Filing process with our user-friendly platform.
          </p>
          <div className="flex items-center space-x-3 text-lg">
            <FaMapMarkerAlt className="text-blue-400" />
            <p>
              <strong>Taxroof Consultancy Private Limited</strong> <br />
              Opp Police Guest House <br />
              Near KEB Office, Mulgund Naka Road, <br />
              Gadag-Betageri, Karnataka 582101
            </p>
          </div>
          <div className="flex items-center space-x-3 text-lg">
            <FaPhoneAlt className="text-green-400" />
            <p>
              <strong>Contact:</strong>{" "}
              <a
                href="tel:+918097262227"
                className="text-blue-400 hover:text-blue-600"
              >
                +91-80972 62227
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-3 text-lg">
            <FaEnvelope className="text-red-400" />
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@taxroof.in"
                className="text-blue-400 hover:text-blue-600"
              >
                contact@taxroof.in
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
              src="https://maps.google.com/maps?q=Taxroof%20Consultancy%20Private%20Limited%20gadag&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
              title="Taxroof Consultancy Private Limited gadag"
              aria-label="Taxroof Consultancy Private Limited gadag"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
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
