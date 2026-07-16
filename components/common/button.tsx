import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function PrimaryButton({
  children,
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={twMerge(
        "group font-semibold flex items-center justify-center gap-[8px] bg-[#182700] text-white h-[40px] px-[24px] rounded-[8px] transition-all duration-200 hover:shadow-lg hover:-translate-y-[1px] active:scale-[0.97] cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function SecondaryButton({
  children,
  className,
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      className={twMerge(
        "font-semibold h-[40px] flex items-center justify-center px-[24px] border-[2px] border-solid border-[#14191F0F] rounded-[8px] transition-all duration-200 hover:bg-[#14191F08] hover:shadow-sm active:scale-[0.97] cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
