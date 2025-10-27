import Loader from "@/components/global/Loader";
import {useCart} from "@/store/CartContext";
import {useAuth} from "@/store/AuthProvider";
import {useMutation} from "@tanstack/react-query";
import {getGuestUserId} from "@/lib/guestUserId";
import {http} from "@/lib/httpClient";
import ConfirmationModal from "@/components/global/ConfirmationModal";
import {useState} from "react";
import toast from "react-hot-toast";

const ClearCart = () => {
    const {invalidateUserCart} = useCart();
    const {user} = useAuth();
    const [modalOpen, setModalOpen] = useState(false);

    const {mutate: clearCart, status} = useMutation({
        mutationFn: async () => {
            const userId = user?._id || getGuestUserId();
            return (await http.delete(`cart/clear/my-cart/${userId}`)).data
        },
        onSuccess: (response) => {
            if (response.success) {
                invalidateUserCart();
            }else{
                toast.error(response.message);
            }
        }
    })

    return <>
        <button onClick={() => {
            setModalOpen(true);
        }} disabled={status === 'pending'} className="bg-red-600 hover:bg-red-700 px-6 py-2 text-sm uppercase">
            {status === 'pending' ? <Loader/> : "Clear Cart"}
        </button>
        {
            modalOpen && <ConfirmationModal
                isLoading={status === 'pending'}
                message={<p>
                    Are you sure you want to clear your cart?
                </p>}
                onConfirm={() => {
                    clearCart();
                    setModalOpen(false);
                }}
                onCancel={() => setModalOpen(false)}
            />
        }
    </>
}

export default ClearCart;