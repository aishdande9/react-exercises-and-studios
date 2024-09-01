
import ClickedButton from "./ClickedButton";
import SaveButton from "./SaveButton";
import React from "react";
 import "./styling.css";


function Button(props) {
  return props.saveButton ? <SaveButton /> : <ClickedButton />;
}
 
 
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 