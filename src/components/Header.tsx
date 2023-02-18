import { MoonStars, Sparkle, Sun } from "phosphor-react"
import { useEffect, useState } from "react"

interface HeaderProps {
  title: string
}

const root = window.document.documentElement

function toogleTheme() {
  if (root.classList.contains("dark")) {
    root.classList.remove("dark")
  } else {
    root.classList.add("dark")
  }
}

export function Header(props: HeaderProps) {
  return (
    <div className="py-6 px-5 flex items-center justify-between text-xl font-roboto font-bold border-b border-x-[#ebeef0] dark:border-zinc-700">
      {props.title}
      <div className="flex items-center gap-5">
        <Sun
          className="w-6 h-6 hidden cursor-pointer dark:block hover:brightness-95 dark:text-twitter-purple"
          onClick={toogleTheme}
        />
        <MoonStars
          className="w-6 h-6 cursor-pointer text-twitter-blue block hover:brightness-95 dark:hidden"
          onClick={toogleTheme}
        />
        <Sparkle className="w-6 h-6 text-twitter-blue cursor-pointer hover:brightness-95 dark:text-twitter-purple" />
      </div>
    </div>
  )
}
