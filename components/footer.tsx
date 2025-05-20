import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className='bg-[#2b3539] relative'>
            <div className='py-9 px-10 flex items-center justify-between'>
                <div>
                    <p className='text-[#e1e1e1b3] text-base'>Copyrights By © VP Tech - 2021</p>
                </div>
                <div>
                    <nav>
                        <ul className='flex items-center gap-5'>
                            <li className='text-[#97b0ea]'>
                                <Link href='/'>Team</Link>
                            </li>
                            <li className='text-[#97b0ea]'>
                                <Link href='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
