import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function HodRegistration() {

    const [hodData, setHodData] = useState(() => JSON.parse(localStorage.getItem("hodLoginData")) || [])
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        deparment: "",
        username: "",
        password: "",
        role: "Hod"
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setHodData([...hodData, input])
        alert("Registration Completed Succesfully")
        setInput({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            deparment: "",
            username: "",
            password: ""
        })
    }

    localStorage.setItem("hodLoginData", JSON.stringify(hodData))
    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((pre) => ({ ...pre, [name]: value }))

    }
    const staffData = JSON.parse(localStorage.getItem("staffLoginData"))
    const staffUserName = staffData.map((user)=>{
        return user.username
    })
    const staff= staffUserName.find((data)=> data === input.username)

    const userName = hodData.map((user) => {
        return user.username
    })
    const data = userName.find((data) => data === input.username)

    console.log(data);
    return (
        <>
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

                <div className='mb-4 mx-4'>
                    <div className='form-group col-md-5'>
                        <label> Deparment </label><br />
                        <select className='form-control ' name='deparment' required onClick={handleChange} >
                            <option selected >
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

                </div>

                <div className='d-flex justify-content-around mb-4 mt-4'>
                    <div className='form-group'>
                        <label>Username</label><br />
                        <input className='form-control' onChange={handleChange} required name="username" type='text' value={input.username} />
                        {(data === input.username || staff === input.username) && <div className='text-danger'>Username Already Exist</div>}
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
                <div className='mt-3 text-center'>
                    <p>Already Registered? <NavLink to={"/login"}>Login</NavLink></p>
                </div>

            </form>
        </>
    )
}

export default HodRegistration