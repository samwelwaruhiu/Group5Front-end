import Navbar from './component/Navbar'
// import About from './component/About'
import Jobs from "./component/Jobs"
import Home from "./component/Home"
import { Routes, Route } from 'react-router-dom';
import Recruiter from './component/Recruiter';
import Apply from './component/Apply';







function App() {

  return(
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/job' element = {<Jobs/>}/>
      <Route path='/:apply' element = {<Apply/>}/>
      <Route path='/recruiter' element = {<Recruiter/>} />
     </Routes>
      
    </div>
      

    
  )
}

export default App;
