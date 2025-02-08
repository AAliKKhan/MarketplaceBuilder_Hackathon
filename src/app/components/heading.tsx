

import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Flexbox wrapper to align blue square & text inline */}
      <div className="flex items-center gap-3 relative group">
        {/* Blue square with bounce effect */}
        <div className="w-4 h-4 bg-blue-600 group-hover:bg-blue-700 rounded-sm animate-bounce transition-all duration-500"></div>

        {/* Heading with gradient */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 group-hover:from-blue-800 group-hover:to-blue-500 transition-all duration-500">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
