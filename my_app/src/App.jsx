import './App.css'
import { useState } from "react"
import { Route, Routes}from"react-router-dom"
import Login from './module/Login'
import Signup from './module/Signup'
import Home from './module/Home'
import Appliedjobs from './usermodule/Appliedjobs'
import Browsejobspage from './usermodule/Browsejobspage'
import Userdashboard from './usermodule/Userdashboard'
import Admindashboard from './adminmodule/Admindashboard'
import Managejob from './adminmodule/Managejob'
import Viewuserapplications from './adminmodule/Viewuserapplications'




function App() {
  const [count, setCount] = useState(0)

  return  (
    <>
        <Routes>  
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/appliedjobs" element={<Appliedjobs />}/>
          <Route path="/browsejobspage" element={<Browsejobspage />}/>
          <Route path="/userdashboard" element={<Userdashboard />}/>
          <Route path="/admindashboard" element={<Admindashboard />}/>
          <Route path="/managejob" element={<Managejob />}/>
          <Route path="/viewuserapplications" element={<Viewuserapplications />}/>
          
          </Routes>

    </>
  )
}

export default App