import ViewModelView from "@/lib/components/views/ViewModelView";
import NavBar from "@/lib/components/navBar/navBar";
import Thefooter from "@/lib/components/footer/footer";
import React from "react";
import { Link } from "react-router-dom";
import homeText from '@/assets/homeText.png'
import artwork from '@/assets/artwork.png'
import ViewModel from "@/lib/viewmodel/viewmodel";
import BaseState from "@/lib/state/baseState";


export default class HomeView extends ViewModelView<ViewModel<BaseState>>{
	
	onCreateViewModel(state: BaseState): ViewModel<BaseState> {
		return new ViewModel(state, this.setState.bind(this))
	}
	
	onCreateState(): BaseState {
		return new BaseState()
	}

	onCreateMain(): React.ReactNode {
		return(
			<div>
				<div className="flex flex-row lg:hidden">
					<div className="w-full">
						<div className="bg-[#F9F9F9] pl-2 lg:pl-12 2xl:pr-12  h-min">
							<div className="flex flex-col ">
								<NavBar /> 
								<div className="flex flex-col px-3">
									<div className="flex flex-row w-9/12 max-w-screen-2xl md:justify-start lg:justify-between items-end mt-8 lg:mt-14">
										<div className="lg:w-20 w-16 lg:h-60 h-44 mb-4 lg:mb-6 lg:mr-3 mr-1 bg-[url('./assets/homeText.png')] bg-contain bg-bottom bg-no-repeat"></div>
										<p className="text-5xl sm:text-7xl md:max-w-lg lg:max-w-none lg:text-8xl xl:text-9xl font-semibold leading-[60px] lg:leading-[100px] xl:leading-[130px]">Experience the Artistic Beat of Post Gallery</p>
									</div>
									<div className="h-8 lg:h-10 bg-[url('./assets/homeSocials.png')] bg-contain bg-no-repeat"></div>
								</div>
								<div className="m-auto xl:mt-16 flex flex-row justify-center items-center w-44 lg:w-72 mt-8 lg:mt-16 h-14 lg:h-20 border-[3px] lg:border-2 bg-black border-black text-white rounded-full">
									<button className="lg:text-2xl text-xl">View Gallary</button>
								</div>
								<div className="h-10 lg:h-16"></div>
							</div>
						</div>
						<div className="h-3" ></div>

					</div>
					
				</div>
				<div>
					<div className="hidden lg:flex w-full min-h-screen bg-[url('./assets/homeBG.png')] bg-no-repeat bg-cover">
						<div className="w-full min-h-screen flex flex-col justify-between pl-2 lg:pl-12 2xl:pr-12" style={{ background: 'linear-gradient(1.6deg, rgba(0, 0, 0, 0.5) 1.45%, rgba(0, 0, 0, 0) 69%), linear-gradient(182deg, rgba(0, 0, 0, 0.5) 2%, rgba(0, 0, 0, 0) 70%)' }}>
							<NavBar /> 
							<div className="text-white mb-6">
								<p className="text-7xl ">SPIRIT OF AN ART</p>
								<p className="text-3xl mt-3">ALEMAYEHU ZEWDIE</p>
								<p className="text-3xl">25 MAY - 7 JUN 2023</p>
							</div>
						</div>
						
					</div>
					<Thefooter />
				</div>
			</div>
			
		)
	}

}