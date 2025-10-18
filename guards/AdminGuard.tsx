'use client'
import {useAuth} from "@/store/AuthProvider";
import {useRouter} from "next/navigation";
import {ReactNode, useEffect, useState} from "react";

const AdminGuard = ({ children }: { children: ReactNode }) => {
    const [mounted, setMounted] = useState(false);
    const {user} = useAuth();
    const isAdmin = user?.role === "admin";
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // perform navigation in effect, not during render
        if (mounted && !isAdmin) {
            // defer navigation to next tick to avoid "Cannot update a component while rendering" warnings
            const id = setTimeout(() => {
                router.replace('/');
            }, 0);
            return () => clearTimeout(id);
        }
    }, [mounted, isAdmin, router]);

    // don't render children until we've mounted and verified admin status
    if (!mounted) return null;
    if (!isAdmin) return null;

  return <>{children}</>;
};

export default AdminGuard;