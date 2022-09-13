
import './index.scss'
export default function Footer() {
    return (
        <footer className='bg-dark text-light'>
            <div className='container-fluid pt-3'>
                <div className='row'>
                    <div className='col-6'>
                        <p>&copy; Copyright {new Date().getFullYear()}, All Right Reserved.</p>
                    </div>
                    <div className='col-6 text-end'>

                        <a class="nav-link d-inline-block" aria-current="page" href="#">Home</a>
                        <a class="nav-link d-inline-block ms-2" href="#">About</a>

                        <a class="nav-link d-inline-block ms-2" href="#">Products</a>

                        <a class="nav-link d-inline-block ms-2" href="#">Contact</a>

                    </div>
                </div>
            </div>
        </footer>
    )
}