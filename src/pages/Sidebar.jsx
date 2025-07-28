import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // fixed import
import './sidebar.css'

const INITIAL_COMPONENTS = [
  {
    name: "Animated Navbars",
    items: [
      { name: "Slyde Bar", selected: false },
      { name: "Zen Deck", selected: true },
      { name: "KōraBar", selected: false },
    ],
  },
  {
    name: "Buttons",
    items: [
      { name: "Shiny button", selected: false },
      { name: 'Smooth in "N" out', selected: false },
    ],
  },
  {
    name: "Toast",
    items: [
      { name: "Dynamic Toast", selected: false },
      { name: "Zoop", selected: false },
    ],
  },
  {
    name: "Animated Texts",
    items: [
      { name: "Split Text", selected: false },
      { name: "Move on scroll", selected: false },
    ],
  }
];



const Sidebar = () => {
  const [components, setComponents] = useState(INITIAL_COMPONENTS);

  const handleClick = (groupIndex, itemIndex) => {
    setComponents(prev =>
      prev.map((group, gi) => ({
        ...group,
        items: group.items.map((item, ii) => ({
          ...item,
          selected: gi === groupIndex && ii === itemIndex
        }))
      }))
    );
  };

  return (
    <div className="h-full w-[30%] px-10">
      <div className="hidden md:flex flex-col h-[80vh] w-full overflow-y-auto no-scrollbar">
        <div className="pr-4 pb-4">
          {components.map((group, groupIndex) => (
            <div key={group.name} className="mb-8 0 px-5">
              <motion.h1
                className="text-green-300 font-bold text-5xl mt-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {group.name}
              </motion.h1>
              <div className="flex flex-col gap-1 items-baseline mt-2 relative ">
                {group.items.map((item, itemIndex) => (
                  <motion.button
                    type="button"
                    key={item.name}
                    className="flex items-center gap-3 relative cursor-pointer py-1 bg-transparent border-none outline-none w-full"
                    onClick={() => handleClick(groupIndex, itemIndex)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ textAlign: "left" }}
                  >
                    <AnimatePresence>
                      {item.selected && (
                        <motion.span
                          layoutId="active-indicator" // unique layoutId for shared slide/scale animation
                          className="absolute left-0 top-0 h-full w-full rounded-xl bg-gradient-to-r from-green-300/20 via-green-200/5 to-transparent z-0"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 240, damping: 25 }}
                        />
                      )}
                    </AnimatePresence>
                    <span className="relative z-10 flex items-center">
                      <AnimatePresence>
                        {item.selected && (
                          <motion.span
                            className="h-2 w-2 mr-2 rounded-full bg-green-300"
                            initial={{ scale: 0, x: -10 }}
                            animate={{ scale: 1, x: 0 }}
                            exit={{ scale: 0, x: -10 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 24
                            }}
                          />
                        )}
                      </AnimatePresence>
                      <motion.span
                        className="text-2xl font-medium"
                        animate={{
                          color: item.selected ? "#4ade80" : "#fff",
                          scale: item.selected ? 1.05 : 1
                        }}
                        transition={{ duration: 0.18 }}
                      >
                        {item.name}
                      </motion.span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
