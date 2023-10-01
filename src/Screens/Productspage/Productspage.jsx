import React from 'react'
import { data } from '../../Data/DevData'
import { SingleProduct } from '../../Components/Products/SingleProduct'
import { useState } from 'react'
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
const DropDown = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='text-blue-950 hover:cursor-pointer'>
        <div 
        className='flex items-center justify-between'
        onClick={()=>{
          setOpen(prev=>!prev)
        }}>
          <h1 className='text-[16px] font-semibold m-2  p-2 '> Designer</h1>
          {open?<IoIosRemove/>:<IoIosAdd/>}
        </div>
        <hr className='border-t-[3px]'></hr>
       {open?<div>
          <ul className='flex flex-col m-2 md:ml-6 font-[400] '>
            <il>
              <input type="checkbox"/><span className='ml-1'> Slik</span>
            </il>
            <il>
              <input type="checkbox"/><span className='ml-1'> Cotton</span>
            </il>
            <il>
              <input type="checkbox"/><span className='ml-1'> wool</span>
            </il>
            <il>
              <input type="checkbox"/><span className='ml-1'> Linen</span>
            </il>
            <il>
              <input type="checkbox"/><span className='ml-1'> polyster</span>
            </il>
          </ul>
        </div>:""}
      </div>
    </>
  )

}


const Productspage = () => {
  const Data = data;
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const itemList = data;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = itemList.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className='overflow-hidden bg-[#0F172A] md:w-screen  w-[450px] '>
        <h1 className='text-3xl font-medium text-blue-900 relative left-[40px] m-6  '>Our products</h1>
        <div className='flex justify-evenly   border-t-2   m-2 '>
          <div className='sm:w-[24%]  sm:h-[1000px] flex-flex-col  md:relative md:left-[8px]'>
            <div className=' m-1'>
              <ul className='font-semibold text-[16px] text-blue-900  flex flex-col  '>
                <li className='m-1'>Man</li>
                <li className='m-1'>Woman</li>
                <li className='m-1'>Sales</li>
                <li className='m-1'>Permanent Collection</li>
                <li className='m-1'>New</li>
              </ul>
            </div>
            <DropDown />
          </div>
          <div className='flex justify-center'>
            <div >
              <div className='md:w-[900px] sm:[600px] flex  p-2'>
                <div className='flex md:gap-35 sm:gap-25 flex-wrap  p-2 justify-center '>
                  {currentItems.map(e => {
                    return <SingleProduct product={e} />
                  })}
                </div>
              </div>
              <div className="pagination flex justify-center mt-3 border-t-2">
                {Array.from({ length: Math.ceil(itemList.length / itemsPerPage) }).map((_, index) => (
                  <button className='p-2 text-center m-2 bg-purple-200  text-purple-600 w-8 h-10 hover:bg-purple-400 hover:bg:text-purple-100' key={index} onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Productspage
