import Dropdown from "@/components/common/Dropdown.common"
import RatingSummary from "@/components/wrap/RatingSummary.wrap"
import AccordionList from "@/components/wrap/AccordionList.wrap"
import ProgressBarList from "@/components/wrap/ProgressBarList.wrap"
import DragUpload from "@/components/common/DragUpload.common"
import Checkbox from "@/components/common/Checkbox.common"
import Toogle from "@/components/common/Toogle.common"
import Form from "@/components/common/Form.common"
import SpeechFormWrap from "@/components/wrap/SpeechForm.wrap"
import ColorContrast from "@/components/wrap/ColorContrast.wrap"

export default function Home() {
  return (
    <main className="flex flex-col gap-4 lg:gap-10 min-h-screen items-center p-12 lg:p-24">
      <div>
        <h1 className="text-2xl lg:text-6xl font-bold">
          Pedscommons Component
        </h1>
        <p className="text-base lg:text-xl mt-3">
          Heres several examples of component
        </p>
        <p className="font-thin text-xs lg:text-base mt-6">
          Made by: Fandika Ikhsan
        </p>
        <p className="font-thin text-xs lg:text-base">
          For Google Open Source Program
        </p>
      </div>
      {/* line */}
      <div className="w-full h-0.5 bg-gray-300 mb-5" />
      <div className="flex flex-col items-left gap-10 w-full lg:w-[40%]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Dropdown
            </h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <Dropdown />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Accordion
            </h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <AccordionList />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Progress Bar
            </h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <ProgressBarList />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Progress Bar
            </h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <RatingSummary />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Drag and Drop Upload
            </h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <DragUpload />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Drag and Drop Upload
            </h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <Checkbox />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Drag and Drop Upload
            </h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <Toogle />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Drag and Drop Upload
            </h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <Form />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Speach Form
            </h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <SpeechFormWrap />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Speach Form
            </h3>
            <h4 className="text-sm lg:text-base">
              This component has purposes to show dropdown menu
            </h4>
          </div>
          <ColorContrast />
        </div>
      </div>
    </main>
  )
}
