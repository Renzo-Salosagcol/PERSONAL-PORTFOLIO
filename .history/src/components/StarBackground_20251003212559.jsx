import { useState } from "react"

// ID, Size, X, Y, Opacity, Animation Duration

export const StarBackground = () => {
  const [stars, setStars] = useState([])

  const generateStars = (num) => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000)

    const newStars = []
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2
      })
    }

    setStars(newStars)
  }
  return (
    <div>

    </div>
    )
}