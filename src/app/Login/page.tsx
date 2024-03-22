"use client"
import React, { useState, useEffect } from 'react'
import { axiosInstance } from '../../lib/axios'
import {useRouter} from 'next/navigation'
const Login = () => {

    const [data , setData] = useState({email: '', password: ''})
    const router = useRouter()

    const handleChange = (e: any) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const newdata = {
            email: data.email,
            password: data.password
        }
        axiosInstance.post('/api/user/login', newdata).then((res) => {
            localStorage.setItem('auth',"true")
            console.log(res)
            router.push('/getuser')
        }).catch((err) => {
            console.log(err)
        })
        
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input type="email" name="email" onChange={handleChange} />
            </label>
            <label>
                Password
                <input type="password" name="password" onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    </>
    )
}

export default Login
