import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Component/Services/Footer'
import Gallary from './Component/Services/Gallary'
import Navbar from './Component/Services/Navbar'

import Teams from './Component/Services/Teams'
import Login from './Component/Services/Login';
import Registration from './Component/Services/Registration';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path='/teams' element={<Teams></Teams>}></Route>
          <Route path='/registration' element={<Registration></Registration>}></Route>
        </Routes>
        

        <Footer />
        {/* <Teams></Teams> */}
      </div>
    </Router>
    // <Login></Login>
  )
}

export default App