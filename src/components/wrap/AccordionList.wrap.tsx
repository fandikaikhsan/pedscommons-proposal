import { useState } from "react"
import Accordion from "../common/Accordion.common"

const AccordionConstant = [
  {
    id: 1,
    title: "Lorem, ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quisquam blanditiis doloremque quis nam repudiandae.",
    nested: [
      {
        id: 1,
        title: "Consectetur",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, eos?",
      },
      {
        id: 2,
        title: "Adipisicing",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi consequatur dolor inventore labore, veritatis, laudantium nihil facere reprehenderit autem sapiente quae accusamus quis animi similique adipisci ducimus excepturi. Consequuntur!",
      },
      {
        id: 3,
        title: "Consectetur adipisicing elit?",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod fugiat explicabo velit asperiores soluta et delectus natus? Officia, aperiam?",
      },
    ],
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod fugiat explicabo velit asperiores soluta et delectus natus? Officia, aperiam?",
  },
]

export default function AccordionList() {
  return (
    <div className="flex flex-col gap-2 w-full mx-auto">
      {AccordionConstant.map((item) => (
        <Accordion key={item.id} {...item} />
      ))}
    </div>
  )
}
