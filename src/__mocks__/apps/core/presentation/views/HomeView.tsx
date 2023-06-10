import ViewModelView from "@/lib/components/views/ViewModelView";
import NavBar from "@/lib/components/navBar/navBar";
import React from "react";
import { Link } from "react-router-dom";
import homeText from '@/assets/homeText.png'
import artwork from '@/assets/artwork.png'


export default class HomeView extends React.Component{


	render(): React.ReactNode {
		return(
			<div className="flex flex-row ">
				<div className="w-6 lg:w-8 bg-[url('./assets/homeBG.png')] bg-contain bg-repeat min-h-screen"></div>
				<div className="w-full">
					<div className="bg-[#F9F9F9] pl-2 lg:pl-12 2xl:pr-12  h-min">
						<div className="flex flex-col bg-[url('./assets/homeHeroMobile.png')] md:bg-[url('./assets/homeHero.png')] bg-[length:140px_380px] sm:bg-[length:200px_440px] md:bg-[length:300px_450px] lg:bg-[length:350px_500px] xl:bg-[length:400px_550px] bg-no-repeat bg-right-bottom">
							<NavBar /> 
							<div className="flex flex-col">
								<div className="flex flex-row w-9/12 max-w-screen-2xl md:justify-start lg:justify-between items-end mt-8 lg:mt-14">
									<div className="lg:w-20 w-16 lg:h-60 h-44 mb-4 lg:mb-6 lg:mr-3 mr-1 bg-[url('./assets/homeText.png')] bg-contain bg-bottom bg-no-repeat"></div>
									<p className="text-5xl sm:text-7xl md:max-w-lg lg:max-w-none lg:text-8xl xl:text-9xl font-semibold leading-[60px] lg:leading-[100px] xl:leading-[130px]">Experience the Artistic Beat of Post Gallery</p>
								</div>
								<div className="h-8 lg:h-10 bg-[url('./assets/homeSocials.png')] bg-contain bg-no-repeat"></div>
							</div>
							<div className="2xl:m-auto xl:mt-16 flex flex-row justify-center items-center w-44 lg:w-72 mt-14 lg:mt-16 h-14 lg:h-20 border-[3px] lg:border-2 border-black text-black rounded-full">
								<button className="lg:text-2xl text-xl">Coming Soon!</button>
							</div>
							<div className="h-10 lg:h-16"></div>
						</div>
					</div>
					<div className="h-16" ></div>
					<div className="flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:pl-5 lg:pr-12 mb-16">
						<div className="w-full lg:w-2/3 lg:mr-20 mb-10 lg:mb-0">
							<p className="text-5xl md:text-6xl font-semibold text-[#D58D01]">Current <br/>Exhibition</p>
							<p className="my-2 text-2xl font-medium">
								Unique gallery with wonderfully crafted <br/>feminine art.
							</p>
							<p className="text-2xl">
							Feminine art is a form of art that is created by women or focuses on women's experiences, perspectives, and issues. It is a diverse and multifaceted genre that encompasses a wide range of styles, techniques, and subject matter. Feminine art often explores themes such as gender identity, sexuality, motherhood, domesticity, body image, and social and political inequalities. Feminine art can be expressed through various mediums such as painting, sculpture, photography, performance art, and installation art. Many female artists have used their art as a means of expressing their personal experiences and struggles with gender discrimination and societal expectations. Feminine art has played an important role in the feminist movement by challenging traditional gender roles and advocating for women's rights. It has also contributed to the broader cultural conversation around gender and sexuality and has helped to reshape the way we think about these issues.
							</p>
						</div>
						<img className="w-full lg:w-2/3 max-w-[32rem] max-h-[38rem]" src={artwork} />
					</div>
				</div>
				
			</div>
		)
	}

}