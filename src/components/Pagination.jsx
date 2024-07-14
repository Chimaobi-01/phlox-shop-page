import React from 'react'

const Pagination = ({ totalPages, currentPage, handleClick }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);


    return (
        <nav className=' section-padding flex justify-center'>
            <ul className="inline-flex -space-x-px text-sm xl:text-xl w-full max-w-[800px]">
                <li>
                    <button
                        onClick={() => handleClick(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
                        Previous

                    </button>
                </li>
                <li className='flex-1 flex'>
                    <ul className='inline-flex mx-auto px-4 gap-2'>
                        {pageNumbers.map((number) => (
                            <li key={number}>
                                <button
                                    onClick={() => handleClick(number)}
                                    className={currentPage === number ? 'active flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}
                                >
                                    {number}
                                </button>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <button
                        onClick={() => handleClick(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next

                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination