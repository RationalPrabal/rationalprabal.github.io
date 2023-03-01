import WithSubnavigation from "./components/Navbar"
import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import React from "react"
import Stats from "./components/Stats";

function App() {
React.useEffect(()=>{
document.title="Prabal"
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
