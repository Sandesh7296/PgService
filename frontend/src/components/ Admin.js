import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/admin.css" 
import UsersPage from "./UsersPage";
function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") !== "true") {
      navigate("/Admin");
    }
  }, []);

  return (
    <div className="adminimage">
      <br/>
    <div className="container-fluid mt-5"   >

      <div className="row"  style={{ marginLeft:'200px', marginRight:'200px'}}>

        <div className="col-md-4"  style={{marginTop:'50px'}}>
          <div className="card mb-4" >
            <div className="card-body text-center"   style={{backgroundColor:'pink'}}>
              <h3 className="card-title">Users List</h3>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/UsersPage")}
              >
                Go to Users
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4" style={{marginTop:'50px'}}>
          <div className="card mb-4">
            <div className="card-body text-center"  style={{backgroundColor:'pink'}}>
              <h3 className="card-title">Properties Edit</h3>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/properties")}
              >
                Go to Properties Edit
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4" style={{marginTop:'50px'}}>
          <div className="card mb-4">
            <div className="card-body text-center"  style={{backgroundColor:'pink'}}>
              <h3 className="card-title">Facilities Edit</h3>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/facilities")}
              >
                Go to Facilities Edit
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4" style={{marginTop:'50px'}}>
          <div className="card mb-4">
            <div className="card-body text-center"  style={{backgroundColor:'pink'}}>
              <h3 className="card-title">Cities List</h3>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/CitiesList")}
              >
                Go to Cities
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4" style={{marginTop:'50px'}}>
          <div className="card mb-4">
            <div className="card-body text-center"  style={{backgroundColor:'pink'}}>
              <h3 className="card-title">Facilities List</h3>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/FacilitiesPage")}
              >
                Go to Facilities
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4" style={{marginTop:'50px'}}>
          <div className="card mb-4">
            <div className="card-body text-center"  style={{backgroundColor:'pink'}}>
              <h3 className="card-title">AddProperty</h3>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/AddProperty")}
              >
                Go to Add Property
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4" style={{marginTop:'50px'}}>
          <div className="card mb-4">
            <div className="card-body text-center"  style={{backgroundColor:'pink'}}>
              <h3 className="card-title">Cities Edit</h3>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/cities")}
              >
                Go to Cities Edit
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4" style={{marginTop:'50px'}}>
          <div className="card mb-4">
            <div className="card-body text-center"  style={{backgroundColor:'pink'}}>
              <h3 className="card-title">Add Cities</h3>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/CitiesPage")}
              >
                Go to Cities Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </div></div>
  );
}

export default Admin;
