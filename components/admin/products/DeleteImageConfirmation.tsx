import Modal from "@/components/global/Modal";
import { Image } from "@/types/product";
import React from "react";
import { PiXCircleBold } from "react-icons/pi";

type Props = {
  image: Image;
  onRemove: (image: Image) => void;
};

const DeleteImageConfirmation = ({ image, onRemove }: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      title="Delete Image"
      open={open}
      onOpenChange={setOpen}
      trigger={
        <PiXCircleBold className="absolute hover:scale-105 transition-all duration-200 cursor-pointer top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600" />
      }
    >
      <div>
        <div className="flex gap-2 items-center">
          <img
            width={80}
            height={80}
            className="w-20 h-20 object-cover"
            src={image.url}
            alt={"product-image"}
          />
          <p>Are you sure you want to delete this image?</p>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-800 hover:text-white rounded-md">
            Cancel
          </button>
          <button
            onClick={() => {
              onRemove(image);
              setOpen(false);
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteImageConfirmation;
