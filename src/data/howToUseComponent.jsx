import { FiDownload, FiPackage, FiSliders } from "react-icons/fi";

export const STEPS = [
  {
    title: "1. Download the Component",
    description: "Add the component files to your project",
    icon: <FiDownload className="text-green-400" size={20} />,
    details: (
      <div className="space-y-2">
        <p className="text-zinc-600">Choose one method:</p>
        <div className="bg-zinc-800 p-3 rounded-md">
          <p className="codebox text-sm text-green-600">
            Downlaod using the button below
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2. Install Dependencies",
    description: "Add required packages",
    icon: <FiPackage className="text-green-400" size={20} />,
    details: (
      <div className="space-y-2">
        <div className="bg-zinc-800 p-3 rounded-md">
          <p className="codebox text-sm text-green-600">
            npm install dependency-name
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "3. Use & Customize",
    description: "Import and tweak with props",
    icon: <FiSliders className="text-green-400" size={20} />,
    details: (
      <div className="space-y-3">
        <div className="bg-zinc-800 p-3 rounded-md">
          <p className="codebox text-sm">
            <span className="text-green-600">import</span> DemoComponent{" "}
            <span className="text-green-600">from</span> "your-components";
          </p>
        </div>
        <div className="bg-zinc-800 p-3 rounded-md">
          <p className="text-zinc-600 text-sm mb-1">Example with props:</p>
          <p className="codebox text-sm">
            {"<DemoComponent "}
            <span className="text-red-300 codebox">color=</span>
            <span className="text-green-600 codebox">"red"</span>{" "}
            <span className="text-red-300 codebox">size=</span>
            <span className="text-green-600 codebox">"lg"</span>
            {" />"}
          </p>
        </div>
        <p className="text-xs text-gray-500">
          Check props tab for all available props.
        </p>
      </div>
    ),
  },
];
