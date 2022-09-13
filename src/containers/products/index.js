import sh1 from '../../assets/images/sh1.jpeg'
import sh2 from '../../assets/images/sh2.jpeg'
import sh3 from '../../assets/images/sh3.jpeg'
import Layout from '../../hoc/layout'

export default function Products() {
    return (
        <Layout
            headerTitle="Latest Products"
            headerText="We have a number of items available in our stock."
            activePage="products"

        >
            <h1>Latest Products</h1>

            <div className='row'>
                <div className='col-4 mb-3'>
                    <img src={sh1} height="200" className="w-100" alt="..." />
                </div>
                <div className='col-4 mb-3'>
                    <img src={sh2} height="200" className="w-100" alt="..." />
                </div>
                <div className='col-4 mb-3'>
                    <img src={sh3} height="200" className="w-100" alt="..." />
                </div>

                <div className='col-4 mb-3'>
                    <img src={sh1} height="200" className="w-100" alt="..." />
                </div>
                <div className='col-4 mb-3'>
                    <img src={sh2} height="200" className="w-100" alt="..." />
                </div>
                <div className='col-4 mb-3'>
                    <img src={sh3} height="200" className="w-100" alt="..." />
                </div>

                <div className='col-4 mb-3'>
                    <img src={sh1} height="200" className="w-100" alt="..." />
                </div>
                <div className='col-4 mb-3'>
                    <img src={sh2} height="200" className="w-100" alt="..." />
                </div>
                <div className='col-4 mb-3'>
                    <img src={sh3} height="200" className="w-100" alt="..." />
                </div>

            </div>
        </Layout>
    )
}