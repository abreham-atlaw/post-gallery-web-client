import { ReactNode } from "react";
import { FieldComponent, FieldComponentProps, FieldComponentState } from "./FieldComponent";
import FileStorage from "@/lib/filestorage/fileStorage";
import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import { AsyncState, AsyncStatus } from "@/lib/state/asyncState";
import Field from "@/lib/forms/fields";



export interface FileUploadFieldComponentProps extends FieldComponentProps<string>{

	fileStorage: FileStorage

}

class FileUploadState extends AsyncState implements FieldComponentState<string>{
	
	field: Field<string>;

	constructor(field: Field<string>, status?: AsyncStatus, error: any = null){
		super(status, error);
		this.field = field;
	}

}

class FileUploadViewModel extends AsyncViewModel<FileUploadState>{

	private fileStorage: FileStorage

	constructor(state: FileUploadState, stateSetter: Function, fileStorage: FileStorage){
		super(state, stateSetter)
		this.fileStorage = fileStorage;
	}

	async upload(value: File, callback: Function){
		await this.asyncCall(async () => {
			callback(await this.fileStorage.store(value))
		})
		if(this.state.error != null){
			this.state.field.error = this.state.error.message;
		}
		this.syncState()
	}

}

export default class FileUploadFieldComponent extends FieldComponent<string, FileUploadFieldComponentProps>{
	
	private viewModel: FileUploadViewModel

	constructor(props: FileUploadFieldComponentProps){
		super(props);
		this.state = new FileUploadState(this.state.field);
		this.viewModel = new FileUploadViewModel(this.state as FileUploadState, this.setState.bind(this), props.fileStorage);
	}

	private async onFileChanged(value: File | null | undefined, callback: Function){
		if(value === null || value === undefined){
			return
		}
		await this.viewModel.upload(value, callback)
	}

	protected constructInputNode(value: string | null, callback: Function): ReactNode {

		if((this.state as FileUploadState).status === AsyncStatus.loading){
			return (<div>uploading...</div>)
		}

		return (
			<div>
				<input type="file" onChange={(event) => {this.onFileChanged(event.target.files?.item(0), callback)}}/>
				<div>{ value }</div>
			</div>
		)
	}


}