import MyCards from '@/components/MyCards'
import RecentTransaction from '@/components/RecentTransaction'

export default function Home() {
  return (
    <main>
      <div className=" flex flex-col gap-5 py-5 lg:flex-row lg:gap-0">
        <div className="overflow-auto  lg:w-2/3">
          <div className="flex-between mb-3 px-6 pr-6">
            <p className="text-base font-semibold text-purple">My Cards</p>
            <p className="text-sm font-semibold text-purple">See All</p>
          </div>
          <MyCards />
        </div>
        <div className="lg:w-1/3">
          <RecentTransaction />
        </div>
      </div>
    </main>
  )
}
