import ArtworkDetailState from "@/apps/core/application/state/artworkDetailState";
import ArtworkDetailViewModel from "@/apps/core/application/viewmodels/artworkDetailViewModel";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Back from '@/assets/back.png'
import ViewModelView from "@/lib/components/views/ViewModelView";


interface ArtworkDetailViewProps{

	artworkID: string;

}
export default class ArtworkDetailView extends ViewModelView<ArtworkDetailViewModel, ArtworkDetailViewProps, ArtworkDetailState>{
	
	onCreateViewModel(state: ArtworkDetailState): ArtworkDetailViewModel {
		return new ArtworkDetailViewModel(state, this.setState.bind(this))
	}
	onCreateState(): ArtworkDetailState {
		return new ArtworkDetailState(this.props.artworkID);
	}

	onCreateMain(): React.ReactNode {
		return (
			<div className="bg-[#F6F6F6] min-h-screen" >
				<div className="px-6 pt-12 pb-12 lg:hidden">
					<a href="/search">
						<img className="h-8" src={Back} />
					</a>
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
							<p className="ml-2 text-2xl">{this.state.artwork!.name}</p>
						</div>
						<p className="mt-3 text-lg leading-5">{this.state.artwork!.description}</p>
					</div>
				</div>

				{/* ------------------------------------------ */}

				<div className="hidden lg:inline lg:px-8 ">
					<a className="w-10" href="/search">
						<img className="h-8 mb-8 mt-4 mx-8" src={Back} />
					</a>
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
								<Link to={`/checkout/${this.state.artwork?.id}`} className="justify-center text-2xl">Purchase</Link>
							</div>
						</div>
					</div>
					<p className="ml-10 text-2xl mt-18 mb-4">About the creator</p>
					<div className="bg-white  rounded-xl px-10 py-10 mx-10 mb-10">
						<div className="flex flex-row items-center">
							<div className={`w-14 h-14 mb-3 bg-center bg-cover rounded-full`} style={{backgroundImage: `url(${this.state.artwork?.artist!.avatar})`}}>
							</div>
							<p className="ml-2 text-2xl">{this.state.artwork!.artist?.fullName} </p>
						</div>
						<p className="text-base leading-5">{this.state.artwork!.artist?.biography}</p>
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

  const DescriptionComponent = ({ description }: { description: String }) => {
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
