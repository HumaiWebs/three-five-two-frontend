import {useAuth} from "@/store/AuthProvider";
import {getGuestUserId} from "@/lib/guestUserId";
import {useMutation} from "@tanstack/react-query";
import {http} from "@/lib/httpClient";
import {useState} from "react";
import toast from "react-hot-toast";
import {useCart} from "@/store/CartContext";
import ConfirmationModal from "@/components/global/ConfirmationModal";

const RemoveCartItem = ({itemId, itemName}: { itemId: string | number, itemName: string }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {user} = useAuth();
    const {invalidateUserCart} = useCart()

    const {mutate: deleteItem, status} = useMutation({
        mutationFn: async () => {
            return (await http.delete(`cart/${user?._id || getGuestUserId()}/${itemId}`)).data
        },
        onSuccess: async (response) => {
            if (response.success) {
                toast.success(`${itemName} removed from cart`)
                invalidateUserCart()
            } else {
                toast.error(response.message);
            }
        }
    })

    return <>
        <button
            disabled={status === 'pending'}
            onClick={() => {
                setIsModalOpen(true);
            }}
            className="bg-red-600 disabled:cursor-not-allowed hover:bg-red-700 px-4 py-1 text-sm"
        >
            {"Remove"}
        </button>
        {isModalOpen && <ConfirmationModal
            isLoading={status === 'pending'}
            message={<p>
                Are you sure you want to remove <strong>{itemName}</strong> from your cart?
            </p>}
            open={isModalOpen}
            onConfirm={() => {
                deleteItem();
                setIsModalOpen(false);
            }}
            onCancel={() => setIsModalOpen(false)}
        />}
    </>
}


export default RemoveCartItem;
