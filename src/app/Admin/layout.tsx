"use client"
import { useAppSelector } from '@/redux/hook';
import { useSession } from 'next-auth/react';
import React from 'react';
import Loader from './Loader';
import Sidebar from '@/components/Admin Pannel/sidebar';

const layout = ({children}:{children: React.ReactNode} ) => {
  
  const isloading =useAppSelector(store => store.LoadingReducer);
  const {data:session} = useSession();

  if (!session? .user)

      return<div className='flex'>
        {<Sidebar />}
        <div className='w-full h-full'>
          {/* {<Navbar />} */}
        <div className=' bg-gray-200 p-4 h-[calc(100vh-64px)]'>{children}</div>

        </div>
        { isloading && <Loader/>}
      </div>
};

export default layout;