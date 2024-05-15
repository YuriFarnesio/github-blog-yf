export function PostSelectedSkeleton() {
  return (
    <main className="w-screen flex flex-col gap-10 px-4 pb-24">
      <header className="w-full max-w-216 flex flex-col bg-base-profile gap-5 rounded-[0.625rem] p-8 mx-auto">
        <div className="w-full flex items-center justify-between">
          <div className="w-16 h-8 bg-base-span rounded-lg animate-pulse" />
          <div className="w-16 h-8 bg-base-span rounded-lg animate-pulse" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-3/5 h-8 bg-base-span rounded-lg animate-pulse" />

          <div className="flex items-center gap-6">
            <div className="w-28 h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
            <div className="w-28 h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
            <div className="w-28 h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          </div>
        </div>
      </header>

      <div className="w-full max-w-216 flex flex-col gap-8 px-8 mx-auto">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          <div className="w-full h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          <div className="w-full h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          <div className="w-3/5 h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          <div className="w-full h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          <div className="w-3/4 h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          <div className="w-full h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          <div className="w-full h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          <div className="w-full h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
          <div className="w-1/4 h-[1.625rem] bg-base-span rounded-lg animate-pulse" />
        </div>
      </div>
    </main>
  )
}
