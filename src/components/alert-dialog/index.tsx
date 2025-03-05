import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { OrdersGroup } from "@/types/orders-group";
import { QueryObserverBaseResult, RefetchOptions } from "@tanstack/react-query";

interface AlertDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleSubmit: () => void;
  handleRefresh: (
    options?: RefetchOptions
  ) => Promise<QueryObserverBaseResult<OrdersGroup[], Error>>;
}

export function AlertDialogComponent({
  open,
  setOpen,
  handleSubmit,
  handleRefresh,
}: AlertDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Deseja salvar esse grupo de pedidos?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Um novo grupo de pedidos será criado
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-[#A1A1A1] text-white">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmit}
            className="bg-[#237D31] text-white"
          >
            Agrupar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
