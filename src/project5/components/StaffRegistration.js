import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function StaffRegistration() {

    const navigate = useNavigate()
    const [staffData, setStaffData] = useState(() => JSON.parse(localStorage.getItem("staffLoginData")) || [])
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        deparment: "",
        username: "",
        password: "",
        role:"Staff"
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setStaffData([...staffData, input])
        alert("Registration Completed Succesfully")
        setInput({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            deparment: "",
            username: "",
            password: "",
        })

    }

    useEffect(() => {
        if (staffData) {
            localStorage.setItem("staffLoginData", JSON.stringify(staffData))
        }
    }, [staffData])

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((pre) => ({ ...pre, [name]: value }))

    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-around mb-4'>
                        <div className='form-group'>
                            <label>First Name</label><br />
                            <input className='form-control' onChange={handleChange} required name='fname' type='text' value={input.fname} />
                        </div>
                        <div className='form-group'>
                            <label>Last Name</label><br />
                            <input className='form-control' onChange={handleChange} required name='lname' type='text' value={input.lname} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-around mb-4'>
                        <div className='form-group'>
                            <label>Email</label><br />
                            <input className='form-control' onChange={handleChange} required name='email' type='email' value={input.email} />
                        </div>
                        <div className='form-group'>
                            <label>Contact</label><br />
                            <input className='form-control' onChange={handleChange} required name='phone' type='number' value={input.phone} />
                        </div>
                    </div>
                    <div className='form-group' style={{ marginLeft: "50px" }}>
                        <div > <label> Deparment </label></div>
                        <select className='form-control' requireds name='deparment' onClick={handleChange} >
                            <option selected>
                                Select the Deparment
                            </option>
                            <option value='Accounting'>
                                Accounting
                            </option>
                            <option value='Marketing'>
                                Marketing
                            </option>
                            <option value=' R&D'>
                                R&D
                            </option>
                            <option value='Production'>
                                Production
                            </option>
                        </select>
                    </div>

                    <div className='d-flex justify-content-around mb-4 mt-4'>
                        <div className='form-group'>
                            <label>Username</label><br />
                            <input className='form-control' onChange={handleChange} required name="username" type='text' value={input.username} />
                        </div>
                        <div className='form-group'>
                            <label>Password</label><br />
                            <input className='form-control' onChange={handleChange} required name='password' type='password' value={input.password} />
                        </div>
                    </div>
                    <div className='d-flex  d-block flex-row-reverse mt-3 '>
                        <div style={{ width: "100%" }}>
                            <button className='btn btn-primary' type='submit' style={{ width: "100%" }}>Register</button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default StaffRegistration