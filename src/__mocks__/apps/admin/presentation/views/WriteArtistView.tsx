import WriteArtistState from "@/apps/admin/application/states/writeArtistState";
import EditArtistViewModel from "@/apps/admin/application/viewmodels/editArtistViewModel";
import { Gender } from "@/apps/core/data/models/gender";
import DefaultFileUploadComponent from "@/apps/core/presentation/components/DefaultFileUploadComponent";
import DateFieldComponent from "@/lib/components/form/DateFieldComponent";
import EnumFieldComponent from "@/lib/components/form/EnumFieldComponent";
import FileUploadFieldComponent from "@/lib/components/form/FileUploadFIeldComponent";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { FormEvent, useEffect, useState } from "react";
import Upload from '@/assets/Upload.png'


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
				<div className="px-14 py-12 ">
					<p className="text-xl font-medium">Dashboard/<span className="text-[#A1A6B3]">Upload Art</span></p>
					<div className="py-12 pb-3.5 mb-3 border-b-2 border-[#C1C1C1] flex flex-row justify-between">
						<p className="text-4xl font-bold">Upload Art</p>
						<div className="flex justify-center items-center m-auto px-8 pt-3 pb-4 bg-black text-white rounded-md">
							<button className="justify-center text-2xl">Publish</button>
						</div>
					</div>
					<p className="text-3xl font-semibold my-4">Art details</p>
					<ImageUploader />
					<form onSubmit={this.handleSubmit} className="w-4/6">
						<p className="text-xl mt-2.5">Full name:</p> <TextFieldComponent field={this.state.form.fullName} syncer={this.viewModel.syncState}/>
						<p className="text-xl mt-2.5">Full name:</p> <TextFieldComponent field={this.state.form.fullName} syncer={this.viewModel.syncState}/>
						<p className="h-60 text-xl mt-2.5">Full name:</p> <TextFieldComponent field={this.state.form.fullName} syncer={this.viewModel.syncState}/>
						
					</form>
				</div>
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





type ImageUploaderProps = {};

const ImageUploader: React.FC<ImageUploaderProps> = () => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );

            setSelectedImages((prevImages) => prevImages.concat(fileArray));
        }
    };

	const removeImage = (removeIndex: number) => {
        setSelectedImages(selectedImages.filter((_, index) => index !== removeIndex));
    };

    useEffect(() => {
        return () => {
            // Make sure to revoke the data uris to avoid memory leaks
            selectedImages.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [selectedImages]);

    return (
        <div className="flex flex-col justify-center items-center mx-8 border-dashed border-2 rounded-lg border-[#D6D6D6]">
			<div className="flex flex-row justify-between w-full p-8">
				<img className="w-16" src={Upload}  />
				<div>
					<p className="text-xl font-semibold">Upload your images here</p>
					<p className="text-xl text-[#D6D6D6]">Supported formates: JPEG, JPG</p>
				</div>
				<div className="flex justify-center items-center px-12  h-12 bg-white text-black rounded-full border-2 border-[#D6D6D6]">
					<button className="justify-center text-xl">Browse</button>
				</div>
			</div>
            <input type="file" accept="image/*" multiple onChange={handleImageChange} />
            <div className="flex flex-wrap p-8">
                {selectedImages.map((image, idx) => (
                    <div key={idx} className="w-32 h-48 mr-3 relative">
                        <img src={image} className="object-cover w-full h-full" alt=""/>
						<button className="absolute top-2 right-2 bg-red-500 text-white font-bold px-2 rounded-full" onClick={() => removeImage(idx)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
};