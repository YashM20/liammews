import Link from 'next/link';
import React from 'react';

interface MenuItemProps {
    name: string;
    slug: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, slug }) => {
    return (
        <li key={name} className='w-full'>
            <Link
            href={`/${slug}`}
            className='flex w-[100%] stealth-link p-3 rounded-md hover:bg-gray-50'
            >
                {name}
            </Link>
        </li>
    );
};

export default MenuItem;