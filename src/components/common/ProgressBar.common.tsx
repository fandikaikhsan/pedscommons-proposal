export default function ProgressBar({
  color,
  progress,
}: {
  color?: string
  progress?: string
}) {
  return (
    <div className="w-full h-2 bg-gray-300 rounded-lg">
      <div
        style={{
          width: `${progress || "50%"}`,
          backgroundColor: color || "blue",
        }}
        className="h-full rounded-lg"
      ></div>
    </div>
  )
}
