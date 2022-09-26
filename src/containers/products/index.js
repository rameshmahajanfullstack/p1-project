import { useEffect, useState } from 'react'
import Layout from '../../hoc/layout'
// import products from '../../services/json/products.json'
import { getProductsList } from '../../services/products'

import Loader from '../../assets/images/loader.svg'

export default function Products() {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {

        try {

            let response = await getProductsList()

            if (response.status === 200) {
                setProducts(response.data);
                setLoader(false)
            }

        } catch (e) {
            setLoader(false)
        }
    }

    return (
        <Layout
            headerTitle="Latest Products"
            headerText="We have a number of items available in our stock."
            activePage="products"

        >
            <h1>Latest Products</h1>

            <div className='row'>

                {

                    loader ?

                        //loader

                        <div className='text-center p-5 mt-3'>
                            Loading...<br />
                            <img src={Loader} alt="Loader" height={50} />
                        </div>

                        :

                        products.map((product, key) => {
                            return (
                                <div className='col-12 col-md-4 mb-3'>
                                    <div class="card">
                                        <img src={product.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.productName}</h5>
                                            <p class="card-text"><strong>${product.price}</strong></p>
                                            <p class="card-text">{product.productDesc}</p>
                                            <a href="/" class="btn btn-primary">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })


                }



            </div>
        </Layout>
    )
}