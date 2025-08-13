import React, { useState } from "react";
import { COMPONENTS_DATA } from "../data/componentsData";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Dependency = () => {
  const [copied, setCopied] = useState(false);
  const { componentKey } = useParams();

  const allComponents = COMPONENTS_DATA.flatMap(
    (category) => category.components
  );
  const found = allComponents.find(
    (component) => component.key === componentKey
  );

  
 const dependencies = found.dependencies
  const handleCopy = (text) => {
    const depnedencyName = `npm i ${text}`;
    navigator.clipboard
      .writeText(depnedencyName)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
        toast.success("successfully copied");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div className="w-full h-full px-5 py-10">
      {dependencies.map((elem, index) => (
        <pre
          key={index}
          className=" text-green-400 border cursor-pointer border-zinc-50/20 p-4 rounded-md  text-sm overflow-x-auto mt-3 codebox"
          onClick={() => {
            handleCopy(elem);
          }}
        >
          {`npm i ${elem}`}
        </pre>
      ))}
    </div>
  );
};

export default Dependency;
