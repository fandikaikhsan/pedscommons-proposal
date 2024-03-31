"use client"

import React, { useState } from "react"
import SpeachForm from "../common/SpeechForm.common"

const SpeechFormWrap: React.FC = () => {
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null)

  const handleSubmit = (message: string) => {
    setSubmittedMessage(message)
  }

  return (
    <div>
      {submittedMessage && <p>Submitted Message: {submittedMessage}</p>}
      <SpeachForm onSubmit={handleSubmit} />
    </div>
  )
}

export default SpeechFormWrap
