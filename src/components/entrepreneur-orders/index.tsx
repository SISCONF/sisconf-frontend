"use client"

import PageTitle from '../page-title';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { Typography } from '../typography';
import { DataTable } from '../ui/data-table';
import { columns } from '../ui/columns';
import { EntrepreneurOrder } from '@/types/entrepreneur-orders';
import { Package } from 'lucide-react';
import { AlertDialogComponent } from '../alert-dialog';
import { useState } from 'react';

export interface EntrepreneurOrdersProps {
    orders: EntrepreneurOrder[]
}

export default function EntrepreneurOrders ({
    orders

}: EntrepreneurOrdersProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className='p-12'>
            <PageTitle 
                text="Meus pedidos" 
            />

            <div className='flex flex-wrap items-center w-full justify-between gap-9'>
                <Card 
                    title='Total de pedidos' 
                    content='50'
                    className='border rounded-[8px] p-4 border-[#D9D9D9] text-black w-80 h-32'
                >
                    <CardTitle>
                        <Typography variant={"h2"} className="text-black text-base font-bold">
                            Total de pedidos
                        </Typography>
                    </CardTitle>
                    <CardContent className='p-0 mt-5'>
                        <Typography variant={"body2"} className="text-black text-4xl font-bold">
                            50
                        </Typography>
                    </CardContent>
                </Card>

                <Card 
                    title='Total de pedidos' 
                    content='50'
                    className='border rounded-[8px] p-4 border-[#D9D9D9] text-black w-80 h-32'
                >
                    <CardTitle>
                        <Typography variant={"h2"} className="text-black text-base font-bold">
                        Total de grupos de pedidos
                        </Typography>
                    </CardTitle>
                    <CardContent className='p-0 mt-5'>
                        <Typography variant={"body2"} className="text-black text-4xl font-bold">
                            20
                        </Typography>
                    </CardContent>
                </Card>

                <Card 
                    title='Total de pedidos' 
                    content='50'
                    className='border rounded-[8px] p-4 border-[#D9D9D9] text-black w-80 h-32'
                >
                    <CardTitle>
                        <Typography variant={"h2"} className="text-black text-base font-bold">
                        Total de pedidos finalizados
                        </Typography>
                    </CardTitle>
                    <CardContent className='p-0 mt-5'>
                        <Typography variant={"body2"} className="text-black text-4xl font-bold">
                            10
                        </Typography>
                    </CardContent>
                </Card>

                <div className='flex items-center justify-between w-full'>
                    <button 
                        className='flex items-center gap-2 bg-[#237D31] text-white text-[14px] rounded p-2'
                        onClick={() => setOpen(true)}
                    >
                        <Package size={24} />
                        Agrupar pedidos
                    </button>
                </div>
                
                <DataTable 
                    className='mt-4 w-full'
                    columns={columns} data={orders} 
                />

                <AlertDialogComponent open={open} setOpen={setOpen} />
            </div>

        </div>
    );
}
