import React from 'react'

const Activities = () => {
    return (
        <div className="mt-2">
            <div  className='  d-flex justify-content-start  ' style={{backgroundColor: 'lightgrey'}}>
                <p className='text-info fs-5 fw-bold mt-3 ms-2'>Recent Activities</p>
            </div>

            {/* borderless table for recent activities  */}
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">23/04/21</th>
                        <th scope="row">Sent</th>
                        <th scope="row">N500.00</th>
                        
                    </tr>
                    <tr>
                        <th scope="row">24/04/21</th>
                        <th scope="row">Received</th>
                        <th scope="row">N1000.00</th>
                        
                    </tr>
                    <tr>
                        <th scope="row">25/04/21</th>
                        <th scope="row">Sent</th>
                        <th scope="row">N300.00</th>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Activities
