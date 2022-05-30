import React from "react";
import { Navbar, Nav, Container, Row, Col,Button,Table } from "react-bootstrap";
import "./SignIn.css";
const SignIn = () => {
    return (

    <React.Fragment>
      <Container>
        <Navbar bg="light" expand="lg">
            <img src="codexbox.png" width="100px" height="50px" alt="codex" />
             <Nav className="me-auto">
             <Nav.Link  href="#home">Dashboard</Nav.Link>
             <Nav.Link  href="#home">Customers</Nav.Link>
             <Nav.Link  href="#link">Technician</Nav.Link>
            </Nav>
         <img src="shiv.jpg" className="logo1" width="50px" height="50px"  alt="shiva" />
        </Navbar>
        <Row>
         <Col sm={4}>
            <h5>Technicians</h5>
            <img src="shiv.jpg" className="logo2" width="100px" height="100px"  alt="shiva" />
            <h4>SHIVAKUMAR THODETI</h4>
            <img src="star.png" alt="staricon" width="20px" height="20px"/>
            <img src="star.png" alt="staricon" width="20px" height="20px"/>
            <img src="star.png" alt="staricon" width="20px" height="20px"/>
            <img src="star.png" alt="staricon" width="20px" height="20px"/><span>4.2 AVERAGE</span>
            <h6 className="profile">TECHNICIAN INFORMATION</h6>
            <div className="smalltable">
               <Table striped bordered hover>
                 <tbody>
                    <tr>
                      <td>Email</td>
                      <td>shivakumarthodeti926@gmail.com</td>
                    </tr>
                    <tr>
                      <td>PhoneNumber</td>
                      <td>9365847914</td>
                    </tr>
                    <tr>
                      <td>Member since</td>
                      <td>02-05-2015</td>
                    </tr>
                 </tbody>
                </Table>
            </div>
        <Button className="button1" href="#"><img src="edit.png" width="20px" height="20px" alt="editicon"/>EDIT INFORMATION</Button> 
        <h5 className="upload">Technical Documents</h5>
        <div className="shiva">
            <div className="documents">
                     <img src="file.png" alt="document" height="20px" width="20px"/>inspection_document_Name.pdf
                     <img src="eye.png" alt="visibilityicon" height="20px" width="20px"/>
                     <img src="close.png" alt="closeicon" height="20px" width="20px"/>
            </div>
            <div className="documents">
                     <img src="file.png" alt="document" height="20px" width="20px"/>inspection_document_Name.pdf
                     <img src="eye.png" alt="visibilityicon" height="20px" width="20px"/>
                     <img src="close.png" alt="closeicon" height="20px" width="20px"/>
            </div>
        </div>   
        <Button className="button2"  href="#"><img src="add.png"  alt="addicon" height="20px" width="20px"/>UPLOAD A FILE</Button> 
        </Col>
        
    <Col sm={8}>
    <Table striped bordered hover className="tdesign">
        <thead>
        <tr>
         <th colSpan={2}>scheduled</th>
         <th colSpan={2}>completed services</th>
        </tr>
        </thead>
        <tbody>
        <tr>
<td><img src="calendar.png"  width="25px" height="25px" alt="calendaricon" />1531 NE 39th street</td>
                    <td>March20th,2020</td>
                    <td>2pm</td>
                    <td><img src="eye.png " width="25px" height="25px"  alt="visibilityicon" /> </td>
                </tr>
                <tr>
                    <td><img src="calendar.png"  width="25px" height="25px" alt="calendaricon" />1531 NE 39th street</td>
                    <td>March20th,2020</td>
                    <td>2pm</td>
                    <td><img src="eye.png" width="25px" height="25px" alt="visibilityicon" /></td>
                </tr>
                <tr>
                    <td><img src="calendar.png" width="25px" height="25px" alt="calendaricon" />1531 NE 39th street</td>
                    <td>March20th,2020</td>
                    <td>2pm</td>
                    <td><img src="eye.png" width="25px" height="25px" alt="visibilityicon" /></td>
                </tr>
                <tr>
                    <td><img src="calendar.png" width="25px" height="25px" alt="calendaricon" />1531 NE 39th street</td>
                    <td>March20th,2020</td>
                    <td>2pm</td>
                    <td><img src="eye.png" width="25px" height="25px" alt="visibilityicon" /></td>
                </tr>
                <tr>
                    <td><img src="calendar.png" width="25px" height="25px" alt="calendaricon" />1531 NE 39th street</td>
                    <td>March20th,2020</td>
                    <td>2pm</td>
                    <td><img src="eye.png" width="25px" height="25px" alt="visibilityicon" /></td>
                </tr>
                <tr>
                    <td><img src="calendar.png" width="25px" height="25px" alt="calendaricon" />1531 NE 39th street</td>
                    <td>March20th,2020</td>
                    <td>2pm</td>
                    <td><img src="eye.png" width="25px" height="25px" alt="visibilityicon" /></td>
                </tr>
                </tbody>
            </Table>
           </Col>
        </Row>
    </Container>
</React.Fragment>
    );
}
export default SignIn;
