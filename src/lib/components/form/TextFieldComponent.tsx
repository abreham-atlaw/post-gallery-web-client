import { ReactNode } from "react";
import { FieldComponent, FieldComponentProps } from "./FieldComponent";



interface TextFieldComponentProps extends FieldComponentProps<string>{
	height?: number;
}

export default class TextFieldComponent extends FieldComponent<string, TextFieldComponentProps>{
	
	protected constructInputNode(value: string | null, callback: Function): ReactNode {
		return (
			<input className={`w-full rounded-md h-14 text-black pl-3 lg:border-[#787878] lg:border lg:h-${this.props.height??14}`} type="text" onChange={(event) => {callback(event.target.value)}} value={(value === null)?"":value} />
		)
	}

}

export class TextBoxComponent extends FieldComponent<string, FieldComponentProps<string>>{
	
	protected constructInputNode(value: string | null, callback: Function): ReactNode {
		return (
			<textarea className="flex-1 w-full h-32 px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-[#D6D6D6] border-[3px] rounded-lg appearance-none focus:outline-none focus:ring-2" name="comment" onChange={(e) => {callback(e.target.value)}} value={value??""}>
			</textarea>
		)
	}

}