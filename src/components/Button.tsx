import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
  onClick?: () => any;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined
}

export default function Button({
  children,
  className,
  ariaLabel = "Button",
  onClick = () => console.log("Clicked"),
  disabled = false,
  type= "button"
}: Props) {
  return (
    <button
      aria-label={ariaLabel}
      className={
        "px-8 py-3 bg-green-1 text-white font-poppins font-medium rounded-full text-[17px] hover:bg-[#112D0B] transition hover:shadow-[0_0_5px_rgba(24,64,15,.6)] active:shadow-[0_0_8px_rgba(24,64,15,.9)] disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed " +
        className
      }
      onClick={() => {
        if (disabled) return;
        onClick();
      }}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
