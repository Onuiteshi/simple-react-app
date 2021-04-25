import React from 'react'
import Activities from './reuseable components/Activities'
import Balance from './reuseable components/Balance'
import Currency from './reuseable components/Currency'

const Home = () => {
    return (
        <div className="text-center" >
            {/* reuseable components on home page */}
            <Balance />
            <Currency />
            <Activities />
        </div>
    )
}

export default Home
