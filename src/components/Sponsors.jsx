import sponsor1 from '../assets/sponsor1.png'
import sponsor2 from '../assets/sponsor2.png'
import sponsor3 from '../assets/sponsor3.png'


const Sponsors = () => {
    return (
        <div className="min-h-[60vh] flex flex-col">
            <h4 className="font-Montserrat text-center mb-10 font-semibold text-[40px]">
                Sponsors
            </h4>

            <div className="bg-[#B5B7BB] flex-1 flex items-center px-10 ">
                <ul className='flex items-center justify-between h-28 w-full gap-24'>
                    <li><img src={sponsor1} alt="sponsor" className='' /></li>
                    <li><img src={sponsor2} alt="sponsor" className='' /></li>
                    <li><img src={sponsor3} alt="sponsor" className='' /></li>
                </ul>
            </div>

        </div>
    )
}

export default Sponsors