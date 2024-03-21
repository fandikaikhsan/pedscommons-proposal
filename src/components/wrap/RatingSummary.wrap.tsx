const RatingConstants = [
  {
    title: "Effect",
    rating: 88,
  },
  {
    title: "Risk",
    rating: 29,
  },
  {
    title: "Dosage",
    rating: 52,
  },
  {
    title: "Patients",
    rating: 64,
  },
]

export default function RatingSummary() {
  return (
    <div>
      <div className="flex items-center mb-5">
        <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
          8.7
        </p>
        <p className="ms-2 font-medium text-gray-900 dark:text-white">Match</p>
        <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          376 feedback
        </p>
        <a
          href="#"
          className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Read all feedback
        </a>
      </div>
      <div className="gap-8 sm:grid sm:grid-cols-2">
        <div>
          {RatingConstants.map((item, index) => (
            <dl key={index}>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.title}
              </dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                  <div
                    className={`bg-blue-600 h-2.5 rounded dark:bg-blue-500`}
                    style={{
                      width: `${item.rating}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.rating}
                </span>
              </dd>
            </dl>
          ))}
        </div>
        <div>
          {RatingConstants.map((item, index) => (
            <dl key={index}>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.title}
              </dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                  <div
                    className={`bg-blue-600 h-2.5 rounded dark:bg-blue-500`}
                    style={{
                      width: `${item.rating}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.rating}
                </span>
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  )
}
