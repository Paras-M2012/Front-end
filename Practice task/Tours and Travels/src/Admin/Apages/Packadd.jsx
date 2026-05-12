import axios from 'axios'
import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import Aheader from '../Acommon/Aheader'
import UsePostApi from '../../Custom/UsePostApi'
import { toast } from 'react-toastify'

function Packadd() {

    // const { input, getchange, getsubmit } = UsePostApi({
    //     id: "",
    //     name: "",
    //     location: "",
    //     desc: "",
    //     days: "",
    //     price: "",
    //     img: ""
    // }, "http://localhost:3000/package",
    //     "/Packmanage")

    const redirect = useNavigate()

    const [pack, setpack] = useState({
        id: "",
        name: "",
        location: "",
        desc: "",
        days: "",
        price: "",
        img: ""
    })

    const getchange = (e) => {
        setpack({
            ...pack,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }
    const getsubmit = async (e) => {
        e.preventDefault();
        try {

            if (pack.days == "" || pack.desc == "" || pack.img == "" || pack.location == "" || pack.name == "" || pack.price == "" ){
                toast.error("Please fill a Pakckage Data")
                return false
            }
            const res = await axios.post("http://localhost:3000/package", pack)
            setpack({
                name: "",
                location: "",
                desc: "",
                days:"",
                price: "",
                img: ""
            })
            redirect("/packadd")
            toast.success("Package added Successfully")
        } catch (error) {
            console.log("API data not found", error)

        }
    }
    return (
        <div>
            <Aheader />
            <div className="col-md-12">
                <div className="contact_2l">
                    <form action="" onSubmit={getsubmit}>
                        <h5 className="col_green">ADD A NEW TRIP</h5>
                        <h1 className="mt-3">FILL THE DETIALS</h1>
                        <div className="blog_dt1ib3i row">
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Name" value={pack.name} name='name' onChange={getchange} className="form-control border-1 bg-light" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Location" value={pack.location} name='location' onChange={getchange} className="form-control border-1 bg-light" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="blog_dt1ib3i row mt-4">
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Enter Your Days" value={pack.days} name='days' onChange={getchange} className="form-control border-1 bg-light" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Enter Your Price" value={pack.price} name='price' onChange={getchange} className="form-control border-1 bg-light" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="blog_dt1ib3i row mt-4">
                            <div className="col-md-12">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Enter your Images" name='img' onChange={getchange} value={pack.img} className="form-control border-0 bg-light" type="url" />                                </div>
                            </div>
                        </div>
                        <div className="blog_dt1ib3i row mt-4">
                            <div className="col-md-12">
                                <div className="blog_dt1ib3il">
                                    <textarea placeholder="Enter your comment here..." value={pack.desc} name='desc' onChange={getchange} className="form-control form_text border-0 bg-light" defaultValue={""} />

                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <input className="form-control btn btn-success" type="submit" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Packadd