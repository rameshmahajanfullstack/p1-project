import './style.scss'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Sidebar from '../../components/sidebar'

export default function Layout({ headerTitle, headerText, activePage, children, hideSidebar = false }) {

    return (
        <div className='layout-wrapper'>

            <Header
                headerText={headerText}
                headerTitle={headerTitle}
                activePage={activePage}
            />

            <section className='container'>

                <div className='row'>

                    <div className={`col-12 ${hideSidebar ? "col-md-12" : "col-md-9"}`}>
                        {/* here will be our content */}
                        {children}
                    </div>

                    {!hideSidebar &&

                        <div className='col-12 col-md-3 px-3'>
                            <Sidebar />
                        </div>
                    }

                </div>

            </section>

            <Footer />

        </div>
    )
}