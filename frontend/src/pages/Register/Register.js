import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../url";

const Register = () => {
  const [address, setAddress] = useState("");
  const [fullName, setfullName] = useState("");
  const [mobNo, setmobNo] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");


  // used to navigate from one component to another
  const navigate = useNavigate();

  const registerPerson = () => {
    if (fullName.length == 0) {
      toast.warning("Please enter name");
    } else if (mobNo.length == 0) {
      toast.warning("Please enter phone number");
    } else if (email.length == 0) {
      toast.warning("Please enter email");
    } else if (password.length == 0) {
      toast.warning("Please enter password");
    } else if (confirmPassword.length == 0) {
      toast.warning("Please confirm your password");
    } else if (password != confirmPassword) {
      toast.warning("Password does not match");
    } else {

      const body = {
        address,
        fullName,
        mobNo,
        gender,
        email,
        password,
        role,
      };

    
      console.log(body);
      axios
      .post(`${BASE_URL}/User/Signup`, body)
      .then((response) => {
        console.log(body);
        // get the data from the response
        const result = response.data;
        console.log(result);
        console.log(response["status"]);
        if (response["status"] == 200) {
          toast.success("Successfully signed up new user");

          // navigate to the signin page
          navigate("/signin");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    
    <div className="regisimage">
      
            <br></br>
      <br/><br/><br/><br/><br/><br/>
      <div className="container col-8 col-xl-6 my-4 pt-2 pb-5 shadow bg-body rounded">
        <h4 className="heading">Register</h4>

        <div className="row mx-auto g-4">
          <div className="col-md-6">
            <label htmlFor="inputfull_name4" className="form-label">
              Name*
            </label>
            <input
              onChange={(e) => {
                setfullName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="inputfull_name4"
            />
          </div>

          <div className="col-6">
            <label htmlFor="inputAddress4" className="form-label">
              Address
            </label>
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="text"
              className="form-control"
              id="inputAddress4"
            />
          </div>
          
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email*
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="inputEmail4"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPhone4" className="form-label">
              Phone*
            </label>
            <input
              onChange={(e) => {
                setmobNo(e.target.value);
              }}
              type="number"
              min={0}
              className="form-control"
              id="inputPhone4"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password*
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          

          <div className="col-md-6">
            <label htmlFor="confirmPassword4" className="form-label">
              Confirm Password*
            </label>
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="confirmPassword4"
            />
          </div>

          <div className="col-6">
            <label htmlFor="inputGender4" className="form-label">
              Gender*
            </label>
            <input
              onChange={(e) => {
                setGender(e.target.value);
              }}
              type="text"
              className="form-control"
              id="inputGender4"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputRole4" className="form-label">
              Role*
            </label>
            <input
              onChange={(e) => {
                setRole(e.target.value);
              }}
              type="text"
              className="form-control"
              id="inputRole4"
            />
          </div>
          
    
          
          <div className="col d-flex justify-content-md-center">
            <button
              onClick={registerPerson}
              className="btn col-6 btn-outline-dark"
            >
              Sign up
            </button>
         
          </div>
        </div>
      </div>
      <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
    </div>
    
  );
};

export default Register;
