import Loader from "@/components/global/Loader";
import {ReactNode} from "react";

type Props = {
    onConfirm: () => void;
    onCancel: () => void,
    isLoading: boolean,
    message: string | ReactNode
}

const ConfirmationModal = ({message, onConfirm, onCancel, isLoading}: Props) => {
    return (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-lg text-gray-800 font-bold mb-4">Confirm Deletion</h2>
                <div className={"mb-4 text-gray-700"}>
                    {
                        typeof message !== "string" ? message :
                            <p className="">{message}</p>
                    }
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        {isLoading ? <Loader/> : "Confirm"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;