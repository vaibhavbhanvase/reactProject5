import { AppBar, Button, Toolbar} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()

  const handleLogout = ()=>{
    localStorage.removeItem("signin")
    navigate("/login")
  }
  return (
    <>
    <AppBar sx={{ backgroundColor: "lightcyan"}}>
        <Toolbar>
        <Button onClick={()=>navigate("/")}>Home</Button>
        <div style={{marginLeft:"auto"}}>
        <Button variant="contained"  onClick={()=>navigate("login")}>Login</Button>
        <Button variant="contained" style={{marginLeft:"15px"}} onClick={handleLogout}>Logout</Button>
        </div>
        
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar