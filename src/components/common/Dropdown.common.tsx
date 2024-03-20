"use client"
import { useState } from "react"

const DropdownConstant = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Settings",
    link: "/settings",
  },
  {
    id: 3,
    name: "Earnings",
    link: "/earnings",
  },
  {
    id: 4,
    name: "Sign out",
    link: "/sign-out",
  },
]

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Dropdown button{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={`${
          isOpen ? "block" : "hidden"
        } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {DropdownConstant.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="block px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
