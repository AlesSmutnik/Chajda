import React from 'react'
import "./HomePage.css"
// import "../components/Grid.css"
// import "../components/Qeries.css"
import { Link } from "react-router-dom"
import Logo from '../components/Logo'
import "../components/Queries.css"
import Reference from "../components/Referenc.js"






const HomePage = () => {
  return <section> 
        <div >
           <Logo/> 
        </div>   
     
        <div className='all-description'>
           <p className='description-home-page'>Přijeďte si odpočinout do malebné chalupy Alnatka, která se nachází v srdci krásné přírody Orlických hor. Užijte si útulnou atmosféru tradiční chalupy s příjemným komfortem, ideální pro rodinnou dovolenou nebo romantický víkend.<br/>
            <Link to="/InfoPrice" className='link-odkaz'> Informace a Ceny </Link></p>
        </div>
                 
     

       <div className='reference'>
         <Reference/>
       </div>
         </section>

}

export default HomePage