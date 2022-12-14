import * as React from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';


export default function Layout( {children} : any ) {
  return (
    <>
      <HeaderComponent />
      <main className='flex-grow min-h-[80vh] bg-slate-900'>
        {children}
      </main>
      <FooterComponent />
    </>
  );
}

