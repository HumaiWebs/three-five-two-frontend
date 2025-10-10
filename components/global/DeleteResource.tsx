import Modal from "@/components/global/Modal";
import { Button } from "@/components/ui/button";
import { http } from "@/lib/httpClient";
import { queryClient } from "@/store/ClientWrapper";
import { useMutation } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import toast from "react-hot-toast";
import { PiTrashBold } from "react-icons/pi";

type Props = {
  endpoint: string;
  queryKeyToInvalidate: string;
  resourceId: string;
  resourceName: string;
  WarningMessage?: string | ReactNode;
};

const DeleteResource = ({
  resourceId,
  endpoint,
  queryKeyToInvalidate,
  resourceName,
  WarningMessage

}: Props) => {
  const [open, setOpen] = useState(false);

  const { mutate, status } = useMutation({
    mutationFn: async () => {
      return (await http.delete(endpoint + "/" + resourceId)).data;
    },
    onSuccess: (data) => {
      if (data.success) {
        setOpen(false);
        toast.success("Resource deleted successfully");
        queryClient.invalidateQueries({ queryKey: [queryKeyToInvalidate] });
      } else {
        toast.error(data.message || "Failed to delete resource");
      }
    },
  });

  return (
    <Modal
      title="Delete Product"
      open={open}
      onOpenChange={setOpen}
      trigger={
        <PiTrashBold className="text-red-600 hover:scale-105 transition-all duration-200 cursor-pointer" size={24} />
      }
    >
      <div>
        {
          WarningMessage && (
            typeof WarningMessage === 'string' ?
              <p className="mb-4 p-2 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded">
                {WarningMessage}
              </p> : typeof WarningMessage === 'function' && WarningMessage)
        }
        <p>
          Are you sure you want to{" "}
          <strong className="text-red-700">delete</strong>{" "}
          <strong>{resourceName}</strong>?
        </p>
        <div className="mt-4 flex justify-end space-x-2">
          <Button
            className="px-4 py-2 bg-gray-200 text-gray-800 hover:text-white rounded-md"
            onClick={() => setOpen(false)}
            disabled={status === "pending"}
          >
            Cancel
          </Button>
          <Button
            className="px-4 py-2 bg-red-600 text-white rounded-md"
            onClick={() => {
              mutate(undefined);
            }}
            disabled={status === "pending"}
          >
            {status === "pending" ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteResource;
