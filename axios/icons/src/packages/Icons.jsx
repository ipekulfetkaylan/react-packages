import React from 'react'
import { FaBeer, FaMagento, FaPen } from "react-icons/fa";
// fontawesomedan bir icon çektik


function Icons() {
    // bu şekilde iconları component halinde kullanabiliriz
  return (
    <div>
      <FaPen size="60px" color='tomato'/>
      <FaBeer size="60" color="green"/>
      <FaMagento size="60" color="pink"/>
    </div>

  )
}

export default Icons
