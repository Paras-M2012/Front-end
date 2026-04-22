import React, { useState } from 'react'

function Formobj() {

    const [form,setform] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: ""
    })

    console.log(form)

    const getchange = (m) => {
        setform({
            ...form,
            [m.target.name]: m.target.value
        })
    }
  return (
    <div>
        <h1>This is Form handling format</h1>
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"> FIRST NAME</label>
                                <input type="text" value={form.name} onChange={(m)=>setform({...form,name:m.target.value})}className="form-control" id="name" placeholder="Type your First Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="surname" className="form-label"> SURNAME</label>
                                <input type="text" value={form.surname} onChange={(m)=>setform({...form,surname:m.target.value})}className="form-control" id="surname" placeholder="Type your SurName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label"> EMAIL </label>
                                <input type="text" value={form.email} onChange={(m)=>setform({...form,email:m.target.value})}className="form-control" id="email" placeholder="Type your EMAIL" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">PHONE</label>
                                <input type="tel" value={form.phone} onChange={(m)=>setform({...form,phone:m.target.value})}className="form-control" id="name" placeholder="Type your PHONE" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" value={form.password} onChange={(m)=>setform({...form,password:m.target.value})}className="form-control" id="password" placeholder="Type your PAssword" />
                            </div>
                            <div className="mb-3">
                                <button>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"> FIRST NAME</label>
                                <input type="text" value={form.name} name='name' onChange={getchange} className="form-control" id="name" placeholder="Type your First Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="surname" className="form-label"> SURNAME</label>
                                <input type="text" value={form.surname} name='surname' onChange={getchange} className="form-control" id="name" placeholder="Type your First Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">PHONE</label>
                                <input type="text" value={form.phone} name='phone' onChange={getchange} className="form-control" id="name" placeholder="Type your First Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">EMAIL</label>
                                <input type="text" value={form.email} name='email' onChange={getchange} className="form-control" id="name" placeholder="Type your First Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">PASSWORD</label>
                                <input type="password" value={form.password} name='password' onChange={getchange} className="form-control" id="name" placeholder="Type your First Name" />
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

export default Formobj