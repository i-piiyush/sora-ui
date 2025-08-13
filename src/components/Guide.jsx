import React from "react";

import { STEPS } from "../data/howToUseComponent";

const Guide = () => {
  const steps = STEPS;

  return (
    <div className="h-[60vh] mb-10  p-6 md:p-8 overflow-y-auto no-scrollbar">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-3">
            Getting Started
          </h1>
          <p className="text-zinc-400 text-lg">
            Follow these steps to integrate our component library into your
            project
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 shadow-lg hover:border-zinc-600 transition-colors duration-200"
            >
              <div className="flex items-start">
                <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="bg-green-400/10 text-green-400 text-xs font-mono px-2 py-1 rounded mr-3">
                      Step {index + 1}
                    </span>
                    <h2 className="text-xl font-semibold text-zinc-50">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-zinc-400 mt-1">{step.description}</p>
                  {step.details}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guide;
