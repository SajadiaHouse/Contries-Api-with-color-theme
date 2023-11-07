import React from 'react'
import {Link} from 'react-router-dom'
const Country = ({data}) => {
  return (
   <>
     <Link to="/detail" state={{name: data.name}} className='cursor-pointer'>
      <div className='dark:bg-gray-700 shadow-lg rounded'>
        <div className=''>
        <img src={data.flags.png} alt="" className=" object-fill w-full h-40" />
        </div>  
        <div className='p-6'>
          <p className='font-bold mb-2 text-lg dark:text-gray-300'>{data.name}</p>
          <p className='text-sm dark:text-gray-300 font-thin py-.5'><strong>Population :{data.population} </strong>  </p>
          <p className='text-sm dark:text-gray-300 font-thin py-.5'><strong>Region : {data.religion}</strong>  </p>
          <p className='text-sm dark:text-gray-300 font-thin py-.5'><strong>Capital : {data.capital}</strong>  </p></div>

      </div></Link>
   </>
  )
}

export default Country