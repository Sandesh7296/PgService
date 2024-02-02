import "./home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import delhi from "../../assets/delhi.png";
import mumbai from "../../assets/mumbai.png";
import hydrabad from "../../assets/hyderabad.png";
import banglore from "../../assets/bangalore.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [City, setCity] = useState("");
  var cityName=City;
  console.log(City);
  const [id, setId] = useState(0);

  const handleCitySearch=()=>{


    if (cityName=="Delhi"){
     navigate('/Delhi');
    }
    else if(cityName=="Mumbai"){
     navigate("/Mumbai")
    }
    else if(cityName=="Banglore"){
     navigate("/Banglore")
    }
    else if(cityName==""){
     navigate("/Hydrabad")
    }
    else {
    //  navigate("/PageNot");
    }
       
   }

  return (
    <div>
      <div className="bgimage">
        <div className="container col-md-4 mt-4">
          <br />
          <br />
          <br />
          <br />
          <div className="input-group mt-4">
            <input
              onChange={(e) => {
                setCity (e.target.value);
                
              }}
              type="text"
              className="form-control form-control-lg"
              placeholder="Search PG"
              aria-label="Enter your PG"
              aria-describedby="button-addon2"
            />
            {/* <Link
              to="/search"
              state={id}
              className="btn btn-dark"
              type="button"
              id="button-addon2"
            >
              Search
            </Link> */}
            <button onClick={handleCitySearch}>Search</button>
          </div>
        </div>
      </div>
 
      <br/>
      <br/>
      <br/>
      
     
                       <h1 class="city-heading">
                            Major Cities
                        </h1>
                        <br/>
                         <br/>
                          <div class="row">

                    <div class="city-card-container col-md">
                            <div class="city-card rounded-circle">
                              <Link to="/delhi" className="nav-link active">
                                      <img src={delhi} className="city-img" ></img>
                                </Link>
                            </div> 
                    </div>

                    <div class="city-card-container col-md">
                        <div class="city-card rounded-circle">
                            <Link to="/mumbai" className="nav-link active">
                                  <img src={mumbai} class="city-img" ></img>
                            </Link>   
                        </div>
                    </div>

                    <div class="city-card-container col-md">
                            <div class="city-card rounded-circle">
                            <Link to="/banglore" className="nav-link active">
                            <img src={banglore} class="city-img" ></img>
                            </Link>
                            </div>     
                    </div>

                    <div class="city-card-container col-md">
                            <div class="city-card rounded-circle">
                            <Link to="/hydrabad" className="nav-link active">
                            <img src={hydrabad} class="city-img" ></img>
                            </Link>
                            </div>
                        
                    </div>
        
       <br/>
       <br/>
       
    </div>

    <br/><br/><br/>

    <div className="border mx-4 mt-4 mb-3 border-dark">
    <div class="container text-center my-5">
        <p className="lead" >
        Welcome to PGManagement! We're here to make PG management easy and hassle-free. Our goal is to help PG owners and residents have a smooth and enjoyable experience.
        our mission is simple: We want to make hostel life better. We use smart software to make managing hostels a breeze, so everyone can have a great time.
        We're a group of friendly people who love technology and hostels. Our team includes experts in making software, managing hostels, and helping customers.
        We're always thinking of new ways to improve PG with technology.Our software is designed to be easy for both hostel owners and residents to use.
        If you have questions or problems, we're here to assist you.Your information is safe with us. We use strong security to protect it.
        Thanks for considering PGManagement for your hostel management needs. Together, we'll make PG more efficient, secure, and enjoyable for everyone.

        </p>
      </div>
      </div>
       
      <br/>
       <br/>
       <br/>
       <br/>
          

    </div>

    
  );
};

export default Home;
