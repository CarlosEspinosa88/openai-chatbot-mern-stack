import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

export default function Logo() {
  return (
    <div style={{ 
      display: "flex",
      marginRight: "auto",
      alignItems: "center",
      gap: "8px"
      
    }}>
      <Link to={"/"}>
        <img 
          src='logo-chatgp3.png'
          alt='openai'
          width={"30px"}
          height={"30px"}
          className='image-inverted'
        />
      </Link>
      <Link to={"/"}>
        <Typography 
          sx={{ 
            mr: "auto",
            fontWeight: "800",
            textShadow: "2px 2px 20px #000",
            display: { md: "block", sm: "none", xs: "none"}
          }}
        >
          <span style={{ fontSize: "20px"}}>MERN</span>-GPT
        </Typography>
      </Link>
    </div>
  )
}
