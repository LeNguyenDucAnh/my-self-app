"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLogo from "../../public/assets/navLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const navBg = "#ecf0f3";
  const linkColor = "#1f2937";

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center h-full px-2 2xl:px-16 ">
        <Link href="/">
          <Image
            src={NavLogo}
            alt="/"
            width="125"
            height="50"
            className="cursor-pointer"
            loading="lazy"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {/* DO MAP HERE */}
            <li className="ml-2 text-sm uppercase btn-hover">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-2 text-sm uppercase btn-hover">
              <a href="#about">About</a>
            </li>
            <li className="ml-2 text-sm uppercase btn-hover">
              <a href="#skills">Skills</a>
            </li>
            <li className="ml-2 text-sm uppercase btn-hover">
              <a href="#experience">Experience</a>
            </li>
            {/* <li className="ml-2 text-sm uppercase btn-hover">
              <Link href="/#projects">Projects</Link>
            </li> */}
            <li className="ml-2 text-sm uppercase btn-hover">
              <a href="#contact">Contact</a>
            </li>

            <li className="ml-5 text-sm uppercase flex items-center gap-x-3 btn-hover">
              <Link href="/resume">Resume</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src={NavLogo}
                  width="87"
                  height="35"
                  alt="/"
                  loading="lazy"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Welcome</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/" className="hover:text-custom">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <a href="#about" className="hover:text-custom">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </a>
              <a href="#skills" className="hover:text-custom">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </a>
              <a href="#experience" className="hover:text-custom">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Experience
                </li>
              </a>
              {/* <Link href="/#projects" className="hover:text-custom">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link> */}

              <a href="#contact" className="hover:text-custom">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </a>
              <Link href="/resume" className="hover:text-custom">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-custom">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://linkedin.com/in/anhlndlinkein"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in hover:bg-secondary duration-300">
                    <FaLinkedinIn title="Linkedin" />
                  </div>
                </a>
                <a
                  href="https://github.com/LeNguyenDucAnh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in hover:bg-secondary duration-300">
                    <FaGithub title="GitHub" />
                  </div>
                </a>
                <a href="#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in hover:bg-secondary duration-300"
                  >
                    <AiOutlineMail title="Contact" />
                  </div>
                </a>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in hover:bg-secondary duration-300"
                  >
                    <BsFillPersonLinesFill title="Resume" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
