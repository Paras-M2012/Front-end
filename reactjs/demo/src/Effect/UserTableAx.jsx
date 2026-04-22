import axios from "axios";
import React, { useEffect, useState } from 'react'

function UserTableAx() {
    const [user, setuser] = useState([]);

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            // console.log(res.data)
            setuser(res.data)
        } catch (erros) {
            console.log("API data not found", Error)
        }
    }
    return (
        <div>
            <h1>This Is Axios file</h1>
            <div className="container">
            <table>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">CITY</th>
                    </tr>
                </thead>
                <tbody>
                    {user &&
                    user.map((data,index) => {
                        return(
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <th>{data.name}</th>
                                <th>{data.email}</th>
                                <th>{data.address.city}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default UserTableAx