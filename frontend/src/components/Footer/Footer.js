import React from "react";
import "./footers.css";


const Footer = () =>{
    return(
        <div>
      <footer className="container-fluid fixed-bottom d-flex justify-content-between align-items-center py-1 mt-auto border-top">
        <p className="col-md-4 mb-0">&copy; @2023 Pgmanagemet Associate pvt</p>

        <span>
          <li>&#9993; Email : pgmanagement@gmail.com</li>
          <li>&#9990; Phone : 123-0456789</li>
        </span>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
          
              Pricing
            
          </li>
          <li className="nav-item">
           
              FAQs
            
          </li>
          <li className="nav-item">
            
              About
           
          </li>
        </ul>
      </footer>
    </div>
    );
};

export default Footer;