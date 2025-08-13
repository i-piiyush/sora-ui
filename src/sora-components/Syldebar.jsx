import { Spiral } from "hamburger-react";
import React, { useState } from "react";
import { motion, spring } from "motion/react";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

/**
 * Customizable Sidebar Component
 * @param {string} textColor - Tailwind text color class for menu items (default: "text-zinc-900")
 * @param {string} btnBgColor - Tailwind background color class for button (default: "bg-white")
 * @param {string} sidebarBgColor - Tailwind background color class for sidebar (default: "bg-white")
 * @param {string} logoName - logo/brand name in the form of string
 * @param {Array} headingLinks - Array of objects {title, path} for menu (default paths: /demopath)
 */
const Syldebar = ({
  textColor = "text-zinc-900",
  logoName = "sora-ui.",
  hamburgerBtnColor = "black",
  btnBgColor = "bg-white",
  sidebarBgColor = "bg-white",
  headingLinks = [
    { title: "Home", path: "/demopath" },
    { title: "Products", path: "/demopath" },
    { title: "Sign Up", path: "/demopath" },
    { title: "About us", path: "/demopath" },
  ],
}) => {
  const [isOpen, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      {/* SIDEBAR PANEL */}
      <motion.div
        className={`w-[20rem] md:w-[30rem] rounded-3xl ${sidebarBgColor} absolute flex flex-col justify-between py-10 items-center px-8 left-1/2 z-40 -translate-x-1/2 bottom-5`}
        initial={{ scale: 0, height: "4rem" }}
        animate={{
          scale: isOpen ? 1 : 0,
          height: isOpen ? "26rem" : "4rem",
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 22,
        }}
        style={{ originY: 1 }}
      >
        {/* MENU LINKS */}
        <div className="flex justify-center items-center flex-col gap-2">
          {headingLinks.map((heading, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <h1
                key={index}
                onClick={() => navigate(heading.path)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`text-5xl font-extrabold tracking-tighter cursor-pointer transition-all duration-300 ${textColor}
                  ${
                    isHovered
                      ? "opacity-100"
                      : hoveredIndex !== null
                      ? "opacity-20"
                      : "opacity-100"
                  }`}
              >
                {heading.title}
              </h1>
            );
          })}
        </div>

        {/* CLOSE BUTTON */}
        <motion.div
          className="inline-block"
          whileHover="hover"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: isOpen === false ? 30 : 0,
            opacity: isOpen === false ? 0 : 1,
          }}
          transition={{ type: spring, duration: 0.3, ease: "easeInOut" }}
          variants={{ rest: {}, hover: {} }}
        >
          <motion.span
            className="bg-zinc-300 h-20 w-20 rounded-full inline-block"
            variants={{ rest: { scale: 1 }, hover: { scale: 1 } }}
          >
            <motion.span
              className="bg-zinc-900 h-full w-full rounded-full flex justify-center items-center cursor-pointer"
              variants={{
                rest: { rotate: 0 },
                hover: { rotate: 90, scale: 0.8 },
              }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setOpen((prev) => !prev)}
            >
              <RxCross1 color="white" size={"1.2rem"} />
            </motion.span>
          </motion.span>
        </motion.div>
      </motion.div>

      {/* OPEN BUTTON */}
      <button
        className={`w-62 h-16 rounded-full ${btnBgColor} absolute px-8 left-1/2 flex justify-between items-center -translate-x-1/2 bottom-5`}
      >
        <Spiral size={20} toggled={isOpen} toggle={setOpen} color={hamburgerBtnColor} />
        <h1 className={`font-extrabold text-2xl ${textColor}`}>{logoName}</h1>
      </button>
    </div>
  );
};

export default Syldebar;
