import "./footer.css";

import React, { useState, useEffect } from "react";

export const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      const scrollPosition = window.scrollY;

      if (windowHeight + scrollPosition >= documentHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`honk-footer ${showFooter ? "visible" : "hidden"}`}>
      <div>
        <p className="leyenda-footer">
          &copy; 2024 Merch It. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
