import { Link } from "react-router-dom"
import { Tweet } from "../components/Tweet"
import { Navbar } from "../components/Navbar"

import twitterLogo from "../assets/twitter-logo.svg"

export function Index() {
  return (
    <div className="mx-auto my-0 max-w-[1000px] grid grid-cols-[300px_1fr]">
      <aside className="py-6 px-5 flex flex-col gap-8">
        <img src={twitterLogo} alt="Logo" className="w-8 h-8" />

        <Navbar />

        <button
          className="bg-twitter-blue rounded-[999px] p-4 flex justify-center w-full text-white text-lg font-roboto font-black border-0
          hover:brightness-95"
          type="button"
        >
          Tweet
        </button>
      </aside>
      <div className="border-x border-x-[#ebeef0] border-solid ">content</div>
    </div>
  )
}
