import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { ButtonLink, IconTag, ProfileHeaderSkeleton } from '../../components'
import { useUser } from '../../hooks'

export function ProfileHeader() {
  const { user, isLoadingUser } = useUser()

  const followersText = user?.followers === 1 ? 'seguidor' : 'seguidores'

  if (isLoadingUser || !user) {
    return <ProfileHeaderSkeleton />
  }

  return (
    <header className="w-full max-w-216 flex items-center justify-between bg-base-profile gap-8 rounded-[0.625rem] py-8 px-10 mx-auto">
      <img
        src={user.avatar_url}
        alt={`Foto de perfil de ${user.name}`}
        className="size-37 object-cover rounded-lg"
      />

      <div className="w-full h-37 flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-2xl font-bold text-base-title">{user.name}</h1>

            <ButtonLink
              text="GitHub"
              link={user.profile_url || ''}
              rightIcon={faArrowUpRightFromSquare}
            />
          </div>

          <span className="text-base-text line-clamp-2">{user.bio}</span>
        </div>

        <div className="flex items-center gap-6">
          <IconTag icon={faGithub} text={user.name} />
          <IconTag icon={faBuilding} text={user.company} />
          <IconTag
            icon={faUserGroup}
            text={`${user.followers} ${followersText}`}
          />
        </div>
      </div>
    </header>
  )
}
