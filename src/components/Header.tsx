import { MoonStars, Sparkle, Sun } from "phosphor-react"

interface HeaderProps {
  title: string
}

export function Header(props: HeaderProps) {
  return (
    <div className="py-6 px-5 flex items-center justify-between text-xl font-roboto font-bold border-b border-x-[#ebeef0] dark:border-zinc-700">
      {props.title}
      <div className="flex items-center gap-5">
        <Sun className="w-6 h-6 hidden dark:block hover:brightness-95 dark:text-twitter-purple" />
        <MoonStars className="w-6 h-6 text-twitter-blue block hover:brightness-95 dark:hidden" />
        <Sparkle className="w-6 h-6 text-twitter-blue cursor-pointer hover:brightness-95 dark:text-twitter-purple" />
      </div>
    </div>
  )
}
