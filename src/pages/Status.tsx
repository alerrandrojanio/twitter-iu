import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

export function Status() {
  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswers] = useState(["Vdd!", "Concordo tmj"])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([...answers, newAnswer])
    setNewAnswer("")
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([...answers, newAnswer])
      setNewAnswer("")
    }
  }

  return (
    <main>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, perspiciatis incidunt ipsam ab ullam tempore porro iure, maxime nam veniam autem nemo enim ea similique, officia natus molestiae. Delectus, deserunt!" />

      <Separator />

      <form
        className="py-6 px-5 flex items-center gap-2 border-b border-[#ebeef0] dark:border-zinc-700"
        onSubmit={createNewAnswer}
      >
        <label htmlFor="tweet" className="flex-1 flex items-center gap-3">
          <img
            src="https://github.com/alerrandrojanio.png"
            alt="Alerrandro Janio"
            className="w-12 h-12 rounded-full"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            className="flex-1 mt-5 border-0 font-roboto font-medium text-lg resize-none focus:outline-none placeholder:text-[#5b7083] dark:bg-transparent"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewAnswer(event.target.value)}
          />
        </label>

        <button
          type="submit"
          className="ml-auto bg-twitter-blue rounded-full py-3 px-6 text-white font-roboto font-black border-0 hover:brightness-95 max-md:p-3 dark:bg-twitter-purple"
        >
          <PaperPlaneRight className="w-5 h-5 hidden max-md:block" />
          <span className="max-md:hidden">Answer</span>
        </button>
      </form>

      {answers
        .slice()
        .reverse()
        .map((answer) => {
          return <Tweet key={answer} content={answer} />
        })}
    </main>
  )
}
