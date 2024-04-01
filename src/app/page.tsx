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
          Pedscommon Proposal Demo
        </h1>
        <p className="text-base lg:text-xl mt-3">
          Welcome to the Clinical Trial Survey Enhancement Demo! Explore how our
          innovative front-end components optimize the user experience and
          accessibility of clinical trial surveys.
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
          <div className="flex flex-col gap-1 bg-white">
            <h2 className="font-bold text-xl lg:text-4xl text-black">
              Input Component
            </h2>
            <h4 className="text-xs lg:text-sm text-black">
              Explore several input components to streamline data collection in
              clinical trial surveys.
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Text Input
            </h3>
            <h4 className="text-sm lg:text-base">
              The Text Box component allows participants to input textual
              information relevant to their medical history, experiences, or
              feedback within the clinical trial survey website.
            </h4>
          </div>
          <Form />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Speach Text Input
            </h3>
            <h4 className="text-sm lg:text-base">
              The Voice-enabled Text Box component features a built-in button to
              enable speech input, enhancing accessibility for participants,
              especially those with disabilities, within the clinical trial
              survey website.
            </h4>
          </div>
          <SpeechFormWrap />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Checkbox Input
            </h3>
            <h4 className="text-sm lg:text-base">
              The Checkbox component allows participants to select multiple
              options from a predefined list within the clinical trial survey
              website.
            </h4>
          </div>
          <Checkbox />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Toggle Input
            </h3>
            <h4 className="text-sm lg:text-base">
              The Toggle component offers participants a simple switch mechanism
              to indicate binary choices within the clinical trial survey
              website.
            </h4>
          </div>
          <Toogle />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Dropdown
            </h3>
            <h4 className="text-sm lg:text-base">
              The Dropdown component offers participants a menu of predefined
              options from which they can select a single choice within the
              clinical trial survey website.
            </h4>
          </div>
          <Dropdown />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Drag and Drop Upload
            </h3>
            <h4 className="text-sm lg:text-base">
              The Drag-and-Drop Upload component allows participants to easily
              upload files by dragging them from their device and dropping them
              onto the designated area within the clinical trial survey website.
            </h4>
          </div>
          <DragUpload />
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="flex flex-col gap-1 bg-white">
            <h2 className="font-bold text-xl lg:text-4xl text-black">
              Views Component
            </h2>
            <h4 className="text-xs lg:text-sm text-black">
              Discover user-friendly views and navigation elements.
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Accordion
            </h3>
            <h4 className="text-sm lg:text-base">
              The Accordion component presents collapsible sections that allow
              participants to view and interact with content in a compact and
              organized manner within the clinical trial survey website.
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
              The Progress Bar component visually tracks participants
              progression through the clinical trial survey, providing a clear
              indicator of their completion status.
            </h4>
          </div>
          <ProgressBarList />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base lg:text-xl underline">
              Detail Progress Bar
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
              Color Contrast
            </h3>
            <h4 className="text-sm lg:text-base">
              The Color Contrast Picker component integrates a color picker tool
              within the clinical trial survey website, empowering participants
              to customize visual elements while adhering to accessibility
              standards, particularly for color contrast.
            </h4>
          </div>
          <ColorContrast />
        </div>
      </div>
    </main>
  )
}
