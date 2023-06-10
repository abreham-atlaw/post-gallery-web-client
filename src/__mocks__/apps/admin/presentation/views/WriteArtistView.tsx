import WriteArtistState from "@/apps/admin/application/states/writeArtistState";
import EditArtistViewModel from "@/apps/admin/application/viewmodels/editArtistViewModel";
import { Gender } from "@/apps/core/data/models/gender";
import DefaultFileUploadComponent from "@/apps/core/presentation/components/DefaultFileUploadComponent";
import DateFieldComponent from "@/lib/components/form/DateFieldComponent";
import EnumFieldComponent from "@/lib/components/form/EnumFieldComponent";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { FormEvent, ReactNode, useEffect, useState } from "react";
import Upload from '@/assets/Upload.png'
import { FieldComponent, FieldComponentProps } from "@/lib/components/form/FieldComponent";
import Toast from "@/lib/components/status/successPopup";
import showSuccess from "@/lib/components/status/successPopup";


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
					<div className="w-full pt-10 pb-6 mb-3 border-b-2 border-[#C1C1C1] flex flex-row justify-between">
						<p className="text-3xl lg:text-4xl font-bold">Upload Art</p>
						<div className="flex items-center px-4 py-1 lg:px-12 lg:pt-2 lg:pb-2 bg-black text-white rounded-full">
							<button onClick={showSuccess} className="justify-center text-sm lg:text-xl">Publish</button>
						</div>
					</div>
					<div className="lg:pl-8">
						<p className="mt-8 mb-4">⚫<span className="text-2xl font-medium">   Art details</span></p>
						<form onSubmit={this.handleSubmit} className="w-full lg:w-4/6 ">
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Art name  <span className="text-red-500 required-dot"> *</span></p> <TextFieldComponents field={this.state.form.fullName} syncer={this.viewModel.syncState}/>
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Artist name  <span className="text-red-500 required-dot"> *</span></p> <TextFieldComponents field={this.state.form.fullName} syncer={this.viewModel.syncState}/>
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Description  <span className="text-red-500 required-dot"> *</span></p> 
							<textarea className="flex-1 w-full h-32 px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-[#D6D6D6] border-[3px] rounded-lg appearance-none focus:outline-none focus:ring-2" id="comment" placeholder="Enter your comment" name="comment" >
							</textarea>
							<div className="h-4"></div>
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Picture  <span className="text-red-500 required-dot"> *</span></p>
							<ImageUploader />
							<div className="h-4"></div>
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Dimension  <span className="text-red-500 required-dot"> *</span></p>
							<MyInput options={['In', 'CM', 'MM']} />
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Material</p> <TextFieldComponents field={this.state.form.fullName} syncer={this.viewModel.syncState}/>
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Full name:</p> <TextFieldComponents field={this.state.form.fullName} syncer={this.viewModel.syncState}/>
							
							<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Price  <span className="text-red-500 required-dot"> *</span></p>
							<MyInput options={['USD', 'ETB', 'EUR']} />
						</form>
					</div>
				</div>
				Status: {this.state.status}
				
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

  
  