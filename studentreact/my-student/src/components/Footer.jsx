import React from "react";
 
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-4 px-2 mt-8">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </p>
    </footer>
  );
};
 
export default Footer;