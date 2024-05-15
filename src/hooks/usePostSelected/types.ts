export interface GithubApiPostDetailsResponseProps {
  title: string
  created_at: string
  comments: number
  body: string
  user: {
    login: string
  }
  html_url: string
}

export interface PostDetailsProps {
  title: string
  publishTime: string
  comments: number
  body: string
  username: string
  link: string
}
