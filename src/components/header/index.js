import './index.scss'

import Logo from '../../assets/images/logo.svg'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { isLoggedIn, removeSession } from '../../util/helpers/sessions'

export default function Header({
    headerText = "Welcome to Reebok",
    headerTitle = "Reebok",
    activePage = "home"
}) {

    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()

    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-3">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src={Logo} alt="Reebok" height="40" />
                    </Link>
                    <button onClick={() => {

                        setShowMenu(prevState => !prevState)

                    }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={`collapse navbar-collapse ${showMenu && "show"}`}>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto my-0">
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === "home" && "active"}`} to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === "about" && "active"}`} to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === "products" && "active"}`} to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === "contact" && "active"}`} to="/contact">Contact</Link>
                            </li>
                            {isLoggedIn() ?
                                <>
                                    <li class="nav-item">
                                        <Link class={`nav-link ${activePage === "my-account" && "active"}`} to="/my-account">My Account</Link>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/" class={`nav-link`} onClick={(e) => {
                                            e.preventDefault();
                                            removeSession("token");
                                            navigate("/login")
                                        }}>Logout</a>
                                    </li>
                                </>
                                :

                                <>
                                    <li class="nav-item">
                                        <Link class={`nav-link ${activePage === "login" && "active"}`} to="/login">Login</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class={`nav-link ${activePage === "signup" && "active"}`} to="/sign-up">Sign Up</Link>
                                    </li>
                                </>
                            }
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>

            <div className="bg-secondary text-white">
                <div className='container p-5'>
                    <h1>{headerTitle}</h1>
                    <p>{headerText}</p>
                </div>
            </div>

        </header>
    )
}