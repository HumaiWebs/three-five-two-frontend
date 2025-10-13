import Link from "next/link";
import { PiPencilBold } from "react-icons/pi";

type Props = {
  link: string
}

const EditResourceLink = ({ link }: Props) => {
  return (
    <Link href={link}>
      <PiPencilBold
        className="text-blue-600 ml-4 hover:scale-105 transition-all duration-200 cursor-pointer"
        size={24}
      />
    </Link>
  );
};

export default EditResourceLink;
