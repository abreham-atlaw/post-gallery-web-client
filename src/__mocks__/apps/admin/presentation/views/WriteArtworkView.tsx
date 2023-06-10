import WriteArtworkState from "@/apps/admin/application/states/writeArtworkState";
import EditArtworkViewModel from "@/apps/admin/application/viewmodels/editArtworkViewModel";
import { Status } from "@/apps/core/data/models/artwork";
import DefaultFileUploadComponent from "@/apps/core/presentation/components/DefaultFileUploadComponent";
import DateFieldComponent from "@/lib/components/form/DateFieldComponent";
import EnumFieldComponent from "@/lib/components/form/EnumFieldComponent";
import ListFieldComponent from "@/lib/components/form/ListFieldComponent";
import NumberFieldComponent from "@/lib/components/form/NumberFieldComponent";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import Field from "@/lib/forms/fields";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { FormEvent, ReactNode, useEffect, useState } from "react";
import Upload from '@/assets/Upload.png'
import { FieldComponent, FieldComponentProps } from "@/lib/components/form/FieldComponent";


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
			<div className="px-14 py-12 ">
				<p className="text-xl font-medium">Dashboard/<span className="text-[#A1A6B3]">Upload Artist</span></p>
				<div className="w-full pt-10 pb-6 mb-3 border-b-2 border-[#C1C1C1] flex flex-row justify-between">
					<p className="text-3xl lg:text-4xl font-bold">Upload Artist</p>
					<div className="flex items-center px-4 py-1 lg:px-12 lg:pt-2 lg:pb-2 bg-black text-white rounded-full">
						<button className="justify-center text-sm lg:text-xl">Publish</button>
					</div>
				</div>
				<div className="lg:pl-8">
					<p className="mt-8 mb-4">⚫<span className="text-2xl font-medium">   Art details</span></p>
					<form onSubmit={this.handleSubmit} className="w-full lg:w-4/6 ">
						<div className="flex flex-row justify-between">
							<div className="w-full"><p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">First name <span className="text-red-500 required-dot"> *</span></p> <TextFieldComponents field={this.state.form.name} syncer={this.viewModel.syncState}/></div>
							<div className="w-16"></div>
							<div className="w-full"><p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Last name <span className="text-red-500 required-dot"> *</span></p> <TextFieldComponents field={this.state.form.name} syncer={this.viewModel.syncState}/></div>
						</div>
						<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">User name <span className="text-red-500 required-dot"> *</span></p> <TextFieldComponents field={this.state.form.name} syncer={this.viewModel.syncState}/>
						<div className="flex flex-row justify-between">
							<div className="w-full"><p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Birthdate <span className="text-red-500 required-dot"> *</span></p> <DateFieldComponent field={this.state.form.creationDate} syncer={this.viewModel.syncState} /></div>
							<div className="w-16"></div>
							<div className="w-full mt-2.5 ">
								<p className="text-xl text-[#5E5E64] font-medium lg:mb-2">Gender <span className="text-red-500 required-dot"> *</span></p>
								<div className="flex flex-col lg:flex-row lg:items-end mt-2 lg:mt-5 text-xl lg:pb-3.5">
									<div className="flex items-center space-x-2 mr-4">
										<input 
											type="radio" 
											name="radio" 
											value="local" 
											className="form-radio text-blue-500 h-5 w-5"
										/>
										<label>Male</label>
									</div>
									<div className="flex items-center space-x-2">
										<input 
											type="radio" 
											name="radio" 
											value="international" 
											className="form-radio text-blue-500 h-5 w-5"
										/>
										<label>Female</label>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-row justify-between">
							<div className="w-full"><p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Email <span className="text-red-500 required-dot"> *</span></p> <TextFieldComponents field={this.state.form.name} syncer={this.viewModel.syncState}/></div>
							<div className="w-12"></div>
							<div className="w-full"><p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Phone number <span className="text-red-500 required-dot"> *</span></p> <MyInput options={['+251', 'CM', 'MM']} /></div>
						</div>
						<div className="h-4"></div>
						<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Picture <span className="text-red-500 required-dot"> *</span></p>
						<ImageUploader />
						<div className="h-4"></div>
						<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Description</p> 
						<textarea className="flex-1 w-full h-32 px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-[#D6D6D6] border-[3px] rounded-lg appearance-none focus:outline-none focus:ring-2" id="comment" placeholder="Enter your comment" name="comment" >
							</textarea>
						
						<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Education</p> <TextFieldComponents field={this.state.form.mediaUsed} syncer={this.viewModel.syncState}/>
						<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Achievement</p> <TextFieldComponents field={this.state.form.mediaUsed} syncer={this.viewModel.syncState}/>
						<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Special quote</p> <TextFieldComponents field={this.state.form.mediaUsed} syncer={this.viewModel.syncState}/>
						<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Previous Collection</p> <TextFieldComponents field={this.state.form.mediaUsed} syncer={this.viewModel.syncState}/>
						
					</form>
				</div>
			</div>
			Status: {this.state.status}
			
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
        <div className="flex flex-col p-6 justify-center items-center border-dashed border-2 rounded-lg border-[#D6D6D6]">
			<div className="flex flex-col lg:flex-row justify-between items-center w-full">
				<img className="h-16 bg-contain" src={Upload}  />
				<div className="mb-2 lg:mb-0 text-center lg:text-start">
					<p className="text-xl  font-medium">Upload your images here</p>
					<p className="text-xl  text-[#D6D6D6]">Supported formates: JPEG, JPG</p>
					<p className="text-md  text-black">Upload 3-5 photos</p>
				</div>
				<label htmlFor="image-upload" className="flex justify-center items-center px-12  h-11 bg-white text-black rounded-full border-2 border-[#D6D6D6] cursor-pointer">
				<p className="justify-center text-xl">Browse</p>
				</label>
				<input 
					id="image-upload"
					type="file"
					accept="image/*"
					multiple
					onChange={handleImageChange}
					className="hidden"
				/>
			</div>
            <div className="flex flex-wrap px-8">
                {selectedImages.map((image, idx) => (
                    <div key={idx} className="w-32 h-48 mr-3 relative">
                        <img src={image} className="object-cover w-full h-full mt-4" alt=""/>
						<button className="absolute top-2 right-2 bg-red-500 text-white font-bold px-2 rounded-full" onClick={() => removeImage(idx)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

type MyInputProps = {
    options: string[]
}

const MyInput: React.FC<MyInputProps> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [textInput, setTextInput] = useState<string>('');

    return (
        <div className="flex rounded-md h-14 text-black pl-3 border-[#D6D6D6] border-[3px]  lg:h-16 overflow-hidden">
            <select 
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="bg-white pr-2">
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="w-full pl-4 "
            />
        </div>
    );
}

interface TextFieldComponentProps extends FieldComponentProps<string> {
	placeholder?: string;
  }
  
  class TextFieldComponents extends FieldComponent<string, TextFieldComponentProps>{
	protected constructInputNode(value: string | null, callback: Function): ReactNode {
	  return (
		<input className="w-full rounded h-14 text-black pl-3 border-[#D6D6D6] border-[3px] lg:h-16 placeholder-[#575757] text-xl" type="text" onChange={(event) => {callback(event.target.value)}} value={(value === null)?"":value} placeholder={this.props.placeholder} />
	  )
	}
  }
  
