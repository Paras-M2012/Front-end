import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import axios from 'axios'


function Packmanage() {
    const [pkg, setpkg] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])
    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/package")
        setpkg(res.data)
    }
    
    return (
        <div>
            <Aheader />
            <h1 className='text-center'>Package Manage Detils</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">location</th>
                            <th scope="col">Images</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pkg && pkg.map((data, key) => {
                                // console.log(data)
                                return (
                                    <tr className='text-center' key={key}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.loaction}</td>
                                        <td>
                                            <img src={data.img} style={{ width: "200px" }} alt="" />
                                        </td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Packmanage