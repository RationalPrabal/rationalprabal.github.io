import WithSubnavigation from "./components/Navbar"
import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import React from "react"
import Stats from "./components/Stats";
import bg from "./bg.jpg"
function App() {
React.useEffect(()=>{
document.title="Prabal_Portfolio"
},[])
  return (
    <div className="App"
  
    >
     <WithSubnavigation/>
<Home/>
<About/>
<Skills />
<Stats/>
<Projects/>
<Contact/>
    </div>
  );
}

export default App;
