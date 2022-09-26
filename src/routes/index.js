import Pages from "../containers"
import { Routes as Switch, Route } from 'react-router-dom'

const { Home, About, Contact, Products, Login, SignUp } = Pages


export default function Routes() {
    return (
        <Switch>
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<Home />} />
        </Switch>
    )
}