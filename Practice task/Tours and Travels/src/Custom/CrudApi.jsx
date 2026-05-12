import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function useCrudApi(apiurl, inp, redir) {
    // it can only READ API
    const [getapi, setgetapi] = useState([])

    useEffect(() => {
        fetchdata()
    }, [apiurl])

    const fetchdata = async () => {
        const res = await axios.get(apiurl)
        setgetapi(res.data)
    }

    // YOU CAN ADD DATA WITH THIS CUSTOM
    const [input, setinput] = useState(inp)

    const redirect = useNavigate()
    const getchange = (e) => {
        setinput({
            ...input,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {
        e.preventDefault();

        const checkEmpty = Object.values(input).some(
            value => value == ""
        )
        if (checkEmpty) {
            toast.error("Please fill all field")
            return
        }
        try {
            const res = await axios.post(apiurl, input)
            setinput(inp)
            fetchdata()
            redirect(redir)
            toast.success("Package Added successfully")
        } catch (error) {
            console.log("API Not Found", error)
            toast.error("API not Found")
        }
    }

    // WITH THIS CODE YOU CAN UPDATE DATA IN ALL PAGES

    const [edit, setedit] = useState(inp)

    // const getid = async (id) => {
    //     const res = await axios.get(`${apiurl}/${id}`)
    //     setedit(res.data)
    // }

    const getid = (id) => {
        setedit(id)
    }

    const getedit = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const UpdateApi = async (e) => {
        e.preventDefault()

        const checkEmpty = Object.values(edit).some(
            value => value == ""
        )

        if (checkEmpty) {
            toast.error("Please fill all field")
            return
        }

        try {
            const res = await axios.put(`${apiurl}/${edit.id}`, edit)
            fetchdata()
            toast.success("Data Updated successfully")

        } catch (error) {
            console.log("API not found", error)
            toast.error("Data not updated")
        }

    }

    // DELET API WITH IN ALL DATA
    const del = async (id) => {
        try {
            const res = await axios.delete(`${apiurl}/${id}`)
            fetchdata()
            toast.success("Record deleted successfully")
        } catch (error) {
            console.log("API not found", error)
            toast.error("API not found")
        }
    }
    return { getapi, input, getchange, getsubmit, edit, getid, getedit, UpdateApi, del }
}