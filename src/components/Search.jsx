import search from '../assets/search.svg'
import CartIcon from './CartIcon'

const Search = () => {
  return (
    <label className='relative flex'>
        <img src={search} alt="search" className='absolute top-2.5 left-3 shrink-0 xl:top-0' />
        <input type="text" className='search-bar md:opacity-100 opacity-0  flex-1 bg-[#B5B7BB] rounded-3xl p-2 ps-10 focus:outline-none xl:h-5 xl:w-5 xl:opacity-0' placeholder='Search' />
        <span className='xl:hidden absolute top-2.5 md:right-3 right-2.5 md:border-l-2 ps-2 border-[#00000033]'>
          <CartIcon />
        </span>
    </label>
  )
}

export default Search