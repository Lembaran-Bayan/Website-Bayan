interface Props {
  position: boolean; // false: left, true: right
}

export default function SideDeco({position}: Props) {
  return(
    <div className={"w-[31.1px] sm:w-[62.2px] bg-[url('/SideDeco.png')] absolute h-full bg-cover top-0 " + (position ? "right-[-13px] scale-[-100%]" : "left-[-13px]")}>

    </div>
  )
}