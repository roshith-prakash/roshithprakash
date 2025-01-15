import { MouseEventHandler } from "react";

const CTAButton = ({
  text,
  onClick,
}: {
  text: string | React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className="border-cta dark:border-hovercta min-w-14 bg-cta text-white border-2 py-2 px-5 rounded-full hover:bg-hovercta hover:border-hovercta transition-all "
    >
      {text}
    </button>
  );
};

export default CTAButton;
