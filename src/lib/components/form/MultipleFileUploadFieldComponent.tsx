// import Field from "@/lib/forms/fields";
// import { ReactNode } from "react";
// import ListFieldComponent from "./ListFieldComponent";
// import { FileUploadFieldComponentProps, FileUploadViewModel } from "./FileUploadFIeldComponent";
// import { FieldComponentProps, FieldComponentState } from "./FieldComponent";
// import FileStorage from "@/lib/filestorage/fileStorage";
// import { AsyncState, AsyncStatus } from "@/lib/state/asyncState";



// export interface MultipleFileUploadFieldComponentProps extends FieldComponentProps<string[]>{

// 	fileStorage: FileStorage

// }

// class FileUploadState extends AsyncState implements FieldComponentState<(string | null)[]>{
	
// 	field: Field<(string | null)[]>;

// 	constructor(field: Field<(string | null)[]>, status?: AsyncStatus, error: any = null){
// 		super(status, error);
// 		this.field = field;
// 	}

// }


// export default class MultipleFileUploadComponent extends ListFieldComponent<string>{
	
// 	private viewModel: FileUploadViewModel

// 	constructor(props: MultipleFileUploadFieldComponentProps){
// 		super(props);
// 		this.state = new FileUploadState(this.state.field);
// 		this.viewModel = new FileUploadViewModel(this.state as FileUploadState, this.setState.bind(this), props.fileStorage);
// 	}

// 	protected constructChild(field: Field<string>, removeCallback: () => void) {
// 		throw new Error("Method not implemented.");
// 	}

// 	private handleFileUpload = (file: File, addCallback: () => Field<string>) =>{
// 		let field = addCallback();
		
// 	} 


// 	protected generateContainer(child: ReactNode, addCallback: () => Field<string>): ReactNode {
// 		return (
// 			<div className="flex flex-col p-6 justify-center items-center border-dashed border-2 rounded-lg border-[#D6D6D6]">
// 				<div className="flex flex-col lg:flex-row justify-between items-center w-full">
// 					<img className="h-16 bg-contain" src={Upload}  />
// 					<div className="mb-2 lg:mb-0 text-center lg:text-start">
// 						<p className="text-xl  font-medium">Upload your images here</p>
// 						<p className="text-xl  text-[#D6D6D6]">Supported formates: JPEG, JPG</p>
// 						<p className="text-md  text-black">Upload 3-5 photos</p>
// 					</div>
// 					<label htmlFor="image-upload" className="flex justify-center items-center px-12  h-11 bg-white text-black rounded-full border-2 border-[#D6D6D6] cursor-pointer">
// 					<p className="justify-center text-xl">Browse</p>
// 					</label>
// 					<input 
// 						id="image-upload"
// 						type="file"
// 						accept="image/*"
// 						multiple
// 						onChange={handleImageChange}
// 						className="hidden"
// 					/>
// 				</div>
// 				<div className="flex flex-wrap px-8">
// 					{
// 						child
// 					}
// 				</div>
// 			</div>
// 		);
// 	}

// }