import { AppBar, Button, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MuiDrawer from './MuiDrawer'

function NavBar() {
  const navigate = useNavigate()
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleLogout = () => {
    localStorage.removeItem("signin")
    navigate("/login")
  }
  const signin = JSON.parse(localStorage.getItem("signin"))
  console.log(signin);
  return (
    <>
      <AppBar sx={{ backgroundColor: "lightcyan" }}>
        <Toolbar>
          {isMobile ? <MuiDrawer /> :
            <>
              <Button onClick={() => navigate("/")}>Home</Button>
              <div style={{ marginLeft: "auto" }}>
                
               {signin?.role === "Hod" || signin?.role === "Staff" ?  <Button variant="contained" style={{ marginLeft: "15px" }} onClick={handleLogout}>Logout</Button> : <Button variant="contained" onClick={() => navigate("login")}>Login</Button>}
              </div>
            </>
          }


        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar