import {Route,Routes} from "react-router-dom"
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/founder.scss"
import "./styles/menu.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"



function App() {
  return  <div>
    

     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  
}

export default App;
