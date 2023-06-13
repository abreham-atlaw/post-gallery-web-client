import React, { useState } from 'react'
import PG from '@/assets/PG.png'
import Menu from '@/assets/menu.png'
import Close from '@/assets/close.png'
import { Link } from 'react-router-dom';
import ViewModelView from '../views/ViewModelView';
import ViewModel from '@/lib/viewmodel/viewmodel';
import BaseState from '@/lib/state/baseState';
import Account from '@/assets/account.webp';


class NavBarState extends BaseState{

	open: boolean = true;
	accountOpen: boolean = false;

}

class NavBarViewModel extends ViewModel<NavBarState>{

	toggleOpen(){
		this.state.open = !this.state.open;
		this.syncState()
	}

	toggleAccoutOpen(){
		this.state.accountOpen = !this.state.accountOpen;
		this.syncState()
	}

}


export default class NavBar extends ViewModelView<NavBarViewModel,any, NavBarState>{
	
	onCreateViewModel(state: NavBarState): NavBarViewModel{
		return new NavBarViewModel(state, this.setState.bind(this));
	}


	private onCreateBar(clientSection: React.ReactNode): React.ReactNode{
		return (
			<div className="relative">
			  <div className='hidden lg:flex flex-row items-center justify-between pr-10 pt-10'>
				  <div className='flex flex-row items-center space-x-10 text-3xl font-medium leading-none'>
					<img className='h-8 mr-6' src={PG} />
					<a href="/exhibitions">Exhibition</a>
					<a href="/search">Shop</a>
				  </div>

				  {
					clientSection					
				  }
				  
			  </div>
			  <div className='lg:hidden pt-10 px-3 flex flex-row items-center justify-between'>
				<img className='h-8' src={PG} />
				<img  className='h-8 lg:hidden' onClick={() => {this.getViewModel().toggleOpen()}} src={this.state.open ? Menu : Close} />
			  </div>
			  <div className={` ${this.state.open ? 'hidden' : 'absolute'} flex flex-col p-6 bg-white mt-4 mx-10 w-min right-0 rounded-[12px] shadow-[0px_0px_50px_rgba(0,0,0,0.3)] lg:hidden`}>
					  <a className=" font-bold text-paragraph-color text-end px-6 pb-2 ">Home</a>
					  <a className=" font-bold text-paragraph-color text-end px-6 pb-2 ">Features</a>
					  <a className=" font-bold text-paragraph-color text-end px-6 pb-2 ">Contact</a>
					  <a className=" font-bold text-paragraph-color text-end px-6 pb-2 ">Contact</a>   
				  </div>
			</div>
	  
		)
	}

	onCreateState(): NavBarState {
		return new NavBarState()
	}

	onCreateLoading(): React.ReactNode {
		return this.onCreateBar(<div className="h-14"></div>)
	}

	onCreateMain(): React.ReactNode {

		return this.onCreateBar(
		<>
		{
					(this.state.context.client === null)?
					(
						<div className="flex flex-row justify-center items-center w-44 h-14 border-[3px] border-black text-black rounded-full">
							<Link to="/auth/login" className="text-2xl">Join Us</Link>
						</div>
					):
					(
						<div className='relative'>
							<div className="flex flex-row justify-center items-center w-14 h-14 border-[3px] border-black text-black rounded-full">
								<button onClick={() => this.getViewModel().toggleAccoutOpen()} className="text-2xl"><img className="col-12" src={Account}/></button>
							</div>
							<div className={`${this.state.accountOpen ? 'absolute' : 'hidden'} flex flex-col px-6 py-1 bg-white mt-4  w-44 right-0 rounded-[12px] shadow-[0px_0px_50px_rgba(0,0,0,0.3)]`}>
								<Link to="/auth/logout/" className=" font-bold text-paragraph-color text-center">LogOut</Link>  
							</div>
						</div>
					)
					
				  }
		</>
		)

	}

}



// export default function NavBar() {

 
// }


// {/*
//         <div className='hidden lg:flex flex-col items-center justify-center pt-10'>
//             <p className='text-7xl mb-4 font-semibold'>POST GALLERY <span className="text-[#D58D01] font-bold">.</span></p>
//             <ul className='flex flex-row justify-between items-center text-4xl font-medium w-full max-w-xl'>
//                 <a href="/auth/login">Exhibition</a>
//                 <a href="/search">Shop</a>
//                 <nav>Contact</nav>
//                 <nav>About</nav>
//             </ul>
//         </div>

// */}