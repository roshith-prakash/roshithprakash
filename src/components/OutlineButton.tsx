import React, { MouseEventHandler } from "react";

const OutlineButton = ({
  text,
  onClick,
  className,
}: {
  text: string | React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`border-cta dark:border-white min-w-14 border-2 py-2 px-5 rounded-full text-cta dark:text-white hover:bg-cta hover:text-white dark:hover:bg-white dark:hover:text-darkbg dark:hover:bg-transparent transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default OutlineButton;
