import Image from 'next/image';
import * as React from 'react';
import { ShoppingBag } from "lucide-react";

export interface HeaderProps {
}

export default function Header ({

}: HeaderProps) {
  return (
    <div className='w-full flex justify-between items-center py-6 mb-7'>
      <span className='mr-8 w-fit text-2xl font-bold text-black'>RJ Frutas</span>

      <nav className='flex justify-between flex-1 items-center'>
        <ul className='flex gap-10 text-base text-black'>
            <li> 
                <a href="/">Início</a>
            </li>
            <li> 
                <a href="/parterns">Parceiros</a> 
            </li>
            <li> 
                <a href="/orders">Nossos produtos</a> 
            </li>
            <li> 
                <a href="/contact">Fale conosco</a> 
            </li>
        </ul>

        <div className='flex items-center gap-4'>
          <a href="/orders">
              <ShoppingBag
                className='text-[#43A046] size-7' 
              />
          </a>
          <button className='w-8 h-8'>
              <Image alt='Foto de perfil' src={"/avatar.svg"} width={32} height={32} />
          </button>
        </div>
      </nav>
    </div>
  );
}
