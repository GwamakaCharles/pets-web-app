import React from "react";

// eslint-disable-next-line max-len
const Categories: React.FC<{ iconPath: string, alt: string, children: any }> = ({ iconPath, alt, children }) => {
  return (
    <div className="my-4">
      <div className="bg-light-grey relative md:w-40 rounded-lg flex justify-center w-full">
        <img src={iconPath} alt={alt} className="h-12 transform -translate-y-4" />
      </div>
      <span className="mt-3 block">{children}</span>
    </div>
  );
};

export default Categories;
