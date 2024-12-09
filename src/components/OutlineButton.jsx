import React from "react";

const OutlineButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-cta dark:border-white min-w-14 border-2 py-2 px-5 rounded-full text-cta dark:text-white hover:bg-cta hover:text-white dark:hover:border-cta transition-all "
    >
      {text}
    </button>
  );
};

export default OutlineButton;
