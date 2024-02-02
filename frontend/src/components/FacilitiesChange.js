import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../url';

const FacilitiesChange = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${BASE_URL}/facilities`)
      .then((response) => {
        navigate('/facilities');
        setData(response.data);
      })
      .catch((error) => {});
  };

  const handleEdit = (propertyId) => {
    setIsEditing(propertyId);
  };

  const handleSave = (editedProperty) => {
    axios
      .put(`${BASE_URL}/admin/facilities/edit`, editedProperty)
      .then(() => {
        fetchData();
      })
      .catch((error) => {});
  };

  return (
    <div className="unique" >
    <div className="container mt-5"><br/><br/><br/><br/>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Facilities Listings</h1>
          <table className="table table-bordered table-striped custom-table">
            <thead className="thead-custom">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {isEditing === item.id ? (
                      <input
                        className="form-control"
                        type="text"
                        value={item.name}
                        onChange={(e) =>
                          setData((prevProperties) =>
                            prevProperties.map((prevProperty) =>
                              prevProperty.id === item.id
                                ? { ...prevProperty, name: e.target.value }
                                : prevProperty
                            )
                          )
                        }
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>
                    {isEditing === item.id ? (
                      <input
                        className="form-control"
                        type="text"
                        value={item.type}
                        onChange={(e) =>
                          setData((prevProperties) =>
                            prevProperties.map((prevProperty) =>
                              prevProperty.id === item.id
                                ? { ...prevProperty, type: e.target.value }
                                : prevProperty
                            )
                          )
                        }
                      />
                    ) : (
                      item.type
                    )}
                  </td>
                  <td>
                    {isEditing === item.id ? (
                      <>
                        <button
                          className="btn btn-primary btn-sm mr-2"
                          onClick={() => handleSave(item)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setIsEditing(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-info btn-sm"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br/><br/><br/><br/>
    </div>
    </div>
  );
};

export default FacilitiesChange;
