import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Auth from './page/Auth'
import About from './page/About'

function App() {
  const [count, setCount] = useState(0)

  return (
		<BrowserRouter>
			<div>
				<Navbar />
				{/* <Canvas draw={draw}/> */}
				<div></div>
				<Footer />
			</div>
			<Routes>
				<Route path="/auth" element={<Auth />}/>
				<Route path="/about" element={<About />}/>
				{/* <Route path="/pong" element={<Pong/>}/> */}
				{/* <Route path="/game" element={<Game />}/> */}
			</Routes>
		</BrowserRouter>

  )
}

export default App
