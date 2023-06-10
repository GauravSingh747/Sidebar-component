import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./comps/Sidebar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </main>
  );
};

export default Home;
