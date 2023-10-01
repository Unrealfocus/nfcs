import Image from 'next/image'
import Navbar from './component/NavBar'
import HeroS from './component/Heros'
import Courses from './component/Courses'
import Footer from './component/footer'

export default function Home() {
  return (
    <div className="text-white w-full overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600">
    <div className="sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>

   <div className="text-white flex justify-center items-start ">
      <div className="xl:max-w-[1280px] w-full">
        <HeroS />
      </div>
    </div>
    
     <div className="bg-primary sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Courses/>
        <Footer />
      </div>
    </div> 
  </div>
  )
}
