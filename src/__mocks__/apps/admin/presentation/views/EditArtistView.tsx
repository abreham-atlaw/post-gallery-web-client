import WriteArtistState from "@/apps/admin/application/states/writeArtistState";
import EditArtistViewModel from "@/apps/admin/application/viewmodels/editArtistViewModel";
import React from "react";



export default class EditArtistView extends React.Component<any, WriteArtistState>{
	
	private viewModel: EditArtistViewModel;

	constructor(props: any){
		super(props)
		this.state = new WriteArtistState()
		this.viewModel = this.createViewModel()
	}

	protected createViewModel(): EditArtistViewModel{
		return new EditArtistViewModel(this.state, this.setState.bind(this));
	}

	protected async initialize(){
		await this.viewModel.init("TODO");
	}

	componentDidMount(): void {
		
	}


}