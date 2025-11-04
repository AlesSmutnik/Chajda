import React from 'react'
import "./Reference.css"
import Img11 from "./imgs/reference/ref1w.jpeg"
import Img22 from "./imgs/reference/ref2m.jpeg"
import Img33 from "./imgs/reference/fr3w.jpeg"


const Referenc = () => {
  return (

    <div className='ref-all'>
        
        <div >
        <img src={Img11} className='ImgRef' alt="" />
        <p className='name'>Martina Kováčová</p>
        <p className='ref'>Nádherné místo obklopené přírodou, kde jsme si skvěle odpočinuli. Chalupa je útulná, čistá a plně vybavená, ideální pro rodinnou dovolenou. Doporučuji všem, kteří hledají klid a soukromí.</p>
        </div>

        <div >
        <img src={Img22} className='ImgRef' alt="" />
        <p className='name'>Daniel Jenický</p>
        <p className='ref'>Velmi příjemné ubytování s ochotným personálem. Pokoje jsou čisté a pohodlné, s krásným výhledem na okolní lesy. Skvělá volba pro milovníky přírody a turistiky</p>
       </div>

       <div >
       <img src={Img33} className='ImgRef' alt="" />
       <p className='name'>Jana Ploštická</p>
       <p className='ref'> Moderní a stylově zařízené apartmány v klidné části města. Velmi jsme ocenili blízkost centra i možnost relaxace v soukromé zahradě. Ideální místo pro páry i rodiny</p>
       </div>
        
    </div>
  )
}

export default Referenc