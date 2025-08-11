import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const MainContent = () => {
  const navigate = useNavigate();
  const { componentKey } = useParams();
  const location = useLocation();

  const [menuItems, setMenuItems] = useState([
    { name: "Demo", path: "demo", isSelected: false },
    { name: "Dependency", path: "dependency", isSelected: false },
    { name: "Props", path: "props", isSelected: false },
    { name: "How to get started?", path: "guide", isSelected: false },
  ]);

  // Update isSelected whenever route changes
  useEffect(() => {
    setMenuItems((items) =>
      items.map((item) => ({
        ...item,
        isSelected: location.pathname.endsWith(item.path),
      }))
    );
  }, [location.pathname]);

  return (
    <div className="xl:w-[70%] bg-zinc-900 w-full h-full">
      <div className="w-full py-5 flex items-center gap-5 md:gap-10">
        {menuItems.map((item) => (
          <h1
            key={item.name}
            onClick={() => navigate(`/components/${componentKey}/${item.path}`)}
            className={`text-sm md:text-xl xl:text-3xl font-bold cursor-pointer ${
              item.isSelected ? "text-green-400" : ""
            }`}
          >
            {item.name}
          </h1>
        ))}
      </div>

      <div className="w-full">
        <Outlet />
      </div>

      <button className="bg-green-400 rounded-full px-8 py-4 text-sm text-black font-semibold mt-3">
        Download Component
      </button>
    </div>
  );
};

export default MainContent;
