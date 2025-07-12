import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";

const OnSearch = ({ closeSearch }) => {
  const containerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && containerRef.current.contains(e.target)) {
        closeSearch();
      }
    };

window.addEventListener("keydown",(e)=>{
    if(e.key === "Escape"){
        closeSearch()
    }
})

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [closeSearch]);
  return (
    <div className="w-full h-screen overflow-hidden backdrop-blur-sm  absolute top-0 left-0 z-40 flex justify-between items-center">
      <motion.div
        className="flex  w-full h-full justify-center items-center"
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <input
          type="text"
          autoFocus
          placeholder="search components..."
          className="border border-green-50/40 border-r-0 h-12 rounded-tl-full rounded-bl-full  px-5 outline-none placeholder:text-green-300/50 placeholder:font-light w-56"
        />
        <span className=" h-12 rounded-tr-full rounded-br-full border border-green-50/40 border-l-0 w-28 flex justify-end  px-1 items-center">
          <button className="h-[85%] bg-green-300 text-zinc-900 font-semibold cursor-pointer px-5 rounded-full">
            ctrl + k
          </button>
        </span>
      </motion.div>
    </div>
  );
};

export default OnSearch;
