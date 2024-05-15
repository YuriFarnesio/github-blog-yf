import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { ButtonComponentProps, ButtonLinkProps } from './types'

export function ButtonLink({
  isInternal,
  text,
  link,
  leftIcon,
  rightIcon,
}: ButtonLinkProps) {
  const ButtonComponent = ({
    link,
    className,
    children,
  }: ButtonComponentProps) =>
    isInternal ? (
      <Link to={link} className={className}>
        {children}
      </Link>
    ) : (
      <a href={link} target="_blank" className={className} rel="noreferrer">
        {children}
      </a>
    )

  return (
    <ButtonComponent
      link={link}
      className="flex items-center border-b border-solid border-transparent hover:border-brand-blue gap-2 transition"
    >
      {!!leftIcon && (
        <FontAwesomeIcon icon={leftIcon} className="size-3 text-brand-blue" />
      )}

      <span className="text-xs font-bold leading-normal text-brand-blue uppercase">
        {text}
      </span>

      {!!rightIcon && (
        <FontAwesomeIcon icon={rightIcon} className="size-3 text-brand-blue" />
      )}
    </ButtonComponent>
  )
}
