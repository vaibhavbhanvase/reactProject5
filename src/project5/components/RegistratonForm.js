import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import HodRegistration from './HodRegistration'
import StaffRegistration from './StaffRegistration'

function RegistratonForm() {

    const [registration, setRegistration] = useState({
        contact: "",
        staff: "",
        hod: "",
        username: "",
        password: ""
    })
    const handleSubmit = () => {

    }

    const handleChange = (e) => {

        const { name, value } = e.target
        setRegistration((pre) => ({ ...pre, [name]: value }))

    }
    return (
        <>
            <div className='container' style={{ margin: " 0 auto" }}>
                <div className='row'>
                    <div className='col-sm-6' style={{ margin: "50px auto 0" }}>
                        <div className='shadow p-3 mb-5 bg-white rounded'>
                            <div  name="contact" className='form-check d-flex'>
                                <div style={{ marginRight: "20px" }} className='form-check'>
                                <label htmlFor="hod">HOD</label>
                                <input className='form-check-input' type="radio" name="contact" id="hod" value="hod" onClick={handleChange} />
                                </div>
                                <div className='form-check'>
                                    <label  htmlFor="staff">Staff</label>
                                    <input className='form-check-input' type="radio" name="contact" id="staff" value="staff" onClick={handleChange} />
                                </div>
                                <br />
                            </div>

                            {registration.contact === "hod" && <HodRegistration />
                                || registration.contact === "staff" &&
                                <StaffRegistration />
                            }
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default RegistratonForm