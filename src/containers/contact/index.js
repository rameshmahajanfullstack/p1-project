import Layout from '../../hoc/layout'

export default function Contact() {
    return (
        <Layout
            headerTitle="Contact Us"
            headerText="You can email or call us anytime."
            activePage="contact"

        >

            <h1>Contact Information</h1>

            <p>Email: info@test.com</p>
            <p>Phone: +1 3343 3434 333</p>
            <p>Address: Abc Ltd. Park street, NY, USA</p>

        </Layout>
    )
}