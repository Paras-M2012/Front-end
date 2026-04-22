import userEvent from '@testing-library/user-event';
import React, { useEffect, useInsertionEffect, useState } from 'react'

function UserTable() {
    const [user,setuser] = useState([]);

    useEffect(()=>{
        fetchdata();
    }, []);

    const fetchdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users",{
            method: ("GET")
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            // console.log(data)
            setuser(data);
        })
        .catch((err)=>{
            console.log("API data not found", Error)
        });
    };
    
  return (
    <div>
        <h1>User data Showing</h1>
        <div className="container">
            <table className='table'>
                <thead>
                    <th scope='col'>ID</th>
                    <th scope='col'>NAME</th>
                    <th scope='col'>EMAIL</th>
                    <th scope='col'>CITY</th>
                </thead>
                <tbody>
                    {user &&
                    user.map((data,index)=>{
                        console.log(data);
                        return(
                            <tr>
                                <th scope="row">{data.id}</th>
                                <th>{data.name}</th>
                                <th>{data.email}</th>
                                <th>{data.address.city}</th>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserTable