
interface Props{
    heading:string;
}
const SectionHeading = ({heading}:Props) => {
  return (
    <div className="flex items-center">
      <div className="bg-secondary w-[20px] h-[40px]"></div>
      <p className="ms-3 text-secondary font-semibold">{heading}</p>
    </div>
  );
};

export default SectionHeading;
