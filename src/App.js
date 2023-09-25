import logo from './logo.svg'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Loader from 'react-loaders'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Route>
      </Routes>
      <Loader />
    </>
  )
}

export default App
