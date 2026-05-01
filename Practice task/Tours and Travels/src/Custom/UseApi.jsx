import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseApi(apilink) {
    const [api,setapi] = useState([])
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async()=>{
        const res = await axios.get(`${apilink}`)
        setapi(res.data)
    }
        return{api}
}

export default UseApi