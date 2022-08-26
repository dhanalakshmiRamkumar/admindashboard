import React from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import Dashboard from './Dashboard'
import Componentbutton from './Componentbutton'
import Card from './Card'
import Color from './Color'
import Border from './Border'
import Animations from './Animations'
import Other from './Other'
import Tables from './Tables'
import Charts from './Charts'
import Login from './Login'
import Register from './Register'
import Forgotpassword from './Forgotpassword'
import Page from './Page'
import Blankpage from './Blankpage'

export default function BodySection() {
  return (
   
    <div id="content-wrapper"className="d-flex flex-column">
    <div id="content">
    <div className="container fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      
    <Routes>
      
      <Route path="/index.html" element={<Dashboard/>}></Route>
      <Route path="/button" element={<Componentbutton/>}></Route>
      <Route path="/card" element={<Card/>}></Route>
      <Route path="/color" element={<Color/>}></Route>
      <Route path="/border" element={<Border/>}></Route>
      <Route path="/animations" element={<Animations/>}></Route>
      <Route path="/other" element={<Other/>}></Route>
      <Route path="/charts.html" element={<Charts/>}></Route>
      <Route path="/tables.html" element={<Tables/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
      <Route path="/page" element={<Page/>}></Route>
      <Route path="/blankpage" element={<Blankpage/>}></Route>

    </Routes>
        
      
    
    </div>
    </div>
     </div>
     </div>
   

  )
}
