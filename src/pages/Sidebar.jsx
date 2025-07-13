import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import './sidebar.css'

const Sidebar = () => {
  const [components, setComponents] = useState([
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
    },
     {
      name: "Animated Texts",
      items: [
        { name: "Split Text", selected: false },
        { name: "Move on scroll", selected: false },
      ],
    }
  ]);

  const handleClick = (index, i) => {
    setComponents((prev) => {
      const updatedComponents = JSON.parse(JSON.stringify(prev));
      
      // Reset all selections
      updatedComponents.forEach(element => {
        element.items.forEach(item => {
          item.selected = false;
        });
      });
      
      // Toggle the clicked item
      updatedComponents[index].items[i].selected = true;
      
      return updatedComponents;
    });
  };

   return (
    <div className="h-full w-[30%] px-10 ">
      {/* Scrollable container */}
      <div className="hidden md:flex flex-col h-[80vh] w-full overflow-y-auto no-scrollbar">
        {/* Container for all components with padding at bottom */}
        <div className="pr-4 pb-4"> {/* Right padding to prevent scrollbar overlap */}
          {components.map((elem, index) => (
            <div key={index} className="mb-8"> {/* Added margin between groups */}
              <motion.h1 
                className="text-green-300 font-bold text-5xl mt-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {elem.name}
              </motion.h1>
              <div className="flex flex-col gap-1 items-baseline mt-2">
                {elem.items.map((e, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3 cursor-pointer py-1" /* Added vertical padding */
                    onClick={() => handleClick(index, i)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AnimatePresence>
                      {e.selected && (
                        <motion.span
                          className="h-2 w-2 rounded-full bg-green-300"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        />
                      )}
                    </AnimatePresence>
                    <motion.p 
                      className="text-2xl font-medium"
                      animate={{
                        color: e.selected ? "#4ade80" : "#ffffff",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {e.name}
                    </motion.p>
                  </motion.div>
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