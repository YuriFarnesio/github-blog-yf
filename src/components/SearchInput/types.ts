import { DebouncedFunction } from '../../hooks'

export type SearchInputProps = {
  totalPosts: number
  searchPosts: DebouncedFunction<string[]>
}
