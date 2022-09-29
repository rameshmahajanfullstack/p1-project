
import { useState } from 'react'

import Layout from '../../hoc/layout'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../services/auth'
import { setSession } from '../../util/helpers/sessions'
import { setUser } from '../../redux/slices/auth'
import { useDispatch } from 'react-redux'


export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogin = async (e) => {
        e.preventDefault();

        let validate = false
        let errs = { ...errors }


        if (email.trim() === "") {
            errs.email = "Email Address is required."
            validate = true
        }
        if (password.trim() === "") {
            errs.password = "Password is required."
            validate = true
        }


        setErrors(errs)

        if (validate) {
            toast("Please fill all the required fields")
            return
        }

        //call api

        let response = await userLogin({
            email
        })

        if (response.status === 200) {

            let data = response.data


            if (data.length === 0) {
                toast("Sorry, This user is not exist!")
                return
            }

            let user = data[0]

            if (user.email !== email || user.password !== password) {
                toast("Sorry, Invalid Credentials!")
                return
            }

            toast("User Loggedin Successfully!!")

            setEmail("")
            setPassword("")

            // session storage

            setSession("token", { ...user })

            // dispatch action redux

            dispatch(setUser(user))

            navigate("/")

        }
    }

    return (
        <Layout
            headerTitle="Login"
            headerText="User Login"
            activePage="login"
            hideSidebar={true}
        >
            <div className='row'>

                <div className="col-md-4 col-0">
                </div>
                <div className="col-md-4 col-12">
                    <form onSubmit={onLogin}>

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

                        <Button type="submit" variant="outlined">Login</Button>
                    </form>
                </div>
                <div className="col-md-4 col-0">
                </div>
            </div>
        </Layout>
    )
}