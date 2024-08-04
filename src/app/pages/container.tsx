import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex mx-6 py-6">
      {children}
    </div>
  );
};

export default Container;
