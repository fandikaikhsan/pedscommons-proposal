import ProgressBar from "@/components/common/ProgressBar.common"

export default function ProgressBarList() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <ProgressBar color="blue" />
      <ProgressBar color="green" progress={"70%"} />
      <ProgressBar color="#f97316" progress={"20%"} />
      <ProgressBar color="yellow" progress={"80%"} />
    </div>
  )
}
