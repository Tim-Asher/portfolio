import React from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPhoneSquareAlt,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoMail, IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiRedux,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { CiCircleChevDown } from "react-icons/ci";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutMeNew = ({ scrollToProjects }) => {
  return (
    <aside className="sm:fixed top-0 left-0 z-10 w-full sm:w-80 md:w-96 sm:h-screen ">
      <div className="h-full p-3  overflow-y-auto ">
        <ul className="space-y-2 font-medium">
          <div className="flex flex-row sm:flex-col justify-center items-center">
            <li>
              <div className="flex justify-center items-center p-2 group ">
                <LazyLoadImage
                  className="w-20 sm:w-40 rounded-full shadow-xl border border-gray-500"
                  alt="profileImage"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src="/myPhoto.jpg"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center p-2 text-white rounded-lg bg-gray-700/30 border border-gray-500 shadow-xl  group">
                <span className="flex-1 ms-3 whitespace-nowrap text-3xl sm:text-4xl md:text-6xl">
                  Tim Asher
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap text-xl sm:text-2xl md:text-3xl">
                  Full Stack Developer
                </span>
              </div>
            </li>
          </div>
          <li>
            <div className="flex items-center p-2 text-white rounded-lg bg-gray-700/30 border border-gray-500 shadow-xl group">
              <div className="flex flex-col w-full">
                <a
                  href="mailto:ashert358@gmail.com"
                  target="_blank"
                  className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-300/30 hover:ring-2 ring-gray-400 hover:text-black transition-all duration-300"
                >
                  <IoMail className="text-xl sm:text-2xl" />
                  <p className="text-lg sm:text-xl">ashert358@gmail.com</p>
                </a>
                <a
                  href="tel:+972505243131"
                  target="_blank"
                  className="flex items-center gap-2  rounded-md p-2 hover:bg-gray-300/30 hover:ring-2 ring-gray-400 hover:text-black transition-all duration-300"
                >
                  <FaPhoneSquareAlt className="text-xl sm:text-2xl" />
                  <p className="text-lg sm:text-xl">+972 50 524 3131</p>
                </a>
                <a
                  href="https://github.com/Tim-Asher"
                  target="_blank"
                  className="flex items-center gap-2  rounded-md p-2 hover:bg-gray-300/30 hover:ring-2 ring-gray-400 hover:text-black transition-all duration-300"
                >
                  <FaGithub className="text-xl sm:text-2xl" />
                  <p className="text-lg sm:text-xl">git/Tim-Asher</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/ashert"
                  target="_blank"
                  className="flex items-center gap-2  rounded-md p-2 hover:bg-gray-300/30 hover:ring-2 ring-gray-400 hover:text-black transition-all duration-300"
                >
                  <FaLinkedin className="text-xl sm:text-2xl" />
                  <p className="text-lg sm:text-xl">in/ashert</p>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center   rounded-lg text-white   group">
              <div className="w-full text-lg md:text-xl rounded-lg bg-gray-700/30 border border-gray-500 shadow-xl">
                <p className="text-center text-2xl md:text-3xl p-1">skills:</p>
                <div className="flex gap-1 md:gap-3 justify-center ">
                  <div className="flex items-center gap-1 ">
                    <IoLogoJavascript className="text-yellow-400" />
                    <p>JavaScript</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      <FaPython className="text-blue-600 mask-half-python-left" />
                      <FaPython className="text-yellow-400 -ms-[18px] md:-ms-5 mask-half-python-right" />
                    </div>
                    <p>Python</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      <FaJava className="text-orange-400 mask-half-java-top" />
                      <FaJava className="text-blue-600 -ms-5 mask-half-java-bottom" />
                    </div>
                    <p>Java</p>
                  </div>
                </div>

                <div className=" flex justify-around">
                  <div>
                    <p className="text-center border-b border-white text-2xl md:text-3xl pt-3">
                      Front
                    </p>
                    <div className="flex flex-col gap-1 pt-3">
                      <div className="flex items-center gap-2">
                        <FaReact className="text-blue-500" />
                        <p>React</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiRedux className="text-violet-600" />
                        <p>Redux</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaHtml5 className="text-orange-500" />
                        <p>HTML</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCss3Alt className="text-blue-500" />
                        <p>CSS</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <RiTailwindCssFill className="text-cyan-500" />
                        <p>TailwindCss</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-center border-b border-white text-2xl md:text-3xl pt-3">
                      Back
                    </p>
                    <div className="flex flex-col gap-1 pt-3">
                      <div className="flex items-center gap-2">
                        <FaNodeJs className="text-green-400" />
                        <p>NodeJs</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiExpress />
                        <p>Express</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiMongodb className="text-green-400" />
                        <p>MongoDb</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiMongoose className="text-red-600" />
                        <p>Mongoose</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <GrMysql className="text-blue-600" />
                        <p>MySql</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiJsonwebtokens className="text-blue-600" />
                        <p>JWT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-center pt-3">
              <CiCircleChevDown
                className="text-white text-6xl animate-bounce block sm:hidden"
                onClick={scrollToProjects}
              />
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AboutMeNew;
