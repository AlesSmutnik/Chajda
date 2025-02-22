import "./MyGallery.css"
// import "../components/Grid.css"
// import "../components/Qeries.css"
import FotoData from "../components/FotoData.js"
import React from 'react'
import Logo from "../components/Logo"
import "../components/Queries.css"

const MyGallery = () => {

  return<section>
    <Logo />
    <div className="foto-data">    
    <FotoData />
    </div>
    
    

</section>
  
}

export default MyGallery

