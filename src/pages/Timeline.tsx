import { Link } from "react-router-dom"

import { Tweet } from "../components/Tweet"
import { Separator } from "../components/Separator"
import { Header } from "../components/Header"

const tweets = ["Primeiro tweet", "Deu certooooooooo!!!1", "Map é top :)"]

export function Timeline() {
  return (
    <main>
      <Header title="Home" />

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

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}
