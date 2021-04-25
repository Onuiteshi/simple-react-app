import React from 'react'

const Currency = () => {
    return (
        <div className='mt-5  ' >
            {/* select Currency text */}
            <div  className='  d-flex justify-content-start align-items-center' style={{backgroundColor: 'lightgrey'}}>
                <p className='text-info fs-5 fw-bold ms-2 mt-3'>Select Currency:</p>
            </div>
            {/* input form and select  */}
            <div className="mt-2 d-flex justify-content-start align-items-center">
                <select className="p-2 fs-5  fw-bold border border-secondary border-2">
                    <option value="TOKEN" selected>TOKEN</option>
                    <option value="NAIRA">NAIRA</option>
                </select>
                <input type="number" className="p-2 text-end fs-6 w-100 " placeholder="0.000001" />
            </div>

            {/* send and receive buttons */}
            <div className="m-2 ">
                <button type='button' className="btn btn-primary m-2 btn-lg" >
                    Send
                </button>
                <button type='button' className="btn btn-primary m-2 btn-lg" >
                    Receive
                </button>
            </div>
        </div>
    )
}

export default Currency
