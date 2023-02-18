import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"

export function Default() {
  return (
    <div className="mx-auto my-0 max-w-[1000px] min-h-screen grid grid-cols-[300px_1fr] max-md:grid-cols-[80px_1fr]">
      <Sidebar />

      <div className="border-x border-x-[#ebeef0] border-solid dark:border-zinc-700">
        <Outlet />
      </div>
    </div>
  )
}
