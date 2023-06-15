import React, { ReactNode } from 'react'
import bgT from '@/assets/NewsBGT.png'
import bgB from '@/assets/NewsBGB.png'
import insta from '@/assets/insta.png'
import twitter from '@/assets/twitter.png'
import { FieldComponent, FieldComponentProps } from '../form/FieldComponent';

export default function Thefooter() {
  return (
    <div>
        <div className='hidden lg:inline pb-4'>
            <div className='flex flex-row items-center justify-between'>
            <div className='px-10 my-4'><LineWithWidth10 /></div>
                <div className='w-1/2 max-w-xl p-12'>
                    <div className="w-full flex justify-end">
                        <img className='w-24' src={bgT} />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center my-2">
                        <div className='w-full pl-12'>
                            <p className='font-bold text-xs'>GET OUR WEEKLY</p>
                            <p className='font-bold text-3xl'>NEWSLETTER</p>
                            <p className='text-2xl text-[#B7B7B7]'>Get weekly updates </p>
                            <p className='text-2xl font-semibold'>Subscribe Now!</p>
                            <div className="w-full max-w-md mt-5 flex flex-row">
                                <input className="w-full rounded-l-md h-9 text-black pl-3 border-r-0 border-[#B7B7B7] border-2 lg:h-9 placeholder-[#B7B7B7] " type="text" placeholder='Email'/>
                                <div className='flex justify-center items-center bg-black text-white rounded-r-md px-3'>
                                    <button className="font-bold">SUBSCRIBE</button>
                                </div>
                            </div>
                            <p className='mt-2 italic text-center text-[#B7B7B7] font-bold text-xs'>Your email is safe with us, we dont spam.</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-start">
                        <img className='w-12' src={bgB} />
                    </div>
                </div>
                <div className='w-1/2 flex flex-row justify-between'>
                    <div className='w-1/2 flex flex-col space-y-3'>
                        <p className='text-xl font-bold text-[#170F49] mb-6'>Products</p>
                        <p className='text-lg text-[#6F6C90]'>Features</p>
                        <p className='text-lg text-[#6F6C90]'>Pricing</p>
                        <p className='text-lg text-[#6F6C90]'>Case studies</p>
                        <p className='text-lg text-[#6F6C90]'>Reviews</p>
                        <p className='text-lg text-[#6F6C90]'>Updates</p>
                    </div>
                    <div className='w-1/2 flex flex-col space-y-3'>
                        <p className='text-xl font-bold text-[#170F49] mb-6'>Company</p>
                        <p className='text-lg text-[#6F6C90]'>About</p>
                        <p className='text-lg text-[#6F6C90]'>Contact us</p>
                        <p className='text-lg text-[#6F6C90]'>Careers</p>
                        <p className='text-lg text-[#6F6C90]'>Culture</p>
                        <p className='text-lg text-[#6F6C90]'>Blog</p>
                    </div>
                    <div className='w-1/2 flex flex-col space-y-3'>
                        <p className='text-xl font-bold text-[#170F49] mb-6'>Support</p>
                        <p className='text-lg text-[#6F6C90]'>Getting started</p>
                        <p className='text-lg text-[#6F6C90]'>Help center</p>
                        <p className='text-lg text-[#6F6C90]'>Server status</p>
                        <p className='text-lg text-[#6F6C90]'>Report a bug</p>
                        <p className='text-lg text-[#6F6C90]'>Chat support</p>
                    </div>
                </div>
                
            </div>       
            <div className='px-10 my-4'><LineWithWidth10 /></div>
            <div className='flex flex-row justify-between px-14'>
                <div className='flex flex-row'>
                    <p className='text-lg text-[#6F6C90] mr-16'>COPYRIGHT © 2023 POST GALLERY</p>
                    <p className='text-lg text-[#6F6C90] underline'>SITE BY <span className='text-black text-md'> zenon-X</span></p>
                </div>
                <div className='flex flex-row  space-x-6'>
                    <img className='w-5 h-5' src={insta} />
                    <img className='w-5 h-5' src={twitter} />
                    <img className='w-5 h-5' src={insta} />
                </div>
            </div>
        </div>
        <div className='lg:hidden'>
            <div className='w-full max-w-xl p-4'>
                <div className="w-full flex justify-end">
                    <img className='w-24' src={bgT} />
                </div>
                <div className="w-full flex flex-col items-center justify-center my-2">
                    <div className='w-full pl-12'>
                        <p className='font-bold text-xs'>GET OUR WEEKLY</p>
                        <p className='font-bold text-3xl'>NEWSLETTER</p>
                        <p className='text-2xl text-[#B7B7B7]'>Get weekly updates </p>
                        <p className='text-2xl font-semibold'>Subscribe Now!</p>
                        <div className="w-full max-w-md mt-5 flex flex-row">
                            <input className="w-full rounded-l-md h-9 text-black pl-3 border-r-0 border-[#B7B7B7] border-2 lg:h-9 placeholder-[#B7B7B7] " type="text" placeholder='Email'/>
                            <div className='flex justify-center items-center bg-black text-white rounded-r-md px-3'>
                                <button className="font-bold">SUBSCRIBE</button>
                            </div>
                        </div>
                        <p className='mt-2 italic text-center text-[#B7B7B7] font-bold text-xs'>Your email is safe with us, we dont spam.</p>
                    </div>
                </div>
                <div className="w-full flex justify-start">
                    <img className='w-12' src={bgB} />
                </div>
            </div>
        </div>
    </div>
  )
}


  

const LineWithWidth10 = () => {
	return (
	  <div className="w-full border-b-2 border-[#D9DBE9]"></div>
	);
  };

  const footerNav = () => {
	return (
	  <div className="w-full flex flex-col">
        <p></p>
      </div>
	);
  };