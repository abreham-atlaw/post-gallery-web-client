import WriteArtworkState from "@/apps/admin/application/states/writeArtworkState";
import EditArtworkViewModel from "@/apps/admin/application/viewmodels/editArtworkViewModel";
import { Status } from "@/apps/core/data/models/artwork";
import { DefaultImageUploadComponent } from "@/apps/core/presentation/components/DefaultFileUploadComponent";
import DateFieldComponent from "@/lib/components/form/DateFieldComponent";
import EnumFieldComponent from "@/lib/components/form/EnumFieldComponent";
import ListFieldComponent from "@/lib/components/form/ListFieldComponent";
import TextFieldComponent, { TextBoxComponent } from "@/lib/components/form/TextFieldComponent";
import Field from "@/lib/forms/fields";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { FormEvent } from "react";
import { UnitFieldComponent } from "@/lib/components/form/PrefixInputFieldComponent";


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
			return <h1>Artist Created Successfully!</h1>
		}
		return (

			<div>
				<form onSubmit={this.handleSubmit} className="px-14 py-12 ">
					<p className="text-xl font-medium">Dashboard/<span className="text-[#A1A6B3]">Upload Art</span></p>
					<div className="w-full pt-10 pb-6 mb-3 border-b-2 border-[#C1C1C1] flex flex-row justify-between">
						<p className="text-3xl lg:text-4xl font-bold">Upload Art</p>
						<div className="flex items-center px-4 py-1 lg:px-12 lg:pt-2 lg:pb-2 bg-black text-white rounded-full">
							<button type="submit" className="justify-center text-sm lg:text-xl">Publish</button>
						</div>
					</div>
					<div className="lg:pl-8">
						<p className="mt-8 mb-4">⚫<span className="text-2xl font-medium">   Art details</span></p>
						<div className="w-full lg:w-4/6 ">
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Art name  <span className="text-red-500 required-dot"> *</span></p> <TextFieldComponent field={this.state.form.name} syncer={this.viewModel.syncState}/>
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Artist ID  <span className="text-red-500 required-dot"> *</span></p> <TextFieldComponent field={this.state.form.artistID} syncer={this.viewModel.syncState}/>
							<div className="w-full"><p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Creation Date<span className="text-red-500 required-dot"> *</span></p> <DateFieldComponent field={this.state.form.creationDate} syncer={this.viewModel.syncState} /></div>

							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Description <span className="text-red-500 required-dot"> *</span></p> 
							<TextBoxComponent field={this.state.form.description} />
							<div className="h-4"></div>
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Picture  <span className="text-red-500 required-dot"> *</span></p>
							<ListFieldComponent field={this.state.form.images} generator={
								(field: Field<string>) => <DefaultImageUploadComponent field={field} />
							}/>
							<div className="h-4"></div>
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Dimension  <span className="text-red-500 required-dot"> *</span></p>
							<div className="flex flex-row justify-between">
								<div className="w-full"><p className="text-l text-[#5E5E64] font-medium mt-2 mb-2">Width<span className="text-red-500 required-dot"> *</span></p> <UnitFieldComponent field={this.state.form.dimensionWidth} options={["In"]} syncer={this.viewModel.syncState}/></div>
								<div className="w-16"></div>
								<div className="w-full"><p className="text-l text-[#5E5E64] font-medium mt-2 mb-2">Height<span className="text-red-500 required-dot"> *</span></p> <UnitFieldComponent field={this.state.form.dimensionHeight} options={["In"]} syncer={this.viewModel.syncState}/></div>
								<div className="w-16"></div>
								<div className="w-full"><p className="text-l text-[#5E5E64] font-medium mt-2 mb-2">Depth<span className="text-red-500 required-dot"> *</span></p> <UnitFieldComponent field={this.state.form.dimensionDepth} options={["In"]} syncer={this.viewModel.syncState}/></div>
							</div>
							
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Material</p> <TextFieldComponent field={this.state.form.mediaUsed} syncer={this.viewModel.syncState}/>
							{/* <p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Full name:</p> <TextFieldComponent field={this.state.form} syncer={this.viewModel.syncState}/> */}
							
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Price  <span className="text-red-500 required-dot"> *</span></p>
							<UnitFieldComponent field={this.state.form.price} syncer={this.viewModel.syncState} options={["USD"]}/>

							<div className="w-full mt-2.5 ">
								<p className="text-xl text-[#5E5E64] font-medium lg:mb-2">Status <span className="text-red-500 required-dot"> *</span></p>
								<EnumFieldComponent field={this.state.form.status} enumClass={Status} />
							</div>
						</div>
					</div>
				</form>
				
			</div>
		)
	}

	
}