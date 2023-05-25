import { ReactNode } from "react";
import { FieldComponent } from "./FieldComponent";



export default class TextFieldComponent extends FieldComponent<string>{
	
	protected constructInputNode(value: string | null, callback: Function): ReactNode {
		return (
			<input type="text" onChange={(event) => {callback(event.target.value)}} value={(value === null)?"":value} />
		)
	}

}