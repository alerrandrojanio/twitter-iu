import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

const answers = ["Vdd!", "Concordo tmj"]

export function Status() {
  return (
    <main>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, perspiciatis incidunt ipsam ab ullam tempore porro iure, maxime nam veniam autem nemo enim ea similique, officia natus molestiae. Delectus, deserunt!" />

      <Separator />

      <form className="py-6 px-5 flex items-center gap-2 border-b border-[#ebeef0]">
        <label htmlFor="tweet" className="flex-1 flex items-center gap-3">
          <img
            src="https://github.com/alerrandrojanio.png"
            alt="Alerrandro Janio"
            className="w-12 h-12 rounded-full"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            className="flex-1 mt-5 border-0 font-roboto font-medium text-lg resize-none focus:outline-none placeholder:text-[#5b7083]"
          />
        </label>

        <button
          type="submit"
          className="ml-auto bg-twitter-blue rounded-full py-3 px-6 text-white font-roboto font-black border-0 hover:brightness-95"
        >
          Answer
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}
