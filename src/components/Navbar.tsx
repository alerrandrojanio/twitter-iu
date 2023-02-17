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

export function Navbar() {
  return (
    <nav className="flex flex-col gap-8">
      <a
        href=""
        className="flex items-center gap-5 text-lg font-roboto font-bold text-twitter-blue"
      >
        <House className="w-8 h-8" weight="fill" />
        Home
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-roboto font-bold"
      >
        <Hash className="w-8 h-8" />
        Explore
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-roboto font-bold"
      >
        <Bell className="w-8 h-8" />
        Notifications
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-roboto font-bold"
      >
        <Envelope className="w-8 h-8" />
        Messages
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-roboto font-bold"
      >
        <BookmarkSimple className="w-8 h-8" />
        Bookmarks
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-roboto font-bold"
      >
        <FileText className="w-8 h-8" />
        Lists
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-roboto font-bold"
      >
        <User className="w-8 h-8" />
        Profile
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-roboto font-bold"
      >
        <DotsThreeCircle className="w-8 h-8" />
        More
      </a>
    </nav>
  )
}
