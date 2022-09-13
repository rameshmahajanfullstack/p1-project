import './style.scss'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Sidebar from '../../components/sidebar'

export default function Layout({ headerTitle, headerText, activePage, children }) {

    return (
        <div className='layout-wrapper'>

            <Header
                headerText={headerText}
                headerTitle={headerTitle}
                activePage={activePage}
            />

            <section className='container'>

                <div className='row'>

                    <div className='col-9 pe-5'>
                        {/* here will be our content */}
                        {children}
                    </div>

                    <div className='col-3 px-3'>
                        <Sidebar />
                    </div>

                </div>

            </section>

            <Footer />

        </div>
    )
}