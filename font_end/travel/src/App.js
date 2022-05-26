
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/header/Header";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
