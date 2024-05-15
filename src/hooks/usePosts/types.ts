export interface GithubApiPostsResponseProps {
  incomplete_results: boolean
  items: {
    id: number
    title: string
    body: string
    number: number
    created_at: string
  }[]
  total_count: number
}

export interface PostProps {
  id: number
  issue_number: number
  title: string
  publishTime: string
  body: string
}
