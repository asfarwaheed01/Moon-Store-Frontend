import React, { ReactNode } from "react";
import Sidebar from "./components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
