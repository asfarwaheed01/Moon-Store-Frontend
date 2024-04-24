import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`max-w-[1330px] mx-auto overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Container;
