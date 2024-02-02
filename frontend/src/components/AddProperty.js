import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../url';

const AddProperty = () => {
  const [property, setProperty] = useState({
    name: '',
    description: '',
    address: '',
    gender: '',
    rent: 0,
    ratingClean: 0,
    ratingFood: 0,
    ratingSafety: 0,
    city_id:0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };


  const handleReset = () => {
    // Reset the form fields to their initial state
    setProperty({
      name: '',
      description: '',
      address: '',
      gender: '',
      rent: 0,
      ratingClean: 0,
      ratingFood: 0,
      ratingSafety: 0,
      city_id: 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to your server with the property data
    axios
      .post(`${BASE_URL}/admin/property/addproperty`, property)
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log('Property added successfully', response.data);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('Error adding property');
      });
  };

  return (
    <div className="unique" >
    <div className="container mt-5" style={{marginTop:'100'}}>
        <br></br>
        <br></br>
        <br></br><br></br>
      <h2 className="text-center mb-4" >Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={property.name}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={property.description}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={property.address}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            value={property.gender}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Rent:</label>
          <input
            type="number"
            className="form-control"
            name="rent"
            value={property.rent}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Rating Clean:</label>
          <input
            type="number"
            className="form-control"
            name="ratingClean"
            value={property.ratingClean}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Rating Food:</label>
          <input
            type="number"
            className="form-control"
            name="ratingFood"
            value={property.ratingFood}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Rating Safety:</label>
          <input
            type="number"
            className="form-control"
            name="ratingSafety"
            value={property.ratingSafety}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="number"
            className="form-control"
            name="city_id"
            value={property.city_id}
            required
            onChange={handleChange}
          />
        </div>
        <center>
        <button type="submit" className="btn btn-info ms-5" >
          Add Property
        </button>
        <button type="reset" className="btn btn-warning ms-2" onClick={handleReset}>
            Reset
          </button>
        </center>
      </form>
      <br/><br/>
    </div>
    </div>
  );
};

export default AddProperty;
