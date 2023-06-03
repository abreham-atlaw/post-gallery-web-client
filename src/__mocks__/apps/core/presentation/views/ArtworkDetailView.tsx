import ArtworkDetailState from "@/apps/core/application/state/artworkDetailState";
import ArtworkDetailViewModel from "@/apps/core/application/viewmodels/artworkDetailViewModel";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Back from '@/assets/back.png'


interface ArtworkDetailViewProps{

	artworkID: string;

}


export default class ArtworkDetailView extends React.Component<ArtworkDetailViewProps, ArtworkDetailState>{


	private viewModel: ArtworkDetailViewModel;


	constructor(props: ArtworkDetailViewProps){
		super(props);
		this.state = new ArtworkDetailState();
		this.viewModel = new ArtworkDetailViewModel(this.state, this.setState.bind(this));
	}

	componentDidMount(): void {
		this.viewModel.initialize(this.props.artworkID)
	}

	render(): React.ReactNode {
		if(this.state.status === AsyncStatus.loading || this.state.status === AsyncStatus.none){

			return (
				<h1>Loading...</h1>
			)


		}
		if(this.state.status === AsyncStatus.failed){
			return (
				<h1>Failed...</h1>
			)
		}
		return (
			<div className="bg-[#F6F6F6] min-h-screen" >
				<div className="px-6 pt-12 pb-12 lg:hidden">
					<img className="h-8" src={Back} />
					<div className="text-4xl">{this.state.artwork!.name}</div>
					<div className="text-lg text-[#3A476A] mb-3" ><span className="text-lg text-[#3A476A]">by </span>{this.state.artwork!.artist!.fullName}</div>
					<Slideshow images={this.state.artwork!.images} />
					<p className="text-xl mt-3">Ethiopia</p>
					<div className="text-xl">Year: {new String(this.state.artwork!.creationDate)}</div>
					<div className="text-xl"><span>Dimensions:  </span> 
							{new String(this.state.artwork!.dimension.width)} W
							{new String(this.state.artwork!.dimension.height)} H 
							{new String(this.state.artwork!.dimension.depth)} D in
					</div>
					<div className="text-xl">Art Id: {this.state.artwork!.id}</div>
					<div className="text-3xl font-medium">Price: {new String(this.state.artwork!.price)} ETB</div>
					<p className="text-2xl underline">Description</p>
					<DescriptionComponent description={this.state.artwork!.description} />
					<div className="flex justify-center items-center w-56 m-auto my-8 pt-2 pb-2.5 bg-black text-white rounded-full">
						<button className="justify-center text-2xl">Purchase</button>
					</div>
					<p className="text-2xl mt-12">About the creator</p>
					<div className="bg-white rounded-lg px-3 py-5">
						<div className="flex flex-row items-center">
							<div className="w-14 h-14 bg-[url('./assets/LoginRegisterBG.png')] bg-center bg-cover rounded-full"></div>
							<p className="ml-2 text-2xl">Amanul Mehari</p>
						</div>
						<p className="mt-3 text-lg leading-5">Amanuel Meharie is a talented Eritrean artist born in 1989. He grew up in Asmara, the capital city of Eritrea, where he developed a passion for art at a young age. Amanuel's artistic journey began when he started sketching cartoons and portraits of his family and friends. After completing his high school education, Amanuel pursued his passion for art by enrolling in the College of Arts and Social Sciences at the University of Asmara. During his time at the university, he honed his skills in painting, drawing, and sculpture. Amanuel's art is heavily influenced by his Eritrean heritage and culture. He often incorporates traditional Eritrean motifs and patterns into his paintings, which depict everyday life in Eritrea. His work has been exhibited in various galleries and exhibitions both locally and internationally. In addition to his artistic pursuits, Amanuel is also a dedicated teacher. He teaches art at a local school in Asmara, where he inspires the next generation of artists. Despite facing numerous challenges as an artist in Eritrea, Amanuel remains committed to his craft and continues to create beautiful works of art that capture the essence of his homeland.</p>
					</div>
				</div>

				{/* ------------------------------------------ */}

				<div className="hidden lg:inline lg:px-8 ">
					<img className="h-8 mb-24 mt-14 mx-8" src={Back} />
					<div className="flex flex-row justify-between items-start px-12">
						<Slideshow images={this.state.artwork!.images} />
						<div className="bg-white w-4/12 rounded-xl px-10 py-10">
							<div className="text-4xl">{this.state.artwork!.name}</div>
							<div className="text-lg text-[#3A476A] mb-3" ><span className="text-lg text-[#3A476A]">by </span>{this.state.artwork!.artist!.fullName}</div>
							<p className="text-xl mt-3">Ethiopia</p>
							<div className="text-xl">Year: {new String(this.state.artwork!.creationDate)}</div>
							<div className="text-xl"><span>Dimensions:  </span> 
									{new String(this.state.artwork!.dimension.width)} W
									{new String(this.state.artwork!.dimension.height)} H 
									{new String(this.state.artwork!.dimension.depth)} D in
							</div>
							<div className="text-xl">Art Id: {this.state.artwork!.id}</div>
							<div className="text-3xl font-medium">Price: {new String(this.state.artwork!.price)} ETB</div>
							<p className="text-2xl underline">Description</p>
							<DescriptionComponent description={this.state.artwork!.description} />
							<div className="flex justify-center items-center w-56 m-auto mt-8 pt-2 pb-2.5 bg-black text-white rounded-full">
								<button className="justify-center text-2xl">Purchase</button>
							</div>
						</div>
					</div>
					<p className="ml-10 text-2xl mt-18 mb-4">About the creator</p>
					<div className="bg-white  rounded-xl px-10 py-10 mx-10 mb-10">
						<div className="flex flex-row items-center">
							<div className="w-14 h-14 mb-3 bg-[url('./assets/LoginRegisterBG.png')] bg-center bg-cover rounded-full"></div>
							<p className="ml-2 text-2xl">Amanul Mehari</p>
						</div>
						<DescriptionComponent description={this.state.artwork!.description} />
					</div>
				</div>
			</div>
		)
	}

}


export function RoutedArtworkDetailView(){
	let params = useParams();
	return <ArtworkDetailView artworkID={params.id!}/>
}



type SlideshowProps = {
	images: string[]; // array of image urls
  }
  
  const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
	return (
	  <div className="flex flex-col lg:w-7/12">
		<div className="flex flex-col lg:flex lg:flex-row">
			<div className="lg:hidden w-full h-60 mb-2 bg-cover rounded-lg" style={{ backgroundImage: `url(${images[currentImageIndex]})` }} />
			<div className=" m-auto grid grid-cols-5 gap-4 lg:grid-rows-5 lg:grid-cols-none lg:mr-4">
				{images.slice(0, 5).map((imageUrl, index) => (
					<div
						key={imageUrl}
						onClick={() => setCurrentImageIndex(index)}
						className={`w-16 h-11 lg:w-24 lg:h-16 bg-cover cursor-pointer ${currentImageIndex === index ? 'border-4 border-black' : ''}`}
						style={{ backgroundImage: `url(${imageUrl})` }}
					/>
				))}
			</div>
			<div className="hidden lg:inline w-full h-4/12 mb-2 bg-cover rounded-lg" style={{ backgroundImage: `url(${images[currentImageIndex]})` }} />
		</div>
		<div className="m-auto grid grid-cols-5 gap-2 mt-3">
			{images.slice(0, 5).map((imageUrl, index) => (
				<div
					key={imageUrl}
					onClick={() => setCurrentImageIndex(index)}
					className={`w-3.5 h-3.5 rounded-full cursor-pointer ${currentImageIndex === index ? 'bg-[#B0B0B0]' : 'bg-[#E9E9E9]'}`}
				/>
			))}
		</div>
	  </div>
	);
  }

  const DescriptionComponent = ({ description }: { description: string }) => {
	const [showMore, setShowMore] = useState(false);
  
	const toggleShowMore = () => {
	  setShowMore(!showMore);
	}
  
	if (description.length <= 200) {
	  return <p className="text-base leading-5">{description}</p>;
	}
  
	if (showMore) {
	  return (
		<div>
		  <p className="text-base leading-5">{description}</p>
		  <button className="btn btn-primary font-semibold" onClick={toggleShowMore}>Show Less</button>
		</div>
	  );
	}
  
	return (
	  <div>
		<p className="text-base leading-5">{description.substring(0, 200)}...</p>
		<button className="btn btn-primary font-semibold" onClick={toggleShowMore}>Read More</button>
	  </div>
	);
  }
