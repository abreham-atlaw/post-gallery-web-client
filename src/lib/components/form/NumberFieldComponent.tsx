import { ReactNode } from "react";
import { FieldComponent, FieldComponentProps } from "./FieldComponent";



export default class NumberFieldComponent extends FieldComponent<number, FieldComponentProps<number>>{
	
	protected constructInputNode(value: number | null, callback: Function): ReactNode {
		return (
			<input className="w-full rounded-md h-14 text-black pl-3 lg:border-[#787878] lg:border lg:h-20 " type="number" onChange={(event) => {callback(event.target.value)}} value={(value === null)?"":value} />
		)
	}

}