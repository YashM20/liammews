import Link from 'next/link';
import React from 'react';
import Menu from '@/components/Menu'

type HeaderProps = {
  pageName: string;
};

const Header: React.FC<HeaderProps> = ({ pageName }) => {
  return (
    <header className="container max-w-2xl pt-40 pb-40">
      <div className="flex flex-row justify-between text-sm">
        <div className="flex flex-row space-x-2 text-gray-400">
          <Link href='/' className="hover:text-black stealth-link">Liam Mews</Link>
          <p>/</p>
          <p>{pageName}</p>
        </div>

        <div>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;