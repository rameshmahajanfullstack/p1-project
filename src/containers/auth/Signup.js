
import Layout from '../../hoc/layout'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { userRegister } from '../../services/auth'

export default function SignUp() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [phone, setPhone] = useState("")

    const navigate = useNavigate()

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })

    const onSignUp = async (e) => {
        e.preventDefault();

        let validate = false
        let errs = { ...errors }

        if (firstName.trim() === "") {
            errs.firstName = "First Name is required."
            validate = true
        }
        if (lastName.trim() === "") {
            errs.lastName = "Last Name is required."
            validate = true
        }
        if (email.trim() === "") {
            errs.email = "Email Address is required."
            validate = true
        }
        if (password.trim() === "") {
            errs.password = "Password is required."
            validate = true
        }
        if (cpassword.trim() === "") {
            errs.cpassword = "Confirm Password is required."
            validate = true
        }
        if (phone.trim() === "") {
            errs.phone = "Phone field is required."
            validate = true
        }

        setErrors(errs)

        if (validate) {
            toast("Please fill all the required fields")
            return
        }

        //call api

        let response = await userRegister({
            firstName,
            lastName,
            email,
            password,
            phone
        })

        if (response.status === 201) {
            toast("User Regisered Successfully!!")
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setCpassword("")
            setPhone("")

            navigate("/login")

        }

    }

    return (
        <Layout
            headerTitle="User Registration"
            headerText="You can register here"
            activePage="signup"
            hideSidebar={true}
        >
            <div className='row'>
                <div className="col-md-4 col-0">
                </div>
                <div className="col-md-4 col-12">
                    <form onSubmit={onSignUp}>
                        <div class="mb-3">
                            <TextField className='w-100' id="firstName" label="First Name" variant="outlined" onChange={(e) => {
                                setFirstName(e.target.value)
                            }} value={firstName} error={errors.firstName ? true : false} helperText={errors.firstName ? errors.firstName : ""} />
                        </div>
                        <div class="mb-3">
                            <TextField className='w-100' id="lastName" label="Last Name" variant="outlined" onChange={(e) => {
                                setLastName(e.target.value)
                            }} value={lastName} error={errors.lastName ? true : false} helperText={errors.lastName ? errors.lastName : ""} />
                        </div>
                        <div class="mb-3">
                            <TextField className='w-100' id="email" label="Email Address" variant="outlined" onChange={(e) => {
                                setEmail(e.target.value);
                            }} value={email} error={errors.email ? true : false} helperText={errors.email ? errors.email : ""} />
                        </div>
                        <div class="mb-3">
                            <TextField className='w-100' id="password" label="Password" variant="outlined" onChange={(e) => {
                                setPassword(e.target.value);
                            }} value={password} error={errors.password ? true : false} helperText={errors.password ? errors.password : ""} />
                        </div>
                        <div class="mb-3">
                            <TextField className='w-100' id="cpassword" label="Confirm Password" variant="outlined" onChange={(e) => {
                                setCpassword(e.target.value);
                            }} value={cpassword} error={errors.cpassword ? true : false} helperText={errors.cpassword ? errors.cpassword : ""} />
                        </div>
                        <div class="mb-3">
                            <TextField className='w-100' id="phone" label="Phone" variant="outlined" onChange={(e) => {
                                setPhone(e.target.value)
                            }} value={phone} error={errors.phone ? true : false} helperText={errors.phone ? errors.phone : ""} />
                        </div>
                        <Button type="submit" variant="outlined">Sign Up</Button>
                    </form>
                </div>
                <div className="col-md-4 col-0">
                </div>
            </div>
        </Layout>
    )
}