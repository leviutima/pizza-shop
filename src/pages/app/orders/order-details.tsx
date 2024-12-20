import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

export function OrderDetails() {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} size="xs">
                    <Search className="h-3 w-3"/>
                    <span className="sr-only">Detalhes do pedido</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Pedido 1kl23j1l23jk1</DialogTitle>
                    <DialogDescription>Detalhes do pedido</DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Status</TableCell>
                                <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Cliente</TableCell>
                                <TableCell className="flex justify-end">
                                    Levi Yuki Utima
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Telefone</TableCell>
                                <TableCell className="flex justify-end">
                                 (11)99290-2332
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Email</TableCell>
                                <TableCell className="flex justify-end">
                                    Levi.utima@gmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Realizado há</TableCell>
                                <TableCell className="flex justify-end">
                                    Há 3 minutos
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Table>
                        <TableHeader>
                            <TableHead>Produto</TableHead>
                            <TableHead className="text-right">Qtd</TableHead>
                            <TableHead className="text-right">Preço</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Pizza calabresa</TableCell>
                                <TableCell className="text-right">2</TableCell>
                                <TableCell className="text-right">R$69,90</TableCell>
                                <TableCell className="text-right">R$139,80</TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter>
                            <TableCell colSpan={3}>Total do pedido</TableCell>
                            <TableCell className="text-right font-medium">
                                R$139,80
                            </TableCell>
                        </TableFooter>
                    </Table>
                </div>
            </DialogContent>
        </Dialog>
    )
}