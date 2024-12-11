import Categories from "./components/Categories"
import Features from "./components/Features"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Review from "./components/Review"
import Footer from "./components/Footer"
import "./index.css" 

const App = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <HeroSection/>
      <div className="flex items-center justify-content gap-8 ">
            <Categories/>
            <Categories/>
            <Categories/>
            <Categories/>
            <Categories/>
            <Categories/>
            <Categories/>
            <Categories/>
      </div>
      <Features/>
      <div className="flex items-center justify-content gap-8 ">
            <Review/>
            <Review/>
            <Review/>
            <Review/>
      </div>
      <Footer/>
    </div>
  )
}

export default App