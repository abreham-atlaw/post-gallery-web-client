import { ReactNode } from "react";
import { FieldComponent, FieldComponentProps } from "./FieldComponent";
import FileStorage from "@/lib/filestorage/fileStorage";



interface FileUploadFieldComponentProps extends FieldComponentProps<string>{

	fileStorage: FileStorage

}

export default class FileUploadFieldComponent extends FieldComponent<string, FileUploadFieldComponentProps>{
	
	private fileStorage: FileStorage

	constructor(props: FileUploadFieldComponentProps){
		super(props);
		this.fileStorage = props.fileStorage;
	}

	private async onFileChanged(value: File | null | undefined, callback: Function){
		if(value === null || value === undefined){
			return
		}
		let url = await this.fileStorage.store(value)
		callback(url)
	}

	protected constructInputNode(value: string | null, callback: Function): ReactNode {
		return (
			<div>
				<input type="file" onChange={(event) => {this.onFileChanged(event.target.files?.item(0), callback)}} />
				<div>{ value }</div>
			</div>
		)
	}


}