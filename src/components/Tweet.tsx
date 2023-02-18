import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react"

import { Link } from "react-router-dom"

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link
      to="/status"
      className="py-5 p-5 grid grid-cols-[3rem_1fr] gap-3 border-b border-[#ebeef0] dark:border-zinc-700"
    >
      <img
        src="https://github.com/alerrandrojanio.png"
        alt="Alerrandro Janio"
        className="w-12 h-12 rounded-full"
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <strong className="font-roboto">Alerrandro Janio</strong>
          <span className="font-roboto text-sm text-[#89a2b8]">
            @allenrrandro
          </span>
        </div>

        <p className="font-roboto leading-5">{props.content}</p>

        <div className="flex items-center gap-12 mt-3">
          <button
            type="button"
            className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitter-blue"
          >
            <ChatCircle className="w-5 h-5" />
            20
          </button>

          <button
            type="button"
            className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitter-blue"
          >
            <ArrowClockwise className="w-5 h-5" />
            20
          </button>

          <button
            type="button"
            className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitter-blue"
          >
            <Heart className="w-5 h-5" />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}
