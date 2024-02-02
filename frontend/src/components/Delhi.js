import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import Pglist from './Pglist';
import "../css/common.css";
import "../css/property_list.css";
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../url';

const Delhi = () => {    
  const [pglists,setpglists] = useState([]);
 
  const{cityName} = useParams();

  //console.log("ssss"+cityName);
  //console.log(window.location.pathname);

  var uri=window.location.pathname
  
  useEffect(() => {
    getallpglistfromcity();
  },[cityName]);

  const buttonStyle1 = {
    marginRight: '40px',
    marginBottom: '30px',
    fontSize: '18px',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleButtonClickFemale=()=>{
    console.log("gender");
    axios.get(`${BASE_URL}/properties/gender/FEMALE`).then(
     
    (response) =>{
     console.log(response.data);
    
     setpglists(response.data)
     console.log("ssssss"+ pglists)

    }, 
    (error) =>{
      console.log(error);
      
    }
 ) ;
  }

  const handleButtonClickMale=()=>{
    console.log("gender");
    axios.get(`${BASE_URL}/properties/gender/MALE`).then(
     
    (response) =>{
     console.log(response.data);
    
     setpglists(response.data)

    }, 
    (error) =>{
      console.log(error);
      
    }
 ) ;
  }

  const handleButtonClickOther=()=>{
    console.log("gender");
    axios.get(`${BASE_URL}/properties/gender/BOTH`).then(
     
    (response) =>{
     console.log(response.data);
    
     setpglists(response.data)

    }, 
    (error) =>{
      console.log(error);
      
    }
 ) ;
  }


  const getallpglistfromcity =() => {
     axios.get(`${BASE_URL}/properties/list/`+cityName).then(
     
       (response) =>{
        console.log(response.data);
       
        setpglists(response.data)

       }, 
       (error) =>{
         console.log(error);
         
       }
    ) ;
     
}

  
  

   return (

<div className='backimage'>
<div className="container">

      <h1 className="text-center">Property Listings</h1>
      <br></br>
      <button style={buttonStyle1} onClick={()=>handleButtonClickFemale()}> Sort By Female  </button>

        <button style={buttonStyle1} onClick={()=>handleButtonClickMale()}> Sort By Male  </button>
        <button style={buttonStyle1} onClick={()=>handleButtonClickOther()}> Sort By Other  </button>
       
        <div>   
            { pglists.length>0
                ? pglists.map((item) => <Pglist  pglist = {item } />)
                    :"No Pg"}       
        </div>

    </div>

    </div>  
  );
};

export default Delhi;