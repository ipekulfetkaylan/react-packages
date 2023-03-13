import React from 'react'
import { FaBeer, FaMagento, FaPen } from "react-icons/fa";
import {IconContext} from "react-icons";
import {IoIosAlert} from 'react-icons/io';
import {GiPencil} from "react-icons/gi"
// fontawesomedan bir icon çektik


function Icons() {
    // bu şekilde iconları component halinde kullanabiliriz
  return (
    <div>
      <FaPen size="60px" color='tomato'/>
      <FaBeer size="60" color="green"/>
      <FaMagento size="60" color="pink"/>
      <IconContext.Provider value={{color: "pink", size:"20px"}}>
        {/* eger paketlerin hepsini kullanmak istiyorsak ıconContextten alıyoruz ve provider ekliyoruz. Eğer hepsine ayrı ayrı style vermezsen provide içine verdiğin stiller etkili olacak */}
        <p>
            <IoIosAlert style={{color: "red", size:"30px"}}/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iure, velit nam eum pariatur rerum quaerat exercitationem aspernatur maiores id fugit 
            saepe quas aliquid numquam voluptate soluta, nihil tempora. Quos nulla provident nam quis explicabo debitis animi architecto quibusdam alias 
            aliquam, maiores omnis id aut quaerat laboriosam quae nesciunt aperiam.
            
        </p>
        <GiPencil style={{color: "black", size:"20px"}} />

        <input placeholder='Edit'></input>

      </IconContext.Provider>
    </div>

  )
}

export default Icons
