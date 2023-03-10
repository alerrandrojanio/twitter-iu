import { RouterProvider } from "react-router-dom"

import { router } from "./routes/routes"

import "./styles/global.css"

export function App() {
  return <RouterProvider router={router} />
}
