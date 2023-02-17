import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
} from "phosphor-react"

import twitterLogo from "../assets/twitter-logo.svg"

import { Link } from "react-router-dom"

export function Sidebar() {
  return (
    <aside className="py-6 px-5 flex flex-col gap-8">
      <img src={twitterLogo} alt="Logo" className="w-8 h-8" />

      <nav className="flex flex-col gap-8">
        <a
          href="#"
          className="flex items-center gap-5 text-xl font-roboto font-bold text-twitter-blue"
        >
          <House className="w-8 h-8" weight="fill" />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <Hash className="w-8 h-8" />
          Explore
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <Bell className="w-8 h-8" />
          Notifications
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <Envelope className="w-8 h-8" />
          Messages
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <BookmarkSimple className="w-8 h-8" />
          Bookmarks
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <FileText className="w-8 h-8" />
          Lists
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <User className="w-8 h-8" />
          Profile
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <DotsThreeCircle className="w-8 h-8" />
          More
        </a>
      </nav>

      <button
        className="bg-twitter-blue rounded-full p-4 flex justify-center w-full text-white text-lg font-roboto font-black border-0
  hover:brightness-95"
        type="button"
      >
        Tweet
      </button>
    </aside>
  )
}
