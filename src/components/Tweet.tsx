interface TweetProps {
  user: string
  children: string
  likes?: number
}

export function Tweet(props: TweetProps) {
  return (
    <div className="p-4 m-3 rounded-lg font-roboto">
      <strong>{props.user}</strong>
      <p className=" text-white">{props.children}</p>
      <button className="cursor-pointer">Like {props.likes ?? 0}</button>
      <a href="#" className="text-inherit"></a>
    </div>
  )
}
