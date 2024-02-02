 import axios from "axios";
 import { BASE_URL } from "../url";
 import React, { useState, useEffect } from 'react';
 import prop1 from "../assets/properties/1/1d4f0757fdb86d5f.jpg";
 import { Card, CardBody, CardSubtitle, CardText, Container, Row, Col } from 'reactstrap';
 import { toast } from "react-toastify";

 const ShowCart = () =>{
    
    const [pglists,setpglists] = useState([]);
    const [propertylist, setPropertylist] = useState([]);
    const [facilities, setFacilities] = useState([]);

    const[reviews,setReviews] = useState([]);

    useEffect(() => {
       ShowCartProperties();
       //getcart()
      },[]);


    var id=sessionStorage.getItem("id");

  


      const getcart=()=>{
        axios.get(`${BASE_URL}/bookingCart/show_cart/${id}`).then(
         
        (response) =>{
        console.log(response.data);
        setpglists(response.data);
        console.log(pglists);
        }, 
        (error) =>{
          console.log(error);
          
        }
       ) ;
      }


      const ShowCartProperties = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/bookingCart/show_cart/${id}`);
          console.log(response.data);
        //   console.log(response.data.properties)
        setPropertylist(response.data);
        var a=response.data;

        // a.forEach(element => {
        //     console.log("elemnt"+element.name);
            
        // });
        // console.log("aaaaaaa"+a);

        } catch (error) {
          console.error('Error fetching property details:', error);
        }
      };

      const handleButtonClick = async (data) => {
        try {
          console.log("data="+data);
          var datad=data;
          const response = await axios.patch(`${BASE_URL}/bookingCart/update/${datad}`);

          if(response.data=="Currently PG is Not Available"){
            toast.error("Better luck next time");

          }else{
            toast.success("Booking done Tthank you");
          }
          console.log(response.data);
        //   console.log(response.data.properties)
        // setPropertylist(response.data);
        // var a=response.data;

        } catch (error) {
          console.error('Error fetching property details:', error);
        }
      };


    //return(
    //     <div><br></br>
    //     <br></br>
    //     <br></br><br></br><br></br>
            
             
           
           
    //              {/* <Container fluid className="text-center">
    //              <Row>
    //                {propertylist.map(pglist => (
    //                  <Col key={pglist.id} sm="12" md="6" lg="4">
    //                    <Card className="mb-4">
    //                      <div className="image-container">
    //                        <img src={[prop1]} alt={pglist.name} />
    //                      </div>
    //                      <CardBody>
    //                        <CardSubtitle>{pglist.name}</CardSubtitle>
    //                        <CardText>{pglist.address}</CardText>
    //                        <CardText>{pglist.description}</CardText>
    //                        <CardText>{pglist.gender}</CardText>
    //                        <div className="row no-gutters">
    //                          <div className="rent-container col-6">
    //                            <div className="rent">Rs {pglist.rent}/-</div>
    //                            <div className="rent-unit">per month</div>
    //                          </div>
    //                        </div>
    //                      </CardBody>
    //                    </Card>
    //                  </Col>
    //                ))}
    //              </Row>
    //            </Container> */}


               
                
           
            
    //     </div>
    // )





    
    return (
      <Card className="text-center">
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div ></div>
        <CardBody >
          <Container className="text-center " style={{ backgroundColor: 'lightblue' }}>
            {propertylist.map(pglist => (
              <div
                className="property-card row"
                key={pglist.id} //#e1ecfd  //#fdf2e1  //#BE93C6  
                style={{ backgroundColor: '#D2E7EA' }} // Set background color here
              >
                <div className="image-container col-md-4">
                  <img src={prop1} alt="Property Image" />
                </div>
                <div className="content-container col-md-8">
                  <div className="detail-container">
                    {/* Display property name */}
                    <div className="property-name">
                      <CardSubtitle>{pglist.name}</CardSubtitle>
                    </div>
                    {/* Display property description */}
                    <div className="property-address">
                      <CardText>{pglist.description}</CardText>
                    </div>
                    {/* Display property address */}
                    <CardText>{pglist.address}</CardText>
                    <div className="property-gender">
                      <CardText>{pglist.gender}</CardText>
                    </div>
                  </div>
                  <div className="row no-gutters">
                    <div className="rent-container col-6">
                      {/* Display rent */}
                      <div className="rent">
                        <CardText>Rs{pglist.rent}/-</CardText>
                      </div>
                      <div className="rent-unit">per month</div>
                    </div>
                    <div className="button-container col-6">
                      {/* <button className="btn btn-primary" onClick={() => handleButtonClick(pglist.id)}>Book now </button>
                       */}
                    </div>

                    <div>
  <button className="button-container col-3 " style ={{marginTop:'10px'}}onClick={() => handleButtonClick(pglist.id)}>Book now</button>
  <button className="button-container col-3" style={{ marginRight: '100px' }} onClick={() => handleButtonClick(pglist.id)}>Remove From Cart</button>
</div>

                  </div>
                </div>
              </div>
            ))}
          </Container>
          <br></br>
          <br></br>
        </CardBody>
      </Card>
    );
    
    
}
export default ShowCart;