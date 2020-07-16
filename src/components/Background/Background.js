import React from "react";
import "./Background.css";

const Background = (props) => {
  return (
    <div>
      <ul class="cb-slideshow">
        <li>
          <span>Image 01</span>
          <div>
            <h3>Commercial</h3>
          </div>
        </li>

        <li>
          <span>Image 02</span>
          <div>
            <h3>Industrial</h3>
          </div>
        </li>

        <li>
          <span>Image 03</span>
          <div>
            <h3>Residential</h3>
          </div>
        </li>

        <li>
          <span>Image 04</span>
          <div>
            <h3>Tenants</h3>
          </div>
        </li>

        <li>
          <span>Image 05</span>    
          <div>
            <h3>Contact Us</h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Background;
