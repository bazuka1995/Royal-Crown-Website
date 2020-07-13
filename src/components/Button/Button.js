import React from 'react'
import { Button } from 'grommet';
import classes from "./Button.module.css"

export default (props) => (
    <div>
      <Button className={classes.Button} primary={props.outline} label={props.label} active="true"/>
    </div>
)