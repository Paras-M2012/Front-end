import React from 'react'
import UseApi from '../../Custom/UseApi'
import Aheader from '../Acommon/Aheader'

function Servicemanage() {
    const {api} = UseApi("http://localhost:3000/Service")
  return (
    <div>
      <Aheader />
            <h1 className='text-center'>Service Manage Detils</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Desc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            api && api.map((data, key) => {
                                // console.log(data)
                                return (
                                    <tr className='text-center' key={key}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.desc.slice(0,40)}...</td>
                                        
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

export default Servicemanage