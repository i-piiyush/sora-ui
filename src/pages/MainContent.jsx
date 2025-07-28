import React, { useState } from "react";
import Demo from "./Demo";

const MainContent = () => {
  const [menutItems, setMenuItems] = useState([
    { name: "Demo", isSelected: true },
    { name: "Dependency", isSelected: false },
    { name: "Props", isSelected: false },
    { name: "How to get started?", isSelected: false },
  ]);

  const handleClick = (index) => {
    setMenuItems((items) =>
      items.map((item, i) => ({
        ...item,
        isSelected: i === index,
      }))
    );
  };
  return (
    <div className="w-[70%] h-full">
      <div className=" w-full py-5 flex items-center gap-10">
        {menutItems.map((item, index) => (
          <h1
            onClick={() => {
              handleClick(index);
            }}
            key={index}
            className={`text-3xl font-bold cursor-pointer ${item.isSelected?`text-green-400`:``}`} 
          >
            {item.name}
          </h1>
        ))}
      </div>
      <div className="w-full ">
        <Demo />
      </div>
      <button className="bg-green-400 rounded-full px-8 py-4 text-sm text-black font-semibold mt-3">Download Component</button>
    </div>
  );
};

export default MainContent;
