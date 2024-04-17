import './App.css'
import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from './components/home/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Share } from './pages/Share';
import { Rent } from './pages/Rent';
import { Welcome } from './pages/Welcome';
import { Safety } from './pages/Safety';
import { Adventure } from './pages/Adventure';
import { Community } from './pages/Community';
export const AppContext = createContext();

function App() {
  const query = new QueryClient();
  const [INPUT, setINPUT] = useState("batman");
  return (
        <>
        <AppContext.Provider value={{ INPUT , setINPUT}}>
          <div >
            <QueryClientProvider client={query}>
              <Router>
                <div>
                  <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Register" element={<Register/>}></Route>
                    <Route path="/Login" element={<Login/>} ></Route>
                    <Route path="/Share" element={<Share/>} ></Route>
                    <Route path="/Rent" element={<Rent/>} ></Route>
                    <Route path="/Welcome" element={<Welcome/>} ></Route>
                    <Route path="/Safety" element={<Safety/>} ></Route>
                    <Route path="/Adventure" element={<Adventure/>} ></Route>
                    <Route path="/Community" element={<Community/>} ></Route>
                    <Route path="*" element={<h2>Not Found</h2>} />
                  </Routes>
                </div> 
              </Router>
            </QueryClientProvider>
          </div>
        </AppContext.Provider>
      </>
  )
}

export default App
