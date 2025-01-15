import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Detect from "./sections/Detect"
import Hero from "./sections/Hero"
import Loader from "./components/Loader"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      setTimeout(() => {
        setIsLoading(false)
      }, 4000)
    } catch (error) {
      console.log(error)
    }
  })
  return (
    <>
      {
        isLoading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Hero />
            <Detect />
          </>
        )
      }
    </>
  )
}

export default App