"use client"
import { setLoading } from '@/redux/features/loadingslice';
import { setProduct } from '@/redux/features/productSlice';
import { useAppDispatch } from '@/redux/hook';
import React, { useEffect, useState } from 'react'

export interface Iproduct  {
  _id: "string";
  imageSrc: "string";
  fileKey: "string";
  name: "string";
  price: "string";
  category: "string";
}

const  Dashboard= () => {

const [products,setProducts] = useState([]);
const [openPopup,setOpenPopup] = useState(false);
const [updateTable,setUpdateTable] = useState(false);

const dispatch = useAppDispatch()

useEffect(()  => {
  dispatch(setLoading(true))

   axious
      .get("/api/get_products")
      .then((res) => setProducts(res.data))
      .catch(err => console.log(err))
      .finally(() => dispatch(setLoading(false)));
}, [updateTable])

  return 
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl'>All Products</h2>

        <div className='mt-4 h-[calc(100vh-180px)] overflow-y-auto'>
          <table className='w-full'>
            <thread>
              <tr className='text-gray-500 border-[#ececec]'>
                <th>SR No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Picture</th>
                <th>Action<th/>
              </tr>
            </thread>
            <tbody>
              {products.map((product: Iproduct, index) => (
                <ProductRow
                key={product.-id}
                srNo={index +1}
                setOpenPopup={ setOpenPopup}
                setUpdateTable={ setUpdateTable}
                product={product}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {

      }
    </div>
  
};

export default Dashboard