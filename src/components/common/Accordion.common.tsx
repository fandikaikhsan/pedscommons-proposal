"use client"
import { useState } from "react"

export default function Accordion({
  id,
  title,
  content,
}: {
  id: number
  title: string
  content: string
}) {
  // change state open to independently open per id item
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col gap-2 w-full mx-auto">
      <div key={id} className="w-full border-b border-gray-200">
        <button
          className="flex justify-between items-center w-full px-5 py-3 text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium text-base text-gray-800">{title}</span>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full px-5 py-3`}>
          <p className="text-gray-600 text-sm">{content}</p>
        </div>
      </div>
    </div>
  )
}
