import React from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { Hotels } from '../Hotels'
import {Commit} from "../../components/Commit"
import { Navtwo } from '../../components/Navtwo';
export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Navtwo></Navtwo>
      <Commit></Commit>
      <Hotels></Hotels>
      <Footer></Footer>  
    </div>
  )
}

