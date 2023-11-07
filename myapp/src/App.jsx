import Main from './component/Main'
import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Detail from './component/Detail'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [dark, setDark] = useState("light")
  const [search, setSearch] = useState("")
  const [region, setRegion]= useState("");

  useEffect(() => {
    if(dark==="dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  }, [dark])
  const handleThemeSwitch = () => {
    setDark((prevDark) => (prevDark === "dark" ? "light" : "dark"));
    console.log(dark);
  }

  return (
    <>
     <BrowserRouter>
     <div className="dark:bg-black h-full">
          <Navbar themeSwitch={handleThemeSwitch} />
      <Routes>
        <Route path="/" element={<Main search={search} region={region}  setSearch={setSearch} setRegion={setRegion}/>}/>
        <Route path="/detail" element={<Detail />}/>
      </Routes>
      </div>
    </BrowserRouter>
       
        
    </>
  )
}

export default App
