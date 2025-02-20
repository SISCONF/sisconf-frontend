import Header from '@/components/header';
import PageTitle from '@/components/page-title';
import { ResumeOrderCard } from '@/components/resume-order-card';
import { ResumeOrderItemList } from '@/components/resume-order-item-list';
import ResumeOrdersList from '@/components/resume-orders-list';
import { ArrowLeft } from 'lucide-react';
import * as React from 'react';

export default function ProductsSummary () {
  return (
    <div className='px-16'>
      <Header />

      <PageTitle 
        text='Meus pedidos'
        icon={<ArrowLeft size={24} />} 
      />

      <div className='flex justify-between'>
        <ResumeOrdersList>
          <ResumeOrderItemList />
          <ResumeOrderItemList />
          <ResumeOrderItemList />
          <ResumeOrderItemList />
        </ResumeOrdersList>
        <ResumeOrderCard />
      </div>

    </div>
  );
}
