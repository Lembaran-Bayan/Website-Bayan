interface Props {
  position: boolean; // false: left, true: right
}

export default function SideDeco({ position }: Props) {
  return (
    <div
      className={
        "w-[31.1px] sm:w-[46.65px] md:w-[62.2px] bg-[url('/SideDeco.png')] absolute h-full bg-repeat-y top-0 " +
        (position ? "right-[-13px] rotate-180" : "left-[-13px] bg-left")
      }
    ></div>
  );
}
