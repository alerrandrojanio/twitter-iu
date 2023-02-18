import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Pencil,
} from "phosphor-react"

import twitterLogo from "../assets/twitter-logo.svg"

import { NavLink } from "react-router-dom"

export function Sidebar() {
  return (
    <aside className="py-6 px-5 flex flex-col gap-8 max-md:px-3 max-md:items-center">
      <a href="">
        <img src={twitterLogo} alt="Logo" className="w-8 h-8" />
      </a>

      <nav className="flex flex-col gap-8">
        <NavLink
          to="/"
          className="flex items-center gap-5 text-xl font-roboto font-bold [&.active]:text-twitter-blue dark:[&.active]:text-twitter-purple"
        >
          <House className="w-8 h-8" weight="fill" />
          <span className="max-md:hidden">Home</span>
        </NavLink>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <Hash className="w-8 h-8" />
          <span className="max-md:hidden">Explore</span>
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <Bell className="w-8 h-8" />
          <span className="max-md:hidden">Notifications</span>
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <Envelope className="w-8 h-8" />
          <span className="max-md:hidden">Messages</span>
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <BookmarkSimple className="w-8 h-8" />
          <span className="max-md:hidden">Bookmarks</span>
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <FileText className="w-8 h-8" />
          <span className="max-md:hidden">Lists</span>
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <User className="w-8 h-8" />
          <span className="max-md:hidden">Profile</span>
        </a>
        <a
          href=""
          className="flex items-center gap-5 text-xl font-roboto font-bold"
        >
          <DotsThreeCircle className="w-8 h-8" />
          <span className="max-md:hidden">More</span>
        </a>
      </nav>

      <button
        className="bg-twitter-blue rounded-full p-4 flex justify-center w-full text-white text-lg font-roboto font-black border-0
  hover:brightness-95 dark:bg-twitter-purple"
        type="button"
      >
        <Pencil className="w-6 h-6 hidden max-md:block" />
        <span className="max-md:hidden">Tweet</span>
      </button>
    </aside>
  )
}
