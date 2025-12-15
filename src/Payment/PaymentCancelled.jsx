import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
      <div>
        <h1 className="text-white font-bold"> Your payment is cancelled </h1>
        <Link to={"/dashboard/upgrade-package"}>
          <button className='button'>Try again</button>
        </Link>
      </div>
    );
};

export default PaymentCancelled;