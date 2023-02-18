import { Tweet } from "../components/Tweet"
import { Separator } from "../components/Separator"
import { Header } from "../components/Header"
import { FormEvent, KeyboardEvent, useState } from "react"

export function Timeline() {
  const [newTweet, setNewTweet] = useState("")
  const [tweets, setTweets] = useState([
    "Primeiro tweet",
    "Deu certooooooooo!!!1",
    "React é top :)",
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([...tweets, newTweet])
    setNewTweet("")
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([...tweets, newTweet])
      setNewTweet("")
    }
  }

  return (
    <main>
      <Header title="Home" />

      <form className="py-6 px-5 flex flex-col gap-2" onSubmit={createNewTweet}>
        <label htmlFor="tweet" className="flex gap-3">
          <img
            src="https://github.com/alerrandrojanio.png"
            alt="Alerrandro Janio"
            className="w-12 h-12 rounded-full"
          />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            className="flex-1 mt-3 border-0 font-roboto font-medium text-xl resize-none focus:outline-none placeholder:text-[#5b7083] dark:bg-transparent"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewTweet(event.target.value)}
          />
        </label>

        <button
          type="submit"
          className="ml-auto bg-twitter-blue rounded-full py-3 px-6 text-white font-roboto font-black border-0 hover:brightness-95 dark:bg-twitter-purple"
        >
          Tweet
        </button>
      </form>

      <Separator />

      {tweets
        .slice()
        .reverse()
        .map((tweet) => {
          return <Tweet key={tweet} content={tweet} />
        })}
    </main>
  )
}
