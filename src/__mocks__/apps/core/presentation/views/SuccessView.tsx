import menu from '@/assets/succesfull.png'
import { components } from 'react-select'


import React, { Component } from 'react'

export default class SuccessfullView extends Component {
  render() {
    return (
        <div>
        <div className="flex flex-col w-full h-screen justify-center items-center max-w-[1280px] m-auto px-6 lg:p-4 lg:px-16">
            <img className='w-20' src={menu} />
            <p className='py-4 font-Mulish text-4xl'>Unsuccessful</p>
            <p className='font-Mulish text-4xl'>Artist created succesfully.</p>
            <button onClick={() => {history.back()}} className="h-14  mt-20 bg-black rounded-3xl">	
                <div className="font-medium text-2xl px-14 text-center text-white" >Go Back</div>
            </button>
        </div>
    </div>
    )
  }
}
