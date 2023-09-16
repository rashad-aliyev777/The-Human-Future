import './components/css/Normalize.css'

// burda butun sehifede gorunen komponentler olacaq
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// burda komponentler olacaq
import Home from './pages/Home'
import Blog from './pages/Blog'
import Services from './pages/Services'
import Additionally from './pages/Additionally'
import ZombiePlanets from './pages/ZombiePlanets'
import AllPlanets from './pages/AllPlanets'


import { BrowserRouter,Routes,Route } from 'react-router-dom'



function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      
      
      <Routes>

        <Route path='/' element={<Home />} />  
        <Route path='/blog' element={<Blog />}/>
        <Route path='/services' element={<Services />} />
        <Route path='/allplanets' element={<AllPlanets />} />
        <Route path='/additionally' element={<Additionally />} />
        <Route path='/zombie' element={<ZombiePlanets />} />
        <Route path='*' element={<Error />} />
        

      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App