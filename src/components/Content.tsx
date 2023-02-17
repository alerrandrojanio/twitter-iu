import { Sparkle } from "phosphor-react"
import { Tweet } from "./Tweet"

export function Content() {
  return (
    <div className="border-x border-x-[#ebeef0] border-solid">
      <main>
        <div className="py-6 px-5 flex items-center justify-between text-xl font-roboto font-bold border-b border-x-[#ebeef0]">
          Home
          <Sparkle className="w-6 h-6 text-twitter-blue" />
        </div>

        <form className="py-6 px-5 flex flex-col gap-2">
          <label htmlFor="tweet" className="flex gap-3">
            <img
              src="https://github.com/alerrandrojanio.png"
              alt="Alerrandro Janio"
              className="w-12 h-12 rounded-full"
            />
            <textarea
              id="tweet"
              placeholder="What's happening?"
              className="flex-1 mt-3 border-0 font-roboto font-medium text-xl resize-none focus:outline-none placeholder:text-[#5b7083]"
            />
          </label>

          <button
            type="submit"
            className="ml-auto bg-twitter-blue rounded-full py-3 px-6 text-white font-roboto font-black border-0 hover:brightness-95"
          >
            Tweet
          </button>
        </form>

        <div className="bg-[#f7f9fa] border-y border-[#efebf0] h-3" />

        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </main>
    </div>
  )
}
