
import sh1 from '../../assets/images/sh1.jpeg'
import sh2 from '../../assets/images/sh2.jpeg'
import sh3 from '../../assets/images/sh3.jpeg'
import Layout from '../../hoc/layout'

export default function About() {
    return (
        <Layout
            headerTitle="About Reebok Store"
            headerText="Reebok International Limited is an American fitness footwear and clothing manufacturer that is a part of Authentic Brands Group."
            activePage="about"
        >
            <h1>About Us</h1>

            <p>Reebok International Limited is an American fitness footwear and clothing manufacturer that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire.
            </p>

            <p>From 1958 until 1986, the brand featured the flag of Great Britain in its logo to signify the origins of the company. The company was bought by German sporting goods company Adidas in 2005. Adidas then sold Reebok to Authentic Brands Group in 2021. The company's global headquarters are located in Boston, Massachusetts, in the Seaport District</p>

            <h3>Team Members</h3>
            <div className='row'>
                <div className='col-4 mb-4'>
                    <img src={sh1} height="200" className="w-100" />
                </div>
                <div className='col-4 mb-4'>
                    <img src={sh2} height="200" className="w-100" />
                </div>
                <div className='col-4 mb-3'>
                    <img src={sh3} height="200" className="w-100" />
                </div>

            </div>
        </Layout>
    )
}