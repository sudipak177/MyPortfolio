import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element = {<Layout/>}>
        <Route index element = {
          <>
          <Home/>
          <About/>
          <Services/>
          <Skills/>
          <Education/>
          <Contact/>
          </>
        }/>
        </Route>
        <Route path='*' element = {<NoPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

