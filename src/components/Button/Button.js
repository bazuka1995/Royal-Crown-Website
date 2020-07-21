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
    <div>
      <ul className={classes.cbSlideshow}>

        <li>
            <motion.div
              className={classes.Div}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
            >
              <Button className={classes.Button} link={props.link}>
                <span>Commercial</span>
              </Button>
            </motion.div>
        </li>

        <li>
            <motion.div
              className={classes.Div}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
            >
              <Button className={classes.Button} link={props.link}>
                <span>Industrial</span>
              </Button>
            </motion.div>
        </li>

        <li>
            <motion.div
              className={classes.Div}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
            >
              <Button className={classes.Button} link={props.link}>
                <span>Residential</span>
              </Button>
            </motion.div>
        </li>

        <li>
            <motion.div
              className={classes.Div}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
            >
              <Button className={classes.Button} link={props.link}>
                <span>Tenants</span>
              </Button>
            </motion.div>
        </li>

        <li>
            <motion.div
              className={classes.Div}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
            >
              <Button className={classes.Button} link={props.link}>
                <span>Contact Us</span>
              </Button>
            </motion.div>
        </li>

      </ul>
    </div>
  );
};

export default button;
