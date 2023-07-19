import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar'

function RootLayouts() {
    return (
        <>
           <div style={{marginBottom:"60px"}}>
           <NavBar />
           </div>
            <Outlet/>
        </>
    )
}

export default RootLayouts