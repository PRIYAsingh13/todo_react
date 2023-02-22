import React from "react";
import "./Modal.css";
import { TextField, Button, InputLabel, Select, MenuItem,FormControl } from "@mui/material";

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
     
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div className="all-btn">
      <Button variant="contained">Add</Button>
      <Button variant="outlined" color="error">
        close
      </Button>
    </div>
    </div>
  );
};

export default Modal;
