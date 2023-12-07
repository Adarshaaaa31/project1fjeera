import React from "react";
import { CustomFlagIconFactory } from "react-flag-icon-css";
import { Card, Container, Row, Col ,ProgressBar,Button ,Tab,Tabs } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "antd/lib/layout"
import { Avatar } from 'antd';





 export function Paaapp() {
  return (
    <Avatar.Group
    maxCount={4}
    maxStyle={{ color: '#fff', backgroundColor: '#f00' }}
  >
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI6CGc7mXy-12jbW6ddQ1gr3bbKtqEybysP2gusP3kxep7af_AhCv5XcYBZt4t_KP6xic&usqp=CAU"/>
    
    {/* <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar> */}
    <Avatar src="https://wpbeaveraddons.com/wp-content/uploads/2017/06/t1-2.png"/>
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynBryvKzWaR8tUKSYDGuCmuY8adeV_NVyy5UFqNDdKnj8H24gozWr75-q0I6pqSTFYvg&usqp=CAU"/>
    <Avatar src="https://www.vitrine.ro/wp-content/uploads/2017/01/team-member-2-550x550.jpg"/>
    <Avatar src="https://i.imgur.com/..."/>
    <Avatar src="https://i.imgur.com/..."/>
    <Avatar src="https://i.imgur.com/..."/>
  </Avatar.Group>
  );
}



 export function Progre() {
  return (
    <div className="progressBar"  >
        <ProgressBar striped variant="light-green" now={40}  style={{height: "5px"}}  />
        
    </div>
  );
}




const CustomFlagIcon = CustomFlagIconFactory(React, { useCssModules: false }); 
//language dropdown
function Country() {
  
  return (
    <div className="App">
      <NavDropdown  title={<span  ><CustomFlagIcon code="us" size="lg" /> English</span>}  id="language-dropdown" className="whitecss" >
        <NavDropdown.Item>
          <CustomFlagIcon code="us"  size="2x" /> English 
        </NavDropdown.Item>
        <NavDropdown.Item>
          <CustomFlagIcon code="fr"  size="2x" /> Français
        </NavDropdown.Item>
        <NavDropdown.Item>
          <CustomFlagIcon code="es" size="2x" /> Español
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
export default Country;



//admindropdown
export let Admin=()=>{
  return(
    <div className="App">

    <NavDropdown className="whitecss" title={<span><img src="https://smarthr.dreamstechnologies.com/html/template/assets/img/profiles/avatar-21.jpg " width="32px" className=" toborder" ></img>Admin</span>}>
    <NavDropdown.Item> About  </NavDropdown.Item>
    <NavDropdown.Item>  Account </NavDropdown.Item>
    <NavDropdown.Item>  Logout </NavDropdown.Item>
    </NavDropdown>
    </div>
  )
}




export function MyCard() {
  const infoArray = [
    { Phone: "998843990" },
    { Email: "carry@youtube.com" },
    { Birtday: "15/10/1694" },
    { Address: "carry@youtube.com" },
    { Gender: "Male" },
  ];
  return (
    <Row   >
      <Col md={6} style={{ width: "100%" }}>
        
        <Card
          style={{ width: "100%", height: "115%" }}
          text="dark"
          className="Bootstrap-Card  border-1  "
        >
          <Card.Body className="paddy">
            <Row>
              <Col md={1}>
                <div>
                  <Card.Img
                    src="https://smarthr.dreamstechnologies.com/html/template/assets/img/profiles/avatar-19.jpg"
                    style={{ width: "100%" }}
                    className="img-fluid toround"
                  />
                </div>
              </Col>
              <Col md={4} className="border-right">
                <h3 className="text-truncate">Global Technologies</h3>
                <h6 className="mb-0 text-truncate" style={{ fontWeight: "bold" }}>
                  Barry Cuda
                </h6>
                <h6 className="text-truncate">CEO</h6>
                <h6 className="text-truncate" style={{ fontWeight: "bold" }}>
                  Employee ID : CLT-0001
                </h6>
                <Button
                  className="mt-4 mb-2  border-0 bg-orange-dark-pink px-4 py-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  Send Message
                </Button>
              </Col>
              <Col md={4} className="tomove d-flex    align-items-center   col-md-7 ">
                <dl
                  className="row"
                  style={{ margin: "0", listStyle: "none", lineHeight: "1.2" }}
                >
                  {infoArray.map((item, index) => (
                    <React.Fragment key={index}>
                      <dt className="col-sm-3 text-right text-truncate">{Object.keys(item)[0]}:</dt>
                      {Object.keys(item)[0] === "Phone" ? (
                        <dd className="col-sm-9 text-truncate">
                          <a href="tel:998843990">998843990</a>
                        </dd>
                      ) : Object.keys(item)[0] === "Email" ? (
                        <dd className="col-sm-9 text-truncate">
                          <a href="mailto:carry@youtube.com">carry@youtube.com</a>
                        </dd>
                      ) : (
                        <dd className="col-sm-9 text-truncate">{Object.values(item)[0]}</dd>
                      )}
                    </React.Fragment>
                  ))}
                </dl>
              </Col>
            </Row>
          <Col  >
          <Row className="border-top toreduce profile-tabs ">
              <Tabs
                defaultActiveKey="project"
                id="uncontrolled-tab-example"
                className="custom-tabs   profile-tab-space nav-fill flex-column flex-sm-row"
                fill
              >
                <Tab eventKey="project" title="Project" className="small-tab"></Tab>
                <Tab
                  eventKey="task"
                  title="Task"
                  tabClassName="profile-tabitem  "
                  className="small-tab border-left ml-3  border-right border-top"
                ></Tab>
              </Tabs>
            </Row>
          </Col>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

 





