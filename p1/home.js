import React, { useState } from "react"
import { Admin, MyCard,} from "./country";
import Country from "./country"

import Office from "./office";
import Management from "./pmanage";
import Hospital from "./hospital";
import Video from "./video call";


import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import {Container,Row,Col,Form,Button,Navbar,Dropdown,FormControl,InputGroup,Badge} from "react-bootstrap"
import { RiMenu2Line } from "react-icons/ri";
import { FaAdjust, FaSearch } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";





let Papp=()=>{
    let [ismobile,setismobile]=useState(true)
 
    return(
        <Router>
          <Container fluid className="p-0">                    
            <div className="nav-div  ">
             
              <Navbar className="bg-orange-dark-pink p-3  py-2" > 
              
                <div className="div-rigth d-flex " >  
                   <Navbar.Brand>
                   <Link to="/"><img src="https://smarthr.dreamstechnologies.com/html/template/assets/img/logo.png "
                   width="35px" /></Link>
                   </Navbar.Brand>
                  
                   <Navbar.Brand className="rimenu" >
                   <Link to="/"><RiMenu2Line color="white" size={28} /></Link>
                   </Navbar.Brand>
                  
                  
                   <h5 className="mt-2 text-white " >   Dreams Technologies</h5>
                  
                   </div>

             
          <div className="d-flex ms-auto me-3 ">
            <div className=" bg-transparent  d-flex  border-white  rounded-pill  inner-shadow "   >
                 <InputGroup  className="input" id="ada" >
                     <input   className="bg-transparent mr-sm-2 rounded-5 py-2  px-3 placeholder-white border-0 " 
                     type="search" placeholder="Search here "  />
                 </InputGroup>
                     <button   id="to" className=" bg-transparent  input  mr-2 mt-2 text-white border-0 mb-2 ml-2 px-3 "   >
                      <FaSearch size={19} /></button>
             </div>
                       <Navbar.Brand color="white" className=" px-3 country  mt-1  "  >
                     <Country   />
                       </Navbar.Brand>

                       <Navbar.Brand className="icon-1" > 
                      <Link to="/">
                    <div className="position-relative" ></div>
                    <MdOutlineNotificationsNone   className=" px-1 ml-2" color="white" size={37} />
                    <Badge pill  className="position-absolute top-1  start-64 translate-middle"  >5</Badge>
                    </Link>
                   </Navbar.Brand>
                  
                    <Navbar.Brand className="me-3 icon-2 ">
                   <Link to="/">
                    <div className="position-relative" ></div>
                    <TbMessageCircle   className=" px-1 mr-2 " color="white" size={37} />
                    <Badge pill  className="position-absolute top-1  start-64 translate-middle  custom-blue-badge "  >5</Badge>
                    </Link>
                   </Navbar.Brand>
                  
         

                    <div className="   position-relative d-flex  ">
                  <Navbar.Brand color="white  "  className="admin"  >
                   <Admin  />
                     </Navbar.Brand>
                  
                <  GoDotFill className="gree position-absolute  arrange  translate-middle "  />
                </div>
               </div > 
         

               <Button className="mobile-menu-icon"
               onClick={()=>setismobile(!ismobile)}
               >
                {ismobile ? (<FaTimes />):(<FaBars />) }
               </Button>

               <div className="compo">
              <ul className={ismobile?"nav-link-mobile":"navlink"}
                onClick={()=>setismobile(false)}
                >
                  <li className="home">Home</li>
                  <li className="home">About</li>
                  <li className="home">Settings</li>
                           
              </ul>
               
               </div>


               </Navbar>
              
       
        </div>
        
<div className="mainbod">


        <h2>Profile</h2>
        <h5>Dashboard / profile</h5> 
        <div style={{width:"100%"}}   >
             <MyCard/>
        </div>
</div>



    <div className="mainbod-cards  "   >

         
      <Row  >
        <Col >
          <Office />
        </Col>

        <Col>
          <Management />
        </Col>

        <Col>
          <Video />
        </Col>

        <Col>
          <Hospital />
        </Col>
      </Row>
  
    </div> 


    
     </Container>
        </Router>
    )
}
export default Papp
