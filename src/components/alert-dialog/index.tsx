import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface AlertDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}
  
export function AlertDialogComponent({ open, setOpen }: AlertDialogProps) {
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Deseja salvar esse grupo de pedidos?</AlertDialogTitle>
            <AlertDialogDescription>
                Um novo grupo de pedidos será criado
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel
                className="bg-[#A1A1A1] text-white"
            >
                Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
                className="bg-[#237D31] text-white"
            >
                Agrupar
            </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    )
}
  