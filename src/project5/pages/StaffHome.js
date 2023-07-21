import React, { useEffect, useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { v4 as uuidv4 } from 'uuid';

function StaffHome() {

    const getSignin = JSON.parse(localStorage.getItem("signin"))

    const [modal, setModal] = useState(false)
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem("leaveData")) || [])
    const [leaveData, setLeaveData] = useState({
        fromDate: "",
        toDate: "",
        reason: "",
        status: "Pending"
    })

    if (getSignin) {
        leaveData.name = `${getSignin.fname} ${getSignin.lname}`
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setLeaveData((pre) => ({ ...pre, id: uuidv4(), [name]: value }))
    }

    const d = new Date(leaveData.fromDate)
    const d2 = new Date(leaveData.toDate)

    if (d.getTime() && d2.getTime()) {
        const tdiff = d2.getTime() - d.getTime()
        const dDiff = tdiff / (1000 * 3600 * 24)
        leaveData.days = dDiff


    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setData((pre) => [...pre, leaveData])
        setLeaveData({
            fromDate: "",
            toDate: "",
            reason: "",
            status: "Pending"
        })
    }

    localStorage.setItem("leaveData", JSON.stringify(data) || [])

    const leaves = data?.filter((user) => {
        if (`${getSignin.fname} ${getSignin.lname}` === user.name) {
            return user
        }
    })

    console.log(leaves);
    const aprovelnth = leaves?.filter((user) => {
        return user.status === "Approved"
    })
    const rejectedlnth = leaves?.filter((user) => {
        return user.status === "Rejected"
    })

    return (
        <>
            <div className='container' style={{ margin: " 0 auto" }}>
                <div className='row'>
                    <div className='col-sm-4' >
                        <Modal
                            size='md'
                            isOpen={modal}
                            style={{ marginTop: "100px" }}
                        >
                            <ModalHeader
                                toggle={() => setModal(!modal)}
                            >
                                <h2>Leave Details</h2>
                            </ModalHeader>
                            <ModalBody
                                style={{ margin: "0 auto" }}
                            >

                                <form onSubmit={handleSubmit}>
                                    <label>From <br />
                                        <input type="date" name='fromDate' value={leaveData.fromDate} onChange={handleChange} required />
                                    </label>
                                    <label style={{ margin: "10px 0 30px 50px" }}>To <br />
                                        <input type="date" name='toDate' value={leaveData.toDate} onChange={handleChange} required />
                                    </label>
                                    <br />
                                    <label>Reason<br />
                                        <textarea rows='4' cols="42" name='reason' value={leaveData.reason} onChange={handleChange} required />
                                    </label>
                                    <div className='d-flex flex-row-reverse mt-3 ' >
                                        <div className='mx-2'><button className='btn btn-success' type='submit'>Submit</button></div>
                                        <div><button className='btn btn-danger ' onClick={() => setModal(false)}>Cancel</button></div>
                                    </div>
                                </form>

                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </div>
            <div style={{ margin: "80px 0 0 20px" }}>
                <button type="button" class="btn btn-primary" onClick={() => setModal(true)}>Apply For Leave</button>
            </div>

            <div className='d-flex justify-content-center'>
                <div>
                    <h1 className='text-center'>{data ? leaves.length : "0"}</h1>
                    <p>Total Leaves</p>
                </div>
                <div className='px-5'>
                    <h1 className='text-center'>{data ? aprovelnth.length : "0"}</h1>
                    <p>Approved</p>
                </div>
                <div>
                    <h1 className='text-center'>{data ? rejectedlnth.length : "0"}</h1>
                    <p>Rejected</p>
                </div>
            </div>
            <hr />

            {leaves.length === 0 ? <h1 className='text-danger text-center'>Not applied any leave yet</h1> :
                <div className='container' style={{ margin: " 0 auto" }}>
                    <div className='row'>
                        {leaves?.map((info) => {
                            return <div className="card col-sm-3 m-3" >
                                <div className="card-body">
                                    <p>Leave for {info.fromDate} to {info.toDate}</p>
                                    <p>Number Of Days {info.days}</p>
                                    <p><strong>Reason:</strong><br /> {info.reason}</p>
                                    <p><strong>Status:</strong><br /> {info.status}</p>
                                </div>
                            </div>

                        })}
                    </div>
                </div>
            }
        </>
    )
}

export default StaffHome