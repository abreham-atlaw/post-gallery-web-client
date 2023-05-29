import ArtworkDetailState from "@/apps/core/application/state/artworkDetailState";
import ArtworkDetailViewModel from "@/apps/core/application/viewmodels/artworkDetailViewModel";
import { AsyncStatus } from "@/lib/state/asyncState";
import React from "react";
import { useParams } from "react-router-dom";



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
			<div>
				<div>Name:{this.state.artwork!.name}</div>
				<div>Artist:{this.state.artwork!.artist!.fullName}</div>
				<div>Created on:{new String(this.state.artwork!.creationDate)}</div>
				<div>price:{this.state.artwork!.price}</div>
			</div>
		)
	}

}


export function RoutedArtworkDetailView(){
	let params = useParams();
	return <ArtworkDetailView artworkID={params.id!}/>
}