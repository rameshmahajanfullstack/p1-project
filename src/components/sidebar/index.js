import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify'

export default function Sidebar() {

    // create the state
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [query, setQuery] = useState("")

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        phone: "",
        query: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        let validate = false
        let errs = { ...errors }

        if (fullName.trim() === "") {
            errs.fullName = "Full Name is required."
            validate = true
        }
        if (email.trim() === "") {
            errs.email = "Email Address is required."
            validate = true
        }
        if (phone.trim() === "") {
            errs.phone = "Phone field is required."
            validate = true
        }
        if (query.trim() === "") {
            errs.query = "Query field is required."
            validate = true
        }

        setErrors(errs)

        if (validate) {
            toast("Please fill all the required fields")
            return
        }

        //call api

        setTimeout(() => {
            toast("Thanks for contacting us!!");
            setFullName("")
            setEmail("")
            setPhone("")
            setQuery("")
            setErrors({
                fullName: "",
                email: "",
                phone: "",
                query: ""
            })
        }, 2000)
    }

    return (
        <aside>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <TextField className='w-100' id="fullName" label="Full Name" variant="outlined" onChange={(e) => {
                        setFullName(e.target.value)
                    }} value={fullName} error={errors.fullName ? true : false} helperText={errors.fullName ? errors.fullName : ""} />
                </div>
                <div class="mb-3">
                    <TextField className='w-100' id="email" label="Email Address" variant="outlined" onChange={(e) => {
                        setEmail(e.target.value);
                    }} value={email} error={errors.email ? true : false} helperText={errors.email ? errors.email : ""} />
                </div>
                <div class="mb-3">
                    <TextField className='w-100' id="phone" label="Phone" variant="outlined" onChange={(e) => {
                        setPhone(e.target.value)
                    }} value={phone} error={errors.phone ? true : false} helperText={errors.phone ? errors.phone : ""} />
                </div>
                <div class="mb-3">
                    <TextField rows={3} multiline className='w-100' id="query" label="Your Query" variant="outlined" onChange={(e) => {
                        setQuery(e.target.value)
                    }} value={query} error={errors.query ? true : false} helperText={errors.query ? errors.query : ""} />
                </div>
                <Button type="submit" variant="outlined">Submit</Button>
            </form>


        </aside>
    )
}