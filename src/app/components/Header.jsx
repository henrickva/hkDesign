'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Link from "next/link"

export default function Header(){

    let[open, setOpen] = useState(false)
    const [isNavbarFixed, setIsNavbarFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 0) {
            setIsNavbarFixed(true);
          } else {
            setIsNavbarFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <nav className="flex justify-center sticky top-0 left-0 right-0">
            
            <div className={`container rounded-xl mx-5 mt-5 z-20 p-4 lg:p-10 lg:py-2  md:flex md:items-center md:justify-between flex justify-between ${isNavbarFixed ? 'bg-glass backdrop-blur-sm text-white mx-5 mt-5' : 'bg-transparent text-pink-text mx-5 mt-5'}`}>
                
            
            <Link className="flex flex-row md:flex-col items-center" href='/'>
                <Image src={'/logo1.svg'} alt="logo hkProd" width={50} height={20}/>
                <p className="md:mx-0 mx-2">Productions</p>  
            </Link>
            
            
            <div
                  onClick={() => setOpen(!open)}    
                  className="cursor-pointer md:hidden flex items-center"
                 >
                  {open?
                    (<AiOutlineClose  size={30} />)
                    :
                    (<AiOutlineMenu  size={30}/>)
                  }
            </div>

            <ul className={`md:bg-transparent rounded-lg bg-zinc-500 text-center  md:flex md:items-center absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto ${open ? 'top-24 text-white':'top-[-490px]'} `}>
                <li className={`ease-in duration-150  mx-2 my-6 md:my-0 ${ isNavbarFixed ? 'hover:opacity-60' : 'hover:text-zinc-600'}  cursor-pointer`}>
                    <a href="/mentoria">Design</a>
                </li>
                <li className={`ease-in duration-150  mx-2 my-6 md:my-0 ${ isNavbarFixed ? 'hover:opacity-60' : 'hover:text-zinc-600'}  cursor-pointer`}>
                    <a href="/mimos">Sites</a>
                </li>

                <li className={`ease-in duration-150  mx-2 my-6 md:my-0 ${ isNavbarFixed ? 'hover:opacity-60' : 'hover:text-zinc-600'}  cursor-pointer`}>
                    <a href="/sessoes">Fotografia</a>
                </li>
            </ul>
            </div>
        </nav>  
    )
}