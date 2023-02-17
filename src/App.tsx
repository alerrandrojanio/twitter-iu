import { Index } from "./pages/Index"

import "./styles/global.css"

export function App() {
  return (
    <div className="w-screen h-screen bg-white text-default antialiased p-2">
      <div className="w-full max-w-5xl m-auto">
        <Index />
      </div>
    </div>
  )
}
