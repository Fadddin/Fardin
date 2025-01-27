import './App.css'
import About from './components/About'
import BigName from './components/BigName'
import Navbar from './components/Navbar'
import { LoadingScreen } from './components/Loading'
import Projects from './components/Projects'
import ExperienceSection from './components/Experience'
import SlidingText from './components/slidingText/SlidingText'
import EducationSection from './components/Education'
import Contact from './components/Contact'

function App() {

  return (
    <>
    {/* <LoadingScreen> */}
      <Navbar/>
      <BigName/>
      <About/>
      <Projects/>
      <ExperienceSection/>
      <SlidingText/>
      <EducationSection/>
      <Contact/>
      {/* </LoadingScreen> */}
    </>
  )
}

export default App
