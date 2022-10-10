import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <div className='text-light'>
      <input type="text" className='bg-transparent outline-none w-full pl-10 py-4'placeholder='Search artists'/>
      <div className='absolute px-2 top-5 text-lg opacity-30'><AiOutlineSearch /></div>

    </div>
  )
}

export default Search