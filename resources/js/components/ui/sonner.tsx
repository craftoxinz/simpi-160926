import { useFlashToast } from '@/hooks/use-flash-toast';
import { Toaster as Sonner } from "@/components/ui/toast";
import { Toast as ToastPrimitive } from "@base-ui/react";

function Toaster({...props}: ToastPrimitive.Provider.Props) {
    useFlashToast();

    return (
        <Sonner {...props} />
    );
}

export { Toaster };
