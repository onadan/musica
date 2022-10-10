import React from 'react'
import logo from '../assets/logo.svg'
import {HiHome,HiOutlineLogout, HiUser} from 'react-icons/hi'
import {MdLibraryMusic, MdOutlineMusicVideo} from 'react-icons/md'
import {RiRadio2Fill} from 'react-icons/ri'
import {BsFillCollectionPlayFill} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='p-4 flex flex-col items-center'>
      <div className=''><img src={logo} alt="" /></div>
      <div className='mt-8 px-4 rounded-full bg-darkAlt flex justify-center'>
        <ul className='text-center'>
          <li className='text-secondary text-lg py-4'>
          <HiHome />
          </li>
          <li className='text-light text-lg py-4'>
            <BsFillCollectionPlayFill />
          </li>
          <li className='text-light text-lg py-4'>
            <RiRadio2Fill />
          </li>
          <li className='text-light text-lg py-4'><MdOutlineMusicVideo /></li>
        </ul>
      </div>

      <div className='mt-2 px-4 rounded-full bg-darkAlt flex justify-center'>
        <ul className='text-center'>
          <li className='text-light text-lg py-4'><HiUser /></li>
          <li className='text-light text-lg py-4'><HiOutlineLogout /></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar