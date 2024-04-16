import React from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { Hotels } from '../Hotels'
import {Commit} from "../../components/Commit"
export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Commit></Commit>
      <Hotels></Hotels>
      <Footer></Footer>  
    </div>
  )
}

