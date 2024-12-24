import { Button } from "@/components/ui/button";
import { TableCell,TableRow } from "@/components/ui/table";
import { ArrowRight, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "@/components/order-status";

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface OrderTableRowProps {
    order: {
        orderId: string;
        createdAt: string;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    }
}

export function OrderTableRow({order}: OrderTableRowProps) {
    return(
        <TableRow>
            <TableCell>
                <OrderDetails />
            </TableCell>
                <TableCell className="font-mono text-sm font-medium" >{order.orderId}</TableCell>
                <TableCell className="text-muted-foreground ">{formatDistanceToNow(order.createdAt, {
                    locale: ptBR,
                    addSuffix: true
                })}</TableCell>
                <TableCell className="">
                        <OrderStatus status={order.status}/>
                </TableCell>
                <TableCell className="font-medium">{order.customerName}</TableCell>
                <TableCell className="font-medium">
                         {order.total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
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