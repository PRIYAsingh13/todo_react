import React from "react";
import './Modal.css';
import { TextField, Button } from "@mui/material";

const Modal = () => {
  return (
    <div className="create-todo">
      <h1>Create Todo</h1>
      <TextField id="outlined-basic" label="Todo Title" variant="outlined" />
      <TextField
        id="outlined-multiline-flexible"
        label="Todo Discription"
        multiline
        maxRows={4}
      />
      <Button variant="contained">Add</Button>
      <Button variant="outlined" color="error">
        close
      </Button>
    </div>
  );
};

export default Modal;
