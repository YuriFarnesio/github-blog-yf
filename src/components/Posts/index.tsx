import { Card, PostsSkeleton, SearchInput } from '../../components'
import { usePosts } from '../../hooks'

export function Posts() {
  const { posts, isLoadingPosts, totalPosts, searchPosts } = usePosts()

  return (
    <div className="flex flex-col gap-12">
      <SearchInput totalPosts={totalPosts} searchPosts={searchPosts} />

      {isLoadingPosts || !posts ? (
        <PostsSkeleton />
      ) : (
        <div className="grid grid-cols-2 gap-8">
          {posts?.map((post) => <Card key={post.id} post={post} />)}
        </div>
      )}
    </div>
  )
}
