import { services } from "../utils/data";

const Services = () => {
  return (
    <div className="h-[calc(100vh-300px)] md:flex items-center justify-center hidden section-padding">
      <ul className="w-full flex justify-between">
        {services.map((service, index) => (
          <li key={index} className=" flex items-center gap-1 xl:gap-2.5">
            <img
              src={service.icon}
              alt="icon"
              className="w-10 h-10 xl:w-auto lg:w-14 xl:h-auto lg:h-14"
            />

            <p className="flex flex-col ">
              <span className="font-Poppins font-bold xl:text-lg lg:text-base text-sm">
                {service.heading}
              </span>

              <span className="font-Montserrat font-normal xl:text-[15px] lg:text-xs text-[10px] text-[#858484]">
                {service.subheading}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
