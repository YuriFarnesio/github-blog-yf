export function ProfileHeaderSkeleton() {
  return (
    <header className="w-full max-w-216 flex items-center justify-between bg-base-profile gap-8 rounded-[0.625rem] py-8 px-10 mx-auto">
      <div className="min-w-37 size-37 bg-base-span object-cover rounded-lg animate-pulse" />

      <div className="w-full h-37 flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="w-56 h-8 bg-base-span rounded-lg animate-pulse" />
            <div className="w-16 h-8 bg-base-span rounded-lg animate-pulse" />
          </div>

          <div className="w-full h-[3.25rem] bg-base-span rounded-lg animate-pulse" />
        </div>

        <div className="flex items-center gap-6">
          <div className="w-28 h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          <div className="w-28 h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          <div className="w-28 h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
        </div>
      </div>
    </header>
  )
}
