import { FaCircleCheck } from "react-icons/fa6";
function WhyChooseUsCard({ title, description }) {
  return (
    <div className="flex flex-col w-[300px] h-[300px] border-4 border-secondary bg-white p-5 justify-center items-center gap-2 rounded-full">
      <h2 className="text-md font-bold text-primary">{title}</h2>
      <p className="text-md text-primary ">{description}</p>
    </div>
  );
}

export default WhyChooseUsCard;
