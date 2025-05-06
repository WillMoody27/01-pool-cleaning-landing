import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaClock,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF className="w-4 h-4" />,
    url: "#",
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="w-4 h-4" />,
    url: "#",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="w-4 h-4" />,
    url: "#",
  },
];

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[#DC2626] to-[#1E3A8A] text-white py-2 w-full hidden md:block z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
            <a
              href="tel:1-800-CLEAR-POOLS"
              className="flex items-center space-x-2 text-sm hover:text-gray-200"
            >
              <FaPhone className="w-4 h-4" />
              <span className="hidden sm:inline">1-800-CLEAR-POOLS</span>
              <span className="sm:hidden">Call Us</span>
            </a>
            <a
              href="mailto:info@pestcontrol.com"
              className="flex items-center space-x-2 text-sm hover:text-gray-200"
            >
              <FaEnvelope className="w-4 h-4" />
              <span className="hidden md:inline">
                info@crystalclearpools.com
              </span>
              <span className="md:hidden">Email Us</span>
            </a>
            <div className="flex items-center space-x-2 text-sm text-gray-200">
              <FaClock className="w-4 h-4" />
              <span className="hidden lg:inline">
                Mon-Fri: 8AM-6PM | Sat: 9AM-3PM
              </span>
              <span className="lg:hidden">Open Today</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={`hover:text-gray-200 ${
                  social.name === "Instagram"
                    ? "hidden md:block"
                    : "hidden sm:block"
                }`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
