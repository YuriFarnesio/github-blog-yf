import { useQuery } from '@tanstack/react-query'

import { api } from '../../services/api'

import { GithubApiUserResponseProps, UserProps } from './types.ts'

const apiEndpoint = import.meta.env.VITE_USER_ENDPOINT

export function useUser() {
  const getUserDetails = async () =>
    api.get<GithubApiUserResponseProps>(apiEndpoint).then((response) => {
      const parsingUser = {
        avatar_url: response.data.avatar_url,
        bio: response.data.bio,
        company: response.data.company,
        followers: response.data.followers,
        profile_url: response.data.html_url,
        username: response.data.login,
        name: response.data.name,
      } satisfies UserProps

      return parsingUser
    })

  const { isLoading, data } = useQuery<UserProps>({
    queryKey: ['userData'],
    queryFn: getUserDetails,
  })

  return {
    user: data,
    isLoadingUser: isLoading,
  }
}
