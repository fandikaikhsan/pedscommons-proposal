"use client"

import React, { useState } from "react"

const ColorContrast = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [textColor, setTextColor] = useState("#000000")

  const handleBackgroundColorChange = (color: string) => {
    setBackgroundColor(color)
  }

  const handleTextColorChange = (color: string) => {
    setTextColor(color)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        backgroundColor: backgroundColor,
        color: textColor,
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h2>Color Contrast Example</h2>
      <p className="text-xs">
        This is an example of adjusting background color and text color to
        ensure sufficient color contrast.
      </p>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>{" "}
        <input
          type="color"
          id="backgroundColor"
          value={backgroundColor}
          onChange={(e) => handleBackgroundColorChange(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="textColor">Text Color:</label>{" "}
        <input
          type="color"
          id="textColor"
          value={textColor}
          onChange={(e) => handleTextColorChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default ColorContrast
