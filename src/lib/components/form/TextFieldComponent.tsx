import { ReactNode } from "react";
import { FieldComponent } from "./FieldComponent";



export default class TextFieldComponent extends FieldComponent<string>{
	
	protected constructInputNode(value: string | null, callback: Function): ReactNode {
		return (
			<input className="w-full rounded-md h-14 text-black pl-3" type="text" onChange={(event) => {callback(event.target.value)}} value={(value === null)?"":value} />
		)
	}

}