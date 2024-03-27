import React from 'react'
import { TextField } from '@mui/material';

type Props = {
  name: string;
  type: string;
  label: string;
}

export default function CustomizedInput(props: Props) {
  return <TextField
    margin="normal"
    InputLabelProps={{ style: { color: "white" } }}
    InputProps={{
      style: {
        width: "400px",
        borderRadius: 10,
        fontSize: 20,
        color: "white",
      },
    }}
    name={props.name}
    type={props.type}
    label={props.label}
  />
}
