import { RouterProvider } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"

import { router } from "./routes/routes"

import "./styles/global.css"

export function App() {
  return (
    <div className="w-screen h-screen bg-white text-default antialiased p-2">
      <div className="w-full max-w-5xl m-auto">
        <div className="mx-auto my-0 max-w-[1000px] grid grid-cols-[300px_1fr]">
          <Sidebar />

          <div className="border-x border-x-[#ebeef0] border-solid">
            <RouterProvider router={router} />
          </div>
        </div>
      </div>
    </div>
  )
}
