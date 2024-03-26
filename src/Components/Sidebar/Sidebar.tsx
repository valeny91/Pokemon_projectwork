import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <>
      <div className='sidebar-des'>
        <h2 className='my-3'>Select by</h2>
        <ul className='d-flex flex-column border rounded  p-2'>
            <a className='ul-des my-3' href="#">National Pokedex Number</a>
            <a className='ul-des my-3' href="#">Fight Attributes</a>
            <a className='ul-des my-3' href="#">Type</a>
        </ul>
        <ul className='d-flex flex-column border rounded  p-4'>
            <a className='ul-des my-3' href="#">Divide for ATK powe</a>
            <a className='ul-des my-3' href="#">Weakness</a>
            <a className='ul-des my-3' href="#">Resistance</a>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
