import ArtworkDetailState from "@/apps/core/application/state/artworkDetailState";
import ArtworkDetailViewModel from "@/apps/core/application/viewmodels/artworkDetailViewModel";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Back from '@/assets/back.png'
import CheckOut1 from '@/assets/CheckOut1.png'
import CheckOut2 from '@/assets/CheckOut2.png'
import CheckOut3 from '@/assets/CheckOut3.png'
import CheckOut4 from '@/assets/CheckOut4.png'


interface ArtworkDetailViewProps{

	artworkID: string;

}


export default class CartView extends React.Component<ArtworkDetailViewProps, ArtworkDetailState>{


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
					<img className="h-8 mb-4" src={Back} />
					<div className="text-4xl font-medium pb-3.5 border-b-2 border-[#EFEFEF]">Cart</div>
                    <p className="text-3xl mt-3.5 ">{this.state.artwork!.name}</p>
					<div className="text-sm text-[#3A476A] mb-3" ><span className="text-sm text-[#3A476A]">by </span>{this.state.artwork!.artist!.fullName}</div>
                    <div
						className={`w-full h-60 mb-2 bg-cover rounded-lg `}
						style={{ backgroundImage: `url(${this.state.artwork!.images[0]})` }}
					/>
                    <div className="flex flex-row justify-between text-base pr-8">
                        <p>Dimensions:  </p> 
                        <p>
                            {new String(this.state.artwork!.dimension.width)}W . 
							{new String(this.state.artwork!.dimension.height)}H .  
							{new String(this.state.artwork!.dimension.depth)}D in
                        </p>
                    </div>
                    <div className="flex flex-row justify-between text-base pr-8">
                        <p>Material:  </p>
                        <p>{this.state.artwork!.mediaUsed}</p> 
                    </div>
                    <div className="mt-2.5 flex flex-row justify-between text-base text-left pr-8">
                        <p>VAT:</p>
                        <p>Included after checkout</p> 
                    </div>
                    <div className="flex flex-row justify-between text-base pr-8">
                        <p>ArtWork Price:  </p>
                        <p>{this.state.artwork!.price} ETB</p>  
                    </div>
                    <p className="text-3xl mt-3.5 underline">Shipping</p>
                    <div className="flex justify-between mt-5 text-xl pb-3.5 border-b-2 border-[#EFEFEF]">
                        <div className="flex items-center space-x-2">
                            <label>Local</label>
                            <input 
                            type="radio" 
                            name="radio" 
                            value="local" 
                            className="form-radio text-blue-500 h-5 w-5"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <label>International</label>
                            <input 
                            type="radio" 
                            name="radio" 
                            value="international" 
                            className="form-radio text-blue-500 h-5 w-5"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between text-2xl font-medium mt-5">
                        <p >Estimated Total:</p>
                        <p >{this.state.artwork!.price} ETB</p>  
                    </div>
                    <div className="flex justify-center items-center w-72 m-auto mt-4 mb-6 pt-3 pb-4 bg-black text-white rounded-md">
                        <button className="justify-center text-2xl">CheckOut</button>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-8">
                        <MyComponent imageSrc={CheckOut1} title={"Satisfaction Guaranteed."} subtitle={"An art gallery that satisfies, service that delights."}  />
                        <MyComponent imageSrc={CheckOut2} title={"Safe and Secure shopping."} subtitle={"All payments and transactions are secure and encrypted."}  />
                        <MyComponent imageSrc={CheckOut3} title={"Support An Artist With Every Purchase."} subtitle={"We pay our artists more on every sale than other galleries."}  />
                        <MyComponent imageSrc={CheckOut4} title={"High class customer service"} subtitle={"We deliver world-class customer service to all of our art buyers."}  />
                    </div>    
				</div>

				{/* ------------------------------------------ */}

				<div className="hidden lg:inline lg:px-8 ">
					<img className="h-8 mb-24 mt-14 mx-8" src={Back} />
					<div className="flex flex-row justify-between items-start px-12">
						
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
							
							<div className="flex justify-center items-center w-56 m-auto mt-8 pt-2 pb-2.5 bg-black text-white rounded-full">
								<button className="justify-center text-2xl">Purchase</button>
							</div>
						</div>
					</div>
					<p className="ml-10 text-2xl mt-18 mb-4">About the creator</p>
					<div className="bg-white  rounded-xl px-10 py-10 mx-10 mb-10">
						<div className="flex flex-row items-center">
							<div className="w-14 h-14 mb-3 bg-[url('./assets/LoginRegisterBG.png')] bg-center bg-cover rounded-full"></div>
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
	return <CartView artworkID={params.id!}/>
}



type MyComponentProps = {
    imageSrc: string;
    title: string;
    subtitle: string;
  };
  
  const MyComponent: React.FC<MyComponentProps> = ({ imageSrc, title, subtitle }) => {
    return (
      <div className="flex items-start space-x-4 mt-3">
        <img className="w-16" src={imageSrc} alt="" />
        <div>
          <h2 className="text-2xl font-medium leading-6">{title}</h2>
          <p className="text-base text-[#797979] leading-5">{subtitle}</p>
        </div>
      </div>
    );
  };