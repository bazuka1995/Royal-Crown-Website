import React from "react";
import "./Background.css";
import Button from "../Button/Button";

const Background = (props) => {
  return (
    <div>
      <ul class="cb-slideshow">
        <li>
          <span>Image 01</span>
          <div>
            <h3>1</h3>
          </div>
        </li>

        <li>
          <span>Image 02</span>
          <div>
            <h3>2</h3>
          </div>
        </li>

        <li>
          <span>Image 03</span>
          <div>
            <h3>3</h3>
          </div>
        </li>

        <li>
          <span>Image 04</span>
          <div>
            <h3>4</h3>
          </div>
        </li>

        <li>
          <span>Image 05</span>    
          <div>
            <h3>5</h3>       
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Background;
