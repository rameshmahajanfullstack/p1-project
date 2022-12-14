import Layout from '../../hoc/layout'
import { useSelector } from 'react-redux'

export default function MyAccount() {

    let user = useSelector(state => state.auth.user)

    return (
        <Layout
            headerTitle="My Account"
            headerText="All your information available here."
            activePage="my-account"
            hideSidebar={true}

        >

            <h1>Profile Information</h1>

            <p>First Name: {user && user.firstName}</p>
            <p>Last Name: {user && user.lastName}</p>
            <p>Email: {user && user.email}</p>
            <p>Phone: {user && user.phone}</p>

        </Layout>
    )
}