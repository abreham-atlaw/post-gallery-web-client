import WriteArtistState from "@/apps/admin/application/states/writeArtistState";
import EditArtistViewModel from "@/apps/admin/application/viewmodels/editArtistViewModel";
import { Gender } from "@/apps/core/data/models/gender";
import DefaultFileUploadComponent from "@/apps/core/presentation/components/DefaultFileUploadComponent";
import DateFieldComponent from "@/lib/components/form/DateFieldComponent";
import EnumFieldComponent from "@/lib/components/form/EnumFieldComponent";
import FileUploadFieldComponent from "@/lib/components/form/FileUploadFIeldComponent";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { FormEvent } from "react";



export default abstract class WriteArtistView<P> extends React.Component<P, WriteArtistState>{
	
	private viewModel: EditArtistViewModel;

	constructor(props: any){
		super(props)
		this.state = new WriteArtistState()
		this.viewModel = this.createViewModel()
	}

	protected abstract createViewModel(): EditArtistViewModel


	handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		await this.viewModel.save()
	}

	render(): React.ReactNode {

		if(this.state.status === AsyncStatus.done){
			return <h1>Artist Created Successfully!</h1>
		}
		return (

			<div>
				Status: {this.state.status}
				<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="fullName">Full Name:</label>
					<TextFieldComponent field={this.state.form.fullName} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="gender">Gender:</label>
					<EnumFieldComponent field={this.state.form.gender} enumClass={Gender} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<TextFieldComponent field={this.state.form.email} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="phoneNumber">Phone Number:</label>
					<TextFieldComponent field={this.state.form.phoneNumber} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="nationality">Nationality:</label>
					<TextFieldComponent field={this.state.form.nationality} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="dateOfBirth">Date of Birth:</label>
					<DateFieldComponent field={this.state.form.dateOfBirth} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="biography">Biography:</label>
					<TextFieldComponent field={this.state.form.biography} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="avatar">Avatar:</label>
					<DefaultFileUploadComponent field={this.state.form.avatar} syncer={this.viewModel.syncState} />
				</div>
				<button type="submit">Submit</button>
				</form>
			</div>
		)
	}


}