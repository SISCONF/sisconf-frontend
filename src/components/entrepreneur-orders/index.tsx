"use client"

import PageTitle from '../page-title';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { Typography } from '../typography';
import { DataTable } from '../ui/data-table';
import { columns } from '../ui/columns';
import { EntrepreneurOrder } from '@/types/entrepreneur-orders';
import { Package } from 'lucide-react';
import { AlertDialogComponent } from '../alert-dialog';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { ComponentTabs } from '../tabs';
import { OrdersGroup } from '@/types/orders-group';
import { ordersGroupColumns } from '../ui/orders-group-columns';

type TabsProps = {}

export const TABS_LIST = [
    {
      id: 0,
      name: "orders",
      label: "Pedidos",
    },
    {
      id: 1,
      name: "orders-group",
      label: "Grupos de pedidos",
    },
];

export interface EntrepreneurOrdersProps {
    orders: EntrepreneurOrder[]
    ordersGroup: OrdersGroup[]
    setSelectedOrdersGroup: Dispatch<SetStateAction<OrdersGroup | null>>
}

export default function EntrepreneurOrders ({
    orders,
    ordersGroup, 
    setSelectedOrdersGroup
}: EntrepreneurOrdersProps) {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<{ id: number; name: string; label: string }>(TABS_LIST[0]);

    const handleTabChange = (id: number) => {
        const selectedTab = TABS_LIST.find((tab) => tab.id === id);
        setActiveTab(selectedTab || TABS_LIST[0]);
    };

    return (
        <div className='p-12'>
            <PageTitle 
                text="Meus pedidos" 
            />

            <div className='flex flex-wrap items-center w-full justify-between'>
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

                <div className='flex items-end justify-between w-full mt-9'>
                    <ComponentTabs 
                        tabList={TABS_LIST} 
                        defaultValue="orders" 
                        onTabChange={handleTabChange}
                        width='140px'
                        height='32px' 
                        verticalPadding='8px'
                    />

                    <button 
                        className='flex items-center gap-2 bg-[#237D31] text-white text-[14px] rounded p-2 h-11'
                        onClick={() => setOpen(true)}
                    >
                        <Package size={24} />
                        Agrupar pedidos
                    </button>
                </div>

                {
                    activeTab.name === "orders" ? (
                        <DataTable 
                            className='mt-4 w-full text-base'
                            columns={columns} 
                            data={orders} 
                        />

                    ) : (
                        <DataTable 
                            className='mt-4 w-full text-base'
                            columns={ordersGroupColumns({setSelectedOrdersGroup})} 
                            data={ordersGroup} 
                        />
                    )
                }

                <AlertDialogComponent 
                    open={open} 
                    setOpen={setOpen}
                    title='Deseja salvar esse grupo de pedidos?'
                    description='Um novo grupo de pedidos será criado' 
                    actionButtonText='Agrupar'
                />
            </div>

        </div>
    );
}
