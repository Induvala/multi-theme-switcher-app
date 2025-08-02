import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Home } from "./pages/Home";
import Layout from "./Layout/Layout";
import { useTheme } from "./context/ThemeContext";

function App() {
  const {theme} = useTheme();
  return (
    <>
       <Router>       
         <Routes>
          <Route path='/' element={<Layout/>}>
          {theme === 'theme-2' &&
          <Route index element={<Navigate to="/home" replace />} />}
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
