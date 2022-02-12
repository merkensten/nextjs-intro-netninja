import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/ninjaLogo.png" alt="logo" width={128} height={77}></Image>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja List</a>
      </Link>
    </nav>
  );
};
