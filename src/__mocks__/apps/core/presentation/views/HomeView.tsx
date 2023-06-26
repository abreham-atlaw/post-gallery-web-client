import ViewModelView from "@/lib/components/views/ViewModelView";
import NavBar from "@/lib/components/navBar/navBar";
import TheFooter from "@/lib/components/footer/footer";
import React from "react";
import { Link } from "react-router-dom";
import homeText from '@/assets/homeText.png'
import artwork from '@/assets/artwork.png'
import ViewModel from "@/lib/viewmodel/viewmodel";
import BaseState from "@/lib/state/baseState";
import back from '@/assets/backWhite.png'
import next from '@/assets/nextWhite.png'


const images = [
    'https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/homeBG.png?alt=media&token=7aba3738-b41b-46aa-90e4-9392badbd9af',
    'https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/photo_2023-06-24_15-12-34.jpg?alt=media&token=1b577789-b3bf-44c3-b5c2-f066506883ab',
    'https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/photo_2023-06-24_15-12-37.jpg?alt=media&token=6d676d6d-38ec-4eb6-8f2a-f91e97349751'
];

class SlideState {
    slideIndex: number;
    bgImage: string;

    constructor() {
        this.slideIndex = 0;
        this.bgImage = '';
    }
}

class HomeViewState extends BaseState {
    slideState: SlideState;

    constructor() {
        super();  // initialize BaseState
        this.slideState = new SlideState();  // initialize SlideState
    }
}

export default class HomeView extends ViewModelView<ViewModel<HomeViewState>> {
    onCreateViewModel(state: HomeViewState): ViewModel<HomeViewState> {
        return new ViewModel(state, this.setState.bind(this))
    }

    onCreateState(): HomeViewState {
        const state = new HomeViewState();
        state.slideState.slideIndex = 0;
        state.slideState.bgImage = images[0];
        return state;
    }

	nextSlide = () => {
		const newIndex = (this.state.slideState.slideIndex + 1) % images.length;
		this.setState({
			...this.state,
			slideState: {
				...this.state.slideState,
				slideIndex: newIndex,
				bgImage: images[newIndex]
			}
		});
		console.log(this.state);
	}

	prevSlide = () => {
		const newIndex = this.state.slideState.slideIndex > 0 ? this.state.slideState.slideIndex - 1 : images.length - 1;
		this.setState({
			...this.state,
			slideState: {
				...this.state.slideState,
				slideIndex: newIndex,
				bgImage: images[newIndex]
			}
		});
	}

    onCreateMain(): React.ReactNode {
		console.log('Rendering with bgImage:', this.state.slideState.bgImage);
        return (
            <div>
                <div>
                    <div className="flex w-full min-h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${this.state.slideState.bgImage})` }}>
                        <div className="w-full min-h-screen flex flex-col justify-between  lg:pl-12 2xl:pr-12" style={{ background: 'linear-gradient(1.6deg, rgba(0, 0, 0, 0.5) 1.45%, rgba(0, 0, 0, 0) 69%), linear-gradient(182deg, rgba(0, 0, 0, 0.5) 2%, rgba(0, 0, 0, 0) 70%)'}}>
                            <NavBar isDark={false} /> 
							<div className="flex flex-row justify-between items-center">
								<div className="text-white mb-6 pl-4">
									<p className="text-3xl lg:text-7xl ">SPIRIT OF AN ART</p>
									<p className="text-xl lg:text-3xl mt-3">ALEMAYEHU ZEWDIE</p>
									<p className="text-xl lg:text-3xl">25 MAY - 7 JUN 2023</p>
								</div>
								<div className=" flex flex-row justify-between items-center pr-8 lg:pr-14">
									<button onClick={this.nextSlide}>
										<img className="mr-8 lg:mr-12 w-3 h-6 lg:w-5 lg:h-8" src={back} />
									</button>
									<button onClick={this.prevSlide}>
										<img className="w-3 h-6 lg:w-5 lg:h-8" src={next} />
									</button>
								</div>
							</div>
                        </div>
                    </div>
                    <TheFooter />
                </div>
            </div>
        )
	}

}
