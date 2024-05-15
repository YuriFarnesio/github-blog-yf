import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { ButtonLink, IconTag, PostSelectedSkeleton } from '../../components'

import { usePostSelected } from '../../hooks'

export function Posts() {
  const { post, isLoadingPost } = usePostSelected()

  const commentsText = post?.comments === 1 ? 'comentário' : 'comentários'

  if (isLoadingPost || !post) {
    return <PostSelectedSkeleton />
  }

  return (
    <main className="w-screen flex flex-col gap-10 px-4 pb-24">
      <header className="w-full max-w-216 flex flex-col bg-base-profile gap-5 rounded-[0.625rem] p-8 mx-auto">
        <div className="w-full flex items-center justify-between">
          <ButtonLink
            isInternal
            text="Voltar"
            link="/"
            leftIcon={faChevronLeft}
          />
          <ButtonLink
            text="GitHub"
            link={post?.link || ''}
            rightIcon={faArrowUpRightFromSquare}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-base-title">{post?.title}</h1>

          <div className="flex items-center gap-6">
            <IconTag icon={faGithub} text={post?.username} />
            <IconTag icon={faCalendarDay} text={post?.publishTime} />
            <IconTag
              icon={faComment}
              text={`${post?.comments} ${commentsText}`}
            />
          </div>
        </div>
      </header>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ alt, ...props }) => (
            <img alt={alt} style={{ maxWidth: '100%' }} {...props} />
          ),
        }}
        className="w-full max-w-216 whitespace-break-spaces text-base leading-default text-base-text [&_a]:text-brand-blue [&_a]:border-b [&_a]:border-transparent [&_a:hover]:border-brand-blue px-8 mx-auto [&_a]:transition"
      >
        {post?.body || 'Carregando...'}
      </ReactMarkdown>
    </main>
  )
}
