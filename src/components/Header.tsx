import { Sparkle } from "phosphor-react"

interface HeaderProps {
  title: string
}

export function Header(props: HeaderProps) {
  return (
    <div className="py-6 px-5 flex items-center justify-between text-xl font-roboto font-bold border-b border-x-[#ebeef0]">
      {props.title}
      <Sparkle className="w-6 h-6 text-twitter-blue cursor-pointer hover:brightness-95" />
    </div>
  )
}
