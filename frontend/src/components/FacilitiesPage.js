import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../url";

function FacilitiesPage() {
  const [facilityData, setFacilityData] = useState({
    id: "",
    name: "",
    type: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFacilityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL}/admin/facilities/addfacilities`,
        facilityData
      );
      console.log(response.data);
      // Clear form fields after successful submission
      setFacilityData({
        id: "",
        name: "",
        type: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="unique" >
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
    <div style={containerStyle}>
      
      <br></br>
      
      
      <h2>Facilities Management</h2>
      
      <form style={formStyle} onSubmit={handleSubmit}>
        
        <div style={formGroupStyle} >
          <label>ID:</label>
          <input
            type="hidden"
            name="id"
            value={facilityData.id}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={facilityData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={facilityData.type}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={submitButtonStyle}>
          Add Facility
        </button>
      </form>
    </div>
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default FacilitiesPage;

// Styles

const containerStyle = {
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
};

const formGroupStyle = {
  marginBottom: "15px",
  marginTop:"20px",

};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const submitButtonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "10px",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
};

submitButtonStyle.hover = {
  backgroundColor: "#0056b3",
};
