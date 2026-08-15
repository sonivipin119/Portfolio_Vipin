import pic from "../assets/PIC_f_compresed.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook  } from "@fortawesome/free-solid-svg-icons";
import backGroundImage from '../assets/portfolio_background.jpg'
import { useEffect, useState } from "react";
import resume from '../assets/Vipin_soni_resumeJv_2026.pdf'
function Introduction() {
   const roles = [
    "Java Backend Developer",
    "Full Stack Developer",
    "Competitive Programmer",
    "MERN Stack Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const fullText = roles[roleIndex];

    if (!deleting && charIndex <= fullText.length) {
      const timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 125);

      return () => clearTimeout(timer);
    }

    if (deleting && charIndex >= 0) {
      const timer = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 75);

      return () => clearTimeout(timer);
    }

    if (!deleting && charIndex > fullText.length) {
      const timer = setTimeout(() => {
        setDeleting(true);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (deleting && charIndex < 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setCharIndex(0);
    }
  }, [charIndex, deleting, roleIndex]);
  return (
    <section className="left-0 top-0 text-white w-full flex flex-col content-between justify-between">
      <img
          src={backGroundImage}
          className="absolute h-full w-full object-center object-cover"
          alt=""
        />
      <div className="flex flex-row justify-between w-full absolute top-[28%] items-center">
        <div
          className="absolute top-5 right-50 h-75 w-75 rounded-full bg-white overflow-hidden border-4 border-white shadow-[5px_5px_10px_0px_rgba(240,234,234,0.3)] drop-shadow-[5px_5px_70px_rgba(229,223,223,0.3)]
        transition-all duration-500 ease-in-out
        hover:drop-shadow-[5px_5px_70px_rgba(229,223,223,0.6)] hover:border-amber-500"
        >
          <img className="absolute -top-6 w-full" src={pic} alt="Profile" />
        </div>
        <div className="ml-50 w-lg h-60">
          <div>
            <h6 className="text-xl font-sans italic">Hello, I am</h6>
            <h2 className="text-6xl font-serif mt-2.5 tracking-wider">
              Vipin Soni
            </h2>
            <span className="">
              &nbsp;
              <h3 className="text-3xl font-serif text-amber-600 h-10 w-xl">
                {roles[roleIndex].substring(0, charIndex)}
              </h3>
            </span>

            <p className="mt-2 font-serif tracking-wider">
             I am a Computer Science and Engineering graduate from Maharana Pratap Engineering College, Kanpur, passionate about building scalable, functional, and user-friendly websites and applications.
            </p>

            <div className="mt-5 border-2 border-amber-500 bg-amber-500 w-40 h-12 rounded-3xl text-center content-center transition-all duration-500 ease-in-out hover:bg-transparent hover:border-2 hover:border-white">
              <a
                href={resume}
                target="_blank"
                className="m-auto text-20 font-serif tracking-wider"
              >
                <FontAwesomeIcon icon={faEye} />
                &nbsp;&nbsp;View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0.5 left-0 flex text-white bg-[#222226] rounded-t-[30px]">
        <ul className="flex list-none my-2.5 mx-auto font-serif h-12 text-center pl-3 pr-3 justify-around items-center overflow-hidden w-xl transition-all duration-500 cursor-pointer hover:h-15">
          <li className="">
            <a href="#About">
            <FontAwesomeIcon icon={faPen} className="text-amber-500"/>
            <p>Introduction</p>
            </a>
          </li>
          <li>
            <a href="#About">
            <FontAwesomeIcon icon={faGlobe} className="text-amber-500" />
            <p>My skills</p></a>
          </li>
          <li>
            <a href="#Projects">
            <FontAwesomeIcon icon={faAward} className="text-amber-500" />
            <p>Achievements</p></a>
          </li>
          <li>
            <a href="#Projects">
            <FontAwesomeIcon icon={faAddressBook } className="text-amber-500"/>
            <p>Experience</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="absolute right-12 bottom-25 w-5 text-amber-500">
        <div className="absolute right-0 bottom-40 h-6 pr-18.75 font-medium font-serif text-right text-[19px] leading-6 whitespace-nowrap text-[#ff9301] origin-top-right rotate-90 tracking-wider after:content-['']
        after:absolute after:top-1/2 after:right-0 after:w-12.5 after:h-px after:bg-[#ff9301]">
          Follow Me
        </div>
        <div className="scale-150 gap-y-1 flex flex-col justify-between items-center">
          <a
            href="https://www.linkedin.com/in/vipin-soni-416a61257/"
            className="hover:text-white"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/sonivipin119" className="hover:text-white" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="hover:text-white" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/vipin_soni_._?igsh=MWtxbGdxeTk0dHg5ZQ==" className="hover:text-white" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://x.com/VipinSoni42832?t=eBqb_4Sl9Y5Q8TKf9uBCWQ&s=09" className="hover:text-white" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
