import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalBookmark} from 'react-icons/bs'
import {MdOutlineDesignServices} from 'react-icons/md'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BsJournalBookmark/></a>
      <a href="#services"><MdOutlineDesignServices/></a>
      <a href="#"><MdOutlinePermContactCalendar/></a> 
    </nav>
  )
}

export default Nav