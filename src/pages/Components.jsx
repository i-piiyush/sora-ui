import React, { useEffect, useState } from "react";
import { hover, motion, scale, stagger } from "motion/react";
import { TbBrandGithub } from "react-icons/tb";
import { Twirl as Hamburger, Twirl } from "hamburger-react";
import { CiSearch } from "react-icons/ci";
import OnSearch from "../components/OnSearch";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const Components = () => {
  const [ search, setSearch ] = useState(false);
  const [toggle,setToggle] = useState(false)
  useEffect(()=>{
    const handleKeyDown = (e)=>{
        if((e.ctrlKey || e.metaKey) && e.key ==="k"){
            e.preventDefault()
            setSearch((prev)=> !prev
            )


        }
    }

    window.addEventListener('keydown',handleKeyDown);
    return ()=> window.removeEventListener('keydown',handleKeyDown)
  },[])


  let japanese = "ソラ - ウイ";
  let english = "sora-ui.";
  const STAGGER = 0.025;
  const DURATION = 0.25;
  return (
    <div className="text-zinc-50  tracking-tight w-full h-screen   relative z-50 ">
      <nav className=" w-full bg-zinc-950 py-5 flex justify-between items-center sticky top-0 left-0 z-50  px-10">
        <motion.div
          initial="initial"
          whileHover="hovered"
          variants={{
            initial: {},
            hovered: {},
          }}
          className=" overflow-hidden relative cursor-pointer"
        >
          <h1 className="text-green-300 text-3xl ">
            {japanese.split("").map((letter, index) => {
              return (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                  transition={{
                    duration: DURATION,
                    delay: STAGGER * index,
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </h1>
          <h1 className="text-green-300 font-bold text-center text-3xl absolute inset-0">
            {english.split("").map((letter, index) => {
              return (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                  transition={{
                    duration: DURATION,
                    delay: STAGGER * index,
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </h1>
        </motion.div>
        {/* searchbar */}
        <div className={`md:flex hidden ${search?"md:hidden":""}`}>
          <input
            type="text"
            placeholder="search components..."
            className="border border-green-50/40 border-r-0 h-12 rounded-tl-full rounded-bl-full  px-5 outline-none placeholder:text-green-300/50 placeholder:font-light w-56"  onClick={() => {
              setSearch(!search);
              setToggle(false)
            }}
          />
          <span className=" h-12 rounded-tr-full rounded-br-full border border-green-50/40 border-l-0 w-28 flex justify-end  px-1 items-center">
            <button className="h-[85%] bg-green-300 text-zinc-900 font-semibold cursor-pointer px-5 rounded-full">
              ctrl + k
            </button>
          </span>
        </div>
        {/* searchbar -- resposnive */}
        <div className="md:hidden flex gap-3 justify-center items-center cursor-pointer">
          <CiSearch
            size={"1.5rem"}
            onClick={() => {
              setSearch(!search);
            }}
          />
          <Twirl size={28} onToggle={()=>{
            setToggle(!toggle)
            setSearch(false)
          }} />
        </div>

        {/* star on github */}
        <motion.a whileTap={{scale:0.9,rotate:2}} className="h-12 w-48 bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(123,241,168,1)_50%)] text-zinc-900 rounded-full md:flex justify-between items-center px-1 py-3 pl-4 hidden cursor-pointer " href="https://github.com/i-piiyush/sora-ui" target="_blank">
          <h1 className="pointer-events-none " >star on GitHub</h1>
          <span className="h-11 w-11 rounded-full bg-zinc-900 flex items-center cursor-pointer justify-center text-white">
            <TbBrandGithub size="1.5rem" />{" "}
          </span>
        </motion.a>
      </nav>
      {search && <OnSearch closeSearch={()=>{
        setSearch(false)
      }}/>}

      <div className="md:flex py-5 px-10 bg-zinc-900 w-full">
        
        <Sidebar toggle={toggle} />
        <MainContent />

      </div>
      
    </div>
  );
};

export default Components;
