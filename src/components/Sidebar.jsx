 import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { COMPONENTS_DATA } from "../data/componentsData";

const Sidebar = ({ toggle, closeMobile }) => {
  const navigate = useNavigate();
  const { componentName } = useParams();

  // Single button render
  const renderComponentButton = (item) => {
    const isSelected = componentName === item.key;

    return (
      <motion.button
        key={item.key}
        className="flex items-center gap-3 relative cursor-pointer py-1 bg-transparent border-none outline-none w-full"
        onClick={() => {
          navigate(item.base);
          if (closeMobile) closeMobile(); // close mobile menu if function given
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        style={{ textAlign: "left" }}
      >
        <AnimatePresence>
          {isSelected && (
            <motion.span
              layoutId="active-indicator"
              className="absolute left-0 top-0 h-full w-full rounded-xl bg-gradient-to-r from-green-300/20 via-green-200/5 to-transparent z-0"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 25,
              }}
            />
          )}
        </AnimatePresence>

        <span className="relative z-10 flex items-center">
          {isSelected && (
            <motion.span
              className="h-2 w-2 mr-2 rounded-full bg-green-300"
              initial={{ scale: 0, x: -10 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 0, x: -10 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 24,
              }}
            />
          )}
          <motion.span
            className="text-sm md:text-base font-medium"
            animate={{
              color: isSelected ? "#4ade80" : "#fff",
              scale: isSelected ? 1.05 : 1,
            }}
            transition={{ duration: 0.18 }}
          >
            {item.name}
          </motion.span>
        </span>
      </motion.button>
    );
  };

  // Groups render — here I match your mobile style
  const renderSidebarGroups = (isMobile = false) =>
    COMPONENTS_DATA.map((group) => (
      <div
        key={group.category}
        className={`mb-8 px-5 ${isMobile ? "" : ""}`}
      >
        <motion.h1
          className={`text-green-300 font-bold ${
            isMobile ? "text-xl" : "text-base"
          } mt-5`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {group.category}
        </motion.h1>
        <div className="flex flex-col gap-1 items-baseline mt-2 relative">
          {group.components.map(renderComponentButton)}
        </div>
      </div>
    ));

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="h-full md:block hidden px-10 md:px-2">
        <div className="hidden md:flex flex-col h-[80vh] w-full overflow-y-auto no-scrollbar">
          <div className="pr-4 pb-4">{renderSidebarGroups(false)}</div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {toggle && (
        <div className="bg-zinc-900 h-screen w-full absolute left-0 right-0 z-50">
          <div className="flex flex-col h-[80vh] w-full overflow-y-auto no-scrollbar">
            <div className="pr-4 pb-4">{renderSidebarGroups(true)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;