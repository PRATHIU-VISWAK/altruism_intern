import React from 'react'
import { Link } from "react-router-dom";
import { Button } from './ui/button';
export const Navbar = () => {
  return (
    <div className='bgsvg'>
      <svg className="fixed z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fbcfe8" fill-opacity="1" d="M0,128L40,160C80,192,160,256,240,240C320,224,400,128,480,112C560,96,640,160,720,192C800,224,880,224,960,229.3C1040,235,1120,245,1200,261.3C1280,277,1360,299,1400,309.3L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold z-10">SHE SHARE VACATION RENTALS</div>
        <div className="flex">         
          <Button className="mr-6 p-4 bg-pink-400"><Link to="/register">Register</Link></Button>
          <Button className="mr-6 p-4 bg-pink-400"><Link to="/login">Log In</Link></Button>
        </div>
      </div>
    </div>
  )
}
