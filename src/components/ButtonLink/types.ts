import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ReactNode } from 'react'

export type ButtonLinkProps = {
  isInternal?: boolean
  text?: string
  link: string
  leftIcon?: IconProp
  rightIcon?: IconProp
}

export type ButtonComponentProps = {
  link: string
  className: string
  children: ReactNode
}
