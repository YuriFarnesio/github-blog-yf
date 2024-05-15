import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IconTagProps } from './types'

export function IconTag({ icon, text }: IconTagProps) {
  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={icon} className="size-4.5 text-base-label" />
      <span className="leading-normal text-base-subtitle">{text}</span>
    </div>
  )
}
