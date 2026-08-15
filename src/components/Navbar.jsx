import backGroundImage from "../assets/portfolio_background.jpg";
import { useEffect, useState } from "react";
function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "Home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative top-0 left-0 w-full overflow-hidden">
        <nav className={`top-0 font-serif flex items-center justify-between h-17 w-full fixed text-white z-10000  shadow-[5px_0px_20px_rgba(0,100,255,0.4)] border-r-0 border-l-0 border-[#303030] bg-black backdrop-blur-lg
          ${scrolled ? "shadow-[0_5px_25px_rgba(0,123,255,0.45)]" : "shadow-none"}`}>
          <div className="flex items-center w-30 ml-6 h-12 tracking-wider">
            <span className="text-6xl text-amber-700">D</span>
            <span className="mt-3 p-0">
              <span className="text-3xl">evelo</span>
              <span className="text-3xl">per</span>
              <span className="text-3xl">..</span>
            </span>
          </div>
          <div className="mr-16 flex w-full max-w-2xl justify-around text-lg font-extralight">
            <a
              href="#Home"
              className={`relative inline-flex tracking-wider transition-all duration-300
            ${activeSection === "Home" ? "text-amber-500" : "text-white"}
          `}
            >
              Home
              {activeSection === "Home" && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-amber-500" />
              )}
            </a>

            <a
              href="#About"
              className={`relative inline-flex tracking-wider transition-all duration-300
            ${activeSection === "About" ? "text-amber-500" : "text-white"}
          `}
            >
              About Me
              {activeSection === "About" && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-amber-500" />
              )}
            </a>

            <a
              href="#Projects"
              className={`relative inline-flex tracking-wider transition-all duration-300
            ${activeSection === "Projects" ? "text-amber-500" : "text-white"}
          `}
            >
              Projects
              {activeSection === "Projects" && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-amber-500" />
              )}
            </a>

            <a
              href="#Contact"
              className={`relative inline-flex tracking-wider transition-all duration-300
            ${activeSection === "Contact" ? "text-amber-500" : "text-white"}
          `}
            >
              Contact
              {activeSection === "Contact" && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-amber-500" />
              )}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
/**
 *
 * <nav className="top-0 border-b border-gray-800 bg-gray-400 font-serif flex items-center justify-between bg-[linear-gradient(to_right,rgb(27,64,61),rgb(4,49,78))] h-16 w-full fixed text-white z-10000">
 */
