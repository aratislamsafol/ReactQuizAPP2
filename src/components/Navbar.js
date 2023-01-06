import logo from './assets/images/logo.png';
import Image from "./Image";
export default function Navbar(){
    return (
        <nav class="navbar fixed-top" id="navBar">
            <div class="container">
                <a class="navbar-brand" href="#">
                <Image src={logo} />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasRight">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <div class="d-flex justify-content-center mb-4">
                            <li class="">
                                <a class="nav-link login" href="login.html">Login</a>
                            </li>
                            <li class="">
                                <a class="nav-link signUp" href="reg.html">SignUp</a>
                            </li>
                        </div>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Course</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pages</a>
                        </li>

                        <form class="d-flex mt-4" role="search">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </ul>
                
                </div>
                </div>
            </div>
        </nav>
    );
}