import React from 'react'
import { Button } from '../ui/button';
import TaksForm from '../Task/TaksForm';
import Logout from './Logout';

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=" w-full">
        <h4 className='font-bold text-3xl '>Tasks</h4>
        <p className='no-of-task font-semibold text-xl'>8 tasks</p>
      </div>
      <div className=" w-full flex justify-end items-center gap-2">
        <Logout/>
        <TaksForm/>
      </div>
    </div>
  );
}

export default Header