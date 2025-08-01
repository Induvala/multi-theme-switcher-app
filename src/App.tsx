import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Home } from "./pages/Home";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
       <Router>       
         <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          </Route>
         </Routes>
      </Router>
    </>
  )
}

export default App
