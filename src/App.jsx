
import GreetSection from "./components/GreetSection"
import './App.css'
import { useEffect, useState } from "react"



function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  // console.log(scrollProgress)

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / window.innerHeight
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (<>
    <GreetSection scrollProgress={scrollProgress}/>
    <div style={{height:"200vh"}}></div>
  </>)
}

export default App
