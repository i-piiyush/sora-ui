import React from "react";
import { COMPONENTS_DATA } from "../data/componentsData";
import { useParams } from "react-router-dom";

const Props = () => {
  const { componentKey } = useParams();

  const allComponents = COMPONENTS_DATA.flatMap(
    (category) => category.components
  );
  const found = allComponents.find(
    (component) => component.key === componentKey
  );

  const propsList = found?.props || [];

  return (
    <div className=" bg-zinc-900 p-6 md:p-8 overflow-hidden h-[60vh] overflow-y-auto no-scrollbar mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-2">
            {found?.name} Props
          </h1>
          <p className="text-zinc-400">
            Explore the available properties for the {found?.name} component
          </p>
        </div>

        {propsList.length > 0 ? (
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-700">
                <thead className="bg-zinc-800/80">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                      Prop Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                      Values
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-zinc-900/50 divide-y divide-zinc-800">
                  {propsList.map((prop, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-zinc-800/50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-green-400 codebox font-medium">
                          {prop.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-300  text-sm">
                        {prop.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-300">
                        {Array.isArray(prop.possibleValues) ? (
                          <div className="flex flex-wrap gap-3">
                            {prop.possibleValues.map((value, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-light bg-zinc-700 text-green-300"
                              >
                                {value}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-zinc-400 italic">
                            {prop.possibleValues || "—"}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {prop.default ? (
                          <span className="bg-zinc-800 text-amber-300 px-2 py-1 rounded text-xs font-mono">
                            {Array.isArray(prop.default)
                              ? prop.default
                                  .map((item) =>
                                    typeof item === "object" ? item.title : item
                                  )
                                  .join(", ")
                              : prop.default}
                          </span>
                        ) : (
                          <span className="text-zinc-500">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-zinc-400 max-w-xs">
                        {prop.description || (
                          <span className="text-zinc-600">No description</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8 text-center">
            <p className="text-zinc-400 text-lg">
              No props available for this component.
            </p>
            <p className="text-zinc-600 mt-2">
              This component doesn't accept any custom properties.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Props;
