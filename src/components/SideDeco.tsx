interface Props {
  position: boolean; // false: left, true: right
}

export default function SideDeco({ position }: Props) {
  return (
    <div
      className={
        "w-[62.2px] bg-[url('/SideDeco.png')] absolute h-full bg-repeat-y top-0 " +
        (position ? "right-[-34px] sm:right-[-24px] lg:right-[-13px] rotate-180" : "left-[-34px] sm:left-[-24px] lg:left-[-13px] bg-left")
      }
    ></div>
  );
}
