// File: frontend/src/App.jsx

// React module import
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// React Pages  import
import Home from './pages/Home.jsx'
import Doctors from './pages/Doctors.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import MyProfile from'./pages/MyProfile.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import Appointments from './pages/Appointments.jsx'

// React Components import
import Navbar from './components/Navbar.jsx'

// Main App component
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      {/* Rendering the Navbar and setting up routes */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointments />} />
      </Routes>
    </div>
  )
}

// Exporting the App component as default
export default App