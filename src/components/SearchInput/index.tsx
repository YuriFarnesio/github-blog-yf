import { SearchInputProps } from './types'

export function SearchInput({ totalPosts, searchPosts }: SearchInputProps) {
  const totalPostsText = totalPosts === 1 ? 'publicação' : 'publicações'

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold leading-default text-base-subtitle">
          Publicações
        </h2>
        <span className="text-sm leading-default text-base-span">
          {totalPosts} {totalPostsText}
        </span>
      </div>

      <input
        id="search"
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(event) => searchPosts(event.target.value)}
        className="w-full placeholder:text-base-label bg-base-input border border-solid border-base-border hover:border-base-label focus:border-base-label rounded-md py-3 px-4 transition-all"
      />
    </div>
  )
}
