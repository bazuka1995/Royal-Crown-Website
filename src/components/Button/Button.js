import React from "react";
import classes from "./Button.module.css";
import { motion } from "framer-motion";
import styled from "styled-components";

const button = (props) => {
  const Button = styled.button`
    background: transparent;
    border-radius: 25px;
    border: 4px solid #ccc;
    color: white;
    font-size: 25px;
  `;

  return (
    <motion.div
      className={classes.Div}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.8 }}
    > 
      <Button className={classes.Button} link={props.link}> 
        <span>
          { props.label }
        </span>
      </Button>
    </motion.div>
  );
};

export default button;
