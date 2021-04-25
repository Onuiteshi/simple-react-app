import React from 'react'
import { Link } from 'react-router-dom'


const NavTab = () => {
    return (
        <div>
            <div >
                {/* navigation links to different pages */}
                <nav class=" container border-top navbar nav-tabs fixed-bottom navbar-light bg-light">
                    {/* link to Home */}
                    <div >
                        <Link to="/" className="navbar-brand  ">
                            <i className="fas fa-home m-2 d-block fs-2 link-danger "></i>
                            <span style={{fontSize:'15px'}} className='link-danger' >Home</span>
                        </Link>
                        
                    </div>

                    {/* link to Activity */}
                    <div>
                        <Link to="/activity" className="navbar-brand ">
                            <i className="fas fa-list m-2 d-block fs-2 link-danger"></i>
                            <span style={{fontSize:'15px'}} className='link-danger' >Activity</span>
                        </Link>
                    </div>

                    {/* link to wallet */}
                    <div>
                        <Link to="/wallet" className="navbar-brand">
                            <i class="fas fa-wallet m-2 d-block fs-2 link-danger"></i>
                            <span style={{fontSize:'15px'}} className='link-danger' >Wallet</span>
                        </Link>
                    </div>

                    {/* link to market */}
                    <div>
                        <Link to="/market" className="navbar-brand " >
                            <i class="fas fa-cash-register m-2 d-block fs-2 link-danger"></i>
                            <span style={{fontSize:'15px'}} className='link-danger' >Market</span>
                        </Link>
                    </div>

                    {/* link to earn */}
                    <div>
                        <Link to="/earn" className="navbar-brand ">
                            <i class="fas fa-coins m-2 d-block fs-2 link-danger"></i>
                            <span style={{fontSize:'15px'}} className='link-danger' >Earn</span>
                        </Link>
                    </div>
                </nav>
            </div>
            
        </div>
    )
}

export default NavTab
