import axios from 'axios'
import React from 'react'

function UseDeleApi(url, fetchdata) {
  
    const del = async(id)=>{
        try {
            const res = await axios.delete(`${url}/${id}`)
            fetchdata()
            alert ("Data Successfully Deleted")
        } catch (error) {
            console.log("API data not found", Error)
        }
    }

    return{del}
}

export default UseDeleApi