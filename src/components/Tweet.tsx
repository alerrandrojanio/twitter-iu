import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react"

export function Tweet() {
  return (
    <a
      href="#"
      className="py-5 p-5 grid grid-cols-[3rem_1fr] gap-3 border-b border-[#ebeef0] "
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

        <p className="font-roboto leading-5">Testando um tweet</p>

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
    </a>
  )
}
