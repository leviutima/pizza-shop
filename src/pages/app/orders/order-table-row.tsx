import { Button } from "@/components/ui/button";
import { TableCell,TableRow } from "@/components/ui/table";
import { ArrowRight, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
    return(
        <TableRow>
            <TableCell>
                <OrderDetails />
            </TableCell>
                <TableCell className="font-mono text-sm font-medium">1231p2o3i1p231</TableCell>
                <TableCell className="text-muted-foreground ">Há 15 minutos</TableCell>
                <TableCell className="">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                            <span className="font-medium text-muted-foreground">Pendente</span>
                        </div>
                </TableCell>
                <TableCell className="font-medium">Levi Utima</TableCell>
                <TableCell className="font-medium">
                         R$ 149,90
                </TableCell>
                <TableCell className=""></TableCell>
                <TableCell>
                    <Button variant={"ghost"} size={"xs"}>
                    <ArrowRight />
                        Aprovar
                    </Button>
                </TableCell>
                <TableCell>
                    <Button variant={"ghost"} size={"xs"}>
                    <X />
                    Cancelar
                    </Button>
                </TableCell>
        </TableRow>  
    )
}