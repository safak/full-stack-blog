import HeroSection from "../components/HeroSection"
import Categories from "../components/Categories"
import Features from "../components/Features"
import Review from "../components/Review"


const Homepage = () => {
    return(
        <div className="flex flex-col">
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
        </div>
    )
}

export default Homepage