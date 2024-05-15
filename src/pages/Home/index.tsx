import { Posts, ProfileHeader } from '../../components'

export function Home() {
  return (
    <main className="w-screen flex flex-col gap-18 px-4 pb-24">
      <ProfileHeader />

      <div className="w-full max-w-216 mx-auto">
        <Posts />
      </div>
    </main>
  )
}
