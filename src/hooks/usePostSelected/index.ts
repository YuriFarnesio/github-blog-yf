import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services/api'
import { formatDate } from '../../utils/formats'

import { GithubApiPostDetailsResponseProps, PostDetailsProps } from './types'

const apiEndpoint = import.meta.env.VITE_ISSUE_ENDPOINT

export function usePostSelected() {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug: string }>()

  const getPostDetails = async () =>
    api
      .get<GithubApiPostDetailsResponseProps>(`${apiEndpoint}/${slug}`)
      .then((response) => {
        const parsingPost = {
          title: response.data.title,
          publishTime: formatDate(response.data.created_at),
          comments: response.data.comments,
          body: response.data.body,
          username: response.data.user.login,
          link: response.data.html_url,
        } satisfies PostDetailsProps

        return parsingPost
      })

  const { isLoading, isError, data } = useQuery<PostDetailsProps>({
    queryKey: ['postDetail', slug],
    queryFn: getPostDetails,
  })

  useEffect(() => {
    if (isError) navigate('/404')
  }, [isError, navigate])

  return {
    post: data,
    isLoadingPost: isLoading,
  }
}
