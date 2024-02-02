import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from '../url';
function CitiesPage() {
  const [cityData, setCityData] = useState({
    id: "",
    name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL}/admin/cities/add`,
        cityData
      );
      console.log(response.data);
      // Clear form fields after successful submission
      setCityData({
        id: "",
        name: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
<div className="unique" >
<div style={containerStyle}>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
      <h2>Cities Management</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        {/* <div style={formGroupStyle}>
          <label>ID:</label>
          <input
            type="hidden"
            name="id"
            value={cityData.id}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div> */}
        <div style={formGroupStyle}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={cityData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={submitButtonStyle}>
          Add City
        </button>
      </form>
    </div>
    </div>
  );
}

export default CitiesPage;

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
