import Copyright from "./components/Copyright"
import Navbar from "./components/Navbar"
import Detect from "./sections/Detect"
import Hero from "./sections/Hero"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Detect />
      <Copyright />
    </>
  )
}

export default App