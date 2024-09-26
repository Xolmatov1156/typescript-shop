import { useEffect, useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import CustomRoutes from "./routes"
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { ClimbingBoxLoader } from "react-spinners";


export interface NavbarType {
  path:string,
  title:string
  }
const App = () => {
  const navbar1:NavbarType = {path:"/", title:"Products"}
  const navbar2:NavbarType = {path:"/order", title:"Order"}
  const [isDarkMode, setDarkMode] = useState<boolean>(false);


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
    
  return (
    <>
    <header className="bg-slate-900 p-4 flex justify-center space-x-[15px]">
      <Navbar item={navbar1}/>
      <Navbar item={navbar2}/>
      <button onClick={handleDarkMode} className={`py-1 p-2 rounded-full ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"} transition-colors duration-300`}>
        <Brightness3Icon/>
      </button>
    </header>
    <CustomRoutes/>
    </>
  )
}

export default App