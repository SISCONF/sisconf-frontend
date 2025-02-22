import * as React from 'react';
import PageTitle from '../page-title';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { Typography } from '../typography';
import { DataTable } from '../ui/data-table';
import { columns } from '../ui/columns';
import { EntrepreneurOrder } from '@/types/entrepreneur-orders';

export interface EntrepreneurOrdersProps {
    orders: EntrepreneurOrder[]
}

export default function EntrepreneurOrders ({
    orders

}: EntrepreneurOrdersProps) {
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
            
            <DataTable 
                className='mt-4 w-full'
                columns={columns} data={orders} 
            />
        </div>

    </div>
  );
}
