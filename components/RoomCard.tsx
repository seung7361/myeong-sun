import React from 'react';
import { RoomCardProps } from '@/interfaces';
import Image from 'next/image';

const RoomCard = ({ searchResult }: RoomCardProps) => {
    const { id, title, imagesrc, address1, address2, price, room, bathroom, area } = searchResult;

    return (
        <div style={{height: "450px"}} className='w-fit rounded-lg border-slate-600 border-2 flex-col m-3'>
            <Image src={imagesrc} alt={title} width={300} height={300} />
            <div className='h-full'>
                <p>Title: {title}</p>
                <p>address: {address1}</p>
                <p>area: {area}</p>
            </div>
        </div>
    )
};

export default RoomCard;