import React, { useState } from "react"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"

interface FormProps {
  onSubmit: (message: string) => void
}

const SpeachForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState<string>("")
  const [isListening, setIsListening] = useState<boolean>(false)
  const { transcript, resetTranscript } = useSpeechRecognition()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(message)
  }

  const startSpeechRecognition = () => {
    resetTranscript()
    setIsListening(true)
    SpeechRecognition.startListening({ continuous: true })
  }

  const stopSpeechRecognition = () => {
    setIsListening(false)
    SpeechRecognition.stopListening()
    setMessage(transcript)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="message">Message:</label>
      <input
        type="text"
        id="message"
        value={message}
        onChange={handleChange}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <button
        type="button"
        onClick={isListening ? stopSpeechRecognition : startSpeechRecognition}
        className={`bg-${isListening ? "red" : "blue"}-500 hover:bg-${
          isListening ? "red" : "blue"
        }-700 text-white text-sm py-2 px-4 rounded`}
      >
        {isListening ? "Stop Dictation" : "Start Dictation"}
        {isListening && (
          <div className="mx-auto animate-spin text-center ml-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></div>
        )}
      </button>

      <button type="submit" className="underline">
        Submit
      </button>
    </form>
  )
}

export default SpeachForm
