import WriteArtworkState from "@/apps/admin/application/states/writeArtworkState";
import EditArtworkViewModel from "@/apps/admin/application/viewmodels/editArtworkViewModel";
import { Status } from "@/apps/core/data/models/artwork";
import DefaultFileUploadComponent from "@/apps/core/presentation/components/DefaultFileUploadComponent";
import DateFieldComponent from "@/lib/components/form/DateFieldComponent";
import EnumFieldComponent from "@/lib/components/form/EnumFieldComponent";
import FileUploadFieldComponent from "@/lib/components/form/FileUploadFIeldComponent";
import ListFieldComponent from "@/lib/components/form/ListFieldComponent";
import NumberFieldComponent from "@/lib/components/form/NumberFieldComponent";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import Field, { TextField } from "@/lib/forms/fields";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { FormEvent } from "react";


export default abstract class WriteArtworkView<P> extends React.Component<P, WriteArtworkState>{

	private viewModel: EditArtworkViewModel;

	constructor(props: any){
		super(props)
		this.state = new WriteArtworkState()
		this.viewModel = this.createViewModel()
	}

	protected abstract createViewModel(): EditArtworkViewModel


	handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		await this.viewModel.save()
	}

	render(): React.ReactNode {

		if(this.state.status === AsyncStatus.done){
			return <h1>Artwork Created Successfully!</h1>
		}
		return (

			<div>
				Status: {this.state.status}
				<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="artistID">Artist ID:</label>
					<TextFieldComponent field={this.state.form.artistID} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="name">Name:</label>
					<TextFieldComponent field={this.state.form.name} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="description">Description:</label>
					<TextFieldComponent field={this.state.form.description} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="price">Price:</label>
					<NumberFieldComponent field={this.state.form.price} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="dimensionWidth">Width:</label>
					<NumberFieldComponent field={this.state.form.dimensionWidth} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="dimensionHeight">Height:</label>
					<NumberFieldComponent field={this.state.form.dimensionHeight} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="dimensionDepth">Depth:</label>
					<NumberFieldComponent field={this.state.form.dimensionDepth} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="status">Status:</label>
					<EnumFieldComponent field={this.state.form.status} enumClass={Status} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="creationDate">Creation Date:</label>
					<DateFieldComponent field={this.state.form.creationDate} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="mediaUsed">Media Used:</label>
					<TextFieldComponent field={this.state.form.mediaUsed} syncer={this.viewModel.syncState} />
				</div>
				<div>
					<label htmlFor="images">Images:</label>
					<ListFieldComponent field={this.state.form.images} syncer={this.viewModel.syncState} generator={
						(field: Field<string>) => (<DefaultFileUploadComponent field={field} syncer={this.viewModel.syncState}/>)
					}/>
					{/* <FileUploadFieldComponent field={this.state.form.images} syncer={this.viewModel.syncState} /> */}
				</div>
				<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}