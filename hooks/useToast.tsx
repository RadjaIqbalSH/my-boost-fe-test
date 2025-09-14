// useToast.tsx
import { useCallback, useState } from "react";

import { IToastProps } from "@/components/molecules/Toast";
import { ToastContainer } from "@/components/organisms/ToastContainer";

export type ToastType = "success" | "error";

export function useToast() {
  const [toasts, setToasts] = useState<IToastProps[]>([]);

  const addToast = useCallback(({ variant, msg }: IToastProps) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, variant, msg }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  const Toasts = () => <ToastContainer data={toasts} />;

  return { addToast, Toasts };
}
