import React,{useEffect,useState} from 'react'
import 'materialize-css';
import './NavBar.css'
import M from  'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom'
import {NavDropdown} from 'react-bootstrap'

const NavBar = () => {
   const [click,setClick]=useState(false)

   const handleClick=()=>setClick(!click)
   
    useEffect(()=>{
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {
          onOpenStart: function(sidenav) {
            sidenav.M_Sidenav._overlay.remove();
        }
        });
       

        let elems = document.querySelectorAll('.dropdown-trigger');
         M.Dropdown.init(elems, {inDuration: 100, outDuration: 50});

         let collapsible = document.querySelectorAll(".collapsible");

         M.Collapsible.init(collapsible, {});
    },[])
    return (
        <div style={{backgroundColor:"#1261A0"}}>
  <nav>     
    <div className="nav-wrapper" >
      <a href="index.js" onClick={handleClick} style={{color:'blue'}} data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <a href="index.js" className="brand-logo right" style={{color:'blue'}}>Logo</a>

      <ul id="dropdown1" className="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li className="divider"></li>
  <li><a href="#!">three</a></li>
</ul>
      <ul id="nav-mobile" className="hide-on-med-and-down nav-items">
         <li><Link to="/">Home</Link></li>
         <li><Link to="aboutus">About</Link></li>
         <li>
         <NavDropdown title="Services" id="collasible-nav-dropdown" className="kik">
        <Link to="#action/3.1">Multilevel BUildings Construction</Link>
        <Link to="#action/3.2">Repairs and Maintenance</Link>
        <Link to="#action/3.3">Interior Designs and Installation</Link>
        <Link to="#action/3.4">Equipment Hire</Link>
        <Link to="#action/3.2">Excuvator Works</Link>
        <Link to="#action/3.3">Site Preparation</Link>
        <Link to="#action/3.4">Dumping</Link>
        <Link to="#action/3.3">Building Materials Delivery</Link>
        <Link to="#action/3.4">Road Murraming and Buttimen Standardizing</Link>
        </NavDropdown>
         </li>
         <li><Link to="employees">Meet Your Builder</Link></li>
         <li><Link to="projects">Projects</Link></li>
         <li><Link to="process">Process</Link></li>
         <li><Link to="testimonials" >Testimonials</Link></li>
         <li><Link to="contacts">Contact</Link></li>
      </ul>
    </div>
 </nav> 

  <ul id="slide-out" className={click ? "sidenav":"side-close"}>
    
  <li><Link onClick={()=>setClick(false)} to="/">Home</Link></li>    
  <li><Link onClick={()=>setClick(false)} to="aboutus">About</Link></li>
         
  <li>
    <ul className="collapsible">
     <li>
     
     <div className="collapsible-header">
       <i className="material-icons" style={{display:'none'}}></i>Services</div>
       <div className="collapsible-body" style={{paddingLeft:'20px',fontSize:'12px'}}>
        <Link to="#action/3.1">Multilevel BUildings Construction</Link><br/>
        <Link to="#action/3.2">Repairs and Maintenance</Link><br/>
        <Link to="#action/3.3">Interior Designs and Installation</Link><br/>
        <Link to="#action/3.4">Equipment Hire</Link><br/>
        <Link to="#action/3.2">Excuvator Works</Link><br/>
        <Link to="#action/3.3">Site Preparation</Link><br/>
        <Link to="#action/3.4">Dumping</Link><br/>
        <Link to="#action/3.3">Building Materials Delivery</Link><br/>
        <Link to="#action/3.4">Road Murraming and Buttimen Standardizing</Link><br/>
    </div>
      </li>
     
    </ul>
  </li>
         <li><Link onClick={()=>setClick(false)} to="employees">Meet Your Builder</Link></li>
         <li><Link onClick={()=>setClick(false)} to="projects">Projects</Link></li>
         <li><Link onClick={()=>setClick(false)} to="process">Process</Link></li>
         <li><Link onClick={()=>setClick(false)} to="testimonials">Testimonials</Link></li>
         <li><Link onClick={()=>setClick(false)} to="contacts">Contact</Link></li>
  </ul>
  
        </div>
    )
}

export default NavBar
