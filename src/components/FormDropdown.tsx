import { SetStateAction, useState } from "react";

type OptionObject = {
  display: string;
  value: any;
};

export default function FormDropdown({
  state,
  setState,
  options = [],
  placeholder = "Pilih",
}: {
  state: any;
  setState: SetStateAction<any>;
  options: OptionObject[];
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="outline outline-2 outline-green-2 font-normal px-2 py-1 rounded-[8px] bg-white hover:bg-[#F2F2F2] active:bg-[#DEDEDE] text-[20px] text-left w-full"
      >
        {state ?? placeholder}
      </button>
      <div
        className={
          "w-full z-[1] absolute top-[calc(100%+8px)] bg-white grid overflow-hidden transition-[grid-template-rows,outline] outline outline-2 outline-green-2 rounded-[8px] " +
          (isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] !outline-transparent")
        }
      >
        <div className="overflow-hidden flex flex-col text-[18px]">
          {options?.map((option) => {
            return (
              <button
                onClick={() => {
                  setState(option.value);
                  setIsOpen(false);
                }}
                key={option.value}
                className="text-left px-3 py-2 bg-white hover:bg-[#F2F2F2]"
                type="button"
              >
                {option.display}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
