import Dropdown from "@/components/common/Dropdown.common"
import AccordionList from "@/components/wrap/AccordionList.wrap"

export default function Home() {
  return (
    <main className="flex flex-col gap-5 lg:gap-10 min-h-screen items-center p-12 lg:p-24">
      <div>
        <h1 className="text-2xl lg:text-6xl font-bold">
          Pedscommons Component
        </h1>
        <p className="text-base lg:text-2xl mt-4">
          Heres several examples of component
        </p>
      </div>
      {/* line */}
      <div className="w-full h-0.5 bg-gray-300 mb-5" />
      <div className="flex flex-col items-left gap-10 w-full lg:w-[40%]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl ">Dropdown</h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <Dropdown />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl ">Accordion</h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <AccordionList />
        </div>
      </div>
    </main>
  )
}
