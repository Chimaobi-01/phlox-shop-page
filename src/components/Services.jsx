import { services } from "../utils/data";

const Services = () => {
  return (
    <ul className="flex items-center justify-between pt-10 pb-56">
      {services.map((service, index) => (
        <li key={index} className="flex items-center gap-4">
          <img src={service.icon} alt="icon" />
          <p className="flex flex-col gap-0.5">
            <span className="font-Poppins font-bold text-base">
              {service.heading}
            </span>
            <span className="font-Montserrat font-normal text-sm text-[#858484]">
              {service.subheading}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Services;
