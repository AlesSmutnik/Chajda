import React from 'react';
import { Link } from 'react-router-dom';
import "./Logo.css"
import LOGO from "../components/imgs/Chaloupka Alnatka (1).png"
import "./Queries.css"

const Logo = () => {
  return (
    <div className=" backlogo">
          <Link to="/" className="logo-link">
          <img src={LOGO} alt="" className='Logo-png'/>
          </Link>
    </div>
  );
}

export default Logo;