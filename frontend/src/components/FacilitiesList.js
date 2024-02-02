import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../url';
import '../css/styles.css';
function FacilitiesList() {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/facilities`);
      setFacilities(response.data);
    } catch (error) {
      console.error('Error fetching facilities:', error);
    }
  };

  return (
    <div className="container mt-5">
       <br></br>
      <br></br> 
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-center">Facilities List</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {facilities.map(facility => (
              <tr key={facility.id}>
                <td>{facility.id}</td>
                <td>{facility.name}</td>
                <td>{facility.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FacilitiesList;



