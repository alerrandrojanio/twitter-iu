import { House, User } from "phosphor-react"

const menuNav = [
  "Home",
  "Explore",
  "Notifications",
  "Messages",
  "Bookmarks",
  "Lists",
  "Profile",
  "More",
]

const menuIcons = [
  <House className="w-8 h-8" weight="fill" />,
  <User className="w-8 h-8" />,
  <User className="w-8 h-8" />,
  <User className="w-8 h-8" />,
]

const allMenu = menuNav.map((menu, index) => ({ ...menu, ...menuIcons[index] }))

export function Navbar() {
  return (
    <nav className="flex flex-col gap-8">
      {allMenu.map((menu, index) => {
        return (
          <div key={index} className="flex items-center gap-6">
            <a
              href=""
              className="flex items-center gap-5 text-lg font-roboto font-bold"
            >
              {menu}
            </a>
          </div>
        )
      })}
    </nav>
  )
}
