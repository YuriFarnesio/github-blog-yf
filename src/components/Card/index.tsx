import { Link } from 'react-router-dom'

import { CardProps } from './types'

export function Card({ post }: CardProps) {
  return (
    <Link
      to={`/posts/${post.issue_number}`}
      className="bg-base-post gap-5 border-2 border-solid border-transparent hover:border-base-label rounded-[0.625rem] hover:cursor-pointer p-8 transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl leading-default text-base-title">
          {post.title}
        </h3>
        <span className="text-sm leading-8 text-base-span text-nowrap first-letter:capitalize">
          {post.publishTime}
        </span>
      </div>

      <p className="text-base-text line-clamp-4">{post.body}</p>
    </Link>
  )
}
