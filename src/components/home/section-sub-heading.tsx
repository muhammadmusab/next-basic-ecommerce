interface Props {
  heading: string;
  className?: string;
}
const SectionSubHeading = ({ heading, className }: Props) => {
  return <h1 className={`text-[36px] font-inter font-semibold ${className}`}>{heading}</h1>;
};

export default SectionSubHeading;
