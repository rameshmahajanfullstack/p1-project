import Pages from "../containers"
import { Routes as Switch, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

const { Home, About, Contact, Products, Login, SignUp, MyAccount } = Pages


export default function Routes() {

    let isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    console.log(isLoggedIn)

    return (
        <Switch>
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={isLoggedIn ? <MyAccount /> : <Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/my-account" element={isLoggedIn ? <MyAccount /> : <Login />} />
            <Route path="/" element={<Home />} />
        </Switch>
    )
}