import React from "react";
import { Paaapp, Progre } from "./country";
import { Card, Container, Row, Col ,ProgressBar,Button} from "react-bootstrap"
import { HiOutlineDotsVertical } from "react-icons/hi";
 
 
 function Management() {


    return (
      
      <Row>
      <Col md={3} style={{ width: "100%"  }}  >
        <Card style={{ width: "100%",height: "100%"  }}   text="dark"   className="Bootstrap-Card  border-1 " >
          {/* <Card.Img variant="top" src="some-image-url" /> */}
          <Card.Body className="paddy" >
           <Row>
            

            <div  className="d-flex justify-content-between">
            <h4 style={{fontSize:"19px",fontWeight:"bold"}} >Project Management</h4>
            <span className="text-end ml-auto  " style={{fontSize:"19px",fontWeight:"bolder"}} ><HiOutlineDotsVertical   /></span>
            </div>
            
            <h6 >1 open task,9 tasks completed </h6>
           <h6>Lorem lpsum is  simple dummy text of the printion and typesctripting industry.when an unknown printer took a gallery of type adn scrambled it...</h6>
            <h5 style={{fontSize:"19px",fontWeight:"bold"}}>Deadline :</h5>
           <h6> 17 apr 2023</h6>
           <h5 style={{fontSize:"19px",fontWeight:"bold"}}>Project Leader:</h5>
           <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UD2MK-8Iht0iUAqOYUR5lExSdz4Kjw-kNV1rLxrNRpc-qSRDDtxH2krL9zocRhpkEIQ&usqp=CAU" 
            style={{width:"65px"}} className="toround" />
            <h5 style={{fontSize:"19px",fontWeight:"bold"}} className="mt-3" >Team:</h5>
            <Paaapp/>

            <div>
               <h5 style={{fontSize:"19px",fontWeight:"bold"}}>Progress:</h5>
               <h5 className="text-end" >40% </h5>
               </div>
           <Progre/>
           

            
            
           </Row>
              </Card.Body>
            </Card>
          </Col>
          
             
  
                
        </Row>
      
    );
  }
  export default  Management