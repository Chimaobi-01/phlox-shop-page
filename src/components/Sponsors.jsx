import sponsor1 from '../assets/sponsor1.png'
import sponsor2 from '../assets/sponsor2.png'
import sponsor3 from '../assets/sponsor3.png'


const Sponsors = () => {
    return (
        <div className="md:h-[calc(100vh-200px)] flex flex-col ">
            <h4 className="font-Montserrat text-center mb-10 font-semibold text-3xl xl:text-4xl hidden md:block">
                Sponsors
            </h4>

            <div className="bg-[#B5B7BB] flex-1 flex items-center px-6 py-24 md:py-0">
                <ul className='flex items-center justify-between w-full gap-10'>
                    <li><img src={sponsor1} alt="sponsor" className='scale-125 md:scale-100' /></li>
                    <li><img src={sponsor2} alt="sponsor" className='scale-125 md:scale-100' /></li>
                    <li><img src={sponsor3} alt="sponsor" className='scale-125 md:scale-100' /></li>
                </ul>
            </div>
        </div>
    )
}

export default Sponsors