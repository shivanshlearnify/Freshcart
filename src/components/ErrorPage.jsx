import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer1 from './footer/Footer1';

const ErrorPage = () => {
    let error = useRouteError();
    console.error(error.error.message);
    return (
      <div>
          {/* <Navbar/> */}
          <div className='flex justify-center items-center h-[80vh] bg-gray-50 '>
  
          <div className='text-4xl'>{error?.error?.message}
              <h1 className='text-3xl'>Go to <Link to={"/"} className='text-green-500'>HomePage</Link></h1>
          </div>
          </div>
          {/* <Footer1/> */}
      </div>
    )
}

export default ErrorPage