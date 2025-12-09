import React from 'react';
import logo from '../../assets/flamingtext_com-1043329172.png'

const Logo = () => {
    return (
        <div>
            <img className='w-[200px] h-[80px] hidden lg:block rounded-2xl cursor-pointer'  src={logo} alt="" />
            
        </div>
    );
};

export default Logo;