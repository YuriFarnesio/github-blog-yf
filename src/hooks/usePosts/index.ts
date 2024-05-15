import { useState } from 'react'

import { api } from '../../services/api'

import { useQuery } from '@tanstack/react-query'
import { formatDate } from '../../utils/formats'
import { useDebounce } from '../useDebounce'
import { GithubApiPostsResponseProps, PostProps } from './types'

const apiEndpoint = import.meta.env.VITE_REPO_ENDPOINT
const repoName = import.meta.env.VITE_REPO_NAME

export function usePosts() {
  const [searchText, setSearchText] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<PostProps[]>()

  const getPostsList = async () =>
    api
      .get<GithubApiPostsResponseProps>(apiEndpoint, {
        params: {
          q: `${searchText} repo:${repoName}`,
        },
      })
      .then((response) => {
        const allPosts = response.data.items
          .map((post) => {
            const parsingPost = {
              id: post.id,
              issue_number: post.number,
              title: post.title,
              publishTime: formatDate(post.created_at),
              body: post.body?.slice(0, 200),
            } satisfies PostProps

            return parsingPost
          })
          .filter((post) => !!post.body)

        setFilteredPosts(allPosts)

        return allPosts
      })

  const { isLoading, data } = useQuery<PostProps[]>({
    queryKey: ['postList', searchText],
    queryFn: getPostsList,
  })

  const searchPosts = (search: string) => {
    setSearchText(search.toLowerCase())
  }

  const searchPostsDebounced = useDebounce(searchPosts, 500)

  return {
    posts: filteredPosts,
    totalPosts: data?.length ?? 0,
    isLoadingPosts: isLoading,
    searchPosts: searchPostsDebounced,
  }
}
