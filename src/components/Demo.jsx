import React from "react";
import Syldebar from "../sora-components/syldebar";
import { useParams } from "react-router-dom";
import { componentsMap } from "../data/componentsMap";

const Demo = () => {
  const { componentKey } = useParams();
  const SelectedComponent = componentsMap[componentKey?.toLowerCase()];

  if (!SelectedComponent) {
    return (
      <div className="border border-green-400/30  w-full flex justify-center items-center h-[30rem] text-white text-2xl font-bold rounded-2xl">
        Component "{componentKey}" not found
      </div>
    );
  }

  return (
    <div className="border border-green-400/30 w-full relative overflow-hidden rounded-2xl  h-[30rem]">
      <SelectedComponent />
    </div>
  );
};

export default Demo;
