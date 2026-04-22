import React, { useState } from 'react'

function Formdata() {

    const [name, setname] = useState("")
    const [surname, setsurname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [phone, setphone] = useState("")
    const [desc, setdesc] = useState("")

    return (
        <div>

            <h1>This is Form handling format</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"> FIRST NAME</label>
                                <input type="text" value={name} onChange={(m)=>setname(m.target.value)}className="form-control" id="name" placeholder="Type your First Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="surname" className="form-label">SURNAME</label>
                                <input type="text" value={surname} onChange={(m)=>setsurname(m.target.value)}className="form-control" id="surname" placeholder="Type your SurName" />
                            </div>
                             <div className="mb-3">
                                <label htmlFor="email" className="form-label">EMAIL ID</label>
                                <input type="text" value={email} onChange={(m)=>setemail(m.target.value)}className="form-control" id="email" placeholder="Type your Email" />
                            </div>
                             <div className="mb-3">
                                <label htmlFor="password" className="form-label">PASSWORD</label>
                                <input type="password" value={password} onChange={(m)=>setpassword(m.target.value)}className="form-control" id="password" placeholder="Type your Password" />
                            </div>
                             <div className="mb-3">
                                <label htmlFor="phone" className="form-label">CONTACT NO</label>
                                <input type="text" value={phone} onChange={(m)=>setphone(m.target.value)}className="form-control" id="phone" placeholder="Type your Phone" />
                            </div>
                            <div className="mb-3">
                                <button>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formdata