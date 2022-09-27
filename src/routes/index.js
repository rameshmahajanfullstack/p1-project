import Pages from "../containers"
import { Routes as Switch, Route } from 'react-router-dom'
import { isLoggedIn } from "../util/helpers/sessions"

const { Home, About, Contact, Products, Login, SignUp, MyAccount } = Pages


export default function Routes() {
    return (
        <Switch>
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={isLoggedIn() ? <MyAccount /> : <Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/my-account" element={isLoggedIn() ? <MyAccount /> : <Login />} />
            <Route path="/" element={<Home />} />
        </Switch>
    )
}