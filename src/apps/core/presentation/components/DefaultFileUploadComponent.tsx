import { FieldComponent, FieldComponentProps } from "@/lib/components/form/FieldComponent"
import FileUploadFieldComponent, { FileUploadFieldComponentProps } from "@/lib/components/form/FileUploadFIeldComponent"
import CoreProviders from "../../di/coreproviders"


export default function DefaultFileUploadComponent(props: FieldComponentProps<string>){
	return (
		<FileUploadFieldComponent fileStorage={CoreProviders.provideDefaultFileStorage()} {...props} />
	)
}