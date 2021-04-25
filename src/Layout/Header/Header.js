import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light fixed-top bg-light border-bottom">
                <div className="container-fluid" >
                    <Link to='/' className="navbar-brand">
                        {/* logo and brand name */}
                        <div className="d-inline" >
                            <img 
                                src="https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg"
                                alt="your logo"
                                style={{borderRadius:'100%',width:'20%',height:'100%'}}
                            />
                        </div>
                        <span className="fw-bold fs-1">REACT</span>
                    </Link>
                    {/* user profile icon and notification icon */}
                    <Link to='/' className='ms-auto'>
                        <i className="fas fa-user m-2 fs-3 link-danger"></i>
                    </Link>
                    <Link to='/' >
                        <i className="fas fa-bell m-2 fs-3 link-danger"></i>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
// style={{width:'100px',height:'100px'}}